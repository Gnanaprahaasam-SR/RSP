import React, { useState } from 'react';
import { homeData } from '../data/HomeData';
import { Link } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import amazon from "../images/Home/amazon.svg";
import meesho from "../images/Home/meesho.svg";
import order from "../images/Home/Order.png";
import MyCarousel from '../components/HeroSection';

const { CategorySection, BestSellingItemsSection, } = homeData;



const Home = () => {
    


    return (
        <>
            <MyCarousel />
            <div className='container'>
                <h3 className='my-3'>{CategorySection.title}</h3>
                <div className='row g-2 d-flex align-items-center justify-content-center'>
                    <div className='col-6 col-sm-6 col-md-3  h-100'>
                        <div className='position-relative ' style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                            <img src={CategorySection.bedRoom.image} alt={CategorySection.bedRoom.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.bedRoom.button} </button>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3  h-100'>
                        <div className='position-relative ' style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                            <img src={CategorySection.bathRoom.image} alt={CategorySection.bathRoom.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.bathRoom.button} </button>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3  h-100'>
                        <div className='position-relative ' style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                            <img src={CategorySection.livingRoom.image} alt={CategorySection.livingRoom.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.livingRoom.button} </button>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-3 h-100'>
                        <div className='position-relative' style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                            <img src={CategorySection.kitchenRoom.image} alt={CategorySection.kitchenRoom.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.kitchenRoom.button} </button>
                        </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 h-100'>
                        <div className='position-relative' style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                            <img src={CategorySection.window_Door.image} alt={CategorySection.window_Door.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.window_Door.button} </button>
                        </div>
                    </div>
                    <div className=' col-6 col-sm-6 col-md-4 h-100'>
                        <div className='position-relative' style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                            <img src={CategorySection.utility_Miscellaneous.image} alt={CategorySection.utility_Miscellaneous.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.utility_Miscellaneous.button} </button>
                        </div>
                    </div>
                    <div className=' col-6 col-sm-6 col-md-4 h-100'>
                        <div className='position-relative' style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                            <img src={CategorySection.Kids_cloth.image} alt={CategorySection.Kids_cloth.button} width="100%" />
                            <button className='secondary-btn category-button'>{CategorySection.Kids_cloth.button} </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5 '>
                <ProductSlider data={BestSellingItemsSection} />
            </div>

            <div className='container my-5'>
                {/* <ProductSlider data={YouMayAlsoLikeSection} /> */}
                <div className='row d-flex flex-wrap align-items-center justify-content-between'>
                    <div className='col mb-2'><h4 className='text-nowrap'>Follow us in Amazon and Flipkart</h4></div>
                    <div className='col d-flex justify-content-md-end align-items-center gap-2'>
                        <p>Visit Us</p>
                        <Link to={"https://www.amazon.in/s?k=RSP+COTTON+WORLD&ref=bl_dp_s_web_0"} ><img src={amazon} alt="amazon" width={"80px"} /></Link>/
                        <Link to={"https://www.meesho.com/RSPCOTTONWORLD?ms=2"}><img src={meesho} alt="meesho" width={"100px"} style={{ marginTop: "-13px" }} /></Link>
                        {/* <Link to={"/"}> <img src={flipkart} alt="flipkart" width={"90px"} style={{ marginTop: "-13px" }} /></Link> */}
                    </div>
                </div>

                <div className='row enquire shadow rounded-4 align-items-center justify-content-center h-100' style={{ background: 'linear-gradient(to right, #FFFFFF 50%, #F0A76F 50%)', }}>
                    <div className=' col-12 col-md-6 p-5 '>
                        <h5 className='mb-3'>To place a bulk order ? submit a request</h5>
                        <div className='p-2 '>
                            <input className="inputfield" type="text" placeholder="Name" required />

                            <input className="inputfield" type="text" placeholder="Email" required />

                            <input className="inputfield" type="text" placeholder="Phone Number" required />

                            <textarea className="inputfield" placeholder='Description' rows={3}>
                            </textarea>
                            <div className='text-center'>
                                <button type="button" className='mb-3 submit-btn ' >Submit</button>
                            </div>
                        </div>
                        <div className="  align-items-center  ">
                            <div className='text-start' >
                                <p className="mb-0 text-nowrap" style={{ color: '#F0A76F' }}>
                                    <FaPhone className='me-2' style={{ color: '#F0A76F' }} />Phone
                                </p>
                                <p><a href="tel:+918098489201" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-nowrap' style={{ color: '#a2669a' }}>
                                    +91 80984 89201
                                </a></p>
                            </div>
                            <div className='text-start' >
                                <p className="mb-0 text-nowrap" style={{ color: '#F0A76F' }}> <IoIosMail className='me-2' style={{ color: '#F0A76F' }} />E-mail
                                </p>
                                <p>
                                    <a href="mailto:rspcottonworld@gmail.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-nowrap' style={{ color: '#a2669a' }}>
                                        rspcottonworld@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-none d-sm-none d-md-block rounded-4 '>
                        <img src={order} alt="bulkOrder" width="100%" height="100%" />
                    </div>
                </div>
            </div >

        </>
    );
};

export default Home;
