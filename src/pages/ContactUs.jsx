import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function ContactUs() {
    return (
        <div className='bg-light py-5'>
            <div className='container my-5' style={{ background: 'linear-gradient(to right, #FFFFFF 70%, #F0A76F 70%)', borderRadius: '20px' }}>
                <div className='row d-flex flex-wrap flex-sm-row-reverse '>
                    <div className='col-12 col-sm-12 col-md-6 my-5 '>
                        <div className="embed-responsive embed-responsive-16by9 " >
                            <iframe className='embed-responsive-item' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2375928426363!2d77.01695367402048!3d11.02079235464087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857001641b21d%3A0x66a85213959566f8!2sRSP%20COTTON%20WORLD!5e0!3m2!1sen!2sin!4v1745043953063!5m2!1sen!2sin" style={{ width: '100%', height: '500px', border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-5 '>
                        <div className='container px-5'>
                            <h1>Get in <span style={{ color: '#F0A76F' }}>Touch</span></h1>
                            <p className='mb-4'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                            <form className='mt-2 contact'>
                                <div className="mb-3">
                                    <input className="inputfield" type="text" placeholder="Name" required />
                                </div>
                                <div className="mb-3">
                                    <input className="inputfield" type="text" placeholder="Email" required />
                                </div>
                                <div className="mb-3">
                                    <input className="inputfield" type="text" placeholder="Phone Number" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="inputfield" placeholder='Message' >
                                    </textarea>
                                </div>

                                <button type="button" className='submit mb-3' >Submit</button>

                                <div className="mb-5 ">
                                    <div >
                                        <p className="mb-0 text-nowrap" style={{ color: '#F0A76F' }}>
                                            <FaPhone className='me-2' style={{ color: '#F0A76F' }} />Phone
                                        </p>
                                        <p>
                                            <a href="tel:+91 80984 89201" target="_blank" rel="noopener noreferrer" className='text-decoration-none' style={{ color: '#a2669a' }}>
                                                +91 80984 89201
                                            </a>
                                        </p>
                                    </div>
                                    <div >
                                        <p className="mb-0 text-nowrap" style={{ color: '#F0A76F' }}> <IoIosMail className='me-2' style={{ color: '#F0A76F' }} />E-mail</p>
                                        <p>
                                            <a href="mailto:rspcottonworld@gmail.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none' style={{ color: '#a2669a' }}>
                                                rspcottonworld@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}