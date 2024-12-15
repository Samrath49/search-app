import React from "react";

const Camera = () => {
  return (
    <svg
      xmlSpace="preserve"
      width="192"
      height="192"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="144.07" cy="144" r="16" fill="#34A853" />
      <circle cx="96.07" cy="104" r="24" fill="#4285F4" />
      <path
        fill="#EA4335"
        d="M24 135.2c0 18.11 14.69 32.8 32.8 32.8H96v-16l-40.1-.1c-8.8 0-15.9-8.19-15.9-17.9v-18H24v19.2z"
      />
      <path
        fill="#FBBC04"
        d="M168 72.8c0-18.11-14.69-32.8-32.8-32.8H116l20 16c8.8 0 16 8.29 16 18v30h16V72.8z"
      />
      <path
        fill="#4285F4"
        d="M112 24H80L68 40H56.8C38.69 40 24 54.69 24 72.8V92h16V74c0-9.71 7.2-18 16-18h80l-24-32z"
      />
    </svg>
  );
};

export default Camera;