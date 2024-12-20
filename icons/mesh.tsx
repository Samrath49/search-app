import React from "react";

const Mesh = ({ className = "" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="1.75" fill="white" />
      <circle cx="12" cy="6" r="1.75" fill="white" />
      <circle cx="18" cy="6" r="1.75" fill="white" />
      <circle cx="6" cy="12" r="1.75" fill="white" />
      <circle cx="12" cy="12" r="1.75" fill="white" />
      <circle cx="18" cy="12" r="1.75" fill="white" />
      <circle cx="6" cy="18" r="1.75" fill="white" />
      <circle cx="12" cy="18" r="1.75" fill="white" />
      <circle cx="18" cy="18" r="1.75" fill="white" />
    </svg>
  );
};

export default Mesh;
