import { useState } from "react";
import "./page4.css";

import img1 from "../../assets/sectionTwo/p4-img1.webp";
import img2 from "../../assets/sectionTwo/p4-img2.webp";
import img3 from "../../assets/sectionTwo/p4-img3.webp";
import img4 from "../../assets/sectionTwo/p4-img4.webp";
import img5 from "../../assets/sectionTwo/p4-img5.webp";
import img6 from "../../assets/sectionTwo/page3img2.webp";
const items = [
  { title: "Impactful Events", img: img1 },
  { title: "Skill-Building Workshops", img: img2 },
  { title: "Outreach Events", img: img3 },
  { title: "Networking Opportunities", img: img4 },
  { title: "Entrepreneur Meetups", img: img5 },
];

const Slide2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="page4-wrapper">
      <div
        className="page4"
        style={{
          backgroundImage:
            activeIndex !== null ? `url(${items[activeIndex].img})` : "none",
        }}
      >
        {/* ✅ DEFAULT COLLAGE BACKGROUND */}
        {activeIndex === null && (
          <div className="page4-default-collage">
            {[img1, img2, img3, img4, img5,img6].map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>
        )}

        {/* DARK OVERLAY ONLY ON HOVER */}
        <div
          className="bg-opacity"
          style={{ display: activeIndex !== null ? "block" : "none" }}
        />

        {items.map((item, index) => (
          <div
            key={index}
            className="elem"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <h2>{item.title}</h2>

            <div className="highlight">
              <div className="ticker">
                <div className="ticker-track">
                  {Array(20)
                    .fill("CSED")
                    .map((t, i) => (
                      <span key={`a-${i}`}>{t}</span>
                    ))}
                </div>
                <div className="ticker-track">
                  {Array(20)
                    .fill("CSED")
                    .map((t, i) => (
                      <span key={`b-${i}`}>{t}</span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slide2;
