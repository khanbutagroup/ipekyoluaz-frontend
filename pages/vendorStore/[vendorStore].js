import React from "react";
import NavbarForAllPage from "../../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../../components/Layout/components/AllHeader/MobileMenu";
import MainForVendorStore from "../../components/Layout/components/MainForVendorStore/MainForVendorStore";
import Footer from "../../components/Layout/components/Footer/Footer";

export default function vendorStore() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForVendorStore/>
            <Footer/>
        </div>
    )
}