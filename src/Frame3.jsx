import React from "react";
import Frame31 from "./Frame31.jsx";
import StatusBar from "./StatusBar.jsx";
import Tab from "./Tab.jsx";
export default function Frame3() {
  return (
    <div className="min-h-screen w-full bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Frame31/>
        {/* Status Progress Bar */}
        <StatusBar/>
        <Tab/>
      </div>
    </div>
  );
}

