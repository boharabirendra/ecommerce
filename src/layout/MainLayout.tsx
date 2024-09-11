import { Outlet } from "react-router-dom";
import Banner from "../molecules/Banner";
import Header from "../molecules/Header";
import SubHeading from "../molecules/SubHeading";
import { useState } from "react";
import Cart from "../molecules/Cart";

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
        <Outlet />
      </main>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      {isCartOpen && <div className="backdrop" onClick={toggleCart}></div>}
    </div>
  );
};

export default MainLayout;
