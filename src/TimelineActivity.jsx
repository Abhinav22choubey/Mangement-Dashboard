import React from "react";
import { Check, AlertCircle, Brain } from "lucide-react";

const timeline = [
  {
    type: "negotiation",
    title: "Negotiation",
    followUp: "25 Dec 2025",
  },
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
      className={`w-8 h-8 rounded-full flex items-center justify-center
      ${isNegotiation ? "bg-yellow-400" : "bg-green-500"}`}
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
    <div className="w-full bg-white mt-4 border ">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Brain size={16} />
          Timeline Activity
        </div>
        <button className="bg-[#238EEB] text-white text-xs px-3 py-1 rounded">
          See All
        </button>
      </div>

      {/* Timeline list */}
      <div className="px-4 py-4 space-y-6 relative">
        {timeline.map((item, idx) => {
          const isLast = idx === timeline.length - 1;

          const isCurrentNegotiation = item.type === "negotiation";

          // 👇 previous item color for half circle
          const prevType = idx > 0 ? timeline[idx - 1].type : null;
          const isPrevNegotiation = prevType === "negotiation";

          return (
            <div key={idx} className="px-1 relative">
              {/* Vertical connector (color based on current item) */}
              {!isLast && (
                <div
                  className={`absolute left-[22px] top-full h-6 w-[2px]
                  ${
                    isCurrentNegotiation
                      ? "border-l-2 border-dashed border-yellow-400"
                      : "bg-green-500"
                  }`}
                />
              )}

              {/* Half circle on top (color based on previous item) */}
              {idx !== 0 && (
                <div
                  className={`absolute left-[17px] -top-[6px] w-3 h-1.5 rounded-t-full
                  ${
                    isPrevNegotiation ? "bg-yellow-400" : "bg-green-500"
                  }`}
                />
              )}

              {/* Card */}
              <div className="relative border shadow-sm rounded-xl px-4 py-3 bg-white">
                {/* Status icon inside box */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <StatusIcon type={item.type} />
                </div>

                {/* Content */}
                <div className="pl-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5">
                    <p className="text-sm font-medium">{item.title}</p>

                    {item.followUp && (
                      <div className="text-left sm:text-right">
                        <p className="text-[11px] text-gray-500">
                          Next Follow Up
                        </p>
                        <p className="text-xs font-medium">{item.followUp}</p>
                      </div>
                    )}

                    {item.time && (
                      <p className="text-xs font-medium sm:text-right">
                        {item.time}
                      </p>
                    )}
                  </div>

                  {item.subtitle && (
                    <p className="text-sm text-gray-500 ">
                      {item.subtitle}
                    </p>
                  )}

                  {item.by && (
                    <p className="text-xs text-[#005897] font-medium sm:text-right -mt-2.5">
                      By: {item.by}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
