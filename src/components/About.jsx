import React from "react";

export default function About() {
  return (
    <div className="text-center py-20">
      <button className="bg-green/10 py-3 px-4 rounded-3xl text-green">
        About Optimzer
      </button>
      <div className="mt-6 text-[40px] tracking-tight pb-40">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 leading-[52px]">
          We make GitHub workflows faster, smarter, and
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 leading-[52px]">
          greener. Our AI optimizes CI/CD pipelines to
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 leading-[52px]">
          reduce execution time and carbon footprint—
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 leading-[52px]">
          so you ship code efficiently without extra <span className="text-green italic font-solitreo">effort</span>.
        </p>
      </div>
    </div>
  );
}
