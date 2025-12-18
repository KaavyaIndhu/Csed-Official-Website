// For Welcome Screen and About Section

import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Style.css'
import asterisk from '../../assets/sectionone/asterisk.webp'
import image2 from '../../assets/sectionone/page2-right-img.webp'

gsap.registerPlugin(ScrollTrigger);

function SectionOne() {
  const page2Ref = useRef(null);

  useEffect(() => {
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
        start: "18% 50%",
        end: "90% 50%",
        scrub: 1,
      },
    });

    tl99.to("#page2-mobile-cont h1", {
      opacity: 1,
      duration: 1.5,
    });

    tl99.to("#page2-mobile-cont h2", {
      opacity: 1,
      duration: 1.8,
    });
    tl99.to("#page2-mobile-cont h3", {
      opacity: 1,
      duration: 2.1,
    });
    tl99.to("#page2-mobile-cont h4", {
      opacity: 1,
      duration: 2.4,
    });
    tl99.to("#page2-mobile-cont h5", {
      opacity: 1,
      duration: 2.7,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>

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
            <div className="page2-cont" id="page2-mobile-cont">
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
            <div className="page2-cont-fill" id="page2-mobile-cont-fill">
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
