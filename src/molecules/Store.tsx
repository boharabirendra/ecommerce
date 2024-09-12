import Image from "../atoms/Image";
import { stores } from "../constants/store";

const Store = () => {
  return (
    <div className="store">
      <div className="store__top">
        <div className="store__top--title">
          <h2>Stores</h2>
        </div>
        <div className="store__top--subtitle">
          <p>Find one of our 11 stores nearest you.</p>
        </div>
      </div>
      <div className="store__content d-flex">
        {stores.map((product, index) => (
          <div key={index} className="store__content--item">
            <Image src={product.image} className="store__content--img" />
            <p className="store__content--state">{product.city}</p>
            <p className="store__content--name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
