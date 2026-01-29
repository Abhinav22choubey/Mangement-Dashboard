import React from "react";
import { Check, AlertCircle, Brain } from "lucide-react";

const timeline = [
  { type: "negotiation", title: "Negotiation", followUp: "25 Dec 2025" },
  {
    type: "done",
    title: "Visit Done",
    subtitle: "ABC Heights – Sunday Visit Done",
    time: "15 Dec 2025 | 12:30 PM",
    by: "Dristi Singh",
  },
  {
    type: "scheduled",
    title: "Visit Scheduled",
    subtitle: "Next call on 22 Sept at 11 AM",
    time: "10 Dec 2025 | 12:30 PM",
    by: "Rahul Sharma",
  },
  {
    type: "scheduled",
    title: "Visit Scheduled",
    subtitle: "Next call on 22 Sept at 11 AM",
    time: "10 Dec 2025 | 12:30 PM",
    by: "Rahul Sharma",
  },
];

const StatusIcon = ({ type }) => {
  const isNegotiation = type === "negotiation";

  return (
    <div
      className={`w-[30px] h-[30px] rounded-full center ${
        isNegotiation ? "bg-yellow-400" : "bg-green-500"
      }`}
    >
      {isNegotiation ? (
        <AlertCircle size={16} className="text-white" />
      ) : (
        <Check size={16} className="text-white" />
      )}
    </div>
  );
};

export default function TimelineActivity() {
  return (
    <div id="activity" className="w-full bg-white mt-4 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2 text16 font-medium">
          <Brain size={16} />
          Timeline Activity
        </div>
        <button className="bg-[#238EEB] text-white text12 px-3 py-1 rounded">
          See All
        </button>
      </div>

      {/* Timeline list */}
      <div className="px-4 py-3 space-y-5 relative">
        {timeline.map((item, idx) => {
          const isLast = idx === timeline.length - 1;
          const isCurrentNegotiation = item.type === "negotiation";
          const prevType = idx > 0 ? timeline[idx - 1].type : null;
          const isPrevNegotiation = prevType === "negotiation";

          return (
            <div key={idx} className="relative">
              {/* Vertical connector */}
              {!isLast && (
                <div
                  className={`absolute left-[20px] top-[62px] h-[48px] w-[2px] ${
                    isCurrentNegotiation
                      ? "border-l-2 border-dashed border-yellow-400"
                      : "bg-green-500"
                  }`}
                />
              )}

              {/* Half top circle */}
              {idx !== 0 && (
                <div
                  className={`absolute left-[15px] -top-[6px] w-3 h-1.5 rounded-t-full ${
                    isPrevNegotiation ? "bg-yellow-400" : "bg-green-500"
                  }`}
                />
              )}

              {/* Card */}
              <div className="relative border border-gray-200 rounded-[10px] bg-white min-h-[62px] flex items-center px-4 py-2 md:py-0">
                {/* Status icon */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <StatusIcon type={item.type} />
                </div>

                {/* Content */}
                <div className="pl-10 w-full grid grid-cols-1 md:grid-cols-[1fr_auto] items-start md:items-center gap-x-3 gap-y-2 md:gap-y-0">
                  {/* Left */}
                  <div className="leading-tight flex flex-col justify-center">
                    <p className="text16 font-medium">{item.title}</p>

                    {item.subtitle && (
                      <p className="text14 text-gray-500 min-h-[17px]">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Right */}
                  <div className="text-left md:text-right leading-tight flex flex-col justify-center">
                    {item.followUp && (
                      <>
                        <p className="text12 text-gray-500">Next Follow Up</p>
                        <p className="text16 font-medium">{item.followUp}</p>
                      </>
                    )}

                    {item.time && (
                      <p className="text16 font-medium">{item.time}</p>
                    )}

                    {item.by && (
                      <p className="text16 text-[#005897] font-medium">
                        By: {item.by}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
