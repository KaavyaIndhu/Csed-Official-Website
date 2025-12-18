import React, { useState, useEffect, useRef } from "react";
import { Instagram, Linkedin, Mail, ArrowUp, Twitter, BookOpen, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import asterisk from "../../assets/sectionone/asterisk.webp";
import logo from "../../assets/essentials/logo.webp";
import "./FinalSection.css";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "How to join CSED at VIT?",
    answer: "You can join CSED by registering on VTOP during the club/chapter enrollment period, which usually happens at the beginning and end of each academic year."
  },
  {
    question: "What types of events and activities does CSED organize?",
    answer: "CSED organizes events to raise awareness on social entrepreneurship, provides insights into real-world problems and solutions, conducts outreach events, and hosts entrepreneur speaker sessions."
  },
  {
    question: "How can I participate in CSED events ?",
    answer: "You can participate in CSED events by registering on VTOP under the event registration section. Follow us on Instagram to stay updated on upcoming events."
  },
  {
    question: "What are the departments within CSED?",
    answer: "CSED has various departments, including R&D, Marketing, Tech & Design, Events, PR, HR, and Editorial. You can join any department and work to gain valuable skills and experience."
  },
  {
    question: "What kind of projects can I work on as a member of CSED?",
    answer: "As a CSED member, you can collaborate with like-minded individuals on projects aimed at solving real-world problems, gaining hands-on experience and making a positive impact."
  },
  {
    question: "How can I stay updated on CSED activities and events?",
    answer: "You can stay updated on CSED activities and events by following us on social media and joining our CSED channel on WhatsApp."
  }
];

const FinalSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const asteriskRef = useRef(null);
  const giantLettersRef = useRef([]);

  useEffect(() => {
    // 1. FAQ Asterisk Rotation Animation
    ScrollTrigger.create({
      trigger: ".faq-section",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(asteriskRef.current, {
          rotation: 360 * self.progress,
          ease: "linear",
          overwrite: "auto",
        });
      },
    });

    // 2. Giant Letters Entrance (Exact match to original p10 logic)
    giantLettersRef.current.forEach((letter, index) => {
      if (letter) {
        gsap.fromTo(letter, 
          { y: "100%", opacity: 0 }, 
          { 
            y: "0%", 
            opacity: 1, 
            delay: 0.1 * (index + 1), 
            duration: 1.4, 
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".giant-letters-container",
              start: "top 90%",
            }
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // SEO Structured Data Object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="final-section-wrapper">
      
      {/* JSON-LD for SEO (No external library needed) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* FAQ SECTION */}
      <section className="faq-section">
        
        {/* FAQ Container - full width with section padding only */}
        <div className="faq-container">
          
          <div className="faq-header">
            {/* First heading - left aligned */}
            <h4 className="faq-subtitle">
              Frequently Asked Questions about CSED
            </h4>
            
            {/* Asterisk and main heading container - left aligned */}
            <div className="faq-title-container">
              {/* Asterisk: visible on all screens */}
              <img 
                ref={asteriskRef} 
                src={asterisk} 
                className="faq-asterisk" 
                alt="*" 
              />
              {/* Main heading in red */}
              <h2 className="faq-title">
                Everything You Need To Know About CSED
              </h2>
            </div>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => {
              const isActive = openIndex === index;
              return (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question-btn"
                    onClick={() => setOpenIndex(isActive ? null : index)}
                  >
                    <h3 className={`faq-question ${isActive ? 'active' : ''}`}>
                      {item.question}
                    </h3>
                    {/* Chevron Arrow Icon */}
                    <svg 
                      className={`faq-chevron ${isActive ? 'active' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline 
                        points="6 9 12 15 18 9"
                        className={`faq-chevron-line ${isActive ? 'active' : ''}`}
                      />
                    </svg>
                  </button>

                  {/* .answer: with left-to-right slide animation */}
                  <div className={`faq-answer-wrapper ${isActive ? 'active' : ''}`}>
                    <p className="faq-answer">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          {/* Top Section with Logo, Follow Us, Menu, Contact */}
          <div className="footer-grid">
            {/* Logo Section - Takes 3 columns */}
            <div className="footer-logo-section">
              <img src={logo} alt="CSED" className="footer-logo" />
            </div>

            {/* Follow Us Section - Takes 3 columns */}
            <div className="footer-follow-section">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="footer-social-icons">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/csed.vit" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/csedvit/" },
                  { Icon: Twitter, href: "https://x.com/csed_twt" },
                  { Icon: BookOpen, href: "https://csedvit.medium.com/" },
                  { Icon: MessageCircle, href: "https://whatsapp.com/channel/0029VahiEl0B4hdb9MylqS3Q" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <social.Icon className="footer-social-icon" />
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Section - Takes 3 columns */}
            <div className="footer-menu-section">
              <h4 className="footer-heading">Menu</h4>
              <nav className="footer-nav">
                <a href="#about" className="footer-link">About Us</a>
                <a href="#events" className="footer-link">Events</a>
                <a href="/dev" className="footer-link">Dev Team</a>
                <a href="#blog" className="footer-link">Blog</a>
              </nav>
            </div>

            {/* Contact Section - Takes 3 columns */}
            <div className="footer-contact-section">
              <h4 className="footer-heading">Contact</h4>
              <a 
                href="mailto:csed@vit.ac.in" 
                className="footer-contact-link"
              >
                <Mail className="footer-contact-icon" />
                <span>csed@vit.ac.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="footer-divider"></div>

        {/* Giant Staggered Letters Container */}
        <div className="giant-letters-container">
          <div className="giant-letters-flex">
            {['C.', 'S.', 'E.', 'D'].map((l, i) => (
              <span 
                key={i} 
                ref={el => giantLettersRef.current[i] = el}
                className="giant-letter"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar - Copyright and Back to Top */}
        <div className="footer-bottom">
          <span className="footer-copyright">© 2025, CSED VIT. All Rights Reserved.</span>
          <button 
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
            className="footer-back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp className="footer-arrow-icon" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default FinalSection;