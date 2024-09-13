import { Outlet } from "react-router-dom";
import Banner from "../molecules/Banner";
import Header from "../molecules/Header";
import SubHeading from "../molecules/SubHeading";
import { useState } from "react";
import Cart from "../molecules/Cart";
import Footer from "../molecules/Footer";
import ErrorBoundary from "../molecules/ErrorBoundary";

const MainLayout = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <header>
        <Banner />
        <Header toggleCart={toggleCart} />
        <SubHeading />
      </header>
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <footer>
        <Footer />
      </footer>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      {isCartOpen && <div className="backdrop" onClick={toggleCart}></div>}
    </div>
  );
};

export default MainLayout;
