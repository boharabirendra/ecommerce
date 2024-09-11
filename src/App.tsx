import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./molecules/ProductDetails";
import Cart from "./molecules/Cart";
import MansProduct from "./molecules/MensProducts";
import WomansProduct from "./molecules/Women'sProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<MansProduct />}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products/female" element={<WomansProduct />} />
          <Route path="/products/male" element={<MansProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
