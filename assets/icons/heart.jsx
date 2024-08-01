import React from "react";

const Heart = ({ className }) => {
  return (
    <svg
      width="27"
      height="26"
      className={className}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7651 3.22467C23.3891 1.74568 21.461 0.904153 19.4409 0.901034C17.4192 0.903374 15.4891 1.74445 14.111 3.22372L13.6413 3.72002L13.1716 3.22372C10.4371 0.280614 5.83439 0.111596 2.89134 2.84613C2.76093 2.96735 2.63497 3.09325 2.51375 3.22372C-0.387071 6.35261 -0.387071 11.1882 2.51375 14.3171L12.9511 25.3239C13.3122 25.7051 13.9139 25.7214 14.2951 25.3603C14.3076 25.3485 14.3198 25.3364 14.3316 25.3239L24.7651 14.3171C27.6657 11.1885 27.6657 6.35323 24.7651 3.22467ZM23.3894 13.0079H23.3884L13.6413 23.2883L3.8933 13.0079C1.67724 10.6171 1.67724 6.92273 3.8933 4.53197C5.90575 2.35078 9.30544 2.21401 11.4866 4.22646C11.5925 4.32418 11.6944 4.42607 11.7921 4.53197L12.9511 5.75464C13.333 6.13413 13.9496 6.13413 14.3316 5.75464L15.4905 4.53291C17.503 2.35172 20.9027 2.21496 23.0839 4.22741C23.1898 4.32512 23.2916 4.42701 23.3894 4.53291C25.6247 6.92746 25.6411 10.6286 23.3894 13.0079Z"
        fill="white"
      />
    </svg>
  );
};

export default Heart;