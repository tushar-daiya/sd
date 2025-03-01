import Image from "next/image";
import React from "react";

export default function Component4() {
  return (
    <div className="text-center py-20 relative">
      <div className="w-[241px] h-[241px] bg-green blur-[300px] -right-28 -top-28 absolute"></div>
      <p className="bg-green/10 py-3 px-4 rounded-3xl text-green w-max mx-auto">
        What you'll get
      </p>
      <p className="mt-6 text-[40px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 ">
        © 2025 OPT/CI. All Rights Reserved
      </p>
      <div className="mx-auto max-w-[1200px] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        <Card src={"/image1.png"} />
        <Card src={"/image2.png"} />
        <Card src={"/image3.png"} />
      </div>
    </div>
  );
}

function Card({ src }) {
  return (
    <div className="p-6 rounded-3xl border border-white/30 text-left">
      <Image src={src} width={400} height={400} alt="Image" />
      <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mt-8">
        Reduce CO2 emissions
      </p>
      <p className="mt-2 text-white/50">
        Optimize your workflows to lower your carbon footprint—because clean
        code should mean a cleaner planet.
      </p>
    </div>
  );
}
