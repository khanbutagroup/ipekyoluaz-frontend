import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Footer from "../components/Layout/components/Footer/Footer";
import MainForHome from "../components/Layout/components/MainForHome/MainForHome";

export default function Home({data}) {
    console.log(data, 'dassag');
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForHome/>
            <Footer/>
        </div>
    )
}



