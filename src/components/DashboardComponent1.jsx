import Image from "next/image";
import React from "react";

export default function DashboardComponent1() {
  return (
    <div>
      <div className="py-20 text-center relative">
        <p className="text-[40px] leading-[52px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 ">
          Optimize Smarter, Deploy{" "}
          <span className="font-solitreo text-green"> Greener.</span>
        </p>
        <div className="mt-6 grid grid-cols-3 w-full max-w-[1200px] gap-6 mx-auto">
          <Card text={"CO2  Emission Insight"} src={"/image4.png"} />
          <Card
            text={"CPU Usage"}
            src={"/image5.png"}
            desc="CPU usage is reduced through optimized algorithms, parallel processing, caching, and process minimization."
          />
          <Card
            text={"GPU Usage"}
            src={"/image6.png"}
            desc="GPU usage is reduced through optimized computations, parallel processing, and efficient memory management."
          />
        </div>
        <div className="mt-20">
          <p className="text-[40px] leading-[52px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 ">
            From Bottlenecks to Seamless Workflows
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 max-w-[1200px] w-full mx-auto">
            <div className="border border-white/50 p-6 rounded-3xl">
              <Image src={"/image7.png"} width={500} height={600} alt="image" />
            </div>
            <div className="border border-white/50 p-6 rounded-3xl">
              <Image src={"/image9.png"} width={500} height={600} alt="image" />
            </div>
          </div>
        </div>
        <div className="w-[241px] h-[241px] bg-green blur-[300px] -right-28 top-32 absolute"></div>
      </div>
    </div>
  );
}

function Card({ text, src, desc }) {
  return (
    <div className="p-6 border border-white/50 rounded-3xl text-left">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50  text-2xl">
        {text}
      </p>
      <Image className="mt-2" src={src} height={400} width={400} alt="image" />
      {desc && <p className="text-white/50 mt-2">{desc}</p>}
    </div>
  );
}
