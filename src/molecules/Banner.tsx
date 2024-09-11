import Image from "../atoms/Image";
import Link from "../atoms/Link";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-between align-items-center">
      <div className="banner__middle d-flex align-items-center">
        <p>Get early access on launches and offers.</p>
        <Link href="#" className="d-flex align-items-center">
          Sign Up For Texts
          <Image src="/ArrowRight.png" alt="Right Arrow" />
        </Link>
      </div>
      <div className="banner__right d-flex align-items-center">
        <Image src="/usa.png" alt="USA Flag" />
        usd
      </div>
    </div>
  );
};

export default Banner;
