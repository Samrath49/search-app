import React from "react";

const Camera = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={className}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="#34a853"
        cx="144.07"
        cy="144"
        r="16"
        d="M20.009 18A2 2 0 0 1 18.009 20A2 2 0 0 1 16.009 18A2 2 0 0 1 20.009 18z"
      />
      <path
        fill="#4285f4"
        cx="96.07"
        cy="104"
        r="24"
        d="M15.009 13A3 3 0 0 1 12.009 16A3 3 0 0 1 9.009 13A3 3 0 0 1 15.009 13z"
      />
      <path
        fill="#ea4335"
        d="M3 16.9c0 2.264 1.836 4.1 4.1 4.1H12v-2l-5.013 -0.013c-1.1 0 -1.988 -1.024 -1.988 -2.237v-2.25H3z"
      />
      <path
        fill="#fbbc04"
        d="M21 9.1c0 -2.264 -1.836 -4.1 -4.1 -4.1H14.5l2.5 2c1.1 0 2 1.036 2 2.25v3.75h2z"
      />
      <path
        fill="#4285f4"
        d="M14 3H10L8.5 5H7.1C4.836 5 3 6.836 3 9.1V11.5h2V9.25c0 -1.214 0.9 -2.25 2 -2.25h10z"
      />
    </svg>
  );
};

export default Camera;
