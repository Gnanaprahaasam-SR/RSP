
import bedRoomCategory from "../images/Home/Bedroom.jpg";
import bathRoomCategory from "../images/Home/Bathroom.jpg";
import kitchenRoomCategory from "../images/Home/Kitchen.jpg";
import livingRoomCategory from "../images/Home/LivingRoom.jpg";
import windowDining from "../images/Home/Door&Windows.jpg";
import kidscloth from "../images/Home/KidsClothing.jpg";
import utility from "../images/Home/Miscellaneous.jpg";


import bestseller1 from "../images/BestSeller/Bathrobe.jpg";
import bestseller2 from "../images/BestSeller/Apron.jpg";
import bestseller3 from "../images/BestSeller/DoubleBedSpread.jpg";
import bestseller4 from "../images/BestSeller/DoubleCurtains.jpg";
import bestseller5 from "../images/BestSeller/FloorMat.jpg";
import bestseller6 from "../images/BestSeller/GirlFrock.jpg"
import bestseller7 from "../images/BestSeller/SofaCover.jpg";

import Slide1 from "../images/Home/Slide1.jpg";
import Slide2 from "../images/Home/Slide2.jpg";
import Slide3 from "../images/Home/Slide3.jpg";


import bathroom from "../images/Category/bathrobe.webp";
import blankets from "../images/Category/blankets.jpeg";
import carpet from "../images/Category/carpet.jpeg";
import chairPads from "../images/Category/chairPads.avif";
import cover from "../images/Category/cover.webp";

const homeData = {
    CarouselSection: [
        {
            title: "NEW COLLECTIONS",
            description: "From cozy fabrics to elegant designs, every piece is made to inspire comfort, beauty, and a sense of belonging. ",
            image: Slide2,
            button: "SHOP COLLECTION",
            link: "/shop",
            backgroundRadialGradient: [
                "#EFBB92",
                "#F0A76F",
            ],
            text: "#EA7300"
        }, {
            title: "NEW COLLECTIONS",
            description: "From cozy fabrics to elegant designs, every piece is made to inspire comfort, beauty, and a sense of belonging. ",
            image: Slide3,
            button: "SHOP COLLECTION",
            link: "/shop",
            backgroundRadialGradient: [
                "#E1E5E4",
                "#C3C2BA"
            ],
            text: "#4F959D"
        }, {
            title: "NEW COLLECTIONS",
            description: "From cozy fabrics to elegant designs, every piece is made to inspire comfort, beauty, and a sense of belonging ",
            image: Slide1,
            button: "SHOP COLLECTION",
            link: "/shop",
            backgroundRadialGradient: [
                "#C8B6A5",
                "#B9A793"
            ],
            text: "#F6F8D5"
        },
    ],
    CategorySection: {
        title: "CATEGORIES",
        bedRoom: {
            image: bedRoomCategory,
            button: "BEDROOM ",
            link: "/clothing"
        },
        bathRoom: {
            image: bathRoomCategory,
            button: "BATHROOM",
            link: "/homeTextiles"
        },
        livingRoom: {
            image: livingRoomCategory,
            button: "LIVING ROOM",
            link: "/toys"
        },
        kitchenRoom: {
            image: kitchenRoomCategory,
            button: "KITCHEN & DINING ",
            link: "/officeSupplies"
        },
        window_Door: {
            image: windowDining,
            button: "WINDOW & DOOR",
            link: "/officeSupplies"
        },
        utility_Miscellaneous: {
            image: utility,
            button: "UTILITY & MISCELLANEOUS",
            link: "/officeSupplies"
        },
        Kids_cloth: {
            image: kidscloth,
            button: "KIDS CLOTHING",
            link: "/officeSupplies"
        }

    },
    BestSellingItemsSection: {
        title: "BEST SELLING ITEMS",
        button: "VIEW ALL CATEGORIES",
        link: "/shop",
        products: [
            {
                product_id: "1",
                image: bestseller1,
                name: "Bathrobe",
                price: "950.00"
            }, {
                product_id: "2",
                image: bestseller2,
                name: "Apron",
                price: "1200.00"
            }, {
                product_id: "3",
                image: bestseller3,
                name: "Double BedSpread",
                price: "580.00"
            }, {
                product_id: "4",
                image: bestseller4,
                name: "Double Curtains",
                price: "120.00"
            }, {
                product_id: "5",
                image: bestseller5,
                name: "Floor Mat",
                price: "700.00"
            }, {
                product_id: "6",
                image: bestseller6,
                name: "Girl Frock",
                price: "690.00"
            }, {
                product_id: "7",
                image: bestseller7,
                name: "Sofa Cover",
                price: "690.00"
            },
        ]
    },
    YouMayAlsoLikeSection: {
        title: "YOU MAY ALSO LIKE",
        button: "VIEW ALL PRODUCTS",
        link: "/product",
        products: [
            {
                product_id: "1",
                image: bathroom,
                name: "Bathrobe",
                price: "950.00"
            }, {
                product_id: "2",
                image: blankets,
                name: "Blankets",
                price: "1050.00"
            }, {
                product_id: "3",
                image: carpet,
                name: "carpet",
                price: "850.00"
            }, {
                product_id: "4",
                image: cover,
                name: "Rugs",
                price: "690.00"
            },
        ]
    },
 
}

export { homeData };