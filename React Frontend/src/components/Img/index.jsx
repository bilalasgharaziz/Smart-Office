import React from "react";

// This is a functional component named 'Img' that is used for rendering images.
// It takes several props including className, src, alt, and any additional props passed to it.

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
