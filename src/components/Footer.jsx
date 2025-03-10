import React from "react";

export default function Footer() {
  return (
    <div>
      {/* <div className="w-[241px] h-[241px] bg-green blur-[300px]  absolute gradientPosition"></div> */}
      <div className="py-20 text-center flex flex-col items-center ">
        <p className="text-[40px] leading-[52px] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 tracking-tight ">
          Unlock efficiency with one{" "}
          <span className="font-solitreo text-green">click!</span>
        </p>
        <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
          <p>Reduce carbon footprint and streamline development. Paste your</p>
          <p>GitHub repo or connect your account for optimized workflow</p>
        </div>
        <button className="mt-6 font-semibold leading-[20px] flex items-center gap-2  bg-[#D3FFCA] text-black h-12 px-6 rounded-xl shadowcustom">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 0C9.18678 0 7.88642 0.258658 6.67317 0.761205C5.45991 1.26375 4.35752 2.00035 3.42893 2.92893C1.55357 4.8043 0.5 7.34784 0.5 10C0.5 14.42 3.37 18.17 7.34 19.5C7.84 19.58 8 19.27 8 19V17.31C5.23 17.91 4.64 15.97 4.64 15.97C4.18 14.81 3.53 14.5 3.53 14.5C2.62 13.88 3.6 13.9 3.6 13.9C4.6 13.97 5.13 14.93 5.13 14.93C6 16.45 7.47 16 8.04 15.76C8.13 15.11 8.39 14.67 8.67 14.42C6.45 14.17 4.12 13.31 4.12 9.5C4.12 8.39 4.5 7.5 5.15 6.79C5.05 6.54 4.7 5.5 5.25 4.15C5.25 4.15 6.09 3.88 8 5.17C8.79 4.95 9.65 4.84 10.5 4.84C11.35 4.84 12.21 4.95 13 5.17C14.91 3.88 15.75 4.15 15.75 4.15C16.3 5.5 15.95 6.54 15.85 6.79C16.5 7.5 16.88 8.39 16.88 9.5C16.88 13.32 14.54 14.16 12.31 14.41C12.67 14.72 13 15.33 13 16.26V19C13 19.27 13.16 19.59 13.67 19.5C17.64 18.16 20.5 14.42 20.5 10C20.5 8.68678 20.2413 7.38642 19.7388 6.17317C19.2362 4.95991 18.4997 3.85752 17.5711 2.92893C16.6425 2.00035 15.5401 1.26375 14.3268 0.761205C13.1136 0.258658 11.8132 0 10.5 0Z"
              fill="#101311"
            />
          </svg>
          Connect your GitHub account
        </button>
      </div>
     
    </div>
  );
}
