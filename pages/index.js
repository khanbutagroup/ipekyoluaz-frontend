import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Footer from "../components/Layout/components/Footer/Footer";
import NavbarForHome from "../components/Layout/components/AllHeader/NavbarForHome";
import MainForHome from "../components/Layout/components/MainForHome/MainForHome";
import {refresh} from "../services/auth/refresh";

export default function Index() {

    // if (typeof window !== 'undefined' ){
    //        if (localStorage.getItem('token')){
    //            console.log("ds")
    //            refresh(localStorage.getItem('token')).then((e)=>{
    //                console.log(e)
    //            })
    //        }
    // }
    return (
        <div>
            <NavbarForHome/>
            <MobileMenu/>
            <MainForHome/>
            <Footer/>
        </div>
    )
}
