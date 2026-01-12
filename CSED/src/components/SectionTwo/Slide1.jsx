import { useEffect, useState } from "react";
import "./Slide1.css";

import CountUp from "../common/CountUp"; // <-- adjust path if needed

import img1 from "../../assets/sectionTwo/page3img1.webp";
import img2 from "../../assets/sectionTwo/page3img2.webp";
import img3 from "../../assets/sectionTwo/page3img3.webp";

const images = [img1, img2, img3];

const Slide1 = () => {
  const [current, setCurrent] = useState(0);

  /* auto image change */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="page3">
      {/* LEFT CONTENT */}
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
            <div>
              <h3>
                <CountUp to={68} duration={2.5} />+
              </h3>
              <h4>Events Organised</h4>
            </div>

            <div>
              <h3>
                <CountUp to={25} duration={2.5} />+
              </h3>
              <h4>Inspiring Speakers</h4>
            </div>
          </div>

          <div className="page3-left-bottom-b">
            <div>
              <h3>
                <CountUp to={6500} duration={2.5} />+
              </h3>
              <h4>Student Network</h4>
            </div>

            <div>
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

      {/* RIGHT GLOBE */}
      <div className="page3-right">
        <div className="globe-wrapper">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="CSED Event"
              className={`globe-img ${index === current ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="page3-right-bottom">
          <h3>Empowering Changemakers</h3>
        </div>
      </div>
    </section>
  );
};

export default Slide1;
