(function () {
    function bindKajabiBehaviors(root) {
        var heroImage = root.querySelector('#kajabi-hero-image');
        if (heroImage) {
            window.addEventListener('scroll', function () {
                var scrolled = window.scrollY || document.documentElement.scrollTop;
                heroImage.style.transform = 'rotate(-22.26deg) translateY(' + (scrolled * 0.5) + 'px) scale(1.2)';
            });
        }

        var modal = createVideoModal();
        var activeVideo = null;

        function openVideoModal(video) {
            if (!video) {
                return;
            }
            if (!modal.hidden && activeVideo === video) {
                return;
            }
            activeVideo = video;
            video.pause();

            var player = modal.querySelector('.kajabi-video-modal-player');
            var src = video.currentSrc || video.getAttribute('src');
            player.loop = video.loop;
            player.muted = true;
            player.playsInline = true;
            var currentSrc = player.getAttribute('src') || '';
            if (currentSrc !== src && !currentSrc.endsWith(src)) {
                player.setAttribute('src', src);
            }
            var applyTime = function () {
                if (!isNaN(video.currentTime)) {
                    try {
                        player.currentTime = video.currentTime;
                    } catch (error) {}
                }
            };
            if (player.readyState >= 1) {
                applyTime();
            } else {
                player.addEventListener('loadedmetadata', applyTime, { once: true });
            }
            modal.hidden = false;
            document.body.classList.add('kajabi-video-modal-open');
            var playPromise = player.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function () {});
            }
            modal.querySelector('.kajabi-video-modal-close').focus();
        }

        function closeVideoModal() {
            if (modal.hidden) {
                return;
            }
            var resume = activeVideo;
            var player = modal.querySelector('.kajabi-video-modal-player');
            modal.hidden = true;
            player.pause();
            document.body.classList.remove('kajabi-video-modal-open');
            activeVideo = null;
            if (resume && resume.getBoundingClientRect().bottom > 0 && resume.getBoundingClientRect().top < window.innerHeight) {
                var playPromise = resume.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(function () {});
                }
            }
        }

        modal.querySelector('.kajabi-video-modal-backdrop').addEventListener('click', closeVideoModal);
        modal.querySelector('.kajabi-video-modal-close').addEventListener('click', closeVideoModal);
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !modal.hidden) {
                closeVideoModal();
            }
        });

        root.querySelectorAll('video').forEach(function (video) {
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.setAttribute('controlsList', 'nofullscreen');
            video.playsInline = true;

            var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
            video.controls = !canHover;
            var host = video.parentElement;
            if (host && !host.classList.contains('kajabi-capital-phone') && !host.classList.contains('kajabi-video-hover')) {
                var wrap = document.createElement('div');
                wrap.className = 'kajabi-video-hover';
                host.insertBefore(wrap, video);
                wrap.appendChild(video);
                host = wrap;
            } else if (host && host.classList.contains('kajabi-capital-phone')) {
                host.classList.add('kajabi-video-hover');
            }
            if (canHover) {
                host.addEventListener('mouseenter', function () {
                    video.controls = true;
                });
                host.addEventListener('mouseleave', function () {
                    video.controls = false;
                });
            }

            if (!host.querySelector('.kajabi-video-enlarge')) {
                var enlarge = document.createElement('button');
                enlarge.type = 'button';
                enlarge.className = 'kajabi-video-enlarge';
                enlarge.setAttribute('aria-label', 'Enlarge video');
                enlarge.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>';
                enlarge.addEventListener('click', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    openVideoModal(video);
                });
                host.appendChild(enlarge);
            }

            var openInsteadOfFullscreen = function () {
                openVideoModal(video);
                return Promise.resolve();
            };
            video.requestFullscreen = openInsteadOfFullscreen;
            if ('webkitRequestFullscreen' in video) {
                video.webkitRequestFullscreen = openInsteadOfFullscreen;
            }
            if ('webkitEnterFullscreen' in video) {
                video.webkitEnterFullscreen = openInsteadOfFullscreen;
            }

            video.addEventListener('webkitbeginfullscreen', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (video.webkitExitFullscreen) {
                    video.webkitExitFullscreen();
                }
                openVideoModal(video);
                return false;
            }, { passive: false });
        });

        document.addEventListener('fullscreenchange', function () {
            var current = document.fullscreenElement;
            if (current && current.tagName === 'VIDEO') {
                var source = current;
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                openVideoModal(source);
            }
        });

        root.querySelectorAll('.kajabi-naming-card').forEach(function (card) {
            card.addEventListener('click', function () {
                var open = card.classList.contains('is-open');
                root.querySelectorAll('.kajabi-naming-card.is-open').forEach(function (other) {
                    other.classList.remove('is-open');
                    other.setAttribute('aria-expanded', 'false');
                });
                if (!open) {
                    card.classList.add('is-open');
                    card.setAttribute('aria-expanded', 'true');
                }
            });
        });

        if ('IntersectionObserver' in window) {
            var videoObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var video = entry.target;
                    if (activeVideo) {
                        return;
                    }
                    if (entry.isIntersecting) {
                        var playPromise = video.play();
                        if (playPromise && typeof playPromise.catch === 'function') {
                            playPromise.catch(function () {});
                        }
                    } else {
                        video.pause();
                    }
                });
            }, { rootMargin: '200px 0px', threshold: 0.01 });

            root.querySelectorAll('video').forEach(function (video) {
                videoObserver.observe(video);
            });
        } else {
            root.querySelectorAll('video').forEach(function (video) {
                video.preload = 'metadata';
                var playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(function () {});
                }
            });
        }

        bindFloatingNav(root);
    }

    function bindFloatingNav(root) {
        var nav = document.getElementById('kajabi-float-nav');
        var hero = root.querySelector('.kajabi-hero-container');
        var upsells = document.getElementById('kajabi-upsells');
        if (!nav || !hero || !upsells) {
            return;
        }

        var pill = nav.querySelector('.kajabi-float-nav-pill');
        var label = nav.querySelector('.kajabi-float-nav-label');
        var links = Array.prototype.slice.call(nav.querySelectorAll('.kajabi-float-nav-option'));
        var sections = links.map(function (link) {
            return {
                link: link,
                section: document.getElementById(link.getAttribute('href').slice(1)),
                label: link.textContent
            };
        }).filter(function (item) {
            return item.section;
        });
        var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        var ticking = false;
        var lastScrollY = window.scrollY;
        var scrollingDown = false;
        var scrollIdleTimer = null;

        function setOpen(open) {
            nav.classList.toggle('is-open', open);
            pill.setAttribute('aria-expanded', open ? 'true' : 'false');
        }

        function inReadingRange() {
            var pastParallax = hero.getBoundingClientRect().bottom <= 0;
            var upsellsTop = upsells.getBoundingClientRect().top;
            var enoughBelowUpsells = upsellsTop <= Math.min(160, window.innerHeight * 0.22);
            return pastParallax && enoughBelowUpsells;
        }

        function setVisible(visible) {
            nav.classList.toggle('is-visible', visible);
            nav.setAttribute('aria-hidden', visible ? 'false' : 'true');
            if (!visible) {
                setOpen(false);
            }
        }

        function update() {
            ticking = false;
            var scrollY = window.scrollY;
            var delta = scrollY - lastScrollY;
            if (Math.abs(delta) > 8) {
                scrollingDown = delta > 0;
            }
            lastScrollY = scrollY;

            var eligible = inReadingRange();
            setVisible(eligible && !scrollingDown);

            window.clearTimeout(scrollIdleTimer);
            scrollIdleTimer = window.setTimeout(function () {
                scrollingDown = false;
                setVisible(inReadingRange());
            }, 220);

            var zoneBottom = window.innerHeight * 0.55;
            var current = sections[0];
            var bestOverlap = -1;
            sections.forEach(function (item) {
                var rect = item.section.getBoundingClientRect();
                var overlap = Math.min(rect.bottom, zoneBottom) - Math.max(rect.top, 0);
                if (overlap > bestOverlap) {
                    bestOverlap = overlap;
                    current = item;
                }
            });
            if (!current) {
                return;
            }
            sections.forEach(function (item) {
                var selected = item === current;
                item.link.classList.toggle('is-current', selected);
                if (selected) {
                    item.link.setAttribute('aria-current', 'true');
                } else {
                    item.link.removeAttribute('aria-current');
                }
            });
            label.textContent = current.label;
        }

        function requestUpdate() {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        }

        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate);
        update();

        if (canHover) {
            nav.addEventListener('mouseenter', function () {
                if (nav.classList.contains('is-visible')) {
                    setOpen(true);
                }
            });
            nav.addEventListener('mouseleave', function () {
                setOpen(false);
            });
        }

        pill.addEventListener('click', function () {
            if (!canHover) {
                setOpen(!nav.classList.contains('is-open'));
            }
        });

        nav.addEventListener('focusin', function () {
            setOpen(true);
        });
        nav.addEventListener('focusout', function (event) {
            if (!nav.contains(event.relatedTarget)) {
                setOpen(false);
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        });

        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var section = document.getElementById(link.getAttribute('href').slice(1));
                if (!section) {
                    return;
                }
                event.preventDefault();
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setOpen(false);
            });
        });
    }

    function createVideoModal() {
        var existing = document.querySelector('.kajabi-video-modal');
        if (existing) {
            return existing;
        }
        var modal = document.createElement('div');
        modal.className = 'kajabi-video-modal';
        modal.hidden = true;
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-label', 'Enlarged video');
        modal.innerHTML = '<div class="kajabi-video-modal-backdrop"></div><div class="kajabi-video-modal-dialog"><button type="button" class="kajabi-video-modal-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg></button><video class="kajabi-video-modal-player" controls playsinline loop muted></video></div>';
        document.body.appendChild(modal);
        return modal;
    }

    var page = document.querySelector('.kajabi-page');
    if (page) {
        bindKajabiBehaviors(page);
    }
})();
