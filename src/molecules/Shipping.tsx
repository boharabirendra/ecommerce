import Image from "../atoms/Image";
import { shipping } from "../constants/shipping";

const Shipping = () => {
  return (
    <div className="shipping d-flex justify-content-center">
      {shipping.map((product, index) => (
        <div
          key={index}
          className="shipping__item d-flex align-items-center justify-content-center"
        >
          <div className="shipping__item--img">
            <Image src={product.src} />
          </div>
          <div className="shipping__item--title">{product.title}</div>
          <div className="shipping__item--text">{product.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Shipping;
