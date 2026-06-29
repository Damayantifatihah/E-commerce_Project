import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import LandingPages from "./pages/LandingPages"
import Login from "./pages/Login"
import Register from "./component/Register/Register";
import Homepage from "./pages/HomePage";
import DetailProduk from "./component/Detail/DetailProduk";
import Keranjang from "./pages/Keranjang";
import CheckoutPage from "./pages/ChackoutPage";
import Seeprofil from "./pages/Seeprofil";

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element ={<LandingPages/>} />
          <Route path='/login' element ={<Login/>} />
          <Route path='/register' element ={<Register/>} />
          <Route path='/home page' element ={<Homepage/>} />
          <Route path='/detailproduk/:id' element ={<DetailProduk/>} />
          <Route path='/keranjang' element ={<Keranjang/>} />
          <Route path='/beli' element ={<CheckoutPage/>} />
          <Route path='/See' element ={<Seeprofil/>} />
          
          

      </Routes>
    </Router>
    </>
  )
}

export default App
