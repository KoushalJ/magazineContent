export const App = () => {
  return(
   <>
   <div>
   <div className="header-main-area">
      <div className="header-top">
         <div className="container">
            <div className="top-header-wrapper">
               <div className="top-contact">
                  <ul className="contact-list">
                     <li className="contact-list__item"> <span className="contact-list__item-icon"><i className="fas fa-phone"></i></span><a href="tel:+91 80500 61666" className="contact-list__link"> +91 80500 61666</a></li>
                     <li className="contact-list__item"> <span className="contact-list__item-icon"><i className="fas fa-envelope"></i></span><a href="mailto:support@digitalindiahelpline.com" className="contact-list__link"> support@digitalindiahelpline.com</a></li>
                  </ul>
               </div>
               <div className="top-button">
                  <div className="language-box">
                     {/* <select className="langSel select">
                        <option value="en" selected >English</option>
                     </select> */}
                  </div>
                  <ul className="login-registration-list d-flex flex-wrap justify-content-between align-items-center ms-2">
                     <li className="login-registration-list__item">
                        <ul className="social-list">
                           <li className="social-list__item"><a href="https://www.youtube.com/channel/UCLcgMzz8BL2mTSLPauZuJzQ" className="social-list__link"><i className="fab fa-youtube"></i></a> </li>
                           <li className="social-list__item"><a href="https://www.linkedin.com/" className="social-list__link"><i className="fab fa-linkedin"></i></a> </li>
                           <li className="social-list__item"><a href="https://www.instagram.com/" className="social-list__link"><i className="fab fa-instagram"></i></a> </li>
                           <li className="social-list__item"><a href="https://twitter.com/i/flow/login" className="social-list__link"><i className="fab fa-twitter"></i></a> </li>
                           <li className="social-list__item"><a href="https://www.facebook.com/" className="social-list__link"><i className="fab fa-facebook-f"></i></a> </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div className="header" id="header">
         <div className="container position-relative">
            <div className="row">
               <div className="header-wrapper">
                  <div className="logo-wrapper">
                     <a href="https://digitalindiahelpline.com" className="normal-logo"> <img src="https://digitalindiahelpline.com/assets/images/general/logo.png" alt="Laravel"/></a>
                     <a href="https://digitalindiahelpline.com" className="dark-logo hidden"> <img src="https://digitalindiahelpline.com/assets/images/general/logo_white.png" alt="Laravel"/></a>
                  </div>
                  <div className="menu-wrapper">
                     <ul className="main-menu">
                        <li><a className="" aria-current="page" href="https://digitalindiahelpline.com">Home</a></li>
                        <li><a className="" aria-current="page" href="https://digitalindiahelpline.com/plan">Plan</a></li>
                        <li><a className="" aria-current="page" href="https://digitalindiahelpline.com/services">Services</a></li>
                        <li><a className="" aria-current="page" href="https://digitalindiahelpline.com/blog">Blog</a></li>
                        <li><a className="" aria-current="page" href="https://digitalindiahelpline.com/about">About</a></li>
                        <li><a className="" aria-current="page" href="https://digitalindiahelpline.com/contact">Contact</a></li>
                     </ul>
                  </div>
                  <div className="menu-right-wrapper">
                     <ul>
                        <li></li>
                        <li>
                           <div className="light-dark-btn-wrap ms-1" id="light-dark-checkbox">
                              <i className="fas fa-moon mon-icon"></i>
                              <i className='fas fa-sun sun-icon'></i>
                           </div>
                        </li>
                        <li><a className='btn btn--base' href="https://digitalindiahelpline.com/user/login"><i className="fas fa-sign-in-alt"></i> Login </a></li>
                        <li><i className="fas fa-bars sidebar-menu-show-hide"></i></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="sidebar-menu-wrapper">
      <div className="top-close d-flex align-items-center justify-content-between">
         <div className="header-wrapper">
            <div className="logo-wrapper ms-3 mb-1">
               <div className="logo-wrapper">
                  <a href="https://digitalindiahelpline.com" className="normal-logo" id="normal-logo"> <img src="https://digitalindiahelpline.com/assets/images/general/logo.png" alt="Laravel"/></a>
                  <a href="https://digitalindiahelpline.com" className="dark-logo hidden" id="dark-logo"> <img src="https://digitalindiahelpline.com/assets/images/general/logo_white.png" alt="Laravel"/></a>
               </div>
            </div>
         </div>
         <i className="fas fa-times close-hide-show"></i>
      </div>
      <ul className="sidebar-menu-list">
         <li className="sidebar-menu-list__item ">
            <a href="https://digitalindiahelpline.com" className="sidebar-menu-list__link">Home</a>
         </li>
         <li className="sidebar-menu-list__item ">
            <a href="https://digitalindiahelpline.com/plan" className="sidebar-menu-list__link">Plan</a>
         </li>
         <li className="sidebar-menu-list__item ">
            <a href="https://digitalindiahelpline.com/services" className="sidebar-menu-list__link">Services</a>
         </li>
         <li className="sidebar-menu-list__item ">
            <a href="https://digitalindiahelpline.com/blog" className="sidebar-menu-list__link">Blog</a>
         </li>
         <li className="sidebar-menu-list__item ">
            <a href="https://digitalindiahelpline.com/about" className="sidebar-menu-list__link">About</a>
         </li>
         <li className="sidebar-menu-list__item ">
            <a href="https://digitalindiahelpline.com/contact" className="sidebar-menu-list__link">Contact</a>
         </li>
         <li className="sidebar-menu-list__item ">
            <a className="btn btn--base mt-2 mb-2 ms-3" href="https://digitalindiahelpline.com/user/login"><i className="fas fa-sign-in-alt"></i> Login </a>
         </li>
      </ul>
   </div>
   <div className="banner-section bg-img">
      <span className="banner-effect shape-1 animate-zoom-fade"></span>
      <span className="banner-effect shape-2 animate-zoom-fade"></span>
      <span className="banner-effect shape-3 animate-zoom-fade"></span>
      <div className="container">
         <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
               <div className="banner-left__content">
                  <span className="subtitle">Website | Software |Digital Marketing</span>
                  <h2>GROW-YOUR BUSINESS ONLINE</h2>
                  <p>Transform your ideas into reality with our expert software development services. From concept to deployment, we deliver custom Website Development solutions that meet your unique business needs</p>
                  <a href="https://digitalindiahelpline.com/plan" target="_blank" className="btn btn--base me-2 mb-2">
                  Get Started  <i className="fa-sharp fas fa-arrow-right"></i>
                  </a>
                  <a href="https://digitalindiahelpline.com/contact" target="_blank" className="btn btn--base outline mb-2">
                  Contact Us <i className="far fa-id-card"></i>
                  </a>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="banner-right-wrap position-relative">
                  <div className="experience-text animate-y-axis">
                     <h4>10</h4>
                     <span>Years Of Experience</span>
                  </div>
                  <img src="https://digitalindiahelpline.com/assets/images/frontend/theme_three_banner/6500163a916211694504506.png" alt="Banner Image"/>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="about-section pt-80 pb-100">
      <div className="container">
         <div className="row flex-wrap-reverse align-items-center gy-4">
            <div className="col-lg-6 position-relative">
               <div className="square-shape-1 animate-y-axis">
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
               <div className="about-thumb">
                  <div className="about-thumb__inner">
                     <img className="img-2" src="https://digitalindiahelpline.com/assets/images/frontend/theme_three_about/65001775187291694504821.jpg" alt="image"/>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 position-relative">
               <div className="about-right-content">
                  <div className="section-heading mb-0">
                     <span className="subtitle">About Us</span>
                     <h2 className="section-heading__title">
                        We Divide Our Working Process Into 4 Ways.
                     </h2>
                     <div className="row">
                        <div className="col-lg-6 col-md-6">
                           <ul className="about-service mb-4">
                              <li>
                                 <i className="fas fa-check-circle"></i>
                                 <h5>Improve</h5>
                                 <p>Conduct a comprehensive post-project review to assess what went well and identify areas for improvement.</p>
                              </li>
                              <li>
                                 <i className="fas fa-check-circle"></i>
                                 <h5>Execute</h5>
                                 <p>Assemble the project team and assign roles and responsibilities. Ensure everyone understands their tasks.</p>
                              </li>
                           </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                           <ul className="about-service mb-4">
                              <li>
                                 <i className="fas fa-check-circle"></i>
                                 <h5>Evaluate</h5>
                                 <p>Review the project plan with stakeholders to ensure it aligns with their expectations and needs.</p>
                              </li>
                              <li>
                                 <i className="fas fa-check-circle"></i>
                                 <h5>Planing</h5>
                                 <p>Clearly articulate the project&#039;s purpose, goals, and deliverables. Understand the client&#039;s requirements and expectations.</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="about-bottom">
                        <a href="https://digitalindiahelpline.com/about" target="_blank" className="btn btn--base me-3 mb-2">
                        View More <i className="fas fa-solid fa-arrow-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="service-area section-bg py-80 ">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-10">
               <div className="section-heading  text-center">
                  <span className="subtitle">What We Do</span>
                  <h2 className="section-heading__title">
                     Our Creative Services
                  </h2>
                  <p className="section-heading__desc">Our creative services are designed to elevate your brand, engage your audience, and drive results. Whether you&#039;re looking to refresh your brand identity, create engaging content, or launch a new website, we have the creative expertise to bring your vision to life.</p>
               </div>
            </div>
         </div>
         <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
               <div className="service">
                  <div className="service__icon">
                     <i className="fas fa-hospital"></i>                    
                  </div>
                  <div className="service__content mb-3">
                     <h3 className="title">
                        Hospital Management Software
                     </h3>
                     <p>
                        Finding Out What Hospital Management Software Can Do For YouEffective hospital and medical facility administration is essential for providin...
                     </p>
                  </div>
                  <div className="service-bottom-wrap d-flex justify-content-between align-items-center">
                     <p className="price-service">₹ 50,000.00</p>
                     <a href="https://digitalindiahelpline.com/service/hospital-management-software/14" className="btn btn--base"> Buy now <i className="fas fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="service">
                  <div className="service__icon">
                     <i className="fas fa-book-reader"></i>                    
                  </div>
                  <div className="service__content mb-3">
                     <h3 className="title">
                        Library Management Software
                     </h3>
                     <p>
                        Organize and Increase Efficiency with Library Management SoftwareLibraries have changed from being simple book repositories to become multif...
                     </p>
                  </div>
                  <div className="service-bottom-wrap d-flex justify-content-between align-items-center">
                     <p className="price-service">₹ 15,000.00</p>
                     <a href="https://digitalindiahelpline.com/service/library-management-software/13" className="btn btn--base"> Buy now <i className="fas fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="service">
                  <div className="service__icon">
                     <i className="fas fa-school"></i>                    
                  </div>
                  <div className="service__content mb-3">
                     <h3 className="title">
                        School Management Software
                     </h3>
                     <p>
                        Finding Out What a School/College Management System Can Do for YouThe efficient management of schools and colleges is essential in today&#039;s f...
                     </p>
                  </div>
                  <div className="service-bottom-wrap d-flex justify-content-between align-items-center">
                     <p className="price-service">₹ 25,000.00</p>
                     <a href="https://digitalindiahelpline.com/service/school-management-software/12" className="btn btn--base"> Buy now <i className="fas fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="service">
                  <div className="service__icon">
                     <i className="fas fa-share-square"></i>                    
                  </div>
                  <div className="service__content mb-3">
                     <h3 className="title">
                        Social Media Management
                     </h3>
                     <p>
                        Both individuals and companies need to establish a strong online presence in the present digital world. Social media platforms have develope...
                     </p>
                  </div>
                  <div className="service-bottom-wrap d-flex justify-content-between align-items-center">
                     <p className="price-service">₹ 6,000.00</p>
                     <a href="https://digitalindiahelpline.com/service/social-media-management/9" className="btn btn--base"> Buy now <i className="fas fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="service">
                  <div className="service__icon">
                     <i className="fas fa-chart-bar"></i>                    
                  </div>
                  <div className="service__content mb-3">
                     <h3 className="title">
                        Branding and Identity
                     </h3>
                     <p>
                        A Complete Guide to Unlocking the Power of Branding and Identity&amp;nbsp;Building a strong brand identity is more important than ever in the fa...
                     </p>
                  </div>
                  <div className="service-bottom-wrap d-flex justify-content-between align-items-center">
                     <p className="price-service">₹ 1,000.00</p>
                     <a href="https://digitalindiahelpline.com/service/branding-and-identity/8" className="btn btn--base"> Buy now <i className="fas fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="service">
                  <div className="service__icon">
                     <i className="fas fa-edit"></i>                    
                  </div>
                  <div className="service__content mb-3">
                     <h3 className="title">
                        Content Creation
                     </h3>
                     <p>
                        The Science of Content Creation: Creating Valuable and Engaging ContentIntroductionThe monarch of the internet world now is content. The cal...
                     </p>
                  </div>
                  <div className="service-bottom-wrap d-flex justify-content-between align-items-center">
                     <p className="price-service">₹ 2,000.00</p>
                     <a href="https://digitalindiahelpline.com/service/content-creation/7" className="btn btn--base"> Buy now <i className="fas fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="why-choose-area py-80">
      <div className="why-choose-bg animate-zoom-fade"></div>
      <div className="container">
         <div className="row gy-4 align-items-center">
            <div className="col-lg-7">
               <div className="section-heading mb-4">
                  <span className="subtitle">Why Choose Us</span>
                  <h2 className="section-heading__title">
                     Our Digital Agency Delivers Extraordinary Business Value.
                  </h2>
                  <p className="section-heading__desc mb-3">Choosing us means choosing a partner who is dedicated to your success. We are committed to helping you leverage technology to achieve your goals and overcome challenges. Your success is our success, and we look forward to the opportunity to work with you.</p>
               </div>
               <div className="why-choose-us__content">
                  <div className="why-choose-us__topic">
                     <div className="item">
                        <div className="why-title-cont d-flex align-items-center">
                           <i className="fas fa-check"></i>
                           <div className="content ms-3">
                              <h4>
                                 24/7 Helpdesk Availability
                              </h4>
                              <p>
                                 Our commitment to you extends beyond project completion. We provide ongoing support, maintenance, and consultation servi...
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="why-title-cont d-flex align-items-center">
                           <i className="fas fa-check"></i>
                           <div className="content ms-3">
                              <h4>
                                 Timely Delivery
                              </h4>
                              <p>
                                 We understand the importance of deadlines. Our project management practices are designed to ensure on-time delivery with...
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="why-title-cont d-flex align-items-center">
                           <i className="fas fa-check"></i>
                           <div className="content ms-3">
                              <h4>
                                 Expertise and Experience:
                              </h4>
                              <p>
                                 Our team comprises highly skilled professionals with years of experience in the IT industry. We have a proven track reco...
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-5">
               <div className="why-choose-us__thumb">
                  <img className="img-1" src="https://digitalindiahelpline.com/assets/images/frontend/theme_three_choose_us/650014634e5911694504035.png" alt="choose us image"/>
                  <div className="popup-vide-wrap">
                     <div className="video-main">
                        <div className="promo-video">
                           <div className="waves-block">
                              <div className="waves wave-1"></div>
                              <div className="waves wave-2"></div>
                              <div className="waves wave-3"></div>
                           </div>
                        </div>
                        <a className="play-video popup_video" data-fancybox="" href="https://www.youtube.com/channel/UCLcgMzz8BL2mTSLPauZuJzQ">
                        <span className="play-btn"> <i className="fa fa-play"></i></span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="experience-area section-bg py-80 bg-img">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-10">
               <div className="section-heading  text-center">
                  <span className="subtitle">Our Experience</span>
                  <h2 className="section-heading__title">
                     A Proven 10-Year History Of Success In Web Development Technology
                  </h2>
               </div>
            </div>
         </div>
         <div className="row gy-4 justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
               <div className="experience">
                  <div className="experience__icon">
                     <h3><span className="odometer" data-count="150">150</span><span className="letter">+</span></h3>
                  </div>
                  <div className="experience__content">
                     <h3 className="title">Clients</h3>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
               <div className="experience">
                  <div className="experience__icon">
                     <h3><span className="odometer" data-count="10">10</span><span className="letter">+</span></h3>
                  </div>
                  <div className="experience__content">
                     <h3 className="title">Experiance</h3>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
               <div className="experience">
                  <div className="experience__icon">
                     <h3><span className="odometer" data-count="200">200</span><span className="letter">+</span></h3>
                  </div>
                  <div className="experience__content">
                     <h3 className="title">Website Development</h3>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
               <div className="experience">
                  <div className="experience__icon">
                     <h3><span className="odometer" data-count="15">15</span><span className="letter">+</span></h3>
                  </div>
                  <div className="experience__content">
                     <h3 className="title">Team Members</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="pricing-plan py-80">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-10">
               <div className="section-heading  text-center">
                  <span className="subtitle">Our Pricing Plan</span>
                  <h2 className="section-heading__title">
                     Pricing We&#039;re Offering
                  </h2>
                  <p className="section-heading__desc">Please note that our pricing is flexible and can be customized to align with your specific project goals and budget constraints. We are committed to providing value-driven solutions that meet your needs without compromising on quality. For detailed pricing information, please get in touch with our team for a personalized quote.</p>
               </div>
            </div>
         </div>
         <div className="row gy-4 justify-content-center position-relative">
            <div className="col-lg-4 col-md-6">
               <div className="pricing-plan-item">
                  <div className="price-shape-1"></div>
                  <div className="price-shape-2"></div>
                  <div className="pricing-plan-item__price">
                     <h3 className="title">₹ 4,999.00<span>/y</span> </h3>
                  </div>
                  <div className="pricing-plan-item__top mb-2">
                     <h3 className="title">Basic Plan</h3>
                  </div>
                  <div className="pricing-plan-item__list">
                     <ul>
                        <li> <i className="fas fa-check-circle"></i>5 Pages (Basic Design)</li>
                        <li> <i className="fas fa-check-circle"></i>Free Domain</li>
                        <li> <i className="fas fa-check-circle"></i>1 Year Free Hosting From 3rd Party</li>
                        <li> <i className="fas fa-check-circle"></i>100% Responsive Design</li>
                        <li> <i className="fas fa-check-circle"></i>Speed Optimization</li>
                        <li> <i className="fas fa-check-circle"></i>Live Chat Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Whatsapp Button Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Call Button Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Inquiry Form Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Location Map Integration</li>
                        <li> <i className="fas fa-check-circle"></i>24*7 Support</li>
                        <li> <i className="fas fa-check-circle"></i>Annual Charge 3999 Rs</li>
                        <li> <i className="fas fa-check-circle"></i>No Hidden Charges</li>
                     </ul>
                  </div>
                  <div className="pricing-plan-item__bottom">
                     <a href="https://digitalindiahelpline.com/user/payment/8" className="btn btn--base me-2 mb-2">
                     Get Started <i className="fas fa-arrow-right"></i>
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="pricing-plan-item">
                  <div className="price-shape-1"></div>
                  <div className="price-shape-2"></div>
                  <div className="pricing-plan-item__price">
                     <h3 className="title">₹ 7,499.00<span>/y</span> </h3>
                  </div>
                  <div className="pricing-plan-item__top mb-2">
                     <h3 className="title">Classic Plan</h3>
                  </div>
                  <div className="pricing-plan-item__list">
                     <ul>
                        <li> <i className="fas fa-check-circle"></i>10 Pages (Premium Design)</li>
                        <li> <i className="fas fa-check-circle"></i>1 Year Free Hosting From 3rd Party</li>
                        <li> <i className="fas fa-check-circle"></i>100% Responsive Design</li>
                        <li> <i className="fas fa-check-circle"></i>SEO Optimization</li>
                        <li> <i className="fas fa-check-circle"></i>High Secured (SSl)</li>
                        <li> <i className="fas fa-check-circle"></i>High Speed Optimization</li>
                        <li> <i className="fas fa-check-circle"></i>Business Email Id</li>
                        <li> <i className="fas fa-check-circle"></i>Live Chat Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Whatsapp Button Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Call Button Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Inquiry Form Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Location Map Integration</li>
                        <li> <i className="fas fa-check-circle"></i>24*7 Support</li>
                        <li> <i className="fas fa-check-circle"></i>Annual Charge 4999 Rs</li>
                        <li> <i className="fas fa-check-circle"></i>No Hidden Charges</li>
                     </ul>
                  </div>
                  <div className="pricing-plan-item__bottom">
                     <a href="https://digitalindiahelpline.com/user/payment/7" className="btn btn--base me-2 mb-2">
                     Get Started <i className="fas fa-arrow-right"></i>
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="pricing-plan-item">
                  <div className="price-shape-1"></div>
                  <div className="price-shape-2"></div>
                  <div className="pricing-plan-item__price">
                     <h3 className="title">₹ 10,000.00<span>/y</span> </h3>
                  </div>
                  <div className="pricing-plan-item__top mb-2">
                     <h3 className="title">Premium Plan</h3>
                  </div>
                  <div className="pricing-plan-item__list">
                     <ul>
                        <li> <i className="fas fa-check-circle"></i>15 Pages (Dynamic Website)</li>
                        <li> <i className="fas fa-check-circle"></i>Free Domain</li>
                        <li> <i className="fas fa-check-circle"></i>1 Year Free Hosting From 3rd Party</li>
                        <li> <i className="fas fa-check-circle"></i>100% Responsive Design</li>
                        <li> <i className="fas fa-check-circle"></i>SEO Optimization</li>
                        <li> <i className="fas fa-check-circle"></i>High Secured (SSL)</li>
                        <li> <i className="fas fa-check-circle"></i>High Speed Optimization</li>
                        <li> <i className="fas fa-check-circle"></i>Business Email Id</li>
                        <li> <i className="fas fa-check-circle"></i>Live Chat Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Whatsapp Button Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Call Button Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Inquiry Form Integration</li>
                        <li> <i className="fas fa-check-circle"></i>Location Map Integration</li>
                        <li> <i className="fas fa-check-circle"></i>24*7 Support</li>
                        <li> <i className="fas fa-check-circle"></i>Annual Charge 5500 Rs</li>
                        <li> <i className="fas fa-check-circle"></i>No Hidden Charges</li>
                     </ul>
                  </div>
                  <div className="pricing-plan-item__bottom">
                     <a href="https://digitalindiahelpline.com/user/payment/6" className="btn btn--base me-2 mb-2">
                     Get Started <i className="fas fa-arrow-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="projects-area section-bg py-80">
      <div className="container">
         <div className="row">
            <div className="col-lg-7">
               <div className="section-heading">
                  <span className="subtitle">Our Portfolio</span>
                  <h2 className="section-heading__title">
                     Let’s See Our Best Work
                  </h2>
                  <p className="section-heading__desc mb-3">Our portfolio reflects our commitment to delivering innovative, tailor-made solutions that empower businesses to thrive in the digital age. We take pride in our diverse range of projects and our ability to meet the unique needs of each client.</p>
               </div>
            </div>
         </div>
         <div className="row gy-4 align-items-center justify-content-center">
            <div className="col-lg-4 col-md-4">
               <div className="Our-Project">
                  <a href="https://digitalindiahelpline.com/portfolio/mysore-college-of-engineering-website-redesign/1">
                     <img className="img-1" src="https://digitalindiahelpline.com/assets/images/frontend/portfolioImage/65003d5b9cb6b1694514523.png" alt="image"/>
                     <div className="content">
                        <h4>
                           Mysore College of En...
                        </h4>
                        <span>
                        Website Development
                        </span>
                     </div>
                  </a>
               </div>
            </div>
            <div className="col-lg-4 col-md-4">
               <div className="Our-Project">
                  <a href="https://digitalindiahelpline.com/portfolio/rehnuma-foundation-ngo-crowd-funding-website/2">
                     <img className="img-1" src="https://digitalindiahelpline.com/assets/images/frontend/portfolioImage/65080e963b51b1695026838.png" alt="image"/>
                     <div className="content">
                        <h4>
                           Rehnuma Foundation N...
                        </h4>
                        <span>
                        Crowd Funding Websit...
                        </span>
                     </div>
                  </a>
               </div>
            </div>
            <div className="col-lg-4 col-md-4">
               <div className="Our-Project">
                  <a href="https://digitalindiahelpline.com/portfolio/elevating-educational-excellence-aaryabhat-education-societys-website-development-portfolio/3">
                     <img className="img-1" src="https://digitalindiahelpline.com/assets/images/frontend/portfolioImage/650ac5c40c5471695204804.png" alt="image"/>
                     <div className="content">
                        <h4>
                           Elevating Educationa...
                        </h4>
                        <span>
                        Education Society
                        </span>
                     </div>
                  </a>
               </div>
            </div>
            <div className="col-lg-4 col-md-4">
               <div className="Our-Project">
                  <a href="https://digitalindiahelpline.com/portfolio/acetechno-academy-elevating-web-development-services-to-new-heights/4">
                     <img className="img-1" src="https://digitalindiahelpline.com/assets/images/frontend/portfolioImage/650acaffc94251695206143.png" alt="image"/>
                     <div className="content">
                        <h4>
                           Acetechno Academy: E...
                        </h4>
                        <span>
                        Education
                        </span>
                     </div>
                  </a>
               </div>
            </div>
            <div className="col-lg-4 col-md-4">
               <div className="Our-Project">
                  <a href="https://digitalindiahelpline.com/portfolio/aditya-nawbade-website-development-services/5">
                     <img className="img-1" src="https://digitalindiahelpline.com/assets/images/frontend/portfolioImage/650acdf4dccb11695206900.png" alt="image"/>
                     <div className="content">
                        <h4>
                           Aditya Nawbade - Web...
                        </h4>
                        <span>
                        Real Estate
                        </span>
                     </div>
                  </a>
               </div>
            </div>
            <div className="col-lg-4 col-md-4">
               <div className="Our-Project">
                  <a href="https://digitalindiahelpline.com/portfolio/elevate-your-online-presence-with-aiisedus-website-development-services/6">
                     <img className="img-1" src="https://digitalindiahelpline.com/assets/images/frontend/portfolioImage/650ad06aa14a71695207530.png" alt="image"/>
                     <div className="content">
                        <h4>
                           Elevate Your Online ...
                        </h4>
                        <span>
                        College
                        </span>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="team-area section-bg py-80">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-10">
               <div className="section-heading  text-center">
                  <span className="subtitle">Our Team Member</span>
                  <h2 className="section-heading__title">Meet Our Team
                  </h2>
                  <p className="section-heading__desc">Certainly! Here&#039;s an introduction to the team at our IT company:</p>
               </div>
            </div>
         </div>
         <div className="row gy-4 justify-content-center">
         </div>
      </div>
   </div>
   <div className="testimonials py-80 ">
      <div className="container">
         <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 position-relative">
               <div className="square-shape-1 animate-y-axis">
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="item">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
               <div className="section-heading ">
                  <span className="subtitle">Testimonials</span>
                  <h2 className="section-heading__title ">
                     What Clients Say About Us.
                  </h2>
                  <p className="section-heading__desc mb-30">Certainly! Here are some testimonials from clients about &quot;Digital India Helpline&quot;:</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="testimonial-slider">
                  <div className="testimonails-card">
                     <div className="testimonial-item position-relative">
                        <div className="testimonial-item__quate"><i className="fas fa-quote-right"></i></div>
                        <div className="testimonial-item__thumb">
                           <img src="https://digitalindiahelpline.com/assets/images/frontend/testimonial/65001d4fa319a1694506319.jpg" alt="testimonial" />
                        </div>
                        <div className="testimonial-item__content">
                           <div className="testimonial-item__info">
                              <div className="testimonial-item__details">
                                 <h5 className="testimonial-item__name">
                                    Dr. Mashalkar Shaile...
                                 </h5>
                                 <span className="testimonial-item__designation">
                                 Principal -Sb Patil Dental Col...
                                 </span>
                              </div>
                           </div>
                           <p className="testimonial-item__desc">
                              &quot;I needed help with e-signing documents for an online transaction. Digital India Helpline made the process hassle-free. Their support team was friendly, and they provided me with c...
                           </p>
                           <div className="testimonial-item__rating">
                              <ul className="rating-list">
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="testimonails-card">
                     <div className="testimonial-item position-relative">
                        <div className="testimonial-item__quate"><i className="fas fa-quote-right"></i></div>
                        <div className="testimonial-item__thumb">
                           <img src="https://digitalindiahelpline.com/assets/images/frontend/testimonial/65001c8af18c21694506122.png" alt="testimonial" />
                        </div>
                        <div className="testimonial-item__content">
                           <div className="testimonial-item__info">
                              <div className="testimonial-item__details">
                                 <h5 className="testimonial-item__name">
                                    Ravi N Nandi
                                 </h5>
                                 <span className="testimonial-item__designation">
                                 Lecturer -Maths with me
                                 </span>
                              </div>
                           </div>
                           <p className="testimonial-item__desc">
                              &quot;I recently encountered an issue with my PAN card application. Digital India Helpline&#039;s team was responsive and knowledgeable. They clarified my doubts and ensured that my applicat...
                           </p>
                           <div className="testimonial-item__rating">
                              <ul className="rating-list">
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="testimonails-card">
                     <div className="testimonial-item position-relative">
                        <div className="testimonial-item__quate"><i className="fas fa-quote-right"></i></div>
                        <div className="testimonial-item__thumb">
                           <img src="https://digitalindiahelpline.com/assets/images/frontend/testimonial/65001d04b954d1694506244.png" alt="testimonial" />
                        </div>
                        <div className="testimonial-item__content">
                           <div className="testimonial-item__info">
                              <div className="testimonial-item__details">
                                 <h5 className="testimonial-item__name">
                                    Gopal Badiger
                                 </h5>
                                 <span className="testimonial-item__designation">
                                 Principal
                                 </span>
                              </div>
                           </div>
                           <p className="testimonial-item__desc">
                              &quot;I was struggling to understand how to apply for a government scheme online. Digital India Helpline not only helped me fill out the application but also explained the entire proced...
                           </p>
                           <div className="testimonial-item__rating">
                              <ul className="rating-list">
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="testimonails-card">
                     <div className="testimonial-item position-relative">
                        <div className="testimonial-item__quate"><i className="fas fa-quote-right"></i></div>
                        <div className="testimonial-item__thumb">
                           <img src="https://digitalindiahelpline.com/assets/images/frontend/testimonial/64fc4cae3fd5f1694256302.jpg" alt="testimonial" />
                        </div>
                        <div className="testimonial-item__content">
                           <div className="testimonial-item__info">
                              <div className="testimonial-item__details">
                                 <h5 className="testimonial-item__name">
                                    Mr. HARSHA KUMAR H S
                                 </h5>
                                 <span className="testimonial-item__designation">
                                 Professor
                                 </span>
                              </div>
                           </div>
                           <p className="testimonial-item__desc">
                              &quot;I had a complex issue with my Aadhaar card, and I reached out to Digital India Helpline for assistance. Their support was exceptional! They guided me step by step through the proc...
                           </p>
                           <div className="testimonial-item__rating">
                              <ul className="rating-list">
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                                 <li className="rating-list__item"><i className="fas fa-star"></i></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="accordion-area section-bg py-80">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-10">
               <div className="section-heading text-center">
                  <span className="subtitle">FAQ</span>
                  <h2 className="section-heading__title ">
                     Frequently Asked Question.
                  </h2>
                  <p className="section-heading__desc">You can find the latest website FAQs in the articles listed below.</p>
               </div>
            </div>
         </div>
         <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
               <div className="about-thumb">
                  <div className="about-thumb__inner">
                     <img src="https://digitalindiahelpline.com/assets/images/frontend/faq/650013da60ddb1694503898.jpg" alt="faq-image"/>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="accordion custom--accordion" id="accordionExample">
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading0">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse0" aria-expanded="true">
                        1. What kind of industries do you work with?
                        </button>
                     </h2>
                     <div id="collapse0" className="accordion-collapse collapse show" aria-labelledby="heading0" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <p> Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs.</p>
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading1">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false">
                        2. How much does it cost to develop software?
                        </button>
                     </h2>
                     <div id="collapse1" className="accordion-collapse collapse " aria-labelledby="heading1" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <p> Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs.</p>
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false">
                        3. How long does it take to develop software?
                        </button>
                     </h2>
                     <div id="collapse2" className="accordion-collapse collapse " aria-labelledby="heading2" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <p>    Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs.</p>
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="heading3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false">
                        4. Custom software development services ?
                        </button>
                     </h2>
                     <div id="collapse3" className="accordion-collapse collapse " aria-labelledby="heading3" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <p>  Yes, we offer custom software development services tailored to the specific needs of our clients. We work closely with our clients to understand their requirements and develop solutions that meet their unique needs.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="blog py-80">
      <div className="container">
         <div className="row justify-content-center">
            <div className="col-lg-10">
               <div className="section-heading  text-center">
                  <span className="subtitle">Blog</span>
                  <h2 className="section-heading__title">
                     Latest News
                  </h2>
                  <p className="section-heading__desc mb-30">The most recent website updates can be located in the articles listed below.</p>
               </div>
            </div>
         </div>
         <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
               <div className="blog-item">
                  <div className="blog-item__thumb">
                     <a href="https://digitalindiahelpline.com/blog/the-proven-method-for-choosing-the-best-brand-name-watch-and-succeed/180" className="blog-item__thumb-link">
                     <img src="https://digitalindiahelpline.com/assets/images/frontend/blog/thumb_657951c11e64a1702449601.jpg" alt="blog-img"/>
                     </a>
                     <ul className="text-list inline">
                        <li className="text-list__item"> <span className="text-list__item-icon"><i className="fas fa-calendar-alt"></i></span> Dec 2023, 12:10 PM</li>
                     </ul>
                  </div>
                  <div className="blog-item__content">
                     <h4 className="blog-item__title"><a href="https://digitalindiahelpline.com/blog/the-proven-method-for-choosing-the-best-brand-name-watch-and-succeed/180" className="blog-item__title-link">
                        The Proven Method for Choosing the Best Brand Name...
                        </a>
                     </h4>
                     <a href="https://digitalindiahelpline.com/blog/the-proven-method-for-choosing-the-best-brand-name-watch-and-succeed/180" className="btn--simple">Read more <span className="btn--simple__icon"><i className="fas fa-arrow-right"></i></span></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="blog-item">
                  <div className="blog-item__thumb">
                     <a href="https://digitalindiahelpline.com/blog/top-10-social-media-websites/179" className="blog-item__thumb-link">
                     <img src="https://digitalindiahelpline.com/assets/images/frontend/blog/thumb_6567135d61dc21701253981.jpg" alt="blog-img"/>
                     </a>
                     <ul className="text-list inline">
                        <li className="text-list__item"> <span className="text-list__item-icon"><i className="fas fa-calendar-alt"></i></span> Nov 2023, 04:03 PM</li>
                     </ul>
                  </div>
                  <div className="blog-item__content">
                     <h4 className="blog-item__title"><a href="https://digitalindiahelpline.com/blog/top-10-social-media-websites/179" className="blog-item__title-link">
                        Top 10 social media websites
                        </a>
                     </h4>
                     <a href="https://digitalindiahelpline.com/blog/top-10-social-media-websites/179" className="btn--simple">Read more <span className="btn--simple__icon"><i className="fas fa-arrow-right"></i></span></a>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="blog-item">
                  <div className="blog-item__thumb">
                     <a href="https://digitalindiahelpline.com/blog/top-10-part-time-jobs/178" className="blog-item__thumb-link">
                     <img src="https://digitalindiahelpline.com/assets/images/frontend/blog/thumb_65670a1095f051701251600.jpg" alt="blog-img"/>
                     </a>
                     <ul className="text-list inline">
                        <li className="text-list__item"> <span className="text-list__item-icon"><i className="fas fa-calendar-alt"></i></span> Nov 2023, 03:23 PM</li>
                     </ul>
                  </div>
                  <div className="blog-item__content">
                     <h4 className="blog-item__title"><a href="https://digitalindiahelpline.com/blog/top-10-part-time-jobs/178" className="blog-item__title-link">
                        Top 10 Part Time Jobs
                        </a>
                     </h4>
                     <a href="https://digitalindiahelpline.com/blog/top-10-part-time-jobs/178" className="btn--simple">Read more <span className="btn--simple__icon"><i className="fas fa-arrow-right"></i></span></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="client pb-60 ">
      <div className="container">
         <div className="client-logos client-slider">
            <a href="https://themillenniumpublicschoolbdr.in/">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/6500117389b961694503283.png" alt="brand-image" />
            </a>
            <a href="http://goldengateglb.edumummy.com/site/login">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/650011148945a1694503188.jpg" alt="brand-image" />
            </a>
            <a href="https://ruchitb.in/">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/650010dfce0561694503135.jpeg" alt="brand-image" />
            </a>
            <a href="https://lassiehomedecor.com/">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/650010bb58f531694503099.png" alt="brand-image" />
            </a>
            <a href="https://mycem.edu.in/">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/650010919daba1694503057.png" alt="brand-image" />
            </a>
            <a href="https://siddharthdegreecollege.in/">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/6500106538ec61694503013.png" alt="brand-image" />
            </a>
            <a href="https://sbpatildentalcollege.in/">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/65001040dd4201694502976.png" alt="brand-image" />
            </a>
            <a href="https://rehnumafoundation.org/">
            <img src="https://digitalindiahelpline.com/assets/images/frontend/brand/65000fd0b511c1694502864.png" alt="brand-image" />
            </a>
         </div>
      </div>
   </div>
   {/* <footer className="footer-area section-bg-light bg-img" style="background-image: url(https://digitalindiahelpline.com/assets/presets/themesThree/images/footer-bg.jpg)">
      <div className="pb-60 pt-80">
         <div className="container">
            <div className="row justify-content-center gy-5">
               <div className="col-xl-3 col-sm-6">
                  <div className="footer-item">
                     <div className="footer-item__logo">
                        <a href="https://digitalindiahelpline.com" className="footer-logo-normal"> <img src="https://digitalindiahelpline.com/assets/images/general/logo_white.png" alt="Laravel"/></a>
                        <a href="https://digitalindiahelpline.com" className="footer-logo-dark hidden"> <img src="https://digitalindiahelpline.com/assets/images/general/logo_white.png" alt="Laravel"/></a>
                        // 
                     </div>
                     <p className="footer-item__desc mb-3">From concept to deployment, we deliver custom Website Development solutions that meet your unique business needs</p>
                     <form action="https://digitalindiahelpline.com/subscribe" method="POST">
                        <input type="hidden" name="_token" value="YJTvOnA4BeL5WHNP4QCNpewRwQrTU2h3c13ttoLN"/>                            
                        <div className="search-box footer w-100">
                           <input type="text" name="email" className="form--control" placeholder="Email"/>
                           <button type="submit" className="btn btn--base btn--sm">Subscribe</button>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="col-xl-2 col-sm-6">
                  <div className="footer-item">
                     <h5 className="footer-item__title">Userful Link</h5>
                     <ul className="footer-menu">
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/" className="footer-menu__link">Home</a></li>
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/about" className="footer-menu__link">About</a></li>
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/cookie-policy" className="footer-menu__link">Cookie Policy</a></li>
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/policy/privacy-policy/42" className="footer-menu__link">Privacy Policy</a></li>
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/policy/terms-of-service/43" className="footer-menu__link">Terms of Service</a></li>
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/policy/terms-and-conditions/162" className="footer-menu__link">Terms and Conditions</a></li>
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/policy/refund-policy/163" className="footer-menu__link">Refund Policy</a></li>
                        <li className="footer-menu__item"><a href="https://digitalindiahelpline.com/policy/shipping-and-delivery/165" className="footer-menu__link">Shipping and Delivery</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xl-4 col-sm-6">
                  <div className="footer-item">
                     <h5 className="footer-item__title">Latest Feed</h5>
                     <div className="blog-sidebar">
                        <div className="latest-blog">
                           <div className="latest-blog__thumb">
                              <a href="https://digitalindiahelpline.com/blog/the-proven-method-for-choosing-the-best-brand-name-watch-and-succeed/180"> <img src="https://digitalindiahelpline.com/assets/images/frontend/blog/thumb_657951c11e64a1702449601.jpg" alt="blog-img"/></a>
                           </div>
                           <div className="latest-blog__content">
                              <h6 className="latest-blog__title"><a href="https://digitalindiahelpline.com/blog/the-proven-method-for-choosing-the-best-brand-name-watch-and-succeed/180">
                                 The Proven Method for Choosing the Best Brand Name...
                                 </a>
                              </h6>
                              <span className="latest-blog__date">Dec 2023, 12:10 PM</span>
                           </div>
                        </div>
                        <div className="latest-blog">
                           <div className="latest-blog__thumb">
                              <a href="https://digitalindiahelpline.com/blog/top-10-social-media-websites/179"> <img src="https://digitalindiahelpline.com/assets/images/frontend/blog/thumb_6567135d61dc21701253981.jpg" alt="blog-img"/></a>
                           </div>
                           <div className="latest-blog__content">
                              <h6 className="latest-blog__title"><a href="https://digitalindiahelpline.com/blog/top-10-social-media-websites/179">
                                 Top 10 social media websites
                                 </a>
                              </h6>
                              <span className="latest-blog__date">Nov 2023, 04:03 PM</span>
                           </div>
                        </div>
                        <div className="latest-blog">
                           <div className="latest-blog__thumb">
                              <a href="https://digitalindiahelpline.com/blog/top-10-part-time-jobs/178"> <img src="https://digitalindiahelpline.com/assets/images/frontend/blog/thumb_65670a1095f051701251600.jpg" alt="blog-img"/></a>
                           </div>
                           <div className="latest-blog__content">
                              <h6 className="latest-blog__title"><a href="https://digitalindiahelpline.com/blog/top-10-part-time-jobs/178">
                                 Top 10 Part Time Jobs
                                 </a>
                              </h6>
                              <span className="latest-blog__date">Nov 2023, 03:23 PM</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-sm-6">
                  <div className="footer-item">
                     <h5 className="footer-item__title">Address</h5>
                     <ul className="footer-contact-menu">
                        <li className="footer-contact-menu__item">
                           <div className="footer-contact-menu__item-icon">
                              <i className="fas fa-map-marker-alt"></i>
                           </div>
                           <div className="footer-contact-menu__item-content">
                              <p>2nd Floor Maruti Compounder Hospital Gurunagar Bidar 585402</p>
                           </div>
                        </li>
                        <li className="footer-contact-menu__item">
                           <div className="footer-contact-menu__item-icon">
                              <i className="fas fa-envelope"></i>
                           </div>
                           <div className="footer-contact-menu__item-content">
                              <p>support@digitalindiahelpline.com</p>
                           </div>
                        </li>
                        <li className="footer-contact-menu__item">
                           <div className="footer-contact-menu__item-icon">
                              <i className="fas fa-phone"></i>
                           </div>
                           <div className="footer-contact-menu__item-content">
                              <p>+91 80500 61666</p>
                           </div>
                        </li>
                     </ul>
                     <ul className="social-list">
                        <li className="social-list__item"><a href="https://www.youtube.com/channel/UCLcgMzz8BL2mTSLPauZuJzQ" className="social-list__link" target="_blank"><i className="fab fa-youtube"></i></a> </li>
                        <li className="social-list__item"><a href="https://www.linkedin.com/" className="social-list__link" target="_blank"><i className="fab fa-linkedin"></i></a> </li>
                        <li className="social-list__item"><a href="https://www.instagram.com/" className="social-list__link" target="_blank"><i className="fab fa-instagram"></i></a> </li>
                        <li className="social-list__item"><a href="https://twitter.com/i/flow/login" className="social-list__link" target="_blank"><i className="fab fa-twitter"></i></a> </li>
                        <li className="social-list__item"><a href="https://www.facebook.com/" className="social-list__link" target="_blank"><i className="fab fa-facebook-f"></i></a> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="bottom-footer section-bg py-3">
         <div className="container">
            <div className="row gy-2">
               <div className="col-lg-6 col-md-12">
                  <div className="bottom-footer-text">
                     <p>Copyright 2023. All rights reserved. A Unit of JANANI CONSULTANCY SERVICES </p>
                  </div>
               </div>
               <div className="col-lg-6 col-md-12">
                  <div className="bottom-footer-menu">
                     <ul>
                        <li><a href="https://digitalindiahelpline.com/policy/shipping-and-delivery/165" target="_blank">Shipping and Delivery</a></li>
                        <li><a href="https://digitalindiahelpline.com/policy/refund-policy/163" target="_blank">Refund Policy</a></li>
                        <li><a href="https://digitalindiahelpline.com/policy/terms-and-conditions/162" target="_blank">Terms and Conditions</a></li>
                        <li><a href="https://digitalindiahelpline.com/policy/terms-of-service/43" target="_blank">Terms of Service</a></li>
                        <li><a href="https://digitalindiahelpline.com/policy/privacy-policy/42" target="_blank">Privacy Policy</a></li>
                        <li><a href="https://digitalindiahelpline.com/cookie-policy" target="_blank">Cookie Policy</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer> */}
</div>
   </>
  );
}