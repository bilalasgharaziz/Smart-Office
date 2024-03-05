import React from "react";

// sizeClasses is an object mapping size-related class names to their respective CSS class definitions.
// These are used for typography styling like font weight and font family.

const sizeClasses = {
  txtMerriweatherBlack100: "font-black font-merriweather",
  txtMerriweatherSansRomanLight32: "font-light font-merriweathersans",
  txtMerriweatherSansRomanLight24Black900: "font-light font-merriweathersans",
  txtMerriweatherLight48: "font-light font-merriweather",
  txtMerriweatherBlack24: "font-black font-merriweather",
  txtMerriweatherSansRomanLight36: "font-light font-merriweathersans",
  txtMerriweatherBlack48: "font-black font-merriweather",
  txtMerriweatherSansRomanLight24: "font-light font-merriweathersans",
  txtMerriweatherBlack24Black900: "font-black font-merriweather",
  txtMerriweatherSansRomanRegular24: "font-merriweathersans font-normal",
};

// This is a functional component named 'Text'.
// It is designed to render text with customizable styles and semantics.
// The component accepts 'children', 'className', 'size', 'as', and any additional props.

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p"; // Determines the HTML element to be used, defaulting to 'p' if 'as' is not provided.

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text }; // Exports the Text component for use in other parts of the application.
