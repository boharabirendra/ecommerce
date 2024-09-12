import Image from "../atoms/Image";
import Dots from "./Dots";

const Review = () => {
  return (
    <>
      <div className="review d-flex justify-content-center align-items-center">
        <div className="review__left d-flex">
          <div className="review__left__top">
            <p>People Are Talking</p>
          </div>
          <div className="review__left__middle">
            <div className="review__left__middle--star">
              <Image src="starimage.png" />
            </div>
            <div className="review__left__middle--text">
              <p>
                “Love this shirt! Fits perfectly and the fabric is thick without
                being stiff.”
              </p>
            </div>
          </div>
          <div className="review__left__bottom">
            <p>
              -- JonSnSF,{" "}
              <span className="review__left__bottom--underline">
                The Heavyweight Overshirt
              </span>
            </p>
          </div>
        </div>
        <div className="review__right">
          <Image src="/review.png" alt="Fashion" />
        </div>
      </div>
      <Dots />
    </>
  );
};

export default Review;
