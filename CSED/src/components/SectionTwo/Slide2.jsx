import { useState } from "react";
import "./page4.css";

import img1 from "../../assets/sectionthree/p4-img1.webp";
import img2 from "../../assets/sectionthree/p4-img2.webp";
import img3 from "../../assets/sectionthree/p4-img3.webp";
import img4 from "../../assets/sectionthree/p4-img4.webp";
import img5 from "../../assets/sectionthree/p4-img5.webp";

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
        style={{ backgroundImage: `url(${items[activeIndex ?? 0].img})` }}
      >
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
                  <span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span>
                  <span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span>
                </div>
                <div className="ticker-track">
                  <span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span>
                  <span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span><span>CSED</span>
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
