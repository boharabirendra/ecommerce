import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Image from "../atoms/Image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container d-flex justify-content-center">
        <div className="footer__column">
          <h3>Account</h3>
          <ul>
            <li>
              <Link to="#">Log In</Link>
            </li>
            <li>
              <Link to="#">Sign Up</Link>
            </li>
            <li>
              <Link to="#">Redeem a Gift Card</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Environmental Initiatives</Link>
            </li>
            <li>
              <Link to="#">Factories</Link>
            </li>
            <li>
              <Link to="#">DEI</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">International</Link>
            </li>
            <li>
              <Link to="#">Accessibility</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Get Help</h3>
          <ul>
            <li>
              <Link to="#">Help Center</Link>
            </li>
            <li>
              <Link to="#">Return Policy</Link>
            </li>
            <li>
              <Link to="#">Shipping Info</Link>
            </li>
            <li>
              <Link to="#">Bulk Orders</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Connect</h3>
          <ul>
            <li>
              <Link to="#">Facebook</Link>
            </li>
            <li>
              <Link to="#">Instagram</Link>
            </li>
            <li>
              <Link to="#">Twitter</Link>
            </li>
            <li>
              <Link to="#">Affiliates</Link>
            </li>
            <li>
              <Link to="#">Our Stores</Link>
            </li>
          </ul>
        </div>

        <div className="footer__subscribe d-flex align-items-center">
          <input type="email" placeholder="Email Address" />
          <Button
            typeof="submit"
            className="d-flex justify-content-center align-items-center"
          >
            <Image src="/ArrowRight.png" />
          </Button>
        </div>
      </div>

      <div className="footer__bottom d-flex">
        <ul className="footer__legal">
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#">Terms of Service</Link>
          </li>
          <li>
            <Link to="#">Do Not Sell or Share My Personal Information</Link>
          </li>
          <li>
            <Link to="#">CS Supply Chain Transparency</Link>
          </li>
          <li>
            <Link to="#">Vendor Code of Conduct</Link>
          </li>
          <li>
            <Link to="#">Sitemap Pages</Link>
          </li>
          <li>
            <Link to="#">Sitemap Products</Link>
          </li>
        </ul>
        <p>© 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
