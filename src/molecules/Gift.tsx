import { Link } from "react-router-dom";
import Image from "../atoms/Image";

const Gift = () => {
  return (
    <div className="gift d-flex justify-content-center">
      <div className="gift__item d-flex align-items-center">
        <div className="gift__item--title">
          <p>Our Holiday Gift Picks</p>
        </div>
        <div className="gift__item--img">
          <Image src="/gift1.png" />
        </div>
        <div className="gift__item--desc">
          <p>The best presents for everyone on your list.</p>
        </div>
        <div className="gift__item--more">
          <Link to="$">Read More</Link>
        </div>
      </div>
      <div className="gift__item d-flex align-items-center">
        <div className="gift__item--title">
          <p>Cleaner Fashion</p>
        </div>
        <div className="gift__item--img">
          <Image src="/gift2.png" />
        </div>
        <div className="gift__item--desc">
          <p>See the sustainability efforts behind each of our products.</p>
        </div>
        <div className="gift__item--more">
          <Link to="$">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Gift;
