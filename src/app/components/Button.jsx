// Button.jsx
import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant, children, onClick }) => {
  const variantClasses = {
    blue: "text-white bg-blue-500 hover:bg-blue-700",
    red: "bg-red-500 hover:bg-red-700",
    green: "bg-green-500 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-700",
    default: "border border-blue-500",
  };

  const bgColorClass = variantClasses[variant] || variantClasses.default;

  return (
    <button
      className={`text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${bgColorClass}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["blue", "red", "green", "yellow"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "default",
  onClick: () => {},
};

export default Button;
