import React from "react";
import PropTypes from "prop-types";

// Object mapping for different button shapes
const shapes = { square: "rounded-none", round: "rounded-[10px]" };

// Object mapping for different button variants and their color schemes
const variants = {
  fill: {
    red_400: "bg-red-400 text-white-A700",
    red_400_01: "bg-red-400_01 text-white-A700",
    teal_900: "bg-teal-900 text-white-A700",
  },
};

// Object mapping for different button sizes
const sizes = { xs: "p-3.5", sm: "p-[21px] sm:px-5", md: "p-[27px] sm:px-5" };

// Button component definition
const Button = ({
  children, // Button text or elements
  className = "", // Additional CSS classes for the button
  leftIcon, // Icon to be displayed to the left of the button text
  rightIcon, // Icon to be displayed to the right of the button text
  shape = "", // Shape of the button, e.g., 'square' or 'round'
  size = "", // Size of the button, e.g., 'xs', 'sm', 'md'
  variant = "", // Variant of the button, e.g., 'fill'
  color = "", // Color scheme of the button, e.g., 'red_400'
  ...restProps // Other props
}) => {
  return (
    <button
      // Constructing className based on the shape, size, variant, and color props
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps} // Spreading the rest of the props
    >
      {!!leftIcon && leftIcon} {/* Render left icon if it exists */}
      {children} {/* Button content */}
      {!!rightIcon && rightIcon} {/* Render right icon if it exists */}
    </button>
  );
};

// PropTypes for type checking of props
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["red_400", "red_400_01", "teal_900"]),
};

// Exporting the Button component
export { Button };
