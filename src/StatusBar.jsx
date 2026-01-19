import React from "react";
import { Check, AlertCircle } from "lucide-react";

const steps = [
  { id: 1, label: "New", status: "done" },
  { id: 2, label: "Contacted", status: "done" },
  { id: 3, label: "Visit Schedule", status: "done" },
  { id: 4, label: "Visit Done", status: "done" },
  { id: 5, label: "Negotiation", status: "active" },
  { id: 6, label: "Booking Confirm", status: "pending" },
  { id: 7, label: "Converted", status: "pending" },
];

export default function StatusProgressBar() {
  return (
    <div className="w-full overflow-hidden flex justify-center ">
      <div className="w-full relative  max-w-[95%]">
        {/* Bar */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isDone = step.status === "done";
            const isActive = step.status === "active";

            return (
              <div key={step.id} className="flex items-center flex-1 last:flex-none">
                {/* Circle */}
                <div
                  className={`shrink-0 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-full flex items-center justify-center z-10
                  ${isDone || isActive ? "bg-[#00AD28]" : "bg-[#666E81]"}`}
                >
                  {isDone && <Check size={14} className="text-white sm:w-4 sm:h-4" />}
                  {isActive && <AlertCircle size={14} className="text-white sm:w-4 sm:h-4" />}
                  {step.status === "pending" && (
                    <span className="text-white text-[12px] sm:text-[15px]">{step.id}</span>
                  )}
                </div>

                {/* Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 px-1 sm:px-2">
                    <div
                      className={`h-[2px] sm:h-[3px]
                      ${
                        index < 3
                          ? "bg-[#00AD28]"
                          : index === 3
                          ? "border-t-[2px] sm:border-t-[3px] border-dashed border-[#00AD28]"
                          : "border-t-[2px] sm:border-t-[3px] border-dashed border-[#666E81]"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Labels */}
        <div className="flex justify-between pr-4 mt-2 text-[10px] sm:text-[12px] text-black">
          {steps.map((step) => (
            <div key={step.id} className="w-[22px] sm:w-[26px] text-center whitespace-nowrap">
              {step.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

