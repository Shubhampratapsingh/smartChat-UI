import React from "react";

const Loader = ({
  text = "Loading...",
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "spinner-border-sm",
    md: "",
    lg: "fs-1",
  };

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center py-5 ${className}`}
      style={{ minHeight: "50vh" }}
      {...props}
    >
      <div
        className={`spinner-border text-${variant} ${sizeClasses[size]}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 mb-0 text-muted">{text}</p>
    </div>
  );
};

export default Loader;
