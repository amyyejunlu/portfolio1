// Cat-a-log Modal Content Generator
(function() {
    // Function to load CSS dynamically
    function loadModalCSS(cssFile) {
        if (!document.getElementById('cat-modal-css')) {
            const link = document.createElement('link');
            link.id = 'cat-modal-css';
            link.rel = 'stylesheet';
            link.href = cssFile;
            document.head.appendChild(link);
        }
    }

    function initModalContent() {
        const modalContent = document.getElementById('cat-modal-content');
        
        if (!modalContent) {
            setTimeout(initModalContent, 100);
            return;
        }
        
        // Load CSS when modal content is initialized
        loadModalCSS('catalog.css');
        
        // Only set content if it's empty
        if (modalContent.innerHTML.trim() === '' || modalContent.innerHTML.includes('Content will be generated')) {
            // Generate modal content - extracting from cat.html
            modalContent.innerHTML = `
        <!-- Header Section -->
        <div style="padding-top: 200px; padding-bottom: 200px; text-align: center;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <p style="font-family: 'Public Sans', sans-serif; font-weight: 300; font-size: 16px; letter-spacing: 0.05em; color: #303030; margin: 0; margin-bottom: 24px;">nov - dec 2019</p>
                <p style="font-family: 'Roboto', sans-serif; font-weight: bold; font-size: 48px; letter-spacing: 0.06em; color: #000; margin: 0;">cat-a-log</p>
                <p class="cat-description" style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 18px; letter-spacing: 0.06em; color: #4A4A4A; margin: 0; margin-top: 32px;">How might we help businesses increase pet adoption & better connect pet adopters with potential pets?</p>
            </div>
        </div>

        <!--Catalog Header Image-->
        <div class="row mx-auto">
            <div class="mx-auto">
                <img class="mx-auto d-block cat-hero-image" src="catalogheader.png" alt="cat-a-log">
            </div>
        </div>

        <!--Project Overview and My Role-->
        <div class="container-fluid mt-5 pt-5">
            <div class="row">
                <div class="col-lg-1 col-sm-1"></div>
                <div class="col-lg-5 col-sm-5">
                    <div class="intro-header mobile-margin">Project Overview</div>
                    <p class="mt-4 mobile-margin">In the Interaction Design Studio course, our team was assigned to explore the pet adoption domain, identifying problem areas and design opportunities. We began our process with secondary and primary research (visited a few cat cafes in the city) and landed on 3 research goals below.</p>
                </div>
                <div class="col-lg-1 col-sm-1"></div>
                <div class="col-lg-4 col-sm-4">
                    <div class="intro-header mobile-margin">My Role</div>
                    <p class="mt-4 mobile-margin">Product Design | Visual Design | Branding<br>Interaction Design | Guerilla Research</p>
                    <p class="mt-4 mobile-margin"><bold>Team</bold><br>Jee Rim | Nick Simons | Hailey Motooka | Amy Lu</p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row mt-5 pt-5">
                <div class="col-lg-1 col-sm-1"></div>
                <div class="col-lg-5 col-sm-5 intro-header mobile-margin">Getting in the Weeds of Guerilla Research</div>
            </div>
            <div class="row">
                <div class="col-lg-1 col-sm-1"></div>
                <p class="col-lg-6 col-sm-6 mt-4 mobile-margin">Customer and Business Owner need indication of a cat's personality in order to foster a social environment within the cat cafe.</p>
            </div>
        </div>

        <div class="container">
            <div class="row mt-5">
                <div class="col-6">
                    <figure class="weeds_figure mx-auto">
                        <img src="catalog_persona_1.svg" class="personaPics img-shadow" id="persona_1" data-toggle="modal" data-target="#persona_1_enlarged">
                        <div class="modal fade" id="persona_1_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="catalog_persona_1.svg" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                        <figcaption>Customer persona</figcaption>
                    </figure>
                </div>
                <div class="col-6">
                    <figure class="weeds_figure mx-auto">
                        <img src="catalog_persona_2.svg" class="personaPics img-shadow" id="persona_2" data-toggle="modal" data-target="#persona_2_enlarged">
                        <div class="modal fade" id="persona_2_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="catalog_persona_2.svg" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                        <figcaption>Business owner persona</figcaption>
                    </figure>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-lg-1 col-sm-1"></div>
                <div class="col-lg-5 col-sm-6 intro-header mobile-margin">Communicating Needs Through a Storyboard Narrative</div>
            </div>
            <div class="row">
                <div class="col-lg-1 col-sm-1"></div>
                <p class="col-lg-5 col-sm-6 mt-4 mobile-margin">We came up with 5 final scenarios that would address needs either by lowering the commitment for adoption, providing users with better indication of a cat's personality, or both.</p>
            </div>
        </div>

        <div class="container-fluid mx-auto">
            <div class="row mt-5 mx-auto">
                <div class="col-md-3 storyboard-spacing">
                    <img src="catalog_storyboard_1.svg" class="storyboard_img mx-auto d-block img-shadow" id="storyboard_1" data-toggle="modal" data-target="#storyboard_1_enlarged">
                    <div class="modal fade" id="storyboard_1_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_storyboard_1.svg" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 storyboard-spacing">
                    <img src="catalog_storyboard_2.svg" class="storyboard_img mx-auto d-block img-shadow" id="storyboard_2" data-toggle="modal" data-target="#storyboard_2_enlarged">
                    <div class="modal fade" id="storyboard_2_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_storyboard_2.svg" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 storyboard-spacing">
                    <img src="catalog_storyboard_3.svg" class="storyboard_img mx-auto d-block img-shadow" id="storyboard_3" data-toggle="modal" data-target="#storyboard_3_enlarged">
                    <div class="modal fade" id="storyboard_3_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_storyboard_3.svg" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 storyboard-spacing">
                    <img src="catalog_storyboard_5.png" class="storyboard_img mx-auto d-block img-shadow" id="storyboard_5" data-toggle="modal" data-target="#storyboard_5_enlarged">
                    <div class="modal fade" id="storyboard_5_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_storyboard_5.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-8 mx-auto">
                <img src="catalog_storyboard_4.svg" class="storyboard_img mx-auto d-block img-shadow" id="storyboard_4" data-toggle="modal" data-target="#storyboard_4_enlarged">
                <div class="modal fade" id="storyboard_4_enlarged">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <img src="catalog_storyboard_4.svg" class="modal_L" data-dismiss="modal">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-lg-1 col-sm-1"></div>
                <div class="col-lg-4 col-sm-5 intro-header mobile-margin">Dating Around to Validate Self Worth Needs</div>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <p class="col-md-5 mt-4 mobile-margin">After creating the storyboards, we then conducted speed-dating research in order to determine whether or not the needs identified in research are valid, and whether or not the ideas presented effectively address those needs. From the first round of speed-dating, we were able to validate that pet adopters need a better way to assess the personality of a pet, as well as the need for people with busy schedules to have the flexibility to adopt a pet.</p>
                <div class="col-md-3">
                    <figure class="dating_figure mx-auto">
                        <img src="catalog_speed_date_1.png" class="mx-auto d-block img-shadow" id="speeddate_2" data-toggle="modal" data-target="#speeddate_2_enlarged">
                        <div class="modal fade" id="speeddate_2_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="catalog_speed_date_1.png" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                        <figcaption>Testing our storyboards</figcaption>
                    </figure>
                </div>
                <div class="col-md-3">
                    <figure class="dating_figure mx-auto">
                        <img src="catalog_speed_date_2.png" class="mx-auto d-block img-shadow" id="speeddate_1" data-toggle="modal" data-target="#speeddate_1_enlarged">
                        <div class="modal fade" id="speeddate_1_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="catalog_speed_date_2.png" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                        <figcaption>Speed dating results</figcaption>
                    </figure>
                </div>
            </div>
        </div>

        <!--1-->
        <div class="container-fluid mt-5">
            <div class="row mt-5 pb-5">
                <div class="col-lg-1 col-sm-1"></div>
                <div class="col-lg-1 col-sm-1 justify-content-end">
                    <div class="number">1</div>
                </div>
                <div class="col-lg-5 col-sm-5">
                    <div class="intro-header">A Live Stream Viewing that offers Users the Flexibility to see a Range of Cats from Diverse Locations</div>
                    <p class="mt-4">In our low-fi prototype we feature an About section as well as a map section that shows adoption centers' location. As users click on a location, they can view their cats available as well as their live streams.</p>
                    <p class="">Current cat adoption websites offer insufficient information about available cats. As a way to provide up-to-date information for customers and also provide users the flexibility to see diverse cats from multiple cat adoption centers, we created a live stream solution that would allow users to click on different adoption centers and view their live streams.</p>
                    <p class="">Through live streams, users can glimpse cats in a natural and social environment, allowing them to gauge individual cats' personalities without needing to take the time to visit a café.</p>
                </div>
                <div class="col-lg-4 col-sm-4">
                    <img src="catalog_lowfi_1.png" id="lowfi_1" class="img-fluid">
                    <img src="catalog_lowfi_8.png" class="mt-5 pt-3 img-fluid" id="lowfi_8">
                </div>
            </div>
        </div>

        <!--2-->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="justify-content-end">
                    <div class="number mobile-margin">2</div>
                </div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">A Personality Quiz to Match Cats with Adopters</div>
                    <p class="mt-4 mobile-margin">As per our user research, customers need a better way to understand what types of cats would be a good match with them. Currently, users have to spend a lot of time with potential cats to get a feel of their personality. We aim to solve this problem by providing a personality quiz. With this short 10-question quiz, users can quickly come to understand which cats their personalities best match.</p>
                </div>
                <div class="col-md-3">
                    <img src="catalog_lowfi_4.png" id="lowfi_1">
                </div>
                <div class="col-md-2">
                    <img src="catalog_lowfi_6.png" id="lowfi_6">
                </div>
            </div>
        </div>

        <!--brand-->
        <div class="row mt-5">
            <div class="mx-auto">
                <img class="img-fluid" src="catalog_brand.svg">
            </div>
        </div>

        <!-- Mobile User Flow -->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-4 intro-header mobile-margin">Mobile User Flow</div>
            </div>
        </div>
        <div class="row white-bkgd">
            <div class="row mt-4 white-bkgd">
                <div class="col-md-12 mb-5">
                    <img src="flow-01.png" class="mx-auto d-block user-flow" width="80%">
                </div>
            </div>
        </div>

        <!-- Final Mobile Designs -->
        <div class="container-fluid">
            <div class="row mt-5" id="finalMobile">
                <div class="row">
                    <div class="col-md-12 mt-4">
                        <img src="catalog_mobile.png" id="catalog_mobile">
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-5 pt-5">
                <div class="col-md-3"></div>
                <div class="col-md-2 intro-header align-self-center mobile-margin mb-4">Live Stream Prototype</div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <img src="livestream.gif" width="300px">
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row mt-5 pt-5">
                <div class="col-md-3"></div>
                <div class="col-md-3 intro-header align-self-center mobile-margin mb-4">Personality Quiz Prototype</div>
                <div class="col-md-4">
                    <img src="quiz.gif" width="300px">
                </div>
            </div>
        </div>

        <!-- Final Desktop Designs -->
        <div class="container-fluid">
            <div class="row mt-5 mx-auto pb-5" id="finalDesktop">
                <div class="col-md-5 ml-4">
                    <img src="catalog_desktop_1.png" class="mx-auto d-block img-shadow" id="desktop_1" data-toggle="modal" data-target="#desktop_1_enlarged">
                    <div class="modal fade" id="desktop_1_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_desktop_1.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5" id="finalDesktop_offset">
                    <img src="catalog_desktop_2.png" class="mx-auto d-block img-shadow" id="desktop_2" data-toggle="modal" data-target="#desktop_2_enlarged">
                    <div class="modal fade" id="desktop_2_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_desktop_2.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                    <br><br>
                    <img src="catalog_desktop_3.png" class="mx-auto d-block img-shadow" id="desktop_3" data-toggle="modal" data-target="#desktop_3_enlarged">
                    <div class="modal fade" id="desktop_3_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_desktop_3.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                    <br><br>
                    <img src="catalog_desktop_4.png" class="mx-auto d-block img-shadow" id="desktop_4" data-toggle="modal" data-target="#desktop_4_enlarged">
                    <div class="modal fade" id="desktop_4_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="catalog_desktop_4.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Post-Project Reflection -->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-4 align-self-end">
                    <img src="catball.svg" class="mx-auto d-block pt-5" alt="cat" width="150px">
                </div>
                <div class="col-md-6">
                    <div class="intro-header mobile-margin">Post-Project Reflection</div>
                    <p class="mt-4 tablet-resize mobile-margin">Due to the time constraint, we weren't able to conduct usability testing on the prototype. However, after the project ended, I did some quick user testing on the prototypes and found that users really enjoyed the personality quiz solution, in that it provided quick recommendations.<br><br>But users were confused about the multiple camera views in the mobile live stream page. One participant raised an interesting point: if the room is a 360 panoramic view, why do you need other camera views? So for now, I removed multiple camera view functions, but to get a more accurate consensus, additional user testing is needed.</p>
                </div>
            </div>
        </div>
    `;
            
            // Add CSS styles for description max-width
            if (!document.getElementById('cat-modal-description-styles')) {
                const style = document.createElement('style');
                style.id = 'cat-modal-description-styles';
                style.textContent = `
                    @media (min-width: 768px) {
                        .cat-description {
                            max-width: 453px;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Add CSS styles for cat hero image
            if (!document.getElementById('cat-hero-image-styles')) {
                const style = document.createElement('style');
                style.id = 'cat-hero-image-styles';
                style.textContent = `
                    .cat-hero-image {
                        max-width: 100%;
                        height: auto;
                    }
                    @media (min-width: 1440px) {
                        .cat-hero-image {
                            width: 417px;
                        }
                    }
                    @media (max-width: 1439px) {
                        .cat-hero-image {
                            width: calc(417px * (100vw / 1440px));
                        }
                    }
                    .cat-illustration {
                        max-width: 100%;
                        height: auto;
                    }
                    @media (min-width: 1440px) {
                        .cat-illustration {
                            width: 120px;
                        }
                    }
                    @media (max-width: 1439px) {
                        .cat-illustration {
                            width: calc(120px * (100vw / 1440px));
                        }
                    }
                    @media (min-width: 1440px) {
                        #cat-modal-content {
                            padding-bottom: 200px;
                        }
                    }
                    @media (max-width: 1439px) {
                        #cat-modal-content {
                            padding-bottom: calc(200px * (100vw / 1440px));
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    
    // Initialize content when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModalContent);
    } else {
        initModalContent();
    }
    
    // Add manual click handler
    function setupModalHandlers() {
        const button = document.querySelector('button[data-hs-overlay="#cat-modal"]');
        const modal = document.getElementById('cat-modal');
        const closeBtn = document.getElementById('cat-close-btn');
        
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
