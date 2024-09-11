import clsx from "clsx";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {};

const Image = ({ className, ...props }: ImageProps) => {
  return <img {...props} className={clsx("image", className)} />;
};

export default Image;
