import React, { useState } from 'react';
import aboutus from '../images/Home/AboutUsLanding.jpg';
import icon from '../images/component.png';
import section from '../images/AboutUs-Section.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import calendarIcon from '../images/akar-icons_calendar.svg';
import shoppingIcon from '../images/akar-icons_shopping-bag.svg';
import giftIcon from '../images/akar-icons_gift.svg';
import "../App.css";

const ServiceSection = [
  {
    icon: calendarIcon,
    title: "Available 24/7",
    description: "At imperdiet dui accumsam sit amet nulla risus"
  },
  {
    icon: shoppingIcon,
    title: "Shop Online",
    description: "At imperdiet dui accumsam sit amet nulla risus"
  },
  {
    icon: giftIcon,
    title: "Special Packaging",
    description: "At imperdiet dui accumsam sit amet nulla risus"
  },
  // {
  //   icon: returnIcon,
  //   title: "Free Global Returns",
  //   description: "At imperdiet dui accumsam sit amet nulla risus"
  // },
];

export default function AboutUsPage() {

  const [learnMore, setLearnMore] = useState(false);

  return (
    <div className='overflow-hidden about-us'>
      <div className='row  mb-2' style={{ backgroundColor: '#f1f1f0' }}>
        <div className='p-4 position-relative'>
          <img src={aboutus} alt='about us' style={{height:"100%", maxHeight:"500px"}} width={"100%"}/>
          <h4 className='aboutus-heading glass-bg w-100' > ABOUT US </h4>
        </div>
      </div>
      <div className='container my-5'>
        <div className='d-flex align-items-center gap-2 mb-3'>
          <img className="p-1" src={icon} alt='Icon' style={{ backgroundColor: '#e9c7d6', borderRadius: '10px', width: '45px', height: '45px' }} />
          <h4 className="">About us</h4>
        </div>
        <h4>Our Company Overview</h4>
        <p className='para'>
          Welcome to RSP Cotton World, your trusted destination for pure cotton textiles and garments. Nestled in the vibrant textile city of Coimbatore, Tamil Nadu, and situated near the world-renowned Tirupur garment hub, we proudly carry forward the rich weaving traditions of our region. Known as the ‘Manchester of South India,’ Coimbatore has long been the heart of India’s textile industry — and we are proud to be a part of its story.
        </p>
        <hr />
        <p className='para mb-3'>
          For over a decade, we have been passionately weaving comfort, style, and quality into every product we create. Specializing in pure cotton fabrics and garments, we offer a versatile range designed to suit household needs, home décor, and kids’ clothing. Whether it's soft bedsheets, elegant curtains, breathable clothing, or delicate fabrics for little ones — our collections promise a perfect blend of comfort, durability, and elegance
        </p>

        {learnMore &&
          <>
            <p className='para mb-3'>
              At RSP Cotton World, we believe that quality textiles don’t just fill spaces — they create warmth, character, and lasting memories. Every thread we weave is a testament to our commitment to purity, craftsmanship, and customer satisfaction.
            </p>

            <h4>Our Vision</h4>
            <p className='para mb-3'>
              To become a leading name in the home textile and garment industry, recognized for our commitment to purity, quality, and craftsmanship. We aim to carry the legacy of Coimbatore’s weaving tradition to homes across India and around the world, offering products that enhance everyday living with comfort, style, and sustainability.
            </p>

            <h4>Our Mission</h4>
            <ul className='para mb-3'>
              <li>To deliver high-quality, 100% pure cotton fabrics and garments that combine traditional craftsmanship with contemporary needs.</li>
              <li>To cater to household, home décor, and kids’ clothing segments with products that are comfortable, durable, and beautifully designed.</li>
              <li>To uphold ethical and sustainable business practices, supporting local artisans and contributing to the growth of our weaving community.</li>
              <li>To continuously innovate, ensuring that our customers receive products that are both functional and aesthetically appealing.</li>
              <li>To build lasting relationships with our customers by offering trust, consistency, and personalized service.</li>
            </ul>
          </>
        }
        <div className='mb-3'>
          {learnMore === false ?
            <button className='learnmore' onClick={() => setLearnMore(true)}>View More</button> : <button className='learnmore' onClick={() => setLearnMore(false)}>View Less </button>
          }
        </div>
      </div>

      {/* <div className='row mb-4'>
        <div className='col-md-12'>
          <img src={section} alt='not found' style={{ width: "100%", Height: 'auto', borderRadius: '10px' }} className='img-fluid' />
        </div>
      </div> */}

      <div className='container'>
        <div className='row mb-4'>
          <div className='d-flex flex-row align-items-center'>
            <hr className="col-2 col-sm-4 " />
            <h5 className='col-8 col-sm-4 text-center' style={{ color: '#757575' }}>Brands with RSP cotton world</h5>
            <hr className="col-2 col-sm-4" />
          </div>

          <div className='row justify-content-evenly'>
            {ServiceSection.map((service, index) => (
              <div key={`service_${index}`} className="col-12 col-sm-6 col-md-4">
                <div className='text-center home-services'>
                  <img src={service.icon} alt={service.title} className='py-2' />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div >
  );
}