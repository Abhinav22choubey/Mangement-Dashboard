import { useState } from "react";

const tabs = ["Overview", "Follow-Up", "Activity", "Documents"];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-full max-w-full  bg-white px-4 sm:px-6">
        <div className="flex gap-6 sm:gap-10  relative flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-3 text-sm whitespace-nowrap
                ${
                  activeTab === tab
                    ? "font-medium text-black"
                    : "font-normal text-[#4E5E6A]"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[4px] w-[75px] rounded-full bg-[#666E81]" />

              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
