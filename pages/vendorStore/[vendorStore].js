import React from "react";
import NavbarForAllPage from "../../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../../components/Layout/components/AllHeader/MobileMenu";
import MainForVendorStore from "../../components/Layout/components/MainForVendorStore/MainForVendorStore";
import Footer from "../../components/Layout/components/Footer/Footer";
import axios from "axios";

export default function vendorStore(props) {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForVendorStore product={props.product}/>
            <Footer/>
        </div>
    )
}



export async function getServerSideProps(context){
    const {vendorStore} = context.query
    const results = await axios.get(`https://api.ipekyolu.az/api/product-by-user-id/${vendorStore}`)
    return {
        props: {
            product: results.data 
        }
    }
}