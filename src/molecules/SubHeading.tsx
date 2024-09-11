import Link from "../atoms/Link";
import { subheadings } from "../constants/subheading";

const SubHeading = () => {
  return (
    <div className="subheading d-flex">
      <ul className="d-flex align-items-center">
        {subheadings.map((subheading, index) => (
          <li key={index}>
            <Link href={subheading.href}>{subheading.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubHeading;
