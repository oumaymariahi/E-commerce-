
import Navbar from './components/navbar/navbar'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/cart'
import Footer from './components/Footer/Footer'
import maquillage_banner from './components/assets/banner_maquillage.jpg'
import parfum_banner from './components/assets/banner_parfum.png'
import soin_banner from './components/assets/banner_soin.jpg'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/maquillage" element={<ShopCategory banner={maquillage_banner}category="maquillage"/>} />
      <Route path="/parfum" element={<ShopCategory banner={parfum_banner} category="parfum"/>} />
      <Route path="/soinVisage" element={<ShopCategory banner={soin_banner} category="SoinVisage"/>} />
      <Route path="/product" element={<Product/>} >
         <Route path=":productId" element={<Product/>} />
         </Route>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<LoginSignup/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
