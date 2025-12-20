// SectionThree.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "remixicon/fonts/remixicon.css";
import "./SectionThree.css";

// Import images
import img01 from "../../assets/sectionThree/01.webp";
import img02 from "../../assets/sectionThree/02.webp";
import img03 from "../../assets/sectionThree/03.webp";
import ellipse50 from "../../assets/sectionThree/Ellipse 50.webp";
import empowerIdeas from "../../assets/sectionThree/Empower Ideas, Ignite Change.webp";
import empoweringFuture from "../../assets/sectionThree/Empowering Future Innovators.webp";
import group39 from "../../assets/sectionThree/Group 39.webp";
import group40 from "../../assets/sectionThree/Group 40.webp";
import group41 from "../../assets/sectionThree/Group 41.webp";
import whereIdeas from "../../assets/sectionThree/Where Ideas Meet Impact.webp";
import e1 from "../../assets/sectionThree/e1.webp";
import e2 from "../../assets/sectionThree/e2.webp";
import e3 from "../../assets/sectionThree/e3.webp";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        // --- Horizontal Scroll Animation ---
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray(".container section");

            if (sections.length > 0) {
                let scrollTween = gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => "+=3000",
                    },
                });

                sections.forEach((section) => {
                    let text = section.querySelectorAll(".anim");
                    if (text.length > 0) {
                        gsap.from(text, {
                            y: -130,
                            opacity: 0,
                            duration: 2,
                            ease: "elastic",
                            stagger: 0.1,
                            scrollTrigger: {
                                trigger: section,
                                containerAnimation: scrollTween,
                                start: "left center",
                            },
                        });
                    }
                });
            }
        }, wrapperRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="wrapper" id="events" ref={wrapperRef}>
            <div className="container">
                {/* SECTION 1 */}
                <section className="sec1">
                    <div className="sec1-nav">
                        <div className="sec1-nav-left">
                            <div className="im1">
                                <h1>EVENTS</h1>
                                <i className="ri-camera-2-fill"></i>
                            </div>
                            <div className="im2"></div>
                            <div className="im3"></div>
                        </div>
                        <div className="sec1-nav-right anim">
                            <div className="light"></div>
                            <div className="light1"></div>
                            <div className="light2"></div>
                            <div className="light3"></div>
                            <div className="light4"></div>
                            <img className="light-glow" src={ellipse50} alt="image" loading="lazy" />
                        </div>
                    </div>
                    <div className="sec1-cont">
                        <div className="sec1-cont-top">
                            <div className="sec1-cont-top-p1 anim">
                                <img className="front-1" src={img01} alt="image" loading="lazy" />
                            </div>
                            <div className="sec1-cont-top-p2 anim">
                                <img src={whereIdeas} alt="image" loading="lazy" />
                            </div>
                        </div>
                        <div className="sec1-cont-bot">
                            <div className="c1-back">
                                <div className="c1">
                                    <h1>CODE 4 CHANGE</h1>
                                    <div className="c1-bot">
                                        <img src={e1} alt="image" loading="lazy" />
                                        <div className="c1-bot-right">
                                            <img src={group39} alt="image" loading="lazy" />
                                            <h3>36 HRS<br />IDEATHON+<br />HEXATHON</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="c2">
                                <div className="c2-top">
                                    <div className="c2-top-first">
                                        <i className="ri-calendar-todo-fill"></i> <span>2024</span>
                                    </div>
                                    <div className="c2-top-second">
                                        <i className="ri-map-pin-fill"></i><span>ANNA AUDITORIUM</span>
                                    </div>
                                </div>
                                <div className="c2-bot">
                                    <i className="ri-arrow-right-s-line"></i>
                                    <p>
                                        A Transformative Three-day Event at Yantra, featuring
                                        ideathons, hackathons, and inspiring talks. Ignite
                                        creativity, collaborate, and pitch innovative solutions
                                        for a better tomorrow!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 */}
                <section className="sec2">
                    <div className="sec2-cont">
                        <div className="sec2-top">
                            <div className="sec2-top-left anim">
                                <img src={img02} alt="image" loading="lazy" />
                            </div>
                            <div className="sec2-top-right anim">
                                <img src={empowerIdeas} alt="image" loading="lazy" />
                            </div>
                        </div>
                        <div className="sec2-bot">
                            <div className="c3-back">
                                <div className="c3">
                                    <div className="c3-top">
                                        <div className="c3-top-left">
                                            <h3>BID <br />WITH <br />STRATEGY</h3>
                                            <img src={group40} alt="image" loading="lazy" />
                                        </div>
                                        <div className="c3-top-right">
                                            <img src={e2} alt="image" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="c3-bot">
                                        <h1>ACTION TO AUCTION</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="c4">
                                <div className="c4-top">
                                    <div className="c4-top-first">
                                        <i className="ri-calendar-todo-fill"></i><span>2024</span>
                                    </div>
                                    <div className="c4-top-second">
                                        <i className="ri-map-pin-fill"></i><span>MGR Block</span>
                                    </div>
                                </div>
                                <div className="c4-bot">
                                    <i className="ri-arrow-right-s-line"></i>
                                    <p>
                                        A thrilling blend of bidding, teamwork and creativity where participants competed for resources,
                                        joined forces to build a final product and showcased their ideas with confidence. A day filled with strategy, innovation and fun.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-footer anim">
                        <div className="l1"></div>
                        <div className="l2"></div>
                        <div className="l3"></div>
                        <div className="l4"></div>
                        <div className="l5"></div>
                        <img className="light-glow" src={ellipse50} alt="image" loading="lazy" />
                    </div>
                </section>

                {/* SECTION 3 */}
                <section className="sec3">
                    <div className="sec3-nav anim">
                        <div className="lig1"></div>
                        <div className="lig2"></div>
                        <div className="lig3"></div>
                        <div className="lig4"></div>
                        <div className="lig5"></div>
                        <img className="light-glow" src={ellipse50} alt="image" loading="lazy" />
                    </div>
                    <div className="sec3-cont">
                        <div className="sec3-cont-top">
                            <div className="sec3-cont-top-left anim">
                                <img src={img03} alt="image" loading="lazy" />
                            </div>
                            <div className="sec3-cont-top-right anim">
                                <img src={empoweringFuture} alt="image" loading="lazy" />
                            </div>
                        </div>
                        <div className="sec3-cont-bot">
                            <div className="c5-back">
                                <div className="c5">
                                    <div className="c5-left">
                                        <h1>STARTUP<br />STREET</h1>
                                    </div>
                                    <div className="c5-right">
                                        <div className="c5-right-top">
                                            <img src={e3} alt="image" loading="lazy" />
                                        </div>
                                        <div className="c5-right-bot">
                                            <img src={group41} alt="image" loading="lazy" />
                                            <h1>INNOVATE<br />PITCH<br />SUCCEED</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="c6">
                                <div className="c6-top">
                                    <div className="c6-top-first">
                                        <i className="ri-calendar-todo-fill"></i> <span>2024</span>
                                    </div>
                                    <div className="c6-top-second">
                                        <i className="ri-map-pin-fill"></i><span>TT gallery II</span>
                                    </div>
                                </div>
                                <div className="c6-bot">
                                    <i className="ri-arrow-right-s-line"></i>
                                    <p>
                                        Startup Street 9.0 was electrifying! Teams pitched big
                                        ideas to top investors, collaborated on UN SDGs, and heard
                                        inspiring talks from leading social entrepreneurs.
                                        Innovation and excitement filled the air!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SectionThree;
