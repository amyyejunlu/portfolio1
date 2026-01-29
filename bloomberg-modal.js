// Bloomberg Modal Content Generator
(function() {
    // Function to load CSS dynamically
    function loadModalCSS(cssFile) {
        if (!document.getElementById('bloomberg-modal-css')) {
            const link = document.createElement('link');
            link.id = 'bloomberg-modal-css';
            link.rel = 'stylesheet';
            link.href = cssFile;
            document.head.appendChild(link);
        }
    }

    function initModalContent() {
        const modalContent = document.getElementById('bloomberg-modal-content');
        
        if (!modalContent) {
            setTimeout(initModalContent, 100);
            return;
        }
        
        // Load CSS when modal content is initialized
        loadModalCSS('bloomineers.css');
        
        // Only set content if it's empty
        if (modalContent.innerHTML.trim() === '' || modalContent.innerHTML.includes('Content will be generated')) {
            // Generate modal content - extracting from bloomineers.html
            modalContent.innerHTML = `
        <!-- Header Section -->
        <div style="padding-top: 200px; padding-bottom: 200px; text-align: center;">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px;">
                <p style="font-family: 'Public Sans', sans-serif; font-weight: 300; font-size: 16px; letter-spacing: 0.05em; color: #303030; margin: 0;">jan - aug 2020</p>
                <img src="bloomberg logo.png" alt="Bloomberg" style="height: 48px; width: auto;">
                <p class="bloomberg-description" style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 18px; letter-spacing: 0.06em; color: #4A4A4A; margin: 0; margin-top: 8px;">Designed a platform for managing and sharing machine learning experiments</p>
            </div>
        </div>

        <!--Trace Home Image-->
        <div class="row mx-auto">
            <div class="mx-auto">
                <img class="mx-auto d-block bloomberg-hero-image" src="trace_home.png" alt="Trace Home">
            </div>
        </div>

        <!--project background-->
        <div class="row mt-5 mx-auto">
            <div class="col-lg-1 col-sm-0"></div>
            <div class="col-lg-5 col-sm-6">
                <div class="row">
                    <div class="col-lg-2 col-sm-1 logo">
                        <img src="bb_logo.png" class="mt-1" width="36px">
                    </div>
                    <div class="col-lg-10 col-sm-10 no-margin">
                        <p class="intro-header">Project Background</p>
                        <p class="sub-header">Jan 2020 - Present</p>
                        <p class="mt-4 text-width">Bloomberg has tasked our interdisciplinary team to design a solution for machine learning engineers at the organization within the timeframe of 28 weeks. Applying machine learning at scale has created friction around experiment management, consuming lots of time, money, and resources, thus driving the need to manage some of this complexity.</p>
                        <p class="text-width">Our goal is to design a platform for managing machine learning experiments and enhance both reproducibility and knowledge sharing to simplify the model training process, allowing for higher success rates of experiments and the delivery of increasingly sophisticated products powered by machine learning.</p>
                        <a href="https://nkang2020.github.io/bloomberg-mhci-site/" target="_blank"><button class="visit-button mt-5">Visit Project Website</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-4 mt-4">
                <img src="bb_bkgd.PNG" class="mx-auto d-block img-fluid animate__animated animate__fadeInUp" id="bkgd">
            </div>
        </div>

        <!--my role-->
        <div class="row mt-5">
            <div class="col-lg-1 col-md-0 col-sm-0"></div>
            <div class="col-lg-6 col-md-10 col-sm-11 pt-5">
                <div class="row">
                    <div class="col-lg-2 col-sm-1"></div>
                    <div class="col-lg-10 col-md-8 col-sm-12 mt-5">
                        <p class="intro-header">My Role</p>
                        <p class="sub-header">Product Designer</p>
                        <p class="mt-4 text-width ipad-width mobile-width">As the product designer, I am responsible for defining the project's product specifications, coordinating within our team and with our external client, Bloomberg to define the core features for our product.</p>
                        <p class="text-width ipad-width mobile-width">I also established and implemented our design system across the product ecosystem in the forms of a centralized machine learning management platform and a project website.</p>
                        <p class="text-width ipad-width mobile-width">Being the design lead for the team, I also provided design mentorship to team members, overseeing their growth and learning in design processes.</p>
                    </div>
                </div>    
            </div>
        </div>
 
        <!--Research-->
        <div class="row mt-5 pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-5 mt-5">
                <p class="intro-header">Research Overview</p>     
            </div>
        </div>  
        <div class="row">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-5 col-sm-8">
                <p class="mt-3 text-width">Machine learning was a new domain to all of the team members when we first started this project. In order to understand the type of work our users did, we conducted in-depth primary and secondary research before meeting our stakeholders at Bloomberg. This included reviewing literature and interviewing data scientists, machine learning engineers, and product managers.</p>
                <p class="text-width">With a shared ML language, we moved forward with generative research techniques to not only understand and visualize the biggest pain points for our stakeholders, but also identify insights that could bring the most value to them.</p>
            </div>
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-5 col-sm-6">
                <a href="Bloomineers' Research Report_small.pdf"><button class="download-button mt-5">Download Research Report</button></a>
            </div>
        </div>

        <!--Research Goals-->
        <div class="row mt-5">
            <div class="col-md-1"></div>
            <div class="col-md-5 mt-5">
                <p class="intro-header">Research Goals</p>     
            </div>
        </div> 

        <!--1 & 2 -->
        <div class="row mt-3">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="number">1</div>
                    <div class="col-md-7 pt-5">
                        <div class="goal-header">Understand the problem space</div>
                        <p class="text-width-small mt-3">Gain an in-depth understanding of the realm of machine learning through primary research, secondary research, and taking online courses in machine learning.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="number">2</div>
                    <div class="col-md-7 pt-5">
                        <div class="goal-header">Visualize workflows across teams</div>
                        <p class="text-width-smaller mt-3">Map out a master workflow and identify where different teams diverge from this.</p>
                    </div>
                </div>
            </div>
        </div>

        <!--3 & 4 -->
        <div class="row mt-5">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="number">3</div>
                    <div class="col-md-7 pt-5">
                        <div class="goal-header">Identify pain points and opportunities</div>
                        <p class="text-width-small mt-3">Pinpoint and quantify pain points in order to target areas where we could have the most impact for product managers and ML engineers.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="number">4</div>
                    <div class="col-md-7 pt-5">
                        <div class="goal-header">Research through design</div>
                        <p class="text-width-smaller mt-3">Test out our assumptions and reframe the direction of the project through storyboarding and visual storytelling.</p>
                    </div>
                </div>
            </div>
        </div>

        <!--Domain Knowledge-->
        <div class="row mt-5">
            <div class="col-lg-7 col-sm-6"></div>
            <div class="col-lg-5 col-sm-12 mt-5">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <p class="intro-header">Domain Knowledge</p>
                        <p class="text-width mt-4">We acquired domain knowledge through literature reviews, interviews with Carnegie Mellon University faculty and model uses. To understand the competitive landscape, we also did an extensive competitive analysis on the top four machine learning experiment management software.</p>
                    </div>
                </div>  
            </div>
        </div>  

        <div class="row mt-5">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-6 col-sm-6">
                <img src="bb_domain1.png" class="d-block hover img-fluid mx-auto" id="domain1" data-toggle="modal" data-target="#domain1_enlarged">
                <div class="modal fade" id="domain1_enlarged">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <img src="bb_domain1.png" class="modal_L" data-dismiss="modal">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-4 ml-5">
                <img src="bb_domain2.png" class="d-block hover img-fluid mx-auto" id="domain2" data-toggle="modal" data-target="#domain2_enlarged">
                <div class="modal fade" id="domain2_enlarged">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <img src="bb_domain2.png" class="modal_L" data-dismiss="modal">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-lg-3 col-sm-3"></div>
            <div class="col-lg-4 col-sm-4 ml-4">
                <img src="bb_domain3.png" class="d-block hover img-fluid mx-auto" id="domain3" data-toggle="modal" data-target="#domain3_enlarged">
                <div class="modal fade" id="domain3_enlarged">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <img src="bb_domain3.png" class="modal_L" data-dismiss="modal">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-2 ml-4">
                <img src="bb_domain4.png" class="d-block hover img-fluid mx-auto" id="domain4" data-toggle="modal" data-target="#domain4_enlarged">
                <div class="modal fade" id="domain4_enlarged">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <img src="bb_domain4.png" class="modal_L" data-dismiss="modal">
                        </div>
                    </div>
                </div>
                <img src="bb_domain5.png" class="d-block hover mt-5 img-fluid mx-auto" id="domain5" data-toggle="modal" data-target="#domain5_enlarged">
                <div class="modal fade" id="domain5_enlarged">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <img src="bb_domain5.png" class="modal_L" data-dismiss="modal">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Current State Analysis-->
        <div class="row mt-5">
            <div class="col-md-1"></div>
            <div class="col-md-5 mt-5">
                <p class="intro-header">Current State Analysis</p>     
            </div>
        </div>  
        <div class="row">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-5 col-sm-5">
                <p class="mt-3 text-width">Then we began to analyze the current software Bloomberg engineers use, whose main function is to run ML experiments by connecting data and models with GPU, then displaying the results in logs.</p>
                <p class="text-width">In this diagram we give a synthesized analysis of the pain points and opportunities identified from remote interviews, and other research methods such as love letter/breakup letters and surveys.</p>
                <p class="text-width">The identified top 4 pain points will provide a starting point for our design space.</p>
            </div>
            <div class="col-lg-6 col-sm-6">
                <img src="bb_dsp.svg" class="mx-auto d-block img-fluid" id="dspanalysis" alt="dspanalysis">
            </div>
        </div>

        <!--Master Workflow-->
        <div class="row mt-5 pt-5">
            <div class="col-md-1"></div>
            <div class="mx-auto mt-5">
                <h2 class="mt-5 master">Master Workflow</h2>
            </div>
            <div class="mx-auto mt-4">
                <p class="center-text">an in-depth look at Bloomberg engineer's machine learning experiment process</p>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-lg-12 col-sm-12">
                <img src="bb_workflow.png" alt="master workflow" class="workflow img-fluid mt-5">
            </div>
        </div>

        <!--We conducted remote interviews-->
        <div class="row mt-5">
            <div class="col-md-1"></div>
            <div class="col-md-6 pt-5">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-10 mt-5">
                        <p class="intro-header">We conducted remote interviews with Bloomberg employees</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-10">
                        <p class="mt-4 text-width">in order to gain a deeper understanding of the ML engineers' workflows and mental models. We landed on visual storytelling in an effort to create a more tangible, shared understanding of our users' processes for machine learning.</p>
                        <p class="text-width">Using Mural, we created a template for our interviews, which allowed users to run through the workflow of a recent experiment they were working on while the interviewer captured and reflected feedback in real-time.</p>
                    </div>
                </div>    
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-10">
                        <p class="mt-4 text-width">With provided sticky notes and emojis, they could add various tools and software at different stages to narrate their own workflow story. We conducted 20+ interviews using this mixed-method, and the responses were valuable in drawing out critical insights to inform design decisions.</p>
                    </div>
                </div>    
            </div>
        </div>

        <div class="container">
            <div class="row mt-5 mx-auto">
                <div class="col-md-12 mx-auto">
                    <div id="cinnabonCarousel" class="carousel slide mx-auto" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="bb_remote1.png" class="figure-img img-fluid compPics" data-toggle="modal" data-target="#comp1_enlarged">
                                <div class="modal fade" id="comp1_enlarged">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <img src="bb_remote1.png" class="modal_L" data-dismiss="modal">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="bb_remote2.png" class="figure-img img-fluid compPics" data-toggle="modal" data-target="#comp4_enlarged">
                                <div class="modal fade" id="comp4_enlarged">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <img src="bb_remote2.png" class="modal_L" data-dismiss="modal">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="bb_remote3.png" class="figure-img img-fluid compPics" data-toggle="modal" data-target="#comp6_enlarged">
                                <div class="modal fade" id="comp6_enlarged">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <img src="bb_remote3.png" class="modal_L" data-dismiss="modal">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Insights-->
        <div class="row mt-5">
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <p class="mt-3 soft-grey2">Insight 01</p>
                <p class="text-width intro-header2">Ineffective tracking leads to further issues in documentation and discoverability.</p>
                <p class="text-width-small mt-5">Manual tracking occuring in dispersed locations creates inconsistencies in documentation, which hinders discoverability, thus decreasing collaboration.</p>
            </div>
            <div class="col-md-5 ipad-imgs">
                <img src="insight_1.svg" class="mx-auto d-block insight-img img-fluid" alt="Insight1">
            </div>
        </div>

        <div class="row mt-5 pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <p class="mt-3 soft-grey2">Insight 02</p>
                <p class="text-width intro-header2">The machine learning workflow is comprised of three interdependent components: data, code, and results, which all rely upon effective tracking.</p>
                <p class="text-width-small mt-5">In order to solve tracking, we need to tackle inconsistencies in data, code, and results- creating a centralized platform for teams to effectively run experiments and collaborate together, speeding up the development process.</p>
            </div>
            <div class="col-md-5 ipad-imgs">
                <img src="insight_2.svg" class="mx-auto d-block insight-img img-fluid" alt="Insight2">
            </div>
        </div>

        <div class="row mt-5 pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <p class="mt-3 soft-grey2">Insight 03</p>
                <p class="text-width intro-header2">Because of system limitations, machine learning engineers resort to developing their own workarounds to overcome workflow challenges.</p>
                <p class="text-width-small mt-5">Current workarounds in tracking datasets across rows/columns and writing custom script files provide immense opportunities for streamline and integration.</p>
            </div>
            <div class="col-md-5 ipad-imgs">
                <img src="insight_3.png" class="mx-auto d-block insight-img img-fluid" id="insight3" alt="Insight3">
            </div>
        </div>

        <!--Design system-->
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-5 mt-5">
                <p class="intro-header">Design System</p>     
            </div>
        </div>  
        <div class="row">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-5 col-sm-8">
                <p class="mt-3 text-width">As we move into the design phase of our project, a design system is much needed to ensure the product's design consistency. Additionally, since our product may be integrated with Bloomberg's existing ecosystem, I kept some of the elements such as the font 'Avenir', primary blue color, and parts of the dropdown/ breadcrumb navigation into our design system.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-sm-12">
                <img src="designsystems.png" alt="design systems" class="workflow img-fluid mt-5">
            </div>
        </div>

        <!--Final Designs-->
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-5 mt-5">
                <p class="intro-header">Final Designs</p>     
            </div>
        </div>  
        <div class="row">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-5 col-sm-8">
                <p class="mt-3 text-width">Here is a look at the final designs based the Design System. From left to right: Homepage/Projects page, an individual Project Overview page, and an Experiment page.</p>
            </div>
        </div>

        <!--Final Designs Carousel-->
        <div class="row">
            <div class="col-sm"><img src="bb_final_home.jpg" alt="design systems" class="workflow img-fluid mt-5"></div>
            <div class="col-sm"><img src="bb_final_project.jpg" alt="design systems" class="workflow img-fluid mt-5"></div>
            <div class="col-sm"><img src="bb_final_runs.png" alt="design systems" class="workflow img-fluid mt-5"></div>
        </div>

        <!--Revised designs-->
        <div class="row mt-5">
            <div class="col-md-1"></div>
            <div class="col-md-5 mt-5">
                <p class="intro-header">Revised designs</p>     
            </div>
        </div>  
        <div class="row">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-5 col-sm-5">
                <p class="mt-3 text-width">We conducted usability testing of the prototypes with our target users at Bloomberg. The results were unsatisfactory; we saw a high failure rate of task completion. I hypothesized that it was the information architecture that led to the confusion, so I proposed a dashboard approach that was much more robust, reorganizing content according to our users' mental model. But, due to the insufficient time we have left to complete the project, it was decided too late and risky to make such drastic changes.</p>
                <p class="text-width">In this diagram we give a synthesized analysis of the pain points and opportunities identified from remote interviews, and other research methods such as love letter/breakup letters and surveys.</p>
                <p class="text-width">My teammate, Chi and I discussed this further, and we both believed that this new dashboard approach has potential. As one of the research leads, Chi suggested that we conduct A/B testing on the two designs. In two days, we talked to five machine learning engineers. 4 out of 5 preferred the new design.</p>
            </div>
            <div class="col-lg-5 col-sm-4 ml-5">
                <img src="bb_testingresult.png" class="d-block hover img-fluid mx-auto" id="testing" data-toggle="modal" data-target="#testing_enlarged">
                <div class="modal fade" id="testing_enlarged">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <img src="bb_testingresult.png" class="modal_L" data-dismiss="modal">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Quotes-->
        <div class="row">
            <div class="col ml-5">
                <img src="bb_quote1.png" alt="quote 1" width="297px" class="revised-design img-fluid mt-5">
            </div>
            <div class="col">
                <img src="bb_quote2.png" alt="quote 2" width="297px" class="img-fluid mt-5">
            </div>
        </div>
        <!-- Feedback -->
        <div class="row mt-5">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-10 col-md-10 col-sm-11">
                <p class="large-text">4 out of 5 engineers <br>preferred the revised design.</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-8 col-md-9 col-sm-11">
                <p class="intro-header mt">Besides feedback on the cleaner UI, engineers also preferred the new design for its valuable features, such as a To-do List, a list view of their recent runs, as well as a Teams page to easily access work teammates are working on.</p>
            </div>
        </div>

        <!--Revised Design Img-->
        <div class="row mt-5">
            <div class="col-lg-12 col-sm-12">
                <img src="bb_revised_design.png" alt="revised design" class="revised-design img-fluid mt-5">
            </div>
        </div>

        <!--1 & 2 & 3 -->
        <div class="row mt-5">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="number">1</div>
                    <div class="col-md-7 pt-5">
                        <div class="goal-header">Robust information architecture</div>
                        <p class="text-width-small mt-3">Contrary to the current IA, where the Homepage only shows a list of projects, the new information architecture aimed to optimize efficiency and transparacy, which are key building blocks of an engineer's workflow.</p>
                        <p class="text-width-small mt-3">On the home screen, we surfaced various tasks an engineer does on an daily basis, such as a report of their recent runs, an overview of the runs they have for an experiment, as well as a list of to-do's/notes.</p>
                        <p class="text-width-small mt-3">Less relevant tasks are embedded under secondary navigation under Runs, Projects, and Settings. Discover and Teams, which are about discoverability, now sit at the top-level navigation.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <img src="bb_revisedia.png" alt="revised information architecture" class="revised-design img-fluid mt-5">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="number">2</div>
                    <div class="col-md-7 pt-5">
                        <div class="goal-header">To-Do List</div>
                        <p class="text-width-small mt-3">One of the loves in this revised design is the To-Do List/Notes section, which makes documenting ideas and thoughts about the experiment much swifter.</p>
                        <p class="text-width-small quote-italic mt-3">"I constantly make things in notepads, and stuff in the terminal so the To-Dos is very helpful."</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <img src="to-do.png" width="250px" alt="revised to-do list" class="revised-design img-fluid mt-5">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-1"></div>
            <div class="col-md-6">
                <div class="row">
                    <div class="number">3</div>
                    <div class="col-md-7 pt-5">
                        <div class="goal-header">Recent runs at a glance</div>
                        <p class="text-width-small mt-3">From what we learned, engineers don't switch projects often, so an overview about the recent runs of a project is helpful in getting to the results more quickly.</p>
                        <p class="text-width-small quote-italic mt-3">"Results are critical to me so showing last experiment/last run is good."</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <img src="bb_recentruns.png" alt="revised runs page" class="revised-design img-fluid mt-5">
            </div>
        </div>

        <!--Before & After-->
        <div class="row mt-5">
            <div class="col-sm before-after"><img src="bb_before.png" alt="Before" class="img-fluid mt-5"></div>
            <div class="col-sm before-after"><img src="bb_after.png" alt="After" class="img-fluid mt-5"></div>
        </div>

        <!--Final Thoughts-->
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-5 mt-5">
                <p class="intro-header">Final Thoughts</p>     
            </div>
        </div>  
        <div class="row">
            <div class="col-lg-1 col-sm-1"></div>
            <div class="col-lg-5 col-sm-8">
                <p class="mt-3 text-width">Although we didn't take any actionable steps on this revised design, the exercise proved to be a valuable learning experience. Iterative testing is much needed, and we should always test to learn in order improve our design.</p>
            </div>
        </div>
    `;
            
            // Add CSS styles for description max-width
            if (!document.getElementById('bloomberg-modal-description-styles')) {
                const style = document.createElement('style');
                style.id = 'bloomberg-modal-description-styles';
                style.textContent = `
                    @media (min-width: 768px) {
                        .bloomberg-description {
                            max-width: 453px;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Add CSS styles for bloomberg hero image
            if (!document.getElementById('bloomberg-hero-image-styles')) {
                const style = document.createElement('style');
                style.id = 'bloomberg-hero-image-styles';
                style.textContent = `
                    .bloomberg-hero-image {
                        max-width: 100%;
                        height: auto;
                    }
                    @media (min-width: 1440px) {
                        .bloomberg-hero-image {
                            width: 1200px;
                        }
                        #bloomberg-modal-content {
                            padding-bottom: 200px;
                        }
                    }
                    @media (max-width: 1439px) {
                        .bloomberg-hero-image {
                            width: calc(1200px * (100vw / 1440px));
                        }
                        #bloomberg-modal-content {
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
        const button = document.querySelector('button[data-hs-overlay="#bloomberg-modal"]');
        const modal = document.getElementById('bloomberg-modal');
        const closeBtn = document.getElementById('bloomberg-close-btn');
        
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
