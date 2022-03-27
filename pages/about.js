import React, {useContext, useEffect} from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import About from "../components/Layout/components/About/About";
import Footer from "../components/Layout/components/Footer/Footer";
export default function about() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <About/>
            <Footer/>
        </div>
    )
}