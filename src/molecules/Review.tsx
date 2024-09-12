import Image from "../atoms/Image";

const Review = () => {
  return (
    <div className="review__container d-flex justify-content-between">
      <div className="left__section"></div>
      <div className="right__section">
        <Image src="/review.png" alt="Fashion" />
      </div>
    </div>
  );
};

export default Review;
