// import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { CategoryWithText } from "../constants/categorywithtext";

type categoryTextProps = {
  src: string;
  text: string;
  buttonText: string;
};
const CategoryText = ({}: categoryTextProps) => {
  return (
    <div className="categorywithtext d-flex">
      {CategoryWithText.map((category, index) => (
        <div key={index}>
          <Image src={category.src} alt="Category text" />
          {/* <div className="categorywithtext__info d-flex justify-content-between align-items-center">
          <p>{text}</p>
          <Button className="w-fixed">{buttonText}</Button>
        </div> */}
        </div>
      ))}
    </div>
  );
};

export default CategoryText;
