import Navbar from "../component/LandingPage/Navbar"
import Ajakan from "../component/LandingPage/Ajakan"
import Produk from "../component/LandingPage/Produk.jsx"
import Kategori from "../component/LandingPage/Kategori.jsx"
import Promo from "../component/LandingPage/Promo.jsx"
import Footer from "../component/LandingPage/Footer.jsx"

export default function LandingPages () {

    return(
        <>
        <Navbar/>
        <Ajakan/>
        <Produk/>
        <Kategori/>
        <Promo/>
        <Footer/>
        </>
    )
}