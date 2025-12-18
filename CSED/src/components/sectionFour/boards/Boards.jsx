import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './boards.css';

// Import Common Assets
import bgRed from '../../../assets/sectionFour/boards/bgred.webp';

// Import 2024 Assets
import group2024 from '../../../assets/sectionFour/boards/2024/Board2024GroupImage.webp';
import yashImg from '../../../assets/sectionFour/boards/2024/yash.new.webp';
import adhidevImg from '../../../assets/sectionFour/boards/2024/adhidev.webp';
import aakashImg from '../../../assets/sectionFour/boards/2024/aakash.webp';
import vibhuImg from '../../../assets/sectionFour/boards/2024/vibhu.webp';
import anuragImg from '../../../assets/sectionFour/boards/2024/anurag.webp';
import ayushiImg from '../../../assets/sectionFour/boards/2024/ayushi.webp';
import krishnaImg from '../../../assets/sectionFour/boards/2024/krishna.webp';
import suhaniImg from '../../../assets/sectionFour/boards/2024/suhani.webp';
import satvikImg from '../../../assets/sectionFour/boards/2024/satvik.webp';
import vedantImg from '../../../assets/sectionFour/boards/2024/vedant.webp';

// Import 2023 Assets
import group2023 from '../../../assets/sectionFour/boards/2023/Board2023GroupImage.webp';
import kanishkaImg from '../../../assets/sectionFour/boards/2023/kanishka.webp';
import ikshitImg from '../../../assets/sectionFour/boards/2023/ikshit.webp';
import urvaImg from '../../../assets/sectionFour/boards/2023/urva.webp';
import shailjaImg from '../../../assets/sectionFour/boards/2023/shailja.webp';
import ruchitaImg from '../../../assets/sectionFour/boards/2023/ruchita.webp';
import supritImg from '../../../assets/sectionFour/boards/2023/suprit.webp';
import ananyaImg from '../../../assets/sectionFour/boards/2023/ananya.webp';
import preethiImg from '../../../assets/sectionFour/boards/2023/preethi.webp';
import ramImg from '../../../assets/sectionFour/boards/2023/ram.webp';
import rajeshwariImg from '../../../assets/sectionFour/boards/2023/Rajeshwari.webp';

const boardsData = {
    '2025': [], // Empty means "Coming Soon"
    '2024': [
        {
            name: "Yash Sharma",
            role: "Chairperson CSED",
            desc: "Spotlight on our dynamic Chairperson YASH! Get ready for a tenure of innovation and leadership. Watch as we roll out the red carpet for a season of exceptional success!",
            img: yashImg,
            class: "fgyash",
            linkedin: "https://www.linkedin.com/in/yashsharma2122/",
            instagram: "https://www.instagram.com/yash_sharma00000/"
        },
        {
            name: "Adhidev Vellakkat",
            role: "Vice Chairperson CSED",
            desc: "Meet our calm and sweet Vice Chairperson, ADHIDEV! Bringing peace and kindness to leadership, get ready for a tenure filled with gentle strength and thoughtful guidance.",
            img: adhidevImg,
            class: "fgadhidev",
            linkedin: "http://www.linkedin.com/in/adhidev-vellakkat-562041267",
            instagram: "https://www.instagram.com/adhidev.n.v?igsh=MW1wdGNnaXdjZ3hsMQ=="
        },
        {
            name: "Aakash Karthikeyan",
            role: "Secretary CSED",
            desc: "Introducing AAKASH, our vibrant Secretary! Blending cheer, creativity, and wit, he turns every meeting into a lively event, adding humor and positive energy to our journey.",
            img: aakashImg,
            class: "fgaakash",
            linkedin: "https://www.linkedin.com/in/aakash-karthikeyan/",
            instagram: "https://www.instagram.com/krtkn_sky/"
        },
        {
            name: "Vibhu Airan",
            role: "Co-secretary CSED",
            desc: "Meet VIBHU, our efficient Co-Secretary with a charming, quiet demeanor! Managing tasks behind the scenes while adding a playful touch, he brings a unique flavor to our club.",
            img: vibhuImg,
            class: "fgvibhu",
            linkedin: "https://www.linkedin.com/in/vibhu-airan/", // Updated per user request
            instagram: "https://www.instagram.com/vibhu.air?igsh=ZWh5Y2Z5ank5c2Nn"
        },
        {
            name: "Anurag Adarsh",
            role: "Tech & Design Head CSED",
            desc: "Say hello to ANURAG, our design visionary! With unmatched dedication and creativity, he’s set to lead a new chapter of design excellence. Witness his magic unfold this year!",
            img: anuragImg,
            class: "fganurag",
            linkedin: "https://www.linkedin.com/in/adarshanurag/",
            instagram: "https://www.instagram.com/anurag__adarsh/"
        },
        {
            name: "Ayushi Jha",
            role: "HR Head CSED",
            desc: "Meet AYUSHI, the heart of our club! With warmth and friendliness, she fosters a collaborative environment where every member feels valued and smiles are abundant throughout the year.",
            img: ayushiImg,
            class: "fgayushi",
            linkedin: "https://www.linkedin.com/in/ayushi-jha-72a355260",
            instagram: "https://www.instagram.com/ayushi_290822?igsh=MWVhMTJiZmtibmF5cg=="
        },
        {
            name: "Krishna Jawandhiya",
            role: "Events Head CSED",
            desc: "Introducing KRISHNA, the powerhouse behind our events! A fearless risk-taker and team player, he’s ready to bring bold decisions and unforgettable experiences to life this tenure.",
            img: krishnaImg,
            class: "fgkrishna",
            linkedin: "https://www.linkedin.com/in/krishna-jawandhiya",
            instagram: "https://www.instagram.com/kri.1384shna/"
        },
        {
            name: "Suhani Sharma",
            role: "Editorial Head CSED",
            desc: "Meet SUHANI, our Editorial Head! Turning ideas into masterpieces with dedication and teamwork, she ensures every word counts and contributes to a successful, collaborative tenure.",
            img: suhaniImg,
            class: "fgsuhani",
            linkedin: "http://www.linkedin.com/in/suhani-sharma-569792284",
            instagram: "https://www.instagram.com"
        },
        {
            name: "Satvik Choudhary",
            role: "Publicity Head CSED",
            desc: "Step into the spotlight with SATVIK, our marketing mastermind! Get ready for a year of smart strategies and creative brilliance as he leads our publicity efforts to new heights.",
            img: satvikImg,
            class: "fgsatvik",
            linkedin: "https://www.linkedin.com/in/satvik-choudhary-2a2a51255/",
            instagram: "https://www.instagram.com"
        },
        {
            name: "Vedant Nitin Deokar",
            role: "R&D Head CSED",
            desc: "Say hello to VEDANT, our R&D leader! With a keen analytical mind and dedication, he’s set to drive innovation and success. Prepare for a journey into groundbreaking developments.",
            img: vedantImg,
            class: "fgvedant",
            linkedin: "https://www.linkedin.com/in/vedant-deokar-73a519252/",
            instagram: "https://www.instagram.com/vedant_deokar_554?igsh=amRrejV5N254YXdr"
        }
    ],
    '2023': [
        {
            name: "Kanishka Gupta",
            role: "Chairperson CSED",
            desc: "Kanishka Gupta, our 2023-24 Chairperson, exemplifies patience and leadership. A guiding force, she stands strong and leads with unwavering dedication and hard work throughout the entire tenure.",
            img: kanishkaImg,
            class: "fgkanishka",
            linkedin: "https://www.linkedin.com/in/kanishka-gupta-810350221",
            instagram: "https://www.instagram.com/kanishkagupta__g1/"
        },
        {
            name: "Ikshit Samanta",
            role: "Secretary CSED",
            desc: "Introducing Ikshit Samanta, our enthusiastic Secretary! The unsung hero behind the scenes, his dedication and energy keeps everything running smoothly, making him an essential part of our team.",
            img: ikshitImg,
            class: "fgikshit",
            linkedin: "https://www.linkedin.com/in/ikshit-samanta/",
            instagram: "https://www.instagram.com/the_fine_scorp?igsh=YjU0cWU2ZDltNDFt"
        },
        {
            name: "Urva Dhoriyani",
            role: "Vice Chairperson CSED",
            desc: "Urva Dhoriyani, our Vice Chairperson, excels in research and idea enhancement. With dedication and a unique leadership style, she transforms ideas into impactful and well researched initiatives.",
            img: urvaImg,
            class: "fgurva",
            linkedin: "https://www.linkedin.com/in/urva-dhoriyani",
            instagram: "https://www.instagram.com/urva__10?igsh=MXMxMnd0ZW1lZ3cycw%3D%3D&utm_source=qr"
        },
        {
            name: "Shailja Dhanuka",
            role: "Co-secretary CSED",
            desc: "Meet Shailja Dhanuka, our inventive Co-Secretary! With a keen understanding of audience management and a hardworking nature, she expertly handles responsibilities, ensuring success throughout the term.",
            img: shailjaImg,
            class: "fgshailja",
            linkedin: "https://www.linkedin.com/in/shailja-dhanuka-9b9a03205",
            instagram: "https://www.instagram.com/shail_ja?igsh=ajMwYjhrdXFxdGsy"
        },
        {
            name: "Ruchita Maurya",
            role: "Publicity Head CSED",
            desc: "Ruchita Maurya, our Publicity Head, excels in captivating marketing strategies. With a knack for engaging content and risk-taking, she brings tireless energy and creative brilliance to our publicity efforts.",
            img: ruchitaImg,
            class: "fgruchita",
            linkedin: "https://www.linkedin.com/in/ruchita-maurya/",
            instagram: "https://www.instagram.com/ruchitamaurya_?igsh=MXh6c3dhNjl6ZjBpcg=="
        },
        {
            name: "Suprit Ratnakar",
            role: "Tech & Design Head CSED",
            desc: "Introducing Suprit Ratnakar, our Tech & Design Head! With a blend of innovative design and technical expertise, he leads with creativity and skill, shaping our visual and technological strategies.",
            img: supritImg,
            class: "fgsuprit",
            linkedin: "#", // Missing link in original
            instagram: "/"
        },
        {
            name: "Ananya Agarwal",
            role: "HR Head CSED",
            desc: "Ananya Agarwal, our HR Head, fosters a positive and approachable environment. Her cheerful nature and dedication ensures a supportive, collaborative culture that enhances our team’s dynamics and success.",
            img: ananyaImg,
            class: "fgananya",
            linkedin: "http://linkedin.com/in/ananya-agarwal03",
            instagram: "/"
        },
        {
            name: "Preethi Raddi",
            role: "Events Head CSED",
            desc: "Preethi Raddi, our Events Head, excels in planning and executing extraordinary events. With exceptional organizational skills and leadership, she ensures every event is a well-coordinated, memorable experience.",
            img: preethiImg,
            class: "fgpreethi",
            linkedin: "https://www.linkedin.com/in/preethi-raddi-6a7901233",
            instagram: "#"
        },
        {
            name: "Ram Chaturvedi",
            role: "Outreach Head CSED",
            desc: "Ram Chaturvedi, our Outreach Head, leads with innovative ideas and effective implementation. His leadership and vision drive our outreach initiatives, elevating our reach and impact this tenure.",
            img: ramImg,
            class: "fgram",
            linkedin: "/",
            instagram: "/"
        },
        {
            name: "Rajeshwari Banerjee",
            role: "Editorial Head CSED",
            desc: "Rajeshwari Banerjee, our Editorial Head, blends art with science in writing. Her methodical approach and effective communication skills create engaging content, making each piece impactful and insightful.",
            img: rajeshwariImg,
            class: "fgrajeshwari",
            linkedin: "https://in.linkedin.com/in/rajeshwari-banerjee-5ba414235",
            instagram: "https://www.instagram.com/sane_lyinsane?igsh=MTBsc3pmb3h1OW0xcw=="
        }
    ]
};

const Boards = () => {
    const [activeYear, setActiveYear] = useState('2025');

    // Preload images on mount
    React.useEffect(() => {
        const imageList = [
            bgRed,
            group2024,
            yashImg, adhidevImg, aakashImg, vibhuImg,
            anuragImg, ayushiImg, krishnaImg, suhaniImg,
            satvikImg, vedantImg,
            group2023,
            kanishkaImg, ikshitImg, urvaImg, shailjaImg,
            ruchitaImg, supritImg, ananyaImg, preethiImg,
            ramImg, rajeshwariImg
        ];

        imageList.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    // Determine Group Phase Image based on year
    const getGroupImage = (year) => {
        if (year === '2025') return null; // "For 2025 dont put group image"
        if (year === '2024') return group2024;
        if (year === '2023') return group2023;
        return group2024; // Default
    };

    return (
        <div className="teamspages" id="teams">
            {/* LEFT SIDE with Group Image */}
            <div className="teamspagesleft">
                <div className="headerteampageleft">Get to know the talented individuals behind CSED</div>
                <div className="headerteampageleft2">Meet Our Board</div>

                <div className="teamspageleftpageimage">
                    <div className="teamscontainerleft">
                        {/* Group Image with fade effect */}
                        <div className={`divva ${activeYear === '2025' ? 'fade-out' : 'fade-in'}`}>
                            {getGroupImage(activeYear) && (
                                <img 
                                    src={getGroupImage(activeYear)} 
                                    alt={`Team ${activeYear}`} 
                                    loading="lazy" 
                                    className="fade-in"
                                    key={activeYear} // Force re-render for animation
                                />
                            )}
                        </div>

                        {/* Year Number Display */}
                        <div className="numberrr">
                            <p className="numberrrpara">202</p>
                            <div className="noconatiner">
                                <div className="nodivva">
                                    <span>{activeYear.slice(3)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerteamspage">
                    <div id="buttonteamspages">
                        {['2025', '2024', '2023'].map(year => (
                            <p 
                                key={year} 
                                className={`btnew ${activeYear === year ? 'special' : ''}`}
                                onClick={() => setActiveYear(year)}
                            >
                                <a href="javascript:void(0)" className="btn2023">{year}</a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE with Swiper */}
            <div className="teamspagesright">
                <div className="blocks">
                    {activeYear === '2025' ? (
                        /* 2025 Special Content */
                        <div className="body1" style={{ display: 'block', width: '100%', height: '100%' }}>
                            <Swiper
                                className="mySwiper"
                                style={{height: '100%'}}
                                modules={[Pagination, Navigation, EffectCreative]}
                                effect={'creative'}
                                grabCursor={true}
                                observer={true}
                                observeParents={true}
                                creativeEffect={{
                                    prev: { shadow: true, translate: ["-120%", 0, -500] },
                                    next: { shadow: true, translate: ["120%", 0, -500] },
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next.teams",
                                    prevEl: ".swiper-button-prev.teams",
                                }}
                                pagination={{
                                    el: ".swiper-pagination.teams-page",
                                    type: "fraction"
                                }}
                            >
                                <SwiperSlide>
                                    <div className="imagendsocialmediaicon">
                                        <div className="teamspagephotocontainer">
                                            <img src={bgRed} alt="bg" className="bgrect" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="caption row-fluid">
                                        <div className="span4">
                                            <h3>Coming Soon</h3>
                                            <div className="teamspagespan5">Board Member</div>
                                            <div className="span8">
                                                <p>The 2025 Board will be revealed shortly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="swiper-button-next teams"></div>
                                <div className="swiper-button-prev teams"></div>
                                <div className="swiper-pagination teams-page"></div>
                            </Swiper>
                        </div>
                    ) : (
                        /* 2024 and 2023 Content */
                        <div className="body2" style={{ display: 'block', width: '100%', height: '100%' }}>
                            <Swiper
                                key={activeYear} // Force remount on year change to reset index
                                className="mySwiper"
                                style={{height: '100%'}}
                                modules={[Pagination, Navigation, EffectCreative]}
                                effect={'creative'}
                                grabCursor={true}
                                observer={true}
                                observeParents={true}
                                creativeEffect={{
                                    prev: { shadow: true, translate: ["-120%", 0, -500] },
                                    next: { shadow: true, translate: ["120%", 0, -500] },
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next.teams",
                                    prevEl: ".swiper-button-prev.teams",
                                }}
                                pagination={{
                                    el: ".swiper-pagination.teams-page",
                                    type: "fraction",
                                    formatFractionCurrent: (number) => number,
                                    formatFractionTotal: (number) => number
                                }}
                            >
                                {boardsData[activeYear].map((member, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="imagendsocialmediaicon">
                                            <div className="teamspagephotocontainer">
                                                <img src={bgRed} alt="bg" className="bgrect" loading="lazy" />
                                                <img src={member.img} alt={member.name} className={member.class} loading="lazy" />
                                                
                                                <div className="socialmediaicon">
                                                    <div className="social-btns">
                                                        <a className="btn twitter" href={member.instagram} target="_blank" rel="noreferrer">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                        <a className="btn linkedin" href={member.linkedin} target="_blank" rel="noreferrer">
                                                            <i className="fa fa-brands fa-linkedin"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="caption row-fluid">
                                            <div className="span4">
                                                <h3>{member.name}</h3>
                                                <div className="teamspagespan5">{member.role}</div>
                                                <div className="span8">
                                                    <p>{member.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-next teams"></div>
                                <div className="swiper-button-prev teams"></div>
                                <div className="swiper-pagination teams-page"></div>
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Boards;
