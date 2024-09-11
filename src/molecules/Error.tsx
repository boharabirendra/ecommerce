import Image from "../atoms/Image";

type ErrorProps = {
  message?: string;
};

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="error d-flex align-items-center">
      <div className="error__img">
        <Image src="/warning.png" />
      </div>
      <div className="error__text">
        <h1>{message ? message : " Error while fetching data."}</h1>
      </div>
    </div>
  );
};

export default Error;
