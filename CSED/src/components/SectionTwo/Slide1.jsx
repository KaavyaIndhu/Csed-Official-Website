import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "motion/react";

import "./Slide1.css";
import img1 from "../../assets/sectionthree/page3img1.webp";
import img2 from "../../assets/sectionthree/page3img2.webp";
import img3 from "../../assets/sectionthree/page3img3.webp";

const images = [img1, img2, img3];

const Slide1 = () => {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  /* image auto-change (UNCHANGED) */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  /* motion values */
  const rotateX = useSpring(0, { damping: 30, stiffness: 100, mass: 2 });
  const rotateY = useSpring(0, { damping: 30, stiffness: 100, mass: 2 });
  const scale = useSpring(1, { damping: 30, stiffness: 100, mass: 2 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotateAmplitude = 14;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
  }

  function handleMouseEnter() {
    scale.set(1.05);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section className="page3">
      {/* LEFT CONTENT — unchanged */}
      <div className="page3-left">
        <div className="page3-left-top">
          <h1>DISCOVER CSED</h1>
          <h3>
            CSED at VIT is a dynamic force in social entrepreneurship, dedicated
            to fostering innovation and community engagement. Our initiatives
            transcend traditional events, empowering students to tackle pressing
            societal challenges.
          </h3>
        </div>

        <div className="page3-left-bottom">
          <div className="page3-left-bottom-t">
            <div className="page3-left-bottom-t-1">
              <h3 className="counter">68+</h3>
              <h4>Events Organised</h4>
            </div>

            <div className="page3-left-bottom-t-2">
              <h3 className="counter">25+</h3>
              <h4>Inspiring Speaker</h4>
            </div>
          </div>

          <div className="page3-left-bottom-b">
            <div className="page3-left-bottom-b-1">
              <h3 className="counter">6500+</h3>
              <h4>Student Network</h4>
            </div>

            <div className="page3-left-bottom-b-2">
              <h3>Expanded</h3>
              <h4>
                to{" "}
                <a
                  href="https://www.instagram.com/csed.vitc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIT Chennai ↗
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE BOX — ONLY MOVEMENT CHANGED */}
      <motion.div
        ref={cardRef}
        className="page3-right"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="page3-right-top">
          <div className="img-slider">
            {images.map((img, index) => (
              <div
                key={index}
                className={`slider ${index === current ? "active" : ""}`}
              >
                <img src={img} alt="CSED event" />
              </div>
            ))}
          </div>
        </div>

        <div className="page3-right-bottom">
          <h3 className="h31">Empowering Changemakers</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Slide1;
