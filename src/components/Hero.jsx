import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[750px] hero">
      <div className="pt-40 flex flex-col items-center">
        <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
          Future of DevOps is{" "}
          <span className="text-[#D3FFCA] italic font-solitreo font-semibold">Green</span>
        </h1>
        <p className="mt-4 text-center text-white/60">
          AI-powered analytics to transform your GitHub pipelines—
          <br /> track inefficiencies, reduce emissions, and deploy with
          precision
        </p>
        <div className="mt-6 flex items-center gap-6">
          <button className="h-11 border border-white flex items-center gap-[10px] px-4 rounded-3xl">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 0C9.18678 0 7.88642 0.258658 6.67317 0.761205C5.45991 1.26375 4.35752 2.00035 3.42893 2.92893C1.55357 4.8043 0.5 7.34784 0.5 10C0.5 14.42 3.37 18.17 7.34 19.5C7.84 19.58 8 19.27 8 19V17.31C5.23 17.91 4.64 15.97 4.64 15.97C4.18 14.81 3.53 14.5 3.53 14.5C2.62 13.88 3.6 13.9 3.6 13.9C4.6 13.97 5.13 14.93 5.13 14.93C6 16.45 7.47 16 8.04 15.76C8.13 15.11 8.39 14.67 8.67 14.42C6.45 14.17 4.12 13.31 4.12 9.5C4.12 8.39 4.5 7.5 5.15 6.79C5.05 6.54 4.7 5.5 5.25 4.15C5.25 4.15 6.09 3.88 8 5.17C8.79 4.95 9.65 4.84 10.5 4.84C11.35 4.84 12.21 4.95 13 5.17C14.91 3.88 15.75 4.15 15.75 4.15C16.3 5.5 15.95 6.54 15.85 6.79C16.5 7.5 16.88 8.39 16.88 9.5C16.88 13.32 14.54 14.16 12.31 14.41C12.67 14.72 13 15.33 13 16.26V19C13 19.27 13.16 19.59 13.67 19.5C17.64 18.16 20.5 14.42 20.5 10C20.5 8.68678 20.2413 7.38642 19.7388 6.17317C19.2362 4.95991 18.4997 3.85752 17.5711 2.92893C16.6425 2.00035 15.5401 1.26375 14.3268 0.761205C13.1136 0.258658 11.8132 0 10.5 0Z"
                fill="white"
              />
            </svg>
            <span className="font-semibold">Connect Github</span>
          </button>
          <button className="h-11 bg-[#D3FFCA] text-black flex items-center gap-[10px] px-4 rounded-3xl shadowcustom">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_158_283)">
                <path
                  d="M0.5 6.875H4.625V8.25H0.5V6.875ZM7.375 0H8.75V4.125H7.375V0ZM8.75 15.125H7.375V11.6875L8.75 13.0625V15.125ZM15.625 8.25H13.5625L12.1875 6.875H15.625V8.25ZM4.80513 9.84637L5.77725 10.8185L1.6935 14.9023L0.721375 13.9301L4.80513 9.84637ZM14.4301 0.221375L15.4023 1.1935L11.3185 5.27725L10.3464 4.30513L14.4301 0.221375ZM1.6495 0.273625L6.41388 5.038L5.44175 6.01012L0.677375 1.24575L1.6495 0.273625ZM8.8875 5.6375L6 8.3875L19.475 22L22.5 19.1125L8.8875 5.6375ZM8.8875 7.5625L12.1875 11L11.3625 11.825L7.925 8.3875L8.8875 7.5625Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_158_283">
                  <rect
                    width="22"
                    height="22"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold">Optimize Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}
