import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TestimonialCarousel({ TestimonialSection }) {
    const [activeIndex, setActiveIndex] = useState(0); // State to track active testimonial index
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const onSlideChange = index => {
        setActiveIndex(index);
    };

    return (
        <div>
            <Carousel 
                className='d-flex align-items-center my-5'
                responsive={responsive}
                swipeable={true}
                autoPlay={true} // Enable auto play
                autoPlaySpeed={3000} // Set auto play speed (milliseconds)
                infinite={true} // Loop infinitely
                arrows={false} // Hide arrows
                showDots={true} // Show dotted indicators
                renderButtonGroupOutside={true} // Render the button group outside
                customDot={<CustomDot />} // Use custom dot component
            >
                {TestimonialSection.map((testimonial, index) => (
                    <div key={index} className="testimonial-card d-flex flex-column align-items-center justify-content-center p-3">
                        <p className={`testimonial-title my-3 ${activeIndex === index ? 'highlighted' : 'dimmed'}`}>{testimonial.title}</p>
                        <h2 className={`testimonial-review my-3 ${activeIndex === index ? 'highlighted' : 'dimmed'}`}>{testimonial.review}</h2>
                        <p className={`testimonial-reviewerName my-3 ${activeIndex === index ? 'highlighted' : 'dimmed'}`}>{testimonial.reviewerName}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

// Custom dot component
function CustomDot({ onClick, active }) {
    return (
        <button
            className={active ? "testimonial-custom-dot active" : "testimonial-custom-dot"}
            onClick={onClick}
        />
    );
}

export default TestimonialCarousel;
