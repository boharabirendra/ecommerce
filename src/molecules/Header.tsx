import { useCallback, useEffect, useState } from "react";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { useAppSelector } from "../redux/hooks/hooks";
import { Link } from "react-router-dom";

type HeaderProps = {
  toggleCart: () => void;
};

const Header = ({ toggleCart }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const handleHamClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  /** Handle navbar on scroll */
  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsNavOpen(false);
      } else if (y < window.scrollY) {
        setIsNavOpen(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const { data } = useAppSelector((state) => state.cartProduct);
  const totalItems = data.reduce((accumulator, item) => {
    return accumulator + item.count;
  }, 0);

  return (
    <div className="header align-items-center">
      <div
        className={`header__left ${isNavOpen && "d-block"}`}
        onClick={handleHamClick}
      >
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
        <Button onClick={handleHamClick} id="p0-btn">
          <Image
            src={isNavOpen ? "/cross.png" : "/hamburger.png"}
            className="hamburger__img"
          />
        </Button>
        <Link to="/">
          <Image src="/Logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="header__right d-flex align-items-center">
        <Image src="/search.png" alt="Search Icon" />
        <Image src="/User.png" alt="User Icon" />
        <Image onClick={toggleCart} src="/cart.png" alt="Cart Icon" />
        {data.length > 0 && <span>({totalItems})</span>}
      </div>
    </div>
  );
};

export default Header;
