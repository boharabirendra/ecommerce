import Image from "../atoms/Image";

const Everlane = () => {
  return (
    <div className="everlane">
      <div className="everlane__top">
        <div className="everlane__top--title">Everlane On You</div>
        <div className="everlane__top--text">
          Share your latest look with #EverlaneOnYou for a chance to be
          featured.
        </div>
        <div className="everlane__top--subtitle">Add Your Photo</div>
      </div>
      <div className="everlane__content d-flex justify-content-center align-items-center">
        <Image src="ever1.png" />
        <Image src="ever2.png" />
        <Image src="ever3.png" />
        <Image src="ever4.png" />
        <Image src="ever5.png" />
      </div>
    </div>
  );
};

export default Everlane;
