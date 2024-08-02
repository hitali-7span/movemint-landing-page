import React from "react";

const Star = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.1028 4.49961C11.4696 3.75645 12.5294 3.75645 12.8962 4.49961L14.8571 8.47207C15.0026 8.76692 15.2838 8.97138 15.6091 9.01894L19.9957 9.6601C20.8156 9.77994 21.1424 10.7878 20.5488 11.3659L17.3763 14.456C17.1404 14.6857 17.0328 15.0169 17.0884 15.3414L17.8369 19.7056C17.9771 20.5226 17.1195 21.1455 16.3859 20.7597L12.465 18.6978C12.1736 18.5445 11.8254 18.5445 11.5341 18.6978L7.61314 20.7597C6.87952 21.1455 6.02197 20.5226 6.16208 19.7056L6.9106 15.3414C6.96626 15.0169 6.8586 14.6857 6.62272 14.456L3.45019 11.3659C2.8566 10.7878 3.18338 9.77994 4.0033 9.6601L8.38988 9.01894C8.71523 8.97138 8.99642 8.76692 9.14196 8.47207L11.1028 4.49961Z"
        fill="#E9AA31"
      />
    </svg>
  );
};

export default Star;
