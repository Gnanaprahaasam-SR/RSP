import product1 from "../images/common/similarProduct1.png";
import "../App.css";
import ProductCarousel from "./ProductSlide";
import { BsFillHeartFill } from "react-icons/bs";
import mastercard from "../images/mastercard1.png";
import paypal from "../images/paypal1.png";
import visa from "../images/visa1.png";
import apay from "../images/Apay.png";
import content from  "../content.js";
import ProductSlider from "../components/ProductSlider.jsx";

const MyCart = () => {
    const similarProduct = content.similarProduct;

    return (
        <div className="mb-5">
            <div className="container ">
                <span className="icon mb-4">Home &#10148; {"Cart"}</span>
                <h5 className="page_title">My Cart</h5>
                <div className=" d-flex row g-5">
                    <div className="col-md-8 col-12 ">
                        <div className="row border rounded-3 m-1 py-2 ">
                            <div className=" col-sm-6 col-md-3 mb-2 ">
                                <img src={product1} alt="product1" className="rounded-2 d-inline " width="100px" height="100px" />
                            </div>
                            <div className=" col-sm-6 col-md-6 mb-2">
                                <h5 className="product_title d-block">Oversized Half Sleeve T- Shirts</h5>
                                <p className="icon">Size: medium, Color: blue,  Material: Plastic
                                    Seller: Artel Market</p>
                                <button className=" rounded-1 border" style={{ color: "#FA3434", backgroundColor: "#FFFFFF", fontWeight: 600, border: "none" }} type="button">Remove</button>
                            </div>
                            <div className=" col-sm-3 col-md-3 mb-2">
                                <h5 className="d-none d-sm-block product_title ">$95.99</h5>
                                <select name="Quantity" id="" className="form-select form-select-sm w-auto d-none d-sm-block">
                                    <option value={1}>Qty:1</option>
                                    <option value={2}>Qty:2</option>
                                    <option value={3}>Qty:3</option>
                                </select>
                            </div>
                            <div className="clearfix mb-2">
                                <div class="input-group flex-nowrap w-50  d-sm-none float-start ">
                                    <button class="btn border" type="button" >-</button>
                                    <input type="text" class="form-control text-center" value={0} />
                                    <button class="btn border" type="button" >+</button>
                                </div>
                                <h5 className="float-end d-sm-none product_title">$95.99</h5>
                            </div>
                            <hr />
                            <div >
                                <button className="btn shadow-sm border w-auto text-nowrap " style={{ color: "#0D6EFD" }} >Remove all</button>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 ">
                        <div className=" border rounded-3 p-2 mb-2">
                            <p>Have a coupon?</p>
                            <div class="input-group ">
                                <input type="text" class="form-control" placeholder="Add coupon" />
                                <button type="button" class="btn border" style={{ color: "#0D6EFD" }}>Apply</button>
                            </div>
                        </div>
                        <div className=" border rounded-3 p-3">
                            <div className="clearfix">
                                <p className="float-start">Subtotal:</p>
                                <p className="float-end">${1403.97}</p>
                            </div>
                            <div className="clearfix">
                                <p className="float-start">Discount:</p>
                                <p className="float-end" style={{ color: "#FA3434" }}>-${60.00}</p>
                            </div>
                            <div className="clearfix mb-5">
                                <p className="float-start">Tax:</p>
                                <p className="float-end" style={{ color: "#27AE60" }}>+${14.00}</p>
                            </div>
                            <hr />
                            <div className="clearfix mb-2">
                                <p className="float-start" style={{ fontWeight: "700" }}>Total:</p>
                                <p className="float-end" style={{ fontWeight: "700" }}>${1357.97}</p>
                            </div>
                            <button type="button" className="btn w-100 mb-2" style={{ backgroundColor: "#00B517", color: "#FFFFFF", }}> Checkout </button>
                            <div className="d-flex justify-content-evenly">
                                <img src={mastercard} alt="mastercard" />
                                <img src={paypal} alt="paypal" />
                                <img src={visa} alt="visa" />
                                <img src={apay} alt="apay" />
                            </div>
                        </div>
                    </div>
                </div>

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
                                <img src={product?.image} alt="product" width="100%" />
                                <h6 className="">{product?.name.toUpperCase()}</h6>
                                <h6 className="list product_title">$ {product?.price.toFixed(2)}</h6>
                            </div>
                            <div className="d-flex">
                                <button className="btn productList_btn">Add Cart</button>
                                <span className="productList_like text-decoration-underline"><BsFillHeartFill color="#ffffff" /></span>
                            </div>
                        </div>
                    ))}
                </div>
                <ProductCarousel /> */}
                <ProductSlider data={similarProduct} />

            </div>

        </div>
    )
};

export default MyCart;