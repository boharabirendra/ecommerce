type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {};

const Link = ({ className, ...props }: LinkProps) => {
  return <a {...props} className={className} />;
};

export default Link;
