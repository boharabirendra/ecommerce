import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { latest } from "../constants/latest";
import { progress } from "../constants/progress";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="blog__top d-flex justify-content-center">
          <Image src="/line.png" className="blog__top--img" />
          <h1 className="blog__top--title">everworld</h1>
          <div className="blog__top__desc">
            <p className="blog__top__desc--text">
              We’re on a mission to clean up a dirty industry.{" "}
            </p>
            <p className="blog__top__desc--text">
              These are the people, stories, and ideas that will help us get
              there.
            </p>
          </div>
        </div>

        <div className="blog__latest">
          <h1 className="blog__latest--title">The Latest</h1>
          <div className="blog__latest__items d-flex">
            {latest.map((product, index) => (
              <div key={index} className="blog__latest__item">
                <Image src={product.src} className="blog__latest__item--img" />
                <h1 className="blog__latest__item--title">{product.title}</h1>
                <Button id="blog__latest__item--btn">{product.btnText}</Button>
              </div>
            ))}
          </div>
          <div className="blog__latest__btn">
            <Button
              variant="secondary"
              className="rounded-sm w-fixed"
              id="loadmore--btn"
            >
              Load more Articals
            </Button>
          </div>
        </div>

        <div className="blog__keep">
          <Image src="/keep.png" />
        </div>

        <div className="blog__progress">
          <h1 className="blog__progress--title">Our Progress</h1>
          <div className="blog__progress__items d-flex">
            {progress.map((product, index) => (
              <div key={index} className="blog__progress__item">
                <Image
                  src={product.src}
                  className="blog__progress__item--img"
                />
                <p className="blog__progress__item--text">{product.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="social">
        <h1 className="social--title">Follow us on social for more</h1>
        <Button id="social--btn">@Everlane Instagram</Button>
      </div>
    </>
  );
};

export default Blog;
