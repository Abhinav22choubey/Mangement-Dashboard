import React from "react";

const Field = ({ label, value }) => (
  <div className="flex flex-col gap-[3px] min-w-[100px]">
    <p className="text12 text-[#4E5E6A] font-medium">{label}</p>
    <p className="text14 font-medium text-black">{value}</p>
  </div>
);

const PricingDetails = ({ data = {} }) => {
  const get = (val, fallback) => val || fallback;

  // fallback values (Figma)
  const base = "₹ 1.2 Cr";
  const gst = "₹ 20 Lakhs";
  const other = "₹ 2 Lakhs";
  const total = "₹ 1.4 Cr";

  const received = get(data.received, "₹ 50 Lakhs");
  const totalAmount = get(data.amount, total);

  // calculate % (simple approx if both exist)
  const percent =
    data.amount && data.received
      ? Math.round(
          (parseFloat(data.received.replace(/[^\d]/g, "")) /
            parseFloat(data.amount.replace(/[^\d]/g, ""))) *
            100
        )
      : 65;

  return (
    <div className="w-full  bg-white mt-4">

      {/* Header */}
      <div className="px-5 pt-4">
        <h2 className="text15 font-medium">Pricing and Payment Details</h2>
      </div>

      {/* Divider */}
      <div className="mt-3 border-t border-black/5"></div>

      <div className="px-5 py-6 flex flex-col gap-x-6 gap-y-4">

        {/* Progress Section */}
        <div className="flex flex-col gap-2">
          <div className="relative w-full h-[20px] bg-gray-300/40 rounded-full">
            <div
              className="h-full bg-(--primary) rounded-full"
              style={{ width: `${percent}%` }}
            ></div>

            {/* Circle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-(--primary) rounded-full"
              style={{ left: `calc(${percent}% - 15px)` }}
            ></div>
          </div>

          {/* Labels */}
          <div className="flex justify-between font-medium text14">
            <span>₹ 0</span>
<p className="text14 font-medium text-center">
            {percent}% Paid
          </p>
            <span>{get(data.amount, "₹ 1.2 Cr")}</span>
          </div>
          
        </div>

        {/* Agreement Value */}
        <div className="bg-yellow-100/60 rounded-lg px-4 py-3">
          <p className="text14 font-medium mb-1">Agreement Value</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6  gap-y-2">
            <Field label="Base Price" value={base} />
            <Field label="GST" value={gst} />
            <Field label="Other Charges" value={other} />
            <Field label="Total Amount" value={totalAmount} />
          </div>
        </div>

        {/* Amount Received */}
        <div className="bg-green-100/60 rounded-lg px-4 py-3">
          <p className="text14 font-medium mb-1">Amount Received</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6  gap-y-2">
            <Field label="Token Paid" value={"₹ 20 Lakhs"} />
            <Field label="Installment" value={"5"} />
            <Field label="Loan Amount" value={"₹ 90 Lakhs"} />
            <Field label="Total Received" value={received} />
          </div>
        </div>

        {/* Pending */}
        <div className="bg-red-100/60 rounded-lg px-4 py-3">
          <p className="text14 font-medium mb-1">Pending Received</p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2">
            <Field label="Remaining Amount" value={get(data.amount, base)} />
            <Field label="Due Date" value={"10 Nov 2025"} />
          </div>
        </div>

        {/* Button */}
        <div>
          <button className="bg-(--primary) text-white text13 px-4 py-1.5 rounded">
            See Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default PricingDetails;