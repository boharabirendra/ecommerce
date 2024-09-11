import { Link } from "react-router-dom";
import Button from "../atoms/Button";

const Hero = () => {
  return (
    <div className="hero d-flex">
      <div className="hero__text d-flex">
        <h1>Your Cozy Era</h1>
        <div>
          <p>Get peak comfy-chic </p>
          <p>with new winter essentials.</p>
        </div>

        <Link to="/products/male">
          <Button className="w-fixed">SHOP NOW</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
