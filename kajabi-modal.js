// Kajabi Modal Content Generator
(function() {
    function initModalContent() {
        const modalContent = document.getElementById('kajabi-modal-content');
        
        if (!modalContent) {
            // Retry if element not ready
            setTimeout(initModalContent, 100);
            return;
        }
        
        // Only set content if it's empty
        if (modalContent.innerHTML.trim() === '' || modalContent.innerHTML.includes('Content will be generated')) {
            // Generate modal content
            modalContent.innerHTML = `
        <!-- Header Section -->
        <div class="kajabi-header" style="padding-top: 200px; padding-bottom: 200px; text-align: center;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px;">
                <p style="font-family: 'Public Sans', sans-serif; font-weight: 300; font-size: 16px; letter-spacing: 0.05em; color: #303030; margin: 0;">sept 2020 - present</p>
                <img src="kajabi logo.png" alt="Kajabi" style="height: 48px; width: auto;">
            </div>
        </div>

        <!-- Overview Section with Parallax -->
        <div class="kajabi-hero-container" style="position: relative; overflow: hidden; width: 100vw; max-width: 1440px; margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%); height: 930px; border-top: 1px solid #E5E5E5; border-bottom: 1px solid #E5E5E5; box-sizing: border-box;">
            <img src="kajabi_hero.jpg" alt="Kajabi Overview" id="kajabi-hero-image" class="kajabi-hero-image" style="width: 100%; height: 100%; object-fit: cover; transform: rotate(-22.26deg) scale(1.2); transform-origin: left center;">
        </div>

        <!-- Section 1: Payments Onboarding -->
        <div class="kajabi-section" style="margin-bottom: 200px;">
            <div style="margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <h2 class="text-3xl font-bold lowercase" style="font-family: 'Roboto', sans-serif; font-size: 32px; letter-spacing: 0.045em; margin: 0;">payments onboarding</h2>
                    <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal; letter-spacing: 0.06em; margin: 0; color: #000;">nov 2024</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #000; margin: 0; width: 100%;">
            </div>
            <p class="text-base text-gray-600" style="font-family: 'Roboto', sans-serif; font-size: 16px; line-height: 155%; letter-spacing: 0.06em; margin-top: 16px; margin-bottom: 64px;">
                Redesigned Kajabi Payments onboarding to provide a fully integrated in-app experience, de-emphasizing the connection to an external partner. After 100% rollout on Nov 7, adoption increased 11.77%, from 23.3% to 55% penetration.
            </p>
            <video src="kajabi_onboarding.mp4" alt="Payments Onboarding" class="w-full h-auto" style="border-radius: 16px; border: 1px solid #E5E5E5;" controls autoplay loop muted></video>
        </div>

        <!-- Section 2: Transaction Details Page Revamp -->
        <div class="kajabi-section" style="margin-bottom: 200px;">
            <div style="margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <h2 class="text-3xl font-bold lowercase" style="font-family: 'Roboto', sans-serif; font-size: 32px; letter-spacing: 0.045em; margin: 0;">transaction details page revamp</h2>
                    <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal; letter-spacing: 0.06em; margin: 0; color: #000;">nov - dec 2024</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #000; margin: 0; width: 100%;">
            </div>
            <p class="text-base text-gray-600" style="font-family: 'Roboto', sans-serif; font-size: 16px; line-height: 155%; letter-spacing: 0.06em; margin-top: 16px; margin-bottom: 64px;">
                Re-architected the transaction details page to support growing complexity from Kajabi Payments, introducing a clearer information hierarchy that improved scannability, clarity, and access to critical purchase information. Fully rolled out with positive feedback and expected reductions in support tickets and external tool dependency.
            </p>
            <video src="kajabi_transaction details.mp4" alt="Transaction Details" class="w-full h-auto" style="border-radius: 16px; border: 1px solid #E5E5E5;" controls autoplay loop muted></video>
        </div>

        <!-- Section 3: Analytics -->
        <div class="kajabi-section" style="margin-bottom: 200px;">
            <div style="margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <h2 class="text-3xl font-bold lowercase" style="font-family: 'Roboto', sans-serif; font-size: 32px; letter-spacing: 0.045em; margin: 0;">analytics</h2>
                    <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal; letter-spacing: 0.06em; margin: 0; color: #000;">jun - aug 2025</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #000; margin: 0; width: 100%;">
            </div>
            <p class="text-base text-gray-600" style="font-family: 'Roboto', sans-serif; font-size: 16px; line-height: 155%; letter-spacing: 0.06em; margin-top: 16px; margin-bottom: 64px;">
                Since 2023, I redesigned Kajabi's Payments dashboard and, in 2025, expanded into platform-wide Analytics, creating flexible, shared, systematized patterns across the app.
            </p>
            <video src="kajabi_analytics.mp4" alt="Analytics" class="w-full h-auto" style="border-radius: 16px; border: 1px solid #E5E5E5;" controls autoplay loop muted></video>
        </div>

        <!-- Section 4: Affiliates Revamp -->
        <div class="kajabi-section" style="margin-bottom: 200px;">
            <div style="margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <h2 class="text-3xl font-bold lowercase" style="font-family: 'Roboto', sans-serif; font-size: 32px; letter-spacing: 0.045em; margin: 0;">affiliates revamp</h2>
                    <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: normal; letter-spacing: 0.06em; margin: 0; color: #000;">jun - sep 2025</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #000; margin: 0; width: 100%;">
            </div>
            <p class="text-base text-gray-600" style="font-family: 'Roboto', sans-serif; font-size: 16px; line-height: 155%; letter-spacing: 0.06em; margin-top: 16px; margin-bottom: 64px;">
                Designed an affiliate transactions and payouts system that has enabled $347k+ in affiliate commissions paid and $4.3M in affiliate driven GMV since Sep launch.
            </p>
            <video src="kajabi_affiliates muted.mp4" alt="Affiliates" class="w-full h-auto" style="border-radius: 16px; border: 1px solid #E5E5E5;" controls autoplay loop muted></video>
        </div>
    `;
            
            // Add CSS styles for centering and max-width
            if (!document.getElementById('kajabi-modal-styles')) {
                const style = document.createElement('style');
                style.id = 'kajabi-modal-styles';
                style.textContent = `
                    .kajabi-header {
                        text-align: center;
                    }
                    .kajabi-hero-container {
                        margin-bottom: 200px;
                        left: 0;
                        right: 0;
                    }
                    @media (min-width: 1440px) {
                        .kajabi-header {
                            max-width: 1000px;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .kajabi-section {
                            max-width: 1000px;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .kajabi-section .text-base.text-gray-600 {
                            max-width: 700px;
                        }
                        .kajabi-hero-container {
                            height: 930px;
                        }
                    }
                    @media (max-width: 1439px) {
                        .kajabi-hero-container {
                            height: calc(930px * (100vw / 1440px));
                            min-height: 400px;
                        }
                    }
                    .kajabi-hero-image {
                        transition: transform 0.3s ease-out;
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Add parallax effect to hero image
            setTimeout(function() {
                const heroImage = document.getElementById('kajabi-hero-image');
                const modalContent = document.getElementById('kajabi-modal-content');
                
                if (heroImage && modalContent) {
                    modalContent.addEventListener('scroll', function() {
                        const scrolled = modalContent.scrollTop;
                        const parallaxSpeed = 0.5;
                        const translateY = scrolled * parallaxSpeed;
                        const fixedRotation = -22.26;
                        
                        heroImage.style.transform = `rotate(${fixedRotation}deg) translateY(${translateY}px) scale(1.2)`;
                    });
                }
            }, 100);
        }
    }
    
    // Initialize content when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModalContent);
    } else {
        initModalContent();
    }
    
    // Initialize Preline overlay plugin after scripts load
    function initPreline() {
        if (window.HSOverlay) {
            window.HSOverlay.autoInit();
        } else {
            // Retry if Preline not loaded yet
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
        const button = document.querySelector('button[data-hs-overlay="#kajabi-modal"]');
        const modal = document.getElementById('kajabi-modal');
        const closeBtn = document.getElementById('kajabi-close-btn');
        
        if (button && modal) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Show modal
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
        } else {
            // Retry if elements not ready
            setTimeout(setupModalHandlers, 100);
        }
    }
    
    // Setup handlers when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupModalHandlers);
    } else {
        setupModalHandlers();
    }
})();
