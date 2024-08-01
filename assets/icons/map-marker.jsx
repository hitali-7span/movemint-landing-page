import React from "react";

const MapMarker = ({ className }) => {
  return (
    <svg
      width="63"
      height="65"
      viewBox="0 0 63 65"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.40271"
        y="0.337769"
        width="62.5157"
        height="63.8458"
        rx="17.2916"
        fill="#F0BB1F"
      />
      <path
        d="M31.5 8.99988C21.2883 9.00954 13.0099 17.0961 13 27.0711C13 39.8304 27.6087 52.7494 29.2743 54.1828C30.5482 55.2723 32.4518 55.2723 33.7257 54.1828C35.3913 52.7494 50 39.8304 50 27.0711C49.9901 17.0961 41.7117 9.00954 31.5 8.99988ZM31.5 33.6468C27.7822 33.6468 24.7732 30.7028 24.7732 27.0711C24.7732 23.4442 27.7822 20.5002 31.5 20.5002C35.2178 20.5002 38.2268 23.4442 38.2268 27.0711C38.2268 30.7028 35.2178 33.6468 31.5 33.6468Z"
        fill="black"
      />
    </svg>
  );
};

export default MapMarker;