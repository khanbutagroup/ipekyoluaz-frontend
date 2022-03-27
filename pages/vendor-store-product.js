import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Footer from "../components/Layout/components/Footer/Footer";

export default function vendorStoreProduct() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <Footer/>
        </div>
    )
}