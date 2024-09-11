import { cva } from "class-variance-authority";
import clsx from "clsx";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

const buttonVariant = cva("btn", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = ({ className, variant, disabled, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        buttonVariant({ variant }),
        disabled && "disabled",
        className
      )}
      disabled={disabled}
    />
  );
};

export default Button;
