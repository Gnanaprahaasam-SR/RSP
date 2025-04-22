import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { GoHeart } from "react-icons/go";


function ProductSlider({ data }) {
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 769 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button className="custom-left-arrow" onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none', zIndex: '999', position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%)' }}>
                <IoArrowBack />
            </button>
        );
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <button className="custom-right-arrow" onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none', zIndex: '999', position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)' }}>
                <IoArrowForward />
            </button>
        );
    };

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h4>{data.title}</h4>
                <Link to={data.link}><button className='secondary-btn'>{data.button}</button></Link>
            </div>
            <div style={{ position: 'relative' }}>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    customLeftArrow={<CustomLeftArrow />} // Custom left arrow button
                    customRightArrow={<CustomRightArrow />} // Custom right arrow button
                >
                    {data?.products.map((product) => (
                        <div key={product.product_id} className='d-flex flex-column align-items-center p-4 product-card'>
                            <Link className='text-decoration-none' to={`/`}>
                                <div className='d-flex flex-column '>
                                    <div className='w-100' style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className='w-100 h-100 object-fit-cover'
                                        />
                                    </div>
                                    <div className="product-btns ">
                                        <button className="secondary-btn text-center">ADD TO CART</button>
                                    </div>
                                    <div className='clearfix'>
                                        <div className='float-start'>
                                            <h5 className='product-title'>{product.name}</h5>
                                            <p className='product-price'>&#8377;{product.price}</p>
                                        </div>
                                        <div className='float-end'>
                                            <button className="product-icon"><GoHeart /></button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default ProductSlider;
