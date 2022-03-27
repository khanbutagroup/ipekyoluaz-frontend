import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MyAccountShop from "../components/Layout/components/MyAccount/MyAccountShop";
import Footer from "../components/Layout/components/Footer/Footer";

export default function myAccountForUser() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MyAccountShop/>
            <Footer/>
        </div>
    )
}