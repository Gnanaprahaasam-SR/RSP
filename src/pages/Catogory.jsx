import React, { useState } from 'react';
import { CategoryData } from '../data/CatogoryData';
import { GoHeart } from "react-icons/go";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const subcategories = [
    "All",
    "Bedroom Textiles",
    "Bathroom Textiles",
    "Living Room Textiles",
    "Kitchen & Dining Textiles",
    "Window & Door Textiles",
    "Utility & Miscellaneous",
    "Kids Clothing"
];


const Category = ({ key, title, backgroundImage, image, productsCategories }) => {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [page, setPage] = useState(1);
    const productsPerPage = 16;



    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setPage(1);
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const filteredProducts =
        selectedCategory === "All"
            ? productsCategories
            : productsCategories.filter(
                (product) => product.subcategory === selectedCategory
            );

    const currentProducts = filteredProducts.slice(
        (page - 1) * productsPerPage,
        page * productsPerPage
    );

    // const indexOfLastProduct = page * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = productsCategories[selectedCategory]?.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <div key={key} style={{ background: "var(--accent-color)" }}>
                <div className='p-3 position-relative '>
                    <img src={backgroundImage} alt={title} width="100%" style={{ height: "100%", maxHeight: "500px" }} />
                    <h4 className='category-hero-title glass-bg ' style={{ animation: "catogory-title-popUp 0.7s forwards", zIndex: 4 }}>SHOP</h4>
                </div>
            </div>

            <div className='container my-5'>
                {/* Category Tabs */}
                <div className='col flex-wrap d-flex px-5 align-items-center justify-content-evenly '>
                    {subcategories.map((category) => (
                        <div key={category} className=''>
                            <h4 className={`text-nowrap ${selectedCategory === category ? 'category-subtitles-active' : 'category-subtitles'}`}
                                onClick={() => handleCategoryChange(category)}>
                                {category}
                            </h4>
                        </div>
                    ))}
                </div>


                <div className='row'>
                    {currentProducts.map((product) => (
                        <div key={product.product_id} className='col-md-4 col-lg-3 col-6 d-flex flex-column align-items-center p-4 product-card'>
                            <div className='d-flex flex-column'>
                                <div className='w-100' style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                                <div className="product-btns">
                                    <button className="secondary-btn">ADD TO CART</button>
                                    <button className="product-icon"><GoHeart /></button>
                                </div>
                                <h5 className='product-title'>{product.name}</h5>
                                <p className='product-price'>&#8377;{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className='d-flex align-items-center justify-content-center'>
                    <Stack spacing={2} justifyContent="center" mt={3}>
                        <Pagination
                            count={Math.ceil(filteredProducts.length / productsPerPage)}
                            page={page}
                            shape="rounded"
                            onChange={handleChangePage}
                            color="primary"
                        />
                    </Stack>
                </div>
            </div>
        </>
    );
};



function CategoryPage() {

    return (
        <Category
            title={CategoryData.title}
            backgroundImage={CategoryData.backgroundImage}
            productsCategories={CategoryData.productsCategories}
            image={CategoryData.image}
        />
    );
}

export default CategoryPage;
