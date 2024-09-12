import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./molecules/ProductDetails";
import MansProduct from "./molecules/MensProducts";
import WomansProduct from "./molecules/Women'sProducts";
import MainLayout from "./layout/MainLayout";
import About from "./molecules/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/shop" element={<MansProduct />}></Route>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products/female" element={<WomansProduct />} />
            <Route path="/products/male" element={<MansProduct />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
