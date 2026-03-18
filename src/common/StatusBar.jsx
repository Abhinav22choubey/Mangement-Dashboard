import React from "react";
import { Check, AlertCircle, XCircle } from "lucide-react";

export default function StatusBar({steps}) {
  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div className="w-full relative max-w-[95%]">

        {/* Progress Bar */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isDone = step.status === "done";
            const isActive = step.status === "active";
            const isCancelled = step.status === "cancelled";

            const nextStep = steps[index + 1];

            return (
              <div
                key={step.id}
                className="flex items-center flex-1 last:flex-none"
              >
                {/* Circle */}
                <div
                  className={`shrink-0 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-full flex items-center justify-center z-10
                  ${
                    isCancelled
                      ? "bg-red-500"
                      : isDone || isActive
                      ? "bg-[#00AD28]"
                      : "bg-[#666E81]"
                  }`}
                >
                  {isDone && (
                    <Check className="text-white w-4 h-4" />
                  )}
                  {isActive && (
                    <AlertCircle className="text-white w-4 h-4" />
                  )}
                  {isCancelled && (
                    <XCircle className="text-white w-4 h-4" />
                  )}
                  {step.status === "pending" && (
                    <span className="text-white text-xs sm:text-sm">
                      {step.id}
                    </span>
                  )}
                </div>

                {/* Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 px-1 sm:px-2">
                    <div
                      className={`h-[2px] sm:h-[3px]
                      ${
                        // If either current OR next is cancelled → red solid
                        isCancelled || nextStep?.status === "cancelled"
                          ? "bg-red-500"

                          // If next step is done → green solid
                          : nextStep?.status === "done"
                          ? "bg-[#00AD28]"

                          // If next step is active → dashed green
                          : nextStep?.status === "active"
                          ? "border-t-[2px] sm:border-t-[3px] border-dashed border-[#00AD28]"

                          // Otherwise pending → grey dashed
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
        <div className="flex justify-between pr-4 mt-2 text-xs sm:text-sm text-black">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-[22px] sm:w-[26px] text-center whitespace-nowrap"
            >
              {step.label}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}