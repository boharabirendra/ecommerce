const CategorySkeleton = () => {
  return (
    <div className="skeleton__container d-flex align-items-center">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="category__skeleton">
            <div></div>
            <p></p>
          </div>
        ))}
    </div>
  );
};

export default CategorySkeleton;

export const ProductSkeleton = () => {
  return (
    <div className="product__skeleton d-flex">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <CategorySkeleton key={index} />
        ))}
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="productdetail__skeleton d-flex">
      <div className="productdetail__skeleton__left"></div>
      <div className="productdetail__skeleton__right right d-flex">
        <div className="right__title__price d-flex">
          <div className="right__title"></div>
          <div className="right__price"></div>
        </div>
        <div className="right__rating rating d-flex">
          <div className="rating__star"></div>
          <div className="rating__review"></div>
        </div>
        <div className="right__description"></div>
      </div>
    </div>
  );
};
