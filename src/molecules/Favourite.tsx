import Image from "../atoms/Image";
import { favourite } from "../constants/favourite";

const Favourite = () => {
  return (
    <div className="favourite">
      <div className="favourite__top">
        <p className="favourite__top--title">Everlane Favorites</p>
        <p className="fovourite__top--subtitle">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </p>
      </div>
      <div className="favourite__content d-flex align-items-center justify-content-center">
        <Image src="/CaretLeft.png" />
        {favourite.map((product, index) => (
          <div key={index} className="favourite__content__item">
            <Image src={product.image} />
            <div className="favourite__content__item__info d-flex justify-content-between">
              <p className="favourite__content__item__info--name">
                {product.name}
              </p>
              <p className="favourite__content__item__info--price">
                ${product.price}
              </p>
            </div>
            <div className="favourite__content__item--color">
              {product.color}
            </div>
          </div>
        ))}
        <Image src="/CaretRight.png" />
      </div>
      <div className="favourite__bottom d-flex justify-content-center">
        <span className="favourite__bottom__item favourite__bottom__item--dark"></span>
        <span className="favourite__bottom__item"></span>
        <span className="favourite__bottom__item"></span>
        <span className="favourite__bottom__item"></span>
      </div>
    </div>
  );
};

export default Favourite;
