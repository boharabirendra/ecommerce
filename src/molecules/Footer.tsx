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
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Redeem a Gift Card</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Environmental Initiatives</a>
            </li>
            <li>
              <a href="#">Factories</a>
            </li>
            <li>
              <a href="#">DEI</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">International</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Get Help</h3>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Info</a>
            </li>
            <li>
              <a href="#">Bulk Orders</a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Our Stores</a>
            </li>
          </ul>
        </div>

        <div className="footer__subscribe d-flex align-items-center">
          <input type="email" placeholder="Email Address" />
          <Button typeof="submit" className="d-flex justify-content-center">
            <Image src="/ArrowRight.png" />
          </Button>
        </div>
      </div>

      <div className="footer__bottom d-flex">
        <ul className="footer__legal">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Do Not Sell or Share My Personal Information</a>
          </li>
          <li>
            <a href="#">CS Supply Chain Transparency</a>
          </li>
          <li>
            <a href="#">Vendor Code of Conduct</a>
          </li>
          <li>
            <a href="#">Sitemap Pages</a>
          </li>
          <li>
            <a href="#">Sitemap Products</a>
          </li>
        </ul>
        <p>© 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
