import { useState } from "react";
import Frame31 from "./Frame31.jsx";
import StatusBar from "./StatusBar.jsx";
import Tab from "./Tab.jsx";
import Frame4 from "./Frame4.jsx";

export default function Frame3() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen mt-10 w-full bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">

        <Frame31 />

        <div className="mx-6 flex flex-col">

          <StatusBar />

          {/* Tabs */}
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Content */}
          <Frame4 activeTab={activeTab} />

        </div>
      </div>
    </div>
  );
}
