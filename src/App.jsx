
import Navbar from './components/navbar/navbar'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/cart'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/maquillage" element={<ShopCategory category="maquillage"/>} />
      <Route path="/parfum" element={<ShopCategory category="parfum"/>} />
      <Route path="/soinVisage" element={<ShopCategory category="soinVisage"/>} />
      <Route path="/product" element={<Product/>} />
      <Route path=":productId" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<LoginSignup/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
