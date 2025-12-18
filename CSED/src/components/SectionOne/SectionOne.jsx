// For Welcome Screen and About Section

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

import './SectionOne.css'
import { asterisk, image2, logo, vitlogo, backgrounddrop, merch } from '../essentials/Imgaepaths';

//Icons
import { HiMenuAlt1 } from "react-icons/hi";
import { RiMegaphoneFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";


gsap.registerPlugin(ScrollTrigger);

function SectionOne() {
  const page2Ref = useRef(null);
  const page1Ref = useRef(null);
  const vantaRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = useCallback(() => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setMenuOpen(true);
    }
  }, [menuOpen]);

  const scrollToSection = useCallback((sectionId) => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
      document.querySelector(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  }, []);

  useEffect(() => {
    // Initialize VANTA Globe background - delay to ensure DOM is ready
    const initVanta = () => {
      if (page1Ref.current && !vantaRef.current) {
        try {
          // Destroy any existing instance first
          if (vantaRef.current) {
            vantaRef.current.destroy();
          }

          vantaRef.current = GLOBE({
            el: page1Ref.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 0.9,
            scaleMobile: 0,
            color: 0xff2a2a,
            backgroundColor: 0x181818,
          });

          console.log("VANTA Globe initialized with config:", vantaRef.current);
        } catch (error) {
          console.error("VANTA initialization error:", error);
        }
      }
    };

    // Delay VANTA initialization to ensure DOM is ready
    const vantaTimer = setTimeout(initVanta, 100);

    // Cursor tracking
    const handleMouseMove = (e) => {
      const cur = document.querySelector("[data-cursor]");
      if (cur) {
        cur.style.left = `${e.clientX}px`;
        cur.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Loading animation
    const laptopLoader = document.querySelector(".laptoploader");
    const mobileLoader = document.querySelector(".mobileloader");

    if (laptopLoader && mobileLoader) {
      const laptopPromise = new Promise((resolve) => {
        laptopLoader.onloadeddata = () => resolve();
      });

      const mobilePromise = new Promise((resolve) => {
        mobileLoader.onloadeddata = () => resolve();
      });

      Promise.all([laptopPromise, mobilePromise]).then(() => {
        const tl = gsap.timeline();

        tl.to("#yellow", {
          top: "-125%",
          delay: 0.2,
          duration: 0.7,
          ease: "expo-out",
        });

        tl.to(".loader", {
          top: "-125%",
          delay: 1,
          duration: 2,
          ease: "expo-out",
        });
      });
    }

    if (!page2Ref.current) return;

    // Rounded div animation
    const wat = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "20% 70%",
        end: "50% 50%",
        markers: false,
        scrub: true,
      },
    });

    wat.to(".page2 .rounded-div-wrapper", {
      height: 0,
      marginTop: 0,
    });

    // Text fill animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top 50%",
        end: "bottom 20%",
        scrub: 3,
      },
    });

    tl.to(".page2-cont-fill h1", {
      width: "100%",
      duration: 4,
    });

    tl.to(".page2-cont-fill h2", {
      width: "100%",
      duration: 4.5,
    });
    tl.to(".page2-cont-fill h3", {
      width: "100%",
      duration: 5,
    });
    tl.to(".page2-cont-fill h4", {
      width: "100%",
      duration: 5.5,
    });
    tl.to(".page2-cont-fill h5", {
      width: "100%",
      duration: 6,
    });

    // Image rotation animation
    ScrollTrigger.create({
      trigger: ".page2",
      start: "18% 50%",
      end: "90% 50%",
      scrub: 1,
      onUpdate: (self) => {
        let rotation = 360 * self.progress;
        gsap.to(".page2-head .page2-head1 img", {
          rotation: rotation,
          ease: "linear",
          overwrite: "auto",
        });
      },
    });

    // Mobile content opacity animations
    const tl99 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        start: "top 50%",
        end: "bottom 20%",
        scrub: 3,
      },
    });

    tl99.to("#page2-mobile-cont h1", {
      opacity: 1,
      duration: 4,
    });

    tl99.to("#page2-mobile-cont h2", {
      opacity: 1,
      duration: 4.5,
    });
    tl99.to("#page2-mobile-cont h3", {
      opacity: 1,
      duration: 5,
    });
    tl99.to("#page2-mobile-cont h4", {
      opacity: 1,
      duration: 5.5,
    });
    tl99.to("#page2-mobile-cont h5", {
      opacity: 1,
      duration: 6,
    });

    // Cleanup function
    return () => {
      clearTimeout(vantaTimer);
      if (vantaRef.current) vantaRef.current.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Control body overflow based on menu state
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    // Close menu on Escape key press
    const handleEscKey = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [menuOpen]);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && menuOpen) {
        // Check if click is not on the menu trigger
        if (!e.target.closest('.nav-right')) {
          setMenuOpen(false);
        }
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const [rotation, setRotation] = useState(0);
  let joincommunity = <FiArrowUpRight className='size-8 ml-2' style={{ transform: `rotate(${rotation}deg)`, transitionDuration: '0.5s' }} />;
  const handleMouseEnter = () => {
    setRotation(rotation + 45);
  };
  const handleMouseLeave = () => {
    setRotation(rotation - 45);
  };

  return (
    <>
      <div className="main">
        <div className="menu" id="rax" ref={menuRef} style={{ display: (menuOpen || isClosing) ? 'flex' : 'none', animation: (menuOpen && !isClosing) ? 'slideInFromTop 0.7s ease forwards' : 'slideOutToTop 0.5s ease forwards' }}>
          <div className="part1">
            <div className="menu-nav">
              <a href="./index.html"><img src={logo} loading="lazy" alt="image" /></a>
              <div className="menu-nav-right">
                <span onClick={toggleMenu}>Close</span><IoClose onClick={toggleMenu} className='size-10' />
              </div>
            </div>
            <div className="menu-content">
              <div className="left">
                <h2>Announcements <RiMegaphoneFill size={24} /></h2>
                <div className="tr">
                  <div className="blr">
                    <h3>Coming soon!</h3>
                  </div>
                  <img src={merch} alt="image" />
                </div>
                <div className="h4-menu">
                  <a href="#" target="_parent" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h4 style={{ margin: 0 }}> Coming Soon </h4><FiArrowUpRight className='size-10' />
                  </a>
                </div>
              </div>
              <div className="right">
                <ul className="bab">
                  <a href="#page2" onClick={(e) => { e.preventDefault(); scrollToSection("#page2"); }}>
                    <li className="about">About Us</li>
                  </a>
                  <a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection("#events"); }}>
                    <li className="events">Events</li>
                  </a>
                  <a href="#blogs" onClick={(e) => { e.preventDefault(); scrollToSection("#blogs"); }}>
                    <li className="blog">Blog</li>
                  </a>
                  <a href="#teams" onClick={(e) => { e.preventDefault(); scrollToSection("#teams"); }}>
                    <li className="board">Board</li>
                  </a>
                  <a href="#dev-team" onClick={(e) => { e.preventDefault(); scrollToSection("#dev-team"); }}>
                    <li>Dev Team</li>
                  </a>
                </ul>
              </div>

            </div>
          </div>
          <div className="part2">
            <div className="pt1">
              <hr />
            </div>
            <div className="pt2">
              <h3>Connect with us on our social media.</h3>
              <div className="social">
                <a href="" target="_blank"><FaInstagram /></a>
                <a href="" target="_blank"><FaLinkedin /></a>
                <a href="" target="_blank"><FaXTwitter /></a>
                <a href="" target="_blank"><FaMedium /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page1" ref={page1Ref}>
        <img className="gradd" src={backgrounddrop} alt="image" />
        <nav>
          <div className="nav-left">
            <a href="#"><img src={logo} loading="lazy" alt="image" /></a>
          </div>
          <div className="nav-right">
            <span onClick={toggleMenu}>Menu</span><HiMenuAlt1 onClick={toggleMenu} className='size-10' />
          </div>
        </nav>

        <div className="page1-cont">
          <div className="page1-cont-top">
            <h1 className='ml-20 text-[2.8vw] font-["Sora"] font-extrabold'>Building Bridges to a<br />Better World<br />Through
              <span> Social</span><br /><span>Entrepreneurship</span>
            </h1>
          </div>
          <div className="landing-footer">
            <div className="landing-footer-left">
              <h3>
                Center For Social <br />
                Entrepreneurship and Development.
              </h3>
              <h5>
                Social entrepreneurship is a dynamic field <br />
                that combines business principles with a commitment <br />
                to creating positive social change.
              </h5>
              <div className="btn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href=""><button>Join
                  Community</button></a>
                {joincommunity}
              </div>
            </div>
            <div className="landing-footer-right">
              <div className="landing-footer-right-cont !w-auto !h-auto">
                <img src={vitlogo} loading="lazy" alt="image" className="!w-40 !h-auto !scale-100 !m-0" />
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="page2" id="page2" ref={page2Ref}>

        <div className="rounded-div-wrapper">
          <div className="rounded-div"></div>
        </div>

        <div className="page2-head">
          <h1>about csed</h1>
          <div className="page2-head1">
            <h3>Our Social Entrepreneurship Journey</h3>
            <img src={asterisk} alt="image" loading="lazy" />
          </div>
        </div>
        <div className="page2-maincontent">
          <div className="page2-left">
            <div className="page2-cont font-bold" id="page2-mobile-cont">
              <h1>Welcome to CSED,VIT's pioneering social</h1>
              <br />
              <h2>entrepreneurship club. Since 2010, we've</h2>
              <br />
              <h3>hosted impactful events and a vibrant</h3>
              <br />
              <h4>community. Explore opportunities to innovate</h4>
              <br />
              <h5>and drive positive change with us!</h5>
            </div>
            <div className="page2-cont-fill font-bold" id="page2-mobile-cont-fill">
              <h1>Welcome to CSED,VIT's pioneering social</h1>
              <br />
              <h2>entrepreneurship club. Since 2010, we've</h2>
              <br />
              <h3>hosted impactful events and a vibrant</h3>
              <br />
              <h4>community. Explore opportunities to innovate</h4>
              <br />
              <h5>and drive positive change with us!</h5>
            </div>
          </div>
          <div className="page2-right">
            <img src={image2} alt="image" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne
