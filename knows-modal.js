// Knows Modal Content Generator
(function() {
    // Function to load CSS dynamically
    function loadModalCSS(cssFile) {
        if (!document.getElementById('knows-modal-css')) {
            const link = document.createElement('link');
            link.id = 'knows-modal-css';
            link.rel = 'stylesheet';
            link.href = cssFile;
            document.head.appendChild(link);
        }
    }

    function initModalContent() {
        const modalContent = document.getElementById('knows-modal-content');
        
        if (!modalContent) {
            setTimeout(initModalContent, 100);
            return;
        }
        
        // Load CSS when modal content is initialized
        loadModalCSS('knows.css');
        
        // Only set content if it's empty
        if (modalContent.innerHTML.trim() === '' || modalContent.innerHTML.includes('Content will be generated')) {
            // Generate modal content - extracting from knows.html
            modalContent.innerHTML = `
        <!-- Header Section -->
        <div style="padding-top: 200px; padding-bottom: 200px; text-align: center;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px;">
                <p style="font-family: 'Public Sans', sans-serif; font-weight: 300; font-size: 16px; letter-spacing: 0.05em; color: #303030; margin: 0;">nov - dec 2019</p>
                <img src="cmu logo.jpg" alt="CMU" style="height: 48px; width: auto;">
                <p class="knows-description" style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 18px; letter-spacing: 0.06em; color: #4A4A4A; margin: 0; margin-top: 32px;">Redesigning web interface to better showcase and educate users what data apps collect about them and why.</p>
            </div>
        </div>

        <!--Knows Image-->
        <div class="row mx-auto">
            <div class="mx-auto">
                <img class="mx-auto d-block knows-hero-image" src="knows_hero.png" id="ant_cover">
            </div>
        </div>

        <!--My role-->
        <div class="container">
            <div class="row mx-auto mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">My Role</div>
                    <div class="small-gray-text mt-3 mobile-margin">Data Visualization + Web/Visual Design</div>
                    <p class="mt-4 mobile-margin">Under the guidance of Professor Jason Hong at Carnegie Mellon University, my teammate Rosie and I redesigned and built out a website that showcased what data third parties collect and why. My role in this project was redesigning the visual interface as well as the data visualization of the website. Rosie handled the implementation using Angular.</p>
                </div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">Project Background</div>
                    <div class="small-gray-text mt-3 mobile-margin">Oct - Dec 2019</div>
                    <p class="mt-4 mobile-margin">Many smartphone apps gather and send lots of sensitive data to various third parties around the Internet. However, it's hard to know exactly what data apps are sending out and why. Having this kind of information would be helpful for privacy, in terms of informing the public, journalists, and policy makers.</p>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>

        <!--Research-->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">First Steps: Evaluating the Current Website using Heuristic Evaluation.</div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-5 mt-3">
                    <p class="mt-3 mobile-margin">Our first steps was each conducting a heuristic evaluation of the current website, followed by initial brainstorming of the data visualizations and user testing.</p>
                    <p class="mt-3 mobile-margin">The Heuristic Evaluation discovered a lack of clean and functional design. Things were overly cluttered, and lots of information were repeated, thus preventing the user from easily finding the information that is pertinent to them.</p>
                </div>
                <!--- Carousel -->
                <div id="knowsCarousel" class="carousel slide col-md-6" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="he_1.png" class="he_image img-shadow" data-toggle="modal" data-target="#he1_enlarged">
                            <div class="modal fade" id="he1_enlarged">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <img src="he_1.png" class="modal_L" data-dismiss="modal">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="he_2.png" class="he_image img-shadow" data-toggle="modal" data-target="#he2_enlarged">
                            <div class="modal fade" id="he2_enlarged">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <img src="he_2.png" class="modal_L" data-dismiss="modal">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="he_3.png" class="he_image img-shadow" data-toggle="modal" data-target="#he3_enlarged">
                            <div class="modal fade" id="he3_enlarged">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <img src="he_3.png" class="modal_L" data-dismiss="modal">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="he_4.png" class="he_image img-shadow" data-toggle="modal" data-target="#he4_enlarged">
                            <div class="modal fade" id="he4_enlarged">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <img src="he_4.png" class="modal_L" data-dismiss="modal">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="he_5.png" class="he_image img-shadow" data-toggle="modal" data-target="#he5_enlarged">
                            <div class="modal fade" id="he5_enlarged">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <img src="he_5.png" class="modal_L" data-dismiss="modal">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="he_6.png" class="he_image img-shadow" data-toggle="modal" data-target="#he6_enlarged">
                            <div class="modal fade" id="he6_enlarged">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <img src="he_6.png" class="modal_L" data-dismiss="modal">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Problems We Found-->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">Problems We Found:</div>
                </div>
            </div>
        </div>

        <!--problem 1-->
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-1 justify-content-end">
                    <div class="gray-text mobile-margin mb-3">1</div>
                </div>
                <div class="col-md-4 pt-5">
                    <p class="align-self-end mobile-margin"><b>Better data visualization</b> to answer the questions people might have about their data: why do apps collect their data and why.</p>
                </div>
                <div class="col-md-6 pt-4">
                    <figure class="figure">
                        <img src="ant_problem_1.svg" class="figure-img img-fluid img-shadow" id="privacy_grade" data-toggle="modal" data-target="#problem1_enlarged">
                        <div class="modal fade" id="problem1_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="ant_problem_1.svg" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>

        <!--problem 2-->
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-2"></div>
                <div class="col-md-1 justify-content-end">
                    <div class="gray-text mobile-margin mb-3">2</div>
                </div>
                <div class="col-md-4 pt-5">
                    <p class="align-self-end mobile-margin"><b>Homepage need to explain the purpose of the site.</b> It should present interesting insights and findings as well as how we analyzed and classified the data.</p>
                </div>
                <div class="col-md-4 pt-4 justify-content-end">
                    <figure class="figure">
                        <img src="ant_problem_2.svg" class="figure-img img-fluid img-shadow" id="privacy_grade" data-toggle="modal" data-target="#problem2_enlarged">
                        <div class="modal fade" id="problem2_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="ant_problem_2.svg" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
        <!--problem 3 + 4 -->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-2"></div>
                <div class="col-md-1 justify-content-end">
                    <div class="med-gray-text mobile-margin mb-3">3</div>
                </div>
                <div class="col-md-3">
                    <p class="align-self-end mobile-margin"><b>Clearer interaction flow of pages.</b></p>
                    <figure class="figure">
                        <img src="ant_problem_3.svg" class="figure-img img-fluid img-shadow mt-3" id="privacy_grade" data-toggle="modal" data-target="#problem3_enlarged">
                        <div class="modal fade" id="problem3_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="ant_problem_3.svg" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div class="col-md-1 justify-content-end">
                    <div class="med-gray-text ml-4 mobile-margin mb-3">4</div>
                </div>
                <div class="col-md-4">
                    <p class="align-self-end mobile-margin"><b>Integrate our site stylistically with Privacy Grade</b> (our website is a subside to Privacy Grade).</p>
                    <figure class="figure">
                        <img src="ant_problem_4.svg" class="figure-img img-fluid img-shadow mt-3" id="privacy_grade" data-toggle="modal" data-target="#problem4_enlarged">
                        <div class="modal fade" id="problem4_enlarged">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <img src="ant_problem_4.svg" class="modal_L" data-dismiss="modal">
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>

        <!-- Data Visualization: What kind of questions are we answering with our website? -->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">Data Visualization: What kind of questions are we answering with our website?</div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-5 mt-3">
                    <p class="mobile-margin">After establishing the problems, I needed to tackle the data visualization.</p>
                    <p class="mobile-margin">To make sure our redesign addresses the right questions, we started off reading papers, articles, familiarizing ourselves with data privacy and security.</p>
                    <p class="mobile-margin">We read the <a href="mobipurpose_ubicomp.pdf">Mobipurpose</a> paper by Haojian Jin, a PhD student at CMU whose paper served as the source for the data used in this website.</p>
                </div>
                <div class="col-md-5">
                    <div class="websiteQuestions">1. What apps are collecting xxxx (some data)? What are they collecting it for?</div><br>
                    <div class="websiteQuestions">2. What is new and interesting about this data discovery?</div><br>
                    <div class="websiteQuestions">3. How much data are the apps are collecting?</div><br>
                    <div class="websiteQuestions">4. Why are companies collecting this data?</div><br>
                    <div class="websiteQuestions">5. Who knows what about us and why?</div>
                </div>
            </div>
        </div>

        <!--Parallel Prototyping-->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">My Approach in Visualizing the Data.</div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-5 mt-3">
                    <p class="mobile-margin">I separated the data viz into 2 views, where in one view I show the top 5 apps, and in another I show the top 5 data types.</p>
                    <p class="mobile-margin">I received some feedback regarding view 4 and 5. Users felt that view 4 is more visual, yet the multiple sized clouds are confusing, and it's not clear why the data types are sized differently. But it is easier to consume and understand view 5, which had many repeated data icons.</p>
                    <p class="mobile-margin">I continued to iterate on view 5 based on user feedback while brainstorming the other views (6-9).</p>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-3 viz">
                    <div class="med-gray-text mobile-margin">apps</div>
                    <img src="viz_1_thumbnail.svg" class="mx-auto d-block viz_thumb mt-5 img-shadow" data-toggle="modal" data-target="#viz1_enlarged">
                    <div class="modal fade" id="viz1_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_1_enlarged.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 viz">
                    <div class="med-gray-text mobile-margin">data types</div>
                    <img src="viz_2_thumbnail.svg" class="mx-auto d-block viz_thumb mt-5 img-shadow" data-toggle="modal" data-target="#viz2_enlarged">
                    <div class="modal fade" id="viz2_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_2_enlarged.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-3 viz">
                    <img src="viz_3_thumbnail.svg" class="mx-auto d-block viz_thumb mb-4 img-shadow" data-toggle="modal" data-target="#viz3_enlarged">
                    <div class="modal fade" id="viz3_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_3_enlarged.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8" viz">
                    <img src="viz_4.svg" class="mx-auto d-block viz_thumb mb-4 img-shadow" data-toggle="modal" data-target="#viz4_enlarged">
                    <div class="modal fade" id="viz4_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_4.svg" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-8">
                    <img src="viz_5.svg" class="mx-auto d-block viz_thumb mb-4 img-shadow" data-toggle="modal" data-target="#viz5_enlarged">
                    <div class="modal fade" id="viz5_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_5.svg" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-5"></div>
                <div class="col-md-3 viz">
                    <div class="med-gray-text mobile-margin">apps</div>
                    <img src="viz_7_thumbnail.svg" class="mx-auto d-block viz_thumb mt-5 img-shadow" data-toggle="modal" data-target="#viz7_enlarged">
                    <div class="modal fade" id="viz7_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_7_enlarged.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 viz">
                    <div class="med-gray-text mobile-margin">data types</div>
                    <img src="viz_6_thumbnail.svg" class="mx-auto d-block viz_thumb mt-5 img-shadow" data-toggle="modal" data-target="#viz6_enlarged">
                    <div class="modal fade" id="viz6_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_6_enlarged.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                    <img src="viz_8_thumbnail.svg" class="mx-auto d-block viz_thumb mt-5 img-shadow" data-toggle="modal" data-target="#viz8_enlarged">
                    <div class="modal fade" id="viz8_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_8_enlarged.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                    <img src="viz_9_thumbnail.svg" class="mx-auto d-block viz_thumb mt-5 img-shadow" data-toggle="modal" data-target="#viz9_enlarged">
                    <div class="modal fade" id="viz9_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="viz_9_enlarged.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- The 10th Iteration -->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">The 10th Iteration.</div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-5 mt-3">
                    <p class="mobile-margin">The final iteration used a brushing and linking method that combined two views into one, enabling users to explore details within the dataset.</p>
                    <p class="mobile-margin">Instead of splitting the views into 2, I used a tree-map view to display the data of what the top 5 apps are sending to the clouds. As the user click on a cloud, they can view detailed information such as the exact address of where their data is going.</p>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div class="row mx-auto blue-bkgd">
                <div class="col-md-8 mx-auto pt-4 pb-4 mt-5 mb-5">
                    <img src="final_gif.gif" id="knows_video" controls autoplay>
                </div>
            </div>
        </div>

        <!-- Style Guide and Original Graphics -->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">Style Guide and Original Graphics</div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-5 mt-5">
                    <p class="mobile-margin">I create a style guide based off of Privacy Grade's website to guide the style of our site. Since our site is a subside to Privacy Grade, our Professor wanted to make sure the styles of the two sites matched.</p>
                    <p class="mobile-margin">I also created original graphics in Adobe Illustrator, potentially to be used on the Homepage or FAQ page.</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-5 mt-5">
                    <img src="illustration.png" class="figure-img img-fluid img-shadow" id="illustration" data-toggle="modal" data-target="#illustration_enlarged">
                    <div class="modal fade" id="illustration_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="illustration.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mt-5">
                    <img src="privacygrade_Style_Guide.png" class="figure-img img-fluid img-shadow" id="privacy_grade" data-toggle="modal" data-target="#privStyle_enlarged">
                    <div class="modal fade" id="privStyle_enlarged">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <img src="privacygrade_Style_Guide.png" class="modal_L" data-dismiss="modal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Displaying it all together on the Homepage -->
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-3 align-self-end">
                    <p class="blue-text">01</p>
                    <p class="intro-header">Initial Design</p>
                    <img src="knows_1.svg" class="img-fluid img-shadow">
                </div>
                <div class="col-md-3 align-self-center">
                    <p class="blue-text">02</p>
                    <p class="intro-header">Linear graph view</p>
                    <img src="knows_2.svg" class="img-fluid img-shadow">
                </div>
                <div class="col-md-4 align-self-start">
                    <p class="blue-text">03</p>
                    <p class="intro-header">Playing with varied grid layouts</p>
                    <img src="knows_3.svg" class="img-fluid img-shadow">
                </div>
            </div>
            <div class="row mt-5 mb-5 pb-5">
                <div class="col-md-1"></div>
                <div class="col-md-3 align-self-center">
                    <p class="blue-text">00</p>
                    <p class="intro-header">Old Design</p>
                    <img src="knows_00.svg" class="img-fluid img-shadow">
                </div>
                <div class="col-md-7 align-self-center">
                    <p class="blue-text">04</p>
                    <p class="intro-header">Final Design</p>
                    <img src="knows_4.svg" class="img-fluid img-shadow">
                </div>
            </div>
        </div>

        <!-- Results and Takeaways -->
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <div class="intro-header mobile-margin">Results and Takeaways</div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-1"></div>
                <div class="col-md-5 mt-3">
                    <p class="mobile-margin">Our professor was very happy with the end product, and are aiming for deployment of the web site in January 2020. We believe the website is successful in educating people about the types of data apps are collecting about us and why. We hope this information will raise awareness for the general public about data privacy and security.</p>
                    <p class="mobile-margin">This was a great learning experience for me as well in terms of learning data drive design to convey information that is coherent and cogent. Also, working with fellow teammate who is a developer helped me gain empathy and collaborative skills to make an impactful product.</p>
                </div>
            </div>
        </div>
    `;
            
            // Add CSS styles for description max-width
            if (!document.getElementById('knows-modal-description-styles')) {
                const style = document.createElement('style');
                style.id = 'knows-modal-description-styles';
                style.textContent = `
                    @media (min-width: 768px) {
                        .knows-description {
                            max-width: 453px;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Add CSS styles for knows hero image
            if (!document.getElementById('knows-hero-image-styles')) {
                const style = document.createElement('style');
                style.id = 'knows-hero-image-styles';
                style.textContent = `
                    .knows-hero-image {
                        max-width: 100%;
                        height: auto;
                    }
                    @media (min-width: 1440px) {
                        .knows-hero-image {
                            width: 687px;
                        }
                    }
                    @media (max-width: 1439px) {
                        .knows-hero-image {
                            width: calc(687px * (100vw / 1440px));
                        }
                    }
                    @media (min-width: 1440px) {
                        #knows-modal-content {
                            padding-bottom: 200px;
                        }
                    }
                    @media (max-width: 1439px) {
                        #knows-modal-content {
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
        const button = document.querySelector('button[data-hs-overlay="#knows-modal"]');
        const modal = document.getElementById('knows-modal');
        const closeBtn = document.getElementById('knows-close-btn');
        
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
