import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MainForWishlist from "../components/Layout/components/MainForWishlist/MainForWishlist";
import Footer from "../components/Layout/components/Footer/Footer";

export default function wishlist() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForWishlist/>
            <Footer/>
        </div>
    )
}