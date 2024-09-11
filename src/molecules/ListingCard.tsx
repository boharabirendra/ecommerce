import { Link } from "react-router-dom";
import Image from "../atoms/Image";
import { ProductType } from "../redux/slice/productsSlice";

const ListingCard = ({ id, image, title, price }: ProductType) => {
  return (
    <div className="listcard">
      <Link to={`/product/${id}`}>
        <figure>
          <Image src={image} alt={title} />
          <figcaption className="listcard__info d-flex justify-content-between">
            <p className="listcard__name">{title}</p>
            <div className="listcard__price d-flex align-items-center">
              <p className="listcard__price--old">${price}</p>
              <p className="listcard__price--new">
                ${(Number(price) * 0.3).toFixed(2)}
              </p>
            </div>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default ListingCard;
