import ListingCard from "./ListingCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../redux/slice/productsSlice";
import { ProductSkeleton } from "../skeleton/skeletons";

const WomansProduct = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts("women's clothing"));
  }, [dispatch]);

  if (isLoading) {
    return <ProductSkeleton />;
  }

  return (
    <div className="shopproduct">
      <div className="shopproduct__text">
        <p className="shopproduct__text--top">Home / Women</p>
        <h1 className="shopproduct__text--middle">
          Women's Clothing & Apparel - New Arrivals
        </h1>
        <p className="shopproduct__text--bottom">Featured</p>
      </div>
      <div className="shopproduct__products d-flex">
        {data.map((product, index) => (
          <ListingCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default WomansProduct;
