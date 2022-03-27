import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MainForProduct from "../components/Layout/components/MainForProduct/MainForProduct";
import Footer from "../components/Layout/components/Footer/Footer";

export default function productId() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForProduct/>
            <Footer/>
        </div>
    )
}