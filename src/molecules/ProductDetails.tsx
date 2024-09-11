import { useParams } from "react-router-dom";
import Image from "../atoms/Image";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { useEffect } from "react";
import { fetchProductDetail } from "../redux/slice/productDetailSlice";
import { ProductDetailSkeleton } from "../skeleton/skeletons";
import Button from "../atoms/Button";
import { fetchCartAddedProduct } from "../redux/slice/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.productDetail);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    dispatch(fetchProductDetail(url));
  }, [dispatch]);

  const handleAddCart = () => {
    dispatch(fetchCartAddedProduct(id));
  };

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <>
      <div className="productDetails d-flex">
        <figure className="productDetails__img">
          <Image src={data.image} alt={data.title} />
        </figure>
        <div className="productDetails__right d-flex">
          <div className="productDetails__info d-flex">
            <p className="productDetails__name">{data.title}</p>
            <div className="productDetails__price d-flex">
              <span className="productDetails__price--old">${data.price}</span>
              <span className="productDetails__price--new">
                ${(Number(data.price) * 0.3).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="productDetails__rating d-flex">
            <div className="productDetails__rating--img d-flex">
              {/* Rendering the number of stars base the rating number */}
              {Array(Math.trunc(data.rating.rate))
                .fill(0)
                .map((_, index) => (
                  <Image key={index} src="/star.png" />
                ))}
            </div>
            <div className="productDetails__rating--reviews">
              {data.rating.rate} ({data.rating.count} reviews)
            </div>
          </div>
          <p className="productDetails__description">{data.description}</p>
          <Button
            onClick={handleAddCart}
            variant="secondary"
            className="add__to_cart__btn"
          >
            add to bag
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
