import Image from "../atoms/Image";
import { Link } from "react-router-dom";
import { category } from "../constants/category";

const Category = () => {
  return (
    <div className="category">
      <p>Shop by Category</p>
      <div className="category__items d-flex">
        {category.map((item, index) => (
          <div key={index} className="category__item d-flex">
            <Image src={item.src} alt="Category name" />
            <Link to="#">{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
