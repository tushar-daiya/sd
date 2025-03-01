import DashboardComponent1 from "@/components/DashboardComponent1";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="w-[241px] h-[241px] bg-green blur-[300px] -left-28 -top-28 absolute"></div>
      <DashboardComponent1 />
    </div>
  );
}
