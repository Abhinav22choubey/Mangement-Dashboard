import React from "react";

const Field = ({ label, value, valueColor = "text-black" }) => (
  <div className="flex flex-col gap-[3px] min-w-[100px]">
    <p className="text12 text-[#4E5E6A] font-medium">{label}</p>
    <p className={`text14 font-medium ${valueColor}`}>{value}</p>
  </div>
);

const ProjectDetails = ({ data = {} }) => {
  // fallback helper
  const getValue = (val, fallback) => val || fallback;

  return (
    <div className="w-full bg-white mt-4">

      {/* Header */}
      <div className="px-5 pt-2">
        <h2 className="text16 font-medium text-black">Project Details</h2>
      </div>

      {/* Divider */}
      <div className="mt-3 border-t border-black/5"></div>

      {/* Content */}
      <div className="px-5 py-4 flex flex-col gap-x-6  gap-y-4">

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-10">
          <Field
            label="Project Name"
            value={getValue(data.project, "Twin Chalet")}
            valueColor="text-(--sky)"
          />
          <Field label="Type" value={getValue(data.type, "Flat")} />
          <Field
            label="Configuration"
            value={getValue(data.config, "2 BHK")}
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-10">
          <Field label="Tower" value={"Tower A"} />
          <Field label="Floor" value={"12th"} />
          <Field label="Unit No." value={"A-509"} />
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">
          <p className="text14 text-black">Current Status:</p>
          <p
            className={`text14 font-semibold ${
              data.status === "Pending"
                ? "text-yellow-500"
                : data.status === "Completed"
                ? "text-(--green)"
                : data.status === "Hold"
                ? "text-(--green)"
                : "text-red-500"
            }`}
          >
            {getValue(data.status, "Hold")}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;