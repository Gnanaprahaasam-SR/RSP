
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import carouselFlower from '../assets/carouselFlower.png';
import { homeData } from "../data/HomeData";

const { CarouselSection } = homeData;

const ActiveDotSVG = ({ rotation }) => (
    <svg className="active-dot" width="10" height="29" viewBox="0 0 10 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotation}deg)` }}>
        <rect className="dot-rect" y="29" width="28.1818" height="10" rx="5" transform="rotate(-90 0 29)" fill="#17183B" />
    </svg>
);

const InactiveDotSVG = ({ rotation }) => (
    <svg className="inactive-dot" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotation}deg)` }}>
        <rect className="dot-rect" y="10.8184" width="10" height="10" rx="5" transform="rotate(-90 0 10.8184)" fill="white" />
    </svg>
);



const CustomDot = ({ active, rotation }) => {
    return active ? <ActiveDotSVG rotation={rotation} /> : <InactiveDotSVG rotation={rotation} />;
};

const MyCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    const handleSelect = (newIndex) => {
        setActiveIndex(newIndex);

    };


    useEffect(() => {
        setTimeout(() => {
            setRotation((prevRotation) => prevRotation - 180);
        }, 2000)
    }, [activeIndex]);


    return (
        <div className="slide-container p-4" style={{
            background: "var(--accent-color)",
            position: 'relative',
            overflow: 'hidden',
        }}>
            <Carousel controls={false} indicators={false} onSelect={handleSelect}>

                {CarouselSection.map((item, index) => (
                    <Carousel.Item interval={4000}
                        key={`carousel_${index}`}

                    >
                        <div className=' row d-flex flex-row h-100 p-4' style={{
                            background: `radial-gradient(circle, ${item.backgroundRadialGradient.join(', ')})`,
                            minHeight: "550px",
                        }}>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="col-12 col-md-7 "
                                width={"100%"}
                            />

                            <div className="col-12 col-md-5 d-flex flex-column justify-content-center gap-3 my-3 p-2">
                                <h3 className='carousel-heading' style={{ color: item.text }}>{item.title}</h3>
                                <p className='carousel-description w-75' style={{ color: item.text }}>
                                    <b style={{ fontSize: "16px" }}>Weaving Comfort, Designing Dreams</b><br />
                                    {item.description}
                                </p>
                                <Link to={item.link} className='text-center'>
                                    <button className='primary-btn' style={{ color: index === 2 ? "#00000" : item.text }}>{item.button}</button>
                                </Link>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}

            </Carousel>

            <div style={{
                position: 'absolute',
                top: '50%',
                right: '5%',
                transform: 'translate(-50%,-50%)',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
            }}>
                {CarouselSection.map((item, index) => (
                    <CustomDot key={`dot_${index}`} active={index === activeIndex} rotation={rotation} />
                ))}
            </div>

            <div style={{
                transform: `translate(50%, 50%) rotate(${rotation}deg)`,
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                zIndex: 1,
                transition: 'transform 0.5s ease',
            }}>
                <img src={carouselFlower} alt="flower" width={"100%"} />
            </div>
        </div>
    );
};

export default MyCarousel;
