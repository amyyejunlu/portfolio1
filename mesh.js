(function () {
    function bindMeshBehaviors(root) {
        root.querySelectorAll('video').forEach(function (video) {
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.playsInline = true;

            var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
            video.controls = !canHover;
            if (canHover) {
                var host = video.parentElement;
                if (host && !host.classList.contains('mesh-video-hover')) {
                    var wrap = document.createElement('div');
                    wrap.className = 'mesh-video-hover';
                    host.insertBefore(wrap, video);
                    wrap.appendChild(video);
                    host = wrap;
                }
                host.addEventListener('mouseenter', function () {
                    video.controls = true;
                });
                host.addEventListener('mouseleave', function () {
                    video.controls = false;
                });
            }

            video.addEventListener('webkitbeginfullscreen', function (e) {
                e.preventDefault();
                e.stopPropagation();
                video.pause();
                video.play();
                return false;
            }, { passive: false });

            if (video.requestFullscreen) {
                video.requestFullscreen = function () {
                    return Promise.reject(new Error('Fullscreen disabled'));
                };
            }

            video.addEventListener('fullscreenchange', function () {
                if (document.fullscreenElement === video ||
                    document.webkitFullscreenElement === video ||
                    document.mozFullScreenElement === video ||
                    document.msFullscreenElement === video) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            });
        });

        if ('IntersectionObserver' in window) {
            var videoObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var video = entry.target;
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
    }

    var page = document.querySelector('.mesh-page');
    if (page) {
        bindMeshBehaviors(page);
    }
})();
