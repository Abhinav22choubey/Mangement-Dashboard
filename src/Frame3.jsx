import React from "react";
import Frame31 from "./Frame31.jsx";
import StatusBar from "./StatusBar.jsx";
import Tab from "./Tab.jsx";
import Frame4 from "./Frame4.jsx";
export default function Frame3() {
  return (
    <div className="min-h-screen w-full bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Frame31/>

        <div className="mx-6 flex flex-col ">
          {/* Status Progress Bar */}
          <StatusBar/>
          {/* Tabs */}
          <Tab/>
          {/* Main Content */}
          <Frame4/>

        </div>
      </div>
    </div>
  );
}

