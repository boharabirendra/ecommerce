import { useState } from "react";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { useAppSelector } from "../redux/hooks/hooks";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useAppSelector((state) => state.cartProduct);
  const totalItems = data.reduce((accumulator, item) => {
    return accumulator + item.count;
  }, 0);

  const handleSidebarOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="header align-items-center">
      <div className="header__left" id={isOpen ? "d-block" : ""}>
        <Button onClick={handleSidebarOpen}>
          <Image src="/cross.png" className="cross__btn" />
        </Button>
        <div className="navbar">
          <ul className="navbar__items d-flex">
            <li
              id={
                window.location.href.includes("/products/female")
                  ? "active"
                  : ""
              }
            >
              <Link to="/products/female">Women</Link>
            </li>
            <li
              id={
                window.location.href.includes("/products/male") ? "active" : ""
              }
            >
              <Link to="/products/male">Men</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Everworld Stories</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__middle d-flex">
        <Button onClick={handleSidebarOpen} id="hamburger__btn">
          <Image src="/hamburger.png" id="hamburger__img" />
        </Button>
        <Link to="/">
          <Image src="/Logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="header__right d-flex align-items-center">
        <Image src="/search.png" alt="Search Icon" />
        <Image src="/User.png" alt="User Icon" />
        <Link to="/cart">
          <Image src="/cart.png" alt="Cart Icon" />
        </Link>
        {data.length > 0 && <span>({totalItems})</span>}
      </div>
    </div>
  );
};

export default Header;
