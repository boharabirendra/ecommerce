import Image from "../atoms/Image";
import { useEffect } from "react";
import { fetchCategories } from "../redux/slice/categorySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import Link from "../atoms/Link";
import CategorySkeleton from "../skeleton/skeletons";

const Category = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.category);
  console.log(data);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) {
    return <CategorySkeleton />;
  }

  return (
    <div className="category">
      <p>Shop by Category</p>
      <div className="category__items d-flex">
        {data &&
          data.map((item, index) => (
            <div key={index} className="category__item d-flex">
              {!item.image.includes("any") && (
                <>
                  <Image
                    src={item.image.includes("any") ? "/image.png" : item.image}
                    alt="Category name"
                  />
                  <Link href="#">{item.name}</Link>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
