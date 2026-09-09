// Kajabi Modal Content Generator
(function() {
    function loadModalCSS(cssFile) {
        if (!document.getElementById('kajabi-modal-css')) {
            const link = document.createElement('link');
            link.id = 'kajabi-modal-css';
            link.rel = 'stylesheet';
            link.href = cssFile;
            document.head.appendChild(link);
        }
    }

    function bindKajabiBehaviors(root, scrollRoot) {
        const heroImage = root.querySelector('#kajabi-hero-image') || document.getElementById('kajabi-hero-image');

        if (heroImage && scrollRoot) {
            scrollRoot.addEventListener('scroll', function() {
                const scrolled = scrollRoot === window ? (window.scrollY || document.documentElement.scrollTop) : scrollRoot.scrollTop;
                const parallaxSpeed = 0.5;
                const translateY = scrolled * parallaxSpeed;
                const fixedRotation = -22.26;
                heroImage.style.transform = `rotate(${fixedRotation}deg) translateY(${translateY}px) scale(1.2)`;
            });
        }

        const videos = root.querySelectorAll('video');
        videos.forEach(function(video) {
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.playsInline = true;

            var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
            video.controls = !canHover;
            if (canHover) {
                var host = video.parentElement;
                if (host && !host.classList.contains('kajabi-capital-phone') && !host.classList.contains('kajabi-video-hover')) {
                    var wrap = document.createElement('div');
                    wrap.className = 'kajabi-video-hover';
                    host.insertBefore(wrap, video);
                    wrap.appendChild(video);
                    host = wrap;
                }
                host.addEventListener('mouseenter', function() {
                    video.controls = true;
                });
                host.addEventListener('mouseleave', function() {
                    video.controls = false;
                });
            }

            video.addEventListener('webkitbeginfullscreen', function(e) {
                e.preventDefault();
                e.stopPropagation();
                video.pause();
                video.play();
                return false;
            }, { passive: false });

            if (video.requestFullscreen) {
                video.requestFullscreen = function() {
                    return Promise.reject(new Error('Fullscreen disabled'));
                };
            }

            video.addEventListener('fullscreenchange', function() {
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
    }

    function initModalContent() {
        loadModalCSS('kajabi.css');

        const modalContent = document.getElementById('kajabi-modal-content');
        const kajabiPage = document.querySelector('.kajabi-page');

        if (!modalContent && !kajabiPage) {
            setTimeout(initModalContent, 100);
            return;
        }

        if (kajabiPage && !modalContent) {
            bindKajabiBehaviors(kajabiPage, window);
            return;
        }

        if (modalContent.innerHTML.trim() === '' || modalContent.innerHTML.includes('Content will be generated')) {
            modalContent.innerHTML = `
        <!-- Header Section -->
        <div class="kajabi-header" style="padding-top: 200px; padding-bottom: 200px; text-align: center;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px;">
                <p style="font-family: 'Public Sans', sans-serif; font-weight: 300; font-size: 16px; letter-spacing: 0.05em; color: #303030; margin: 0;">sept 2020 - may 2026</p>
                <img src="kajabi logo.png" alt="Kajabi" style="height: 48px; width: auto;">
            </div>
        </div>

        <!-- Overview Section with Parallax -->
        <div class="kajabi-hero-container" style="position: relative; overflow: hidden; width: 100vw; max-width: 1440px; margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%); height: 930px; border-top: 1px solid #E5E5E5; border-bottom: 1px solid #E5E5E5; box-sizing: border-box;">
            <img src="kajabi_hero.jpg" alt="Kajabi Overview" id="kajabi-hero-image" class="kajabi-hero-image" style="width: 100%; height: 100%; object-fit: cover; transform: rotate(-22.26deg) scale(1.2); transform-origin: left center;">
        </div>

        <!-- checkout -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">oct 2025 - may 2026</p>
                <h2 class="kajabi-project-title">checkout</h2>
                <p class="kajabi-project-desc">Enabled merchant upsells and order bumps to lift average order value at checkout.</p>
            </div>
            <div class="kajabi-media-block">
                <div class="kajabi-media-row">
                    <video src="kajabi_checkout_upsell_merchant.mp4" alt="Merchant upsell creation" class="kajabi-media" autoplay loop muted playsinline></video>
                    <video src="kajabi_checkout_upsell_customer.mp4" alt="Customer checkout upsell" class="kajabi-media" autoplay loop muted playsinline></video>
                </div>
                <p class="kajabi-caption">On the left, the merchant's upsell creation experience; on the right, the upsell customers see at checkout.</p>
            </div>
            <div class="kajabi-media-block">
                <div class="kajabi-media-row">
                    <video src="kajabi_checkout_bump_merchant.mp4" alt="Merchant order bump creation" class="kajabi-media" autoplay loop muted playsinline></video>
                    <video src="kajabi_checkout_bump_customer.mp4" alt="Customer checkout order bump" class="kajabi-media" autoplay loop muted playsinline></video>
                </div>
                <p class="kajabi-caption">On the left, the merchant's order bump creation experience; on the right, the order bump customers see at checkout.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- media library -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">apr 2026</p>
                <h2 class="kajabi-project-title">media library</h2>
                <p class="kajabi-project-desc">AI-prototyped concept for managing custom Media Library views.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_media_library.mp4" alt="Media Library views" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">Built using V0 to demo the micro-interactions for creating, saving, removing, and deleting views.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- affiliates revamp -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">jan - sep 2025</p>
                <h2 class="kajabi-project-title">affiliates revamp</h2>
                <p class="kajabi-project-desc">Reimagined the affiliate experience: payout system, resource tools, and a bounty program.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_leaderboard.mp4" alt="Affiliate leaderboard and metrics" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">Added new set of metrics to the overview, such as leaderboard and top selling offers.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_affiliates_memo.mp4" alt="Affiliate settings and resources" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">Under Settings, ability to add a memo and resources to communicate with affiliates.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_affiliates_bounty.mp4" alt="Affiliate bounty program" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">A bounty program letting customers set up time-bound rewards for their affiliates.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_affiliates muted.mp4" alt="Upcoming affiliate payouts on transactions" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">Upcoming automatic and manual affiliate payouts, shown on the transactions page.</p>
            </div>
            <div class="kajabi-media-block">
                <div class="kajabi-media-row">
                    <video src="kajabi_affiliates_payout_schedule.mp4" alt="Manual payout schedule setup" class="kajabi-media" autoplay loop muted playsinline></video>
                    <video src="kajabi_affiliates_payout_manual.mp4" alt="Completing a manual affiliate payment" class="kajabi-media" autoplay loop muted playsinline></video>
                </div>
                <p class="kajabi-caption">Setting up the schedule for manual payouts, and how customers complete a manual payment to their affiliates.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- kajabi capital -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">sep - dec 2025</p>
                <h2 class="kajabi-project-title">kajabi capital</h2>
                <p class="kajabi-project-desc">Shipped Kajabi Capital, an end-to-end loan experience, partnering with Parafin.</p>
            </div>
            <div class="kajabi-media-block">
                <div class="kajabi-capital-row">
                    <img src="kajabi_capital_dashboard.png" alt="Kajabi Capital dashboard entry point" class="kajabi-media kajabi-capital-dashboard">
                    <img src="kajabi_capital_marketing.png" alt="Kajabi Capital marketing page" class="kajabi-media kajabi-capital-marketing">
                    <div class="kajabi-capital-phone">
                        <video src="kajabi_capital_mobile.mp4" alt="Kajabi Capital mobile designs" class="kajabi-media" autoplay loop muted playsinline></video>
                    </div>
                </div>
                <p class="kajabi-caption">Dashboard entry point, marketing page, and mobile designs.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- payments onboarding -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">nov 2024</p>
                <h2 class="kajabi-project-title">payments onboarding</h2>
                <p class="kajabi-project-desc">Redesigned Kajabi Payments onboarding to provide a fully integrated in-app experience. After 100% rollout on Nov 7, adoption increased 11.77%, from 23.3% to 35% penetration.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_onboarding.mp4" alt="Payments Onboarding" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">A look at the rebranded Kajabi Payments onboarding experience, where the user selects UAE, which happened to align with Kajabi's launch in the region.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- payouts -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">2024 - 2026</p>
                <h2 class="kajabi-project-title">payouts</h2>
                <p class="kajabi-project-desc">Designed to support multiple bank accounts as well as instant payouts.</p>
            </div>
            <div class="kajabi-media-block">
                <div class="kajabi-media-row">
                    <img src="kajabi_payouts_accounts.png" alt="Multiple bank accounts on Payouts" class="kajabi-media">
                    <img src="kajabi_payouts_instant.png" alt="Instant payouts feature" class="kajabi-media">
                </div>
                <p class="kajabi-caption">On the left shows multiple bank accounts, and on the right is the instant payouts feature.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- disputes -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">sep - nov 2024</p>
                <h2 class="kajabi-project-title">disputes</h2>
                <p class="kajabi-project-desc">Created a system for customers to manage and take action on disputed payments.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_disputes.mp4" alt="Disputed transactions" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">Disputed transactions at various stages.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- analytics -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">jun - aug 2025</p>
                <h2 class="kajabi-project-title">analytics</h2>
                <p class="kajabi-project-desc">Since 2023, I redesigned Kajabi's Payments dashboard and, in 2025, expanded into platform-wide Analytics, creating flexible, shared, systematized patterns across the app.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_analytics.mp4" alt="Payments dashboard" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">The redesigned Payments dashboard.</p>
            </div>
            <div class="kajabi-media-block">
                <div class="kajabi-media-grid">
                    <img src="kajabi_analytics_chart_1.png" alt="Subscription payment retention over time" class="kajabi-media">
                    <img src="kajabi_analytics_chart_2.png" alt="Unsubscribed contacts from marketing emails" class="kajabi-media">
                    <img src="kajabi_analytics_chart_3.png" alt="Contacts breakdown by engagement" class="kajabi-media">
                    <img src="kajabi_analytics_chart_4.png" alt="Canceled subscriptions over time" class="kajabi-media">
                    <img src="kajabi_analytics_chart_5.png" alt="Payment plans over time" class="kajabi-media">
                    <img src="kajabi_analytics_chart_6.png" alt="Monthly recurring revenue from payment plans" class="kajabi-media">
                </div>
                <p class="kajabi-caption">Some of the data visualization charts I designed for the Analytics team.</p>
            </div>
        </div>

        <hr class="kajabi-project-divider">

        <!-- transaction details page revamp -->
        <div class="kajabi-section">
            <div class="kajabi-project-heading">
                <p class="kajabi-project-date">nov - dec 2024</p>
                <h2 class="kajabi-project-title">transaction details page revamp</h2>
                <p class="kajabi-project-desc">Redesigned the transaction details page's hierarchy for clearer, easier scannability.</p>
            </div>
            <div class="kajabi-media-block">
                <video src="kajabi_transaction details.mp4" alt="Transaction Details" class="kajabi-media" autoplay loop muted playsinline></video>
                <p class="kajabi-caption">A snapshot of what a customer sees after clicking into a sale, with the full breakdown of that purchase.</p>
            </div>
        </div>
    `;
        }

        setTimeout(function() {
            bindKajabiBehaviors(modalContent, modalContent);
        }, 100);
    }

    // Initialize content when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModalContent);
    } else {
        initModalContent();
    }

    // Initialize Preline overlay plugin after scripts load
    function initPreline() {
        if (!document.getElementById('kajabi-modal')) {
            return;
        }
        if (window.HSOverlay) {
            window.HSOverlay.autoInit();
        } else {
            setTimeout(initPreline, 100);
        }
    }
    
    // Wait for window load to ensure all scripts are loaded
    if (window.addEventListener) {
        window.addEventListener('load', initPreline);
    } else {
        setTimeout(initPreline, 500);
    }
    
    // Add manual click handler
    function setupModalHandlers() {
        const modal = document.getElementById('kajabi-modal');
        if (!modal) {
            return;
        }

        const button = document.querySelector('[data-hs-overlay="#kajabi-modal"]');
        const closeBtn = document.getElementById('kajabi-close-btn');
        
        if (!button) {
            return;
        }

        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                modal.style.display = 'block';
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
            
            // Function to close modal
            function closeModal() {
                modal.style.display = 'none';
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
            
            // Close button handler
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    closeModal();
                });
            }
            
            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.style.display === 'block') {
                    closeModal();
                }
            });
        }
    }
    
    // Setup handlers when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupModalHandlers);
    } else {
        setupModalHandlers();
    }
})();
