import "../App.css";
import { SocialIcon } from 'react-social-icons'

const Footer = () => {

    return (
        <div className="footer container">
            <hr />
            <div className="row gx-5">
                <div className=" col-12 col-sm-12 col-md-6 mb-2">
                    <div>
                        <h4 className="mb-2 highlight">RSP COTTON WORLD</h4>
                        <p className="ft-menu"> Below RSP Cotton World add this phrase: RSP Cotton World brings you pure, premium cotton textiles designed for ultimate comfort and style. From home essentials to cozy kids' clothing, we weave softness and quality into every thread.</p>

                    </div>
                </div>

                <div className=" col-12 col-sm-6  col-md-3 mb-2">
                    <div>
                        <h5 className="mb-2 highlight">HELP & INFO</h5>
                        <p className="ft-menu">Terms & Conditions</p>
                        <p className="ft-menu">Shipping, Refund & Returns Policy</p>
                        <p className="ft-menu">Privacy Policy</p>
                    </div>
                </div>

                <div className=" col-12 col-sm-6 col-md-3 mb-2 ">
                    <div>
                        <h5 className="mb-2 highlight">CONTACT US</h5>
                        <p >
                            <a href="mailto:rspcottonworld@gmail.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none ft-menu' style={{ color: '#a2669a' }}>
                                rspcottonworld@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+918098489201" target="_blank" rel="noopener noreferrer" className='text-decoration-none ft-menu' style={{ color: '#a2669a' }}>
                                +91 80984 89201
                            </a>
                        </p>
                        <div className="d-flex gap-2 icon">
                            <SocialIcon network="facebook" href="https://www.facebook.com/people/Rspcottonworld/pfbid0nwwu62GJceKGcgcn9srPqxkMnXhE9HayfkjrB83pEiiDZ1h5WfyMfbbxeG22Mchrl/" style={{ height: 25, width: 25 }} />

                            <SocialIcon network="instagram" href="https://www.instagram.com/rspcottonworld_6969/?next=%2F#"
                                style={{ height: 25, width: 25 }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="justify-content-lg-between justify-content-md-center justify-content-sm-center text-center flex-wrap ">
                {/* <p className="">We ship with: <img src={dhl} alt="dhl" /> <img src={arcticon} alt="arcticon" />  </p> */}
                <span className="">&#169; Copyright 2025 RSP Cotton World | All rights reserved.</span>
            </div>
        </div>
    )
};

export default Footer;