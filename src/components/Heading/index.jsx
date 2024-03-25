import React from "react";

const sizes = {
  "3xl": "text-[64px] font-bold leading-[72px] md:text-5xl",
  "2xl": "text-[56px] font-bold leading-[68px] md:text-5xl sm:text-[42px]",
  xl: "text-5xl font-bold leading-[56px] md:text-[44px] sm:text-[38px]",
  "5xl": "text-[102px] font-bold leading-[123px] md:text-5xl",
  "4xl": "text-7xl font-bold leading-[80px] md:text-5xl",
  s: "text-[28px] font-bold leading-9 md:text-[26px] sm:text-2xl",
  md: "text-[32px] font-bold leading-[39px] md:text-3xl sm:text-[28px]",
  xs: "text-2xl font-bold leading-8 md:text-[22px]",
  lg: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-bahnschrift ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
