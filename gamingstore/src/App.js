import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage1 from "./pages/homepage1/Homepage1";
import Homepage2 from "./pages/homepage2/Homepage2";
import Homepage3 from "./pages/homepage3/Homepage3";
import Action from "./pages/action&adventure/Action";
import Sports from "./pages/sports/Sports";
import KidsFamily from "./pages/kids&family/KidsFamily";
import BlogRight from "./pages/blogright/BlogRight";
import BlogFullWidth from "./pages/blogfullwidth/BlogFullWidth";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import ShoppingCart from "./pages/shoppingcart/ShoppingCart";
import ProductDetail from "./pages/productdetail/ProductDetail";
import BlogLeft from "./pages/blogleft/BlogLeft";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import { ShopContextProvider } from "./context/shopcontext";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/homepage1" element={<Homepage1 />} />
            <Route path="/homepage2" element={<Homepage2 />} />
            <Route path="/homepage3" element={<Homepage3 />} />
            <Route path="/adventure" element={<Action />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/kids" element={<KidsFamily />} />
            <Route path="/blogleft" element={<BlogLeft />} />
            <Route path="/blogright" element={<BlogRight />} />
            <Route path="/blogfull" element={<BlogFullWidth />} />
            <Route path="/blogdetail" element={<BlogDetail />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
