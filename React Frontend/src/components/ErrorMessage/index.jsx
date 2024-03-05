import React from "react";

// ErrorMessage component definition
export const ErrorMessage = ({
  errors = [], // Array of error messages
  className = "" // Additional CSS classes for the error message container
}) => {
  return (
    // Conditional rendering: Only render if there are errors
    errors?.length > 0 && (
      <div
        // Styling for the error message container. 
        // Combines default styles with any additional styles passed through className.
        className={`text-red-500 text-left text-xs w-full mt-1 ${className}`}
      >
        {errors.join(", ")} {/* Joining all error messages into a single string separated by commas */}
      </div>
    )
  );
};
