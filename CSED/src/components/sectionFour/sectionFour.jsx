import React, { useEffect } from "react";
import "./blogs.css"; // Assuming style.css is in the same directory

// Import Images
import blogimg1 from "../../assets/sectionFour/blogimg1.webp";
import blogimg2 from "../../assets/sectionFour/blogimg2.webp";
import blogimg3 from "../../assets/sectionFour/blogimg3.webp";
import blogimg4 from "../../assets/sectionFour/blogimg4.webp";
import blogimg5 from "../../assets/sectionFour/blogimg5.webp";
import blogimg6 from "../../assets/sectionFour/blogimg6.webp";
import Boards from "./boards/Boards";

const SectionFour = () => {
  useEffect(() => {
    // Logic from script.js

    // Swiper Script Loader
    const loadSwiper = () => {
      if (typeof Swiper !== "undefined") {
        initScripts();
        return;
      }

      let script = document.querySelector(
        'script[src*="swiper-bundle.min.js"]'
      );
      if (!script) {
        script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js";
        document.body.appendChild(script);
      }

      // Check if CSS is present
      if (!document.querySelector('link[href*="swiper-bundle.min.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css";
        document.head.appendChild(link);
      }

      script.addEventListener("load", initScripts);
    };

    const initScripts = () => {
      // Arrow Rotation Logic
      const bloggggarrow = document.querySelector(
        ".blogspage .headerblogs .headerblogsmailsection i"
      );
      const blogggmediumdiv = document.querySelector(
        ".blogspage .headerblogs .headerblogsmailsection .headerblogsmail"
      );

      if (blogggmediumdiv && bloggggarrow) {
        const handleMouseEnter = () => {
          bloggggarrow.style.transform = "rotate(45deg)";
          bloggggarrow.style.color = "red";
        };
        const handleMouseLeave = () => {
          bloggggarrow.style.transform = "rotate(0deg)";
          bloggggarrow.style.color = "black";
        };

        blogggmediumdiv.removeEventListener("mouseenter", handleMouseEnter); // Cleanup prevents duplicates
        blogggmediumdiv.removeEventListener("mouseleave", handleMouseLeave);
        blogggmediumdiv.addEventListener("mouseenter", handleMouseEnter);
        blogggmediumdiv.addEventListener("mouseleave", handleMouseLeave);
      }

      // Swiper Init
      if (typeof Swiper !== "undefined") {
        // Destroy existing instance if possible to prevent duplicates
        const swiperContainer = document.querySelector(".slide-content");
        if (swiperContainer && swiperContainer.swiper) {
          swiperContainer.swiper.destroy(true, true);
        }

        const swiperInstance = new Swiper(".slide-content", {
          effect: "coverflow",
          spaceBetween: 20,
          autoHeight: true,
          loop: true,
          loopedSlides: 6,
          slideToClickedSlide: true, // Allow side slides to move to center on click
          observer: true,
          observeParents: true,
          preventClicks: false,
          preventClicksPropagation: false,
          centeredSlides: true,
          fade: true,
          grabCursor: true,
          pagination: {
            el: ".swiper-pagination.blog-page",
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: ".swiper-button-next.custom-next-arrow",
            prevEl: ".swiper-button-prev.custom-prev-arrow",
          },
          coverflowEffect: {
            spaceBetween: 20,
            rotate: 0,
            stretch: -18,
            depth: 35,
            slidesPerView: 3,
            modifier: 3,
            slideShadows: false,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          },
          on: {
            init: function() {
              // Force update active classes on initialization
              this.update();
            }
          }
        });
      }
    };

    loadSwiper();

    // Add click handler for all blog card links
    const handleCardClick = (e) => {
      const link = e.target.closest(".linktomediaum");
      if (!link) return;

      const clickedSlide = link.closest(".swiper-slide");
      if (!clickedSlide) return;

      // Only allow navigation if the slide is the ACTIVE (centered) one
      if (!clickedSlide.classList.contains("swiper-slide-active")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Attach event listener to all links with a slight delay to ensure Swiper is fully initialized
    setTimeout(() => {
      document.addEventListener("click", handleCardClick, true);
    }, 100);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleCardClick, true);
    };
  }, []);

  return (
    <>
      <div className="blogspage" id="blogs">
        <style>{`
          body {
            background-color: #181818;
          }
          /* Disable pointer events on non-active slides */
          .swiper-slide:not(.swiper-slide-active) .linktomediaum {
            pointer-events: none;
            cursor: default;
          }
          .swiper-slide.swiper-slide-active .linktomediaum {
            pointer-events: auto;
            cursor: pointer;
          }
        `}</style>
        {/* External Links that were in head - including here to ensure styles apply */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&family=Manrope:wght@200..800&family=Mukta:wght@200;300;400;500;600;700;800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div className="headerblogs">
          <div className="iconblogsdiv">
            <div className="iconblogsour">Our</div>
            <div className="iconblogsblogs">Blogs</div>
          </div>
          <div className="headerblogsmailsection">
            <div className="headerblogsmailicon">
              <a
                href="https://csedvit.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="48"
                  height="40"
                  viewBox="0 0 60 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  loading="lazy"
                >
                  <path
                    d="M33.8438 17C33.8438 26.3188 26.2688 33.875 16.92 33.875C14.701 33.878 12.5031 33.4438 10.4519 32.5974C8.40066 31.7509 6.53624 30.5088 4.96507 28.9418C3.3939 27.3748 2.14676 25.5137 1.29485 23.4647C0.442944 21.4157 0.00295278 19.219 0 17C0 7.67752 7.575 0.12502 16.92 0.12502C19.1393 0.121571 21.3376 0.555346 23.3893 1.40157C25.4409 2.2478 27.3058 3.4899 28.8774 5.05694C30.4489 6.62398 31.6964 8.48526 32.5485 10.5345C33.4007 12.5837 33.8408 14.7807 33.8438 17ZM52.4062 17C52.4062 25.775 48.6188 32.885 43.9463 32.885C39.2738 32.885 35.4863 25.7713 35.4863 17C35.4863 8.22502 39.2738 1.11502 43.9463 1.11502C48.6188 1.11502 52.4062 8.22877 52.4062 17ZM60 17C60 24.86 58.6688 31.2313 57.0225 31.2313C55.38 31.2313 54.0488 24.8563 54.0488 17C54.0488 9.14002 55.38 2.76877 57.0262 2.76877C58.6688 2.76877 60 9.14002 60 17Z"
                    fill="black"
                    loading="lazy"
                  />
                </svg>
              </a>
            </div>
            <div className="headerblogsmail">
              <a
                href="https://csedvit.medium.com/"
                className="headerblogmaillinktag"
                target="_blank"
                rel="noreferrer"
              >
                csedvit.medium.com
              </a>
            </div>
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>
        <div className="seclineblogspag">
          <div className="blogpageelement"></div>
          <div className="linesecondblogs">
            Insights into Social Entrepreneurship
          </div>
        </div>
        <div className="blogsconatinerswiper">
          <div className="slide-container swiper">
            <div className="slide-content">
              <div className="card-wrapper swiper-wrapper">
                <div className="card swiper-slide">
                  <a
                    href="https://csedvit.medium.com/lighting-up-lives-selco-india-410ee7fe3439"
                    className="linktomediaum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-content">
                      <div className="headerofcardview">
                        <div>
                          <svg
                            width="38"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            loading="lazy"
                          >
                            <path
                              d="M29.4972 9.602L33.5606 5.53484L36.2746 8.245L32.2093 12.3122L29.4972 9.602ZM0.833496 27.4998H39.1668V31.3332H0.833496V27.4998ZM18.0835 0.666504H21.9168V6.4165H18.0835V0.666504ZM3.79091 8.18942L6.50108 5.47734L10.5663 9.54067L7.85616 12.2528L3.79091 8.18942ZM6.5835 23.6665H33.4168C33.4168 16.249 27.4177 10.2498 20.0002 10.2498C12.5827 10.2498 6.5835 16.249 6.5835 23.6665Z"
                              fill="#FF2A2A"
                              loading="lazy"
                            />
                          </svg>
                        </div>
                        <div className="headerofcardviewline">3 min read</div>
                      </div>
                      <h2 className="name">
                        Lightings Up Lives in India : SELCO INDIA PVT.
                      </h2>
                      <p className="description">
                        Pioneering Center for social enterprise SELCO INDIA
                        which lies in the heart of India's energy landscape has
                        been on a mission over the years......
                      </p>
                    </div>
                    <div className="image-content">
                      <img src={blogimg1} alt="error" loading="lazy" />
                    </div>
                  </a>
                </div>
                <div className="card swiper-slide">
                  <a
                    href="https://csedvit.medium.com/fabindia-pioneering-social-entrepreneurship-in-the-modern-marketplace-099ab1df35d2"
                    className="linktomediaum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className="card-content"
                      style={{ backgroundColor: "#1B1818" }}
                    >
                      <div className="headerofcardview">
                        <div>
                          <svg
                            width="38"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            loading="lazy"
                          >
                            <path
                              d="M29.4972 9.602L33.5606 5.53484L36.2746 8.245L32.2093 12.3122L29.4972 9.602ZM0.833496 27.4998H39.1668V31.3332H0.833496V27.4998ZM18.0835 0.666504H21.9168V6.4165H18.0835V0.666504ZM3.79091 8.18942L6.50108 5.47734L10.5663 9.54067L7.85616 12.2528L3.79091 8.18942ZM6.5835 23.6665H33.4168C33.4168 16.249 27.4177 10.2498 20.0002 10.2498C12.5827 10.2498 6.5835 16.249 6.5835 23.6665Z"
                              fill="#FF2A2A"
                              loading="lazy"
                            />
                          </svg>
                        </div>
                        <div className="headerofcardviewline">3 min read</div>
                      </div>
                      <h2 className="name" style={{ color: "white" }}>
                        Fabindia: Pioneering Social Entrepreneurship in the
                        Modern Marketplace
                      </h2>
                      <p className="description" style={{ color: "white" }}>
                        Have you ever heard about Fabindia? Of course, you
                        have.It is one of the most renowned names.
                      </p>
                    </div>
                    <div
                      className="image-content"
                      style={{ backgroundColor: "#1B1818" }}
                    >
                      <img src={blogimg2} alt="error" loading="lazy" />
                    </div>
                  </a>
                </div>

                <div className="card swiper-slide">
                  <a
                    href="https://csedvit.medium.com/indiass-true-threads-rangsutra-s-ethical-elegance-crafting-changes-25d4e8735c05"
                    className="linktomediaum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-content">
                      <div className="headerofcardview">
                        <div>
                          <svg
                            width="38"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            loading="lazy"
                          >
                            <path
                              d="M29.4972 9.602L33.5606 5.53484L36.2746 8.245L32.2093 12.3122L29.4972 9.602ZM0.833496 27.4998H39.1668V31.3332H0.833496V27.4998ZM18.0835 0.666504H21.9168V6.4165H18.0835V0.666504ZM3.79091 8.18942L6.50108 5.47734L10.5663 9.54067L7.85616 12.2528L3.79091 8.18942ZM6.5835 23.6665H33.4168C33.4168 16.249 27.4177 10.2498 20.0002 10.2498C12.5827 10.2498 6.5835 16.249 6.5835 23.6665Z"
                              fill="#FF2A2A"
                              loading="lazy"
                            />
                          </svg>
                        </div>
                        <div className="headerofcardviewline">3 min read</div>
                      </div>
                      <h2 className="name">
                        Indias's True Threads: Rangsutra's Ethical Elegance
                        Crafting Changes
                      </h2>
                      <p className="description">
                        Have you ever considered the profound impact a piece of
                        fabric can have on preserving the soul of a nation?
                        Many...
                      </p>
                    </div>
                    <div className="image-content">
                      <img src={blogimg3} alt="error" loading="lazy" />
                    </div>
                  </a>
                </div>

                <div
                  className="card swiper-slide"
                  style={{ backgroundColor: "#1B1818" }}
                >
                  <a
                    href="https://csedvit.medium.com/social-entrepreneurs-and-traditional-entrepreneurs-a-comparative-analysis-354ce19242ea"
                    className="linktomediaum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-content">
                      <div className="headerofcardview">
                        <div>
                          <svg
                            width="38"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            loading="lazy"
                          >
                            <path
                              d="M29.4972 9.602L33.5606 5.53484L36.2746 8.245L32.2093 12.3122L29.4972 9.602ZM0.833496 27.4998H39.1668V31.3332H0.833496V27.4998ZM18.0835 0.666504H21.9168V6.4165H18.0835V0.666504ZM3.79091 8.18942L6.50108 5.47734L10.5663 9.54067L7.85616 12.2528L3.79091 8.18942ZM6.5835 23.6665H33.4168C33.4168 16.249 27.4177 10.2498 20.0002 10.2498C12.5827 10.2498 6.5835 16.249 6.5835 23.6665Z"
                              fill="#FF2A2A"
                              loading="lazy"
                            />
                          </svg>
                        </div>
                        <div className="headerofcardviewline">5 min read</div>
                      </div>
                      <h2 className="name" style={{ color: "white" }}>
                        Social Entrepreneurs and Traditional Entrepreneurs A
                        Comparative
                      </h2>
                      <p className="description" style={{ color: "white" }}>
                        An entrepreneur is an individual who creates a new
                        business and bears its risks whilst reaping its
                        benefits...
                      </p>
                    </div>

                    <div
                      className="image-content"
                      style={{ backgroundColor: "#1B1818" }}
                    >
                      <img src={blogimg4} alt="error" loading="lazy" />
                    </div>
                  </a>
                </div>

                <div className="card swiper-slide">
                  <a
                    href="https://csedvit.medium.com/amul-biggest-social-enterprise-of-india-6b40d5694f7a"
                    className="linktomediaum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-content">
                      <div className="headerofcardview">
                        <div>
                          <svg
                            width="38"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            loading="lazy"
                          >
                            <path
                              d="M29.4972 9.602L33.5606 5.53484L36.2746 8.245L32.2093 12.3122L29.4972 9.602ZM0.833496 27.4998H39.1668V31.3332H0.833496V27.4998ZM18.0835 0.666504H21.9168V6.4165H18.0835V0.666504ZM3.79091 8.18942L6.50108 5.47734L10.5663 9.54067L7.85616 12.2528L3.79091 8.18942ZM6.5835 23.6665H33.4168C33.4168 16.249 27.4177 10.2498 20.0002 10.2498C12.5827 10.2498 6.5835 16.249 6.5835 23.6665Z"
                              fill="#FF2A2A"
                              loading="lazy"
                            />
                          </svg>
                        </div>
                        <div className="headerofcardviewline">3 min read</div>
                      </div>
                      <h2 className="name">
                        AMUL: BIGGEST SOCIAL ENTERPRISE OF INDIA
                      </h2>
                      <p className="description">
                        A Heritage in Every Home Milk is synonymous with "AMUL"
                        in India. Peep into the Indian household pantry....
                      </p>
                    </div>

                    <div className="image-content">
                      <img src={blogimg5} alt="error" loading="lazy" />
                    </div>
                  </a>
                </div>

                <div className="card swiper-slide">
                  <a
                    href="https://csedvit.medium.com/the-rise-of-social-enterprise-business-models-why-purpose-driven-companies-are-the-future-47326f1c9e9f"
                    className="linktomediaum"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className="card-content "
                      style={{ backgroundColor: "#1B1818" }}
                    >
                      <div className="headerofcardview">
                        <div>
                          <svg
                            width="38"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            loading="lazy"
                          >
                            <path
                              d="M29.4972 9.602L33.5606 5.53484L36.2746 8.245L32.2093 12.3122L29.4972 9.602ZM0.833496 27.4998H39.1668V31.3332H0.833496V27.4998ZM18.0835 0.666504H21.9168V6.4165H18.0835V0.666504ZM3.79091 8.18942L6.50108 5.47734L10.5663 9.54067L7.85616 12.2528L3.79091 8.18942ZM6.5835 23.6665H33.4168C33.4168 16.249 27.4177 10.2498 20.0002 10.2498C12.5827 10.2498 6.5835 16.249 6.5835 23.6665Z"
                              fill="#FF2A2A"
                              loading="lazy"
                            />
                          </svg>
                        </div>
                        <div className="headerofcardviewline">3 min read</div>
                      </div>
                      <h2 className="name" style={{ color: "white" }}>
                        THE RISE OF SOCIAL ENTERPRISE BUSINESS MODELS
                      </h2>
                      <p className="description" style={{ color: "white" }}>
                        A social entrepreneur is someone who uses a for-profit
                        company model to address social or environmental
                        problems.
                      </p>
                    </div>

                    <div
                      className="image-content"
                      style={{ backgroundColor: "#1B1818" }}
                    >
                      <img src={blogimg6} alt="error" loading="lazy" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination blog-page"></div>
        <div className="swiper-button-next custom-next-arrow"></div>
        <div className="swiper-button-prev custom-prev-arrow"></div>
      </div>
      <Boards />
    </>
  );
};

export default SectionFour;