import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MyAccountVendor from "../components/Layout/components/MyAccount/MyAccountVendor";
import Footer from "../components/Layout/components/Footer/Footer";

export default function myAccountForVendor() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MyAccountVendor/>
            <Footer/>
        </div>
    )
}