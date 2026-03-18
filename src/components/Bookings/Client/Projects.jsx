import React from "react";
import { Building2 } from "lucide-react";
const Field = ({ label, value, valueColor = "text-black" }) => (
  <div className="flex flex-col gap-[3px] min-w-[120px]">
    <p className="text12 text-[#4E5E6A] font-medium">{label}</p>
    <p className={`text14 font-medium ${valueColor}`}>{value}</p>
  </div>
);

const RegisterPropertyDetails = ({ data = {} }) => {
  const get = (val, fallback) => val || fallback;

  return (
    <div className="w-full mt-4 bg-white">

      {/* Header */}
      <div className="flex items-center gap-2 px-6 pt-4">
        <Building2 size={20} className="text-(--sky)" />
        <h2 className="text15 font-medium">Register Project/Property</h2>
      </div>

      {/* Divider */}
      <div className="mt-2 border-t border-black/5"></div>

      {/* Content */}
      <div className="px-6 py-4 flex flex-col gap-x-6 gap-y-4">

        {/* ================= TOP DETAILS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-10">

          <Field
            label="Project Name"
            value={get(data.project, "Twin Chalet")}
            valueColor="text-(--sky)"
          />

          <Field label="Tower" value={"Tower A"} />
          <Field label="Floor" value={"3"} />
          <Field label="Unit No." value={"A-109"} />

          <Field label="Unit Type" value={get(data.config, "2 BHK")} />
          <Field label="Carpet Area" value={"596 Sq.ft."} />
          <Field label="Super Built-up Area" value={"796 Sq.ft."} />
          <Field label="Parking" value={"Yes"} />

          <Field label="Facing" value={"East Facing"} />
          <Field label="Property Status" value={"Under Construction"} />
          <Field label="Possession Date" value={"March 2028"} />

        </div>

        {/* Divider */}
        <div className="border-t border-black/5"></div>

        {/* ================= PRICING ================= */}
        <div className="flex flex-col gap-3">
          <h3 className="text15 font-medium">Pricing Details</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Field label="Base Price" value={"₹ 1.2 Cr"} />
            <Field label="GST(18%)" value={"₹ 20 Lakhs"} />
            <Field label="Other Charges" value={"₹ 2 Lakhs"} />
            <Field
              label="Total Amount"
              value={get(data.amount, "₹ 1.4 Cr")}
            />
          </div>
        </div>

        {/* ================= OTHER CHARGES ================= */}
        <div className="bg-yellow-100/60 rounded-lg p-5">
          <h3 className="text15 font-medium mb-4">Other Charges</h3>

          <div className="flex flex-col sm:flex-row justify-between w-[30%] gap-1">

            {/* Labels */}
            <div className="flex flex-col gap-2">
              <p className="text14 font-semibold">Registry Fee</p>
              <p className="text14 font-semibold">GST Registration</p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-2 font-semibold sm:items-end">
              <p className="text14">₹ 25,000</p>
              <p className="text14">₹ 1,00,500</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPropertyDetails;