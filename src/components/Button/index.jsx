import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[30px]",
};
const variants = {
  outline: {
    cyan_300: "border-cyan-300 border border-solid text-cyan-300",
  },
  fill: {
    cyan_300: "bg-cyan-300 text-blue_gray-900",
  },
};
const sizes = {
  xs: "h-[48px] px-6 text-lg",
  sm: "h-[60px] px-[35px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "cyan_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-lg border-cyan-300 border border-solid ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["cyan_300"]),
};

export { Button };
