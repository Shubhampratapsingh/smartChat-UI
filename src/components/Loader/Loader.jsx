import React from "react";

const Loader = ({
  text = "Loading...",
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorVariants = {
    primary: "border-blue-600",
    gray: "border-gray-600",
    red: "border-red-600",
    green: "border-green-600",
    purple: "border-purple-600",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center py-10 min-h-[50vh] ${className}`}
      {...props}
    >
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${
          sizeClasses[size]
        } ${colorVariants[variant] || colorVariants.primary}`}
      />
      <p className="mt-4 text-gray-500 text-sm">{text}</p>
    </div>
  );
};

export default Loader;
