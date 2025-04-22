import "../App.css";

import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import feedback from "../images/feedbackpicture.png";
import Rating from '@mui/material/Rating';
import ProductCarousel from "./ProductSlide";
import { BsFillHeartFill } from "react-icons/bs";
import content from "../content.js";
import ProductSlider from "../components/ProductSlider.jsx";


const Description = () => {
    const description = content.description;
    const similarProduct = content.similarProduct;

    const [color, setColor] = useState("white");
    const [size, setSize] = useState("small");

    return (
        <div className="mb-5">
            <div className="container ">
                <span className="icon mb-4">Home &#10148; {"Oversized t shirt"}</span>
                <h5 className="mb-5 page_title">{description?.pageTitle}</h5>
                <div className="row g-3 product-description" style={{fontFamily:'"Manrope", sans-serif'}}>
                    <div className="col-md-5 col-sm-12 col-12 ">
                        <img src={description?.product?.image} alt="t-shirt" width="100%" />
                    </div>
                    <div className="col-md-7 col-sm-12 col-12">
                        <div className="d-flex row ">
                            <div className="col-md-6 col-sm-12 ">
                                <p className="d-inline">{description?.product?.Type}Men's Casual Outerwear </p>
                                {description.product.Availablity > 0 ?
                                    <p className="offer d-inline">{description?.product?.Availablity}left!</p> : ""}
                                <h5 className="text-wrap page_title">{description?.product?.Title}</h5>
                                <h4 className="page_title">${description?.product?.Coast}</h4>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className=" row d-flex justify-content-evenly  gap-3  ">
                                    <button className="buyNow btn w-auto "> <HiMiniShoppingBag />  Buy Now </button>
                                    <button className="addCart btn shadow-sm w-auto"> <BsCart3 />  Add To Cart </button>
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 m-2 border rounded-4">
                            <div className="col-md-6 col-sm-12 d-block" >
                                <p>Material</p>
                                <p className="list">{description?.material}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 d-block" >
                                <p>Fit</p>
                                <p className="list">{description?.fit}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 d-block" >
                                <p>Color</p>
                                <div className="py-1 rounded-5 border  d-flex justify-content-evenly gap-1 w-100" >
                                    <span className={color === "yellow" ? `rounded-5 border p-3 shadow` : `rounded-5 border p-3`} style={{ backgroundColor: "#FFE566" }} onClick={() => setColor("yellow")}> </span>
                                    <span className={color === "green" ? `rounded-5 border p-3 shadow` : `rounded-5 border p-3`} style={{ backgroundColor: "#27AE60" }} onClick={() => setColor("green")}></span>
                                    <span className={color === "white" ? `rounded-5 border p-3 shadow` : `rounded-5 border p-3`} style={{ backgroundColor: "white" }} onClick={() => setColor("white")}></span>
                                    <span className={color === "black" ? `rounded-5 border p-3 shadow` : `rounded-5 border p-3`} style={{ backgroundColor: "black" }} onClick={() => setColor("black")}></span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 d-block" >
                                <p>Sizes</p>
                                <div className="row d-flex justify-content-evenly align-items-center">
                                    {description?.sizes.map((sizeOption, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={size === sizeOption ? "selected d-inline w-auto" : "notSelected d-inline w-auto"}
                                            onClick={() => setSize(sizeOption)}

                                        >
                                            {sizeOption}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" row p-2 m-2 border rounded-4">
                            <p>Shipping Information</p>
                            {description?.shippingInformation.map((shippingInfo, index) => (
                                <li key={index} className="list">{shippingInfo}</li>
                            ))}

                        </div>
                        <div className=" row p-2 m-2 border rounded-4">
                            <p>Features</p>
                            {description?.features.map((feature, index) => (
                                <li key={index} className="list">{feature}</li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="backdrop position-relative">
                <div className="container" style={{ position: "relative", zIndex: "99" }}>
                    <div className="row p-5 d-flex align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 g-0">
                            <img src={feedback} alt="feedback" width="100%" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bg-white  ">
                            <div className="p-md-5  ">
                                <p style={{ fontFamily: '"Jost", sans-serif', fontSize: "26px" }}>Nice shirt</p>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                <p style={{ fontFamily: '"Jost", sans-serif', textAlign: "justify" }}>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="backdrop_text">REVIEW</h1>
            </div>

            <div className="container py-5">
                {/* <div className=" d-flex flex-wrap justify-content-between ">
                    <h4 className="">SIMILAR PRODUCTS</h4>
                    <button className="shadow-sm  viewProduct d-none d-sm-block ">VIEW ALL PRODUCTS</button>
                </div>
                <div className=" row d-block d-sm-none d-flex">
                    {similarProduct.map((product, index) => (
                        <div key={index} className="col-6 col-sm-6 productList_product position-relative">
                            <div className="">
                                <img src={product.image} alt="product" width="100%" />
                                <h6 className="">{product.productName.toUpperCase()}</h6>
                                <h6 className="list product_title">$ {product.cost.toFixed(2)}</h6>
                            </div>
                            <div className="d-flex">
                                <button className="btn productList_btn">Add Cart</button>
                                <span className="productList_like text-decoration-underline"><BsFillHeartFill color="#ffffff" /></span>
                            </div>
                        </div>
                    ))}

                </div> */}
                <ProductSlider data={similarProduct} />
            </div>

        </div>
    )
}

export default Description;