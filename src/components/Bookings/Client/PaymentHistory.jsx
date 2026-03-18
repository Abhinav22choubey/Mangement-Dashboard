import React from "react";
import { Building2 } from "lucide-react";
import PaymentSchedule from "./PaymentSchedule.jsx";

const Field = ({ label, value }) => (
  <div className="flex flex-col gap-[2px] min-w-[120px]">
    <p className="text12 text-[#4E5E6A] font-medium">{label}</p>
    <p className="text14 font-semibold text-black whitespace-nowrap">
      {value}
    </p>
  </div>
);

const PaymentHistory = ({ data = {} }) => {
  const get = (val, fallback) => val || fallback;

  // fallback values (Figma)
  const base = "₹ 1.2 Cr";
  const gst = "₹ 20 Lakhs";
  const other = "₹ 2 Lakhs";
  const total = "₹ 1.4 Cr";

  const received = get(data.received, "₹ 50 Lakhs");
  const totalAmount = get(data.amount, total);

  // 🔥 Convert ₹ string to number (Cr, Lakhs supported)
  const parseAmount = (val) => {
    if (!val) return 0;

    const num = parseFloat(val.replace(/[^\d.]/g, ""));

    if (val.toLowerCase().includes("cr")) return num * 10000000;
    if (val.toLowerCase().includes("lakh")) return num * 100000;

    return num;
  };

  const receivedNum = parseAmount(received);
  const totalNum = parseAmount(totalAmount);

  const percent =
    totalNum > 0 ? Math.min(100, Math.round((receivedNum / totalNum) * 100)) : 65;

  return (
    <div className="w-full bg-white mt-4">

      {/* Header */}
      <div className="px-5 pt-4 flex flex-row gap-2">
        <Building2 size={20}/>
        <h2 className="text15 font-medium">
          Payment History
        </h2>
      </div>

      {/* Divider */}
      <div className="mt-3 border-t border-black/5"></div>

      <div className="px-5 py-6 flex flex-col gap-6">

        {/* Progress Section */}
        <div className="flex flex-col items-center gap-4 w-full">

          {/* Wrapper (controls everything width = 70%) */}
          <div className="w-[70%] flex flex-col gap-3">

            {/* Progress Bar */}
            <div className="relative w-full h-[18px] bg-gray-300/40 rounded-full">

              {/* Filled */}
              <div
                className="h-full bg-(--primary) rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              ></div>

              {/* Circle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-[1.5rem] h-[1.5rem] bg-(--primary) rounded-full"
                style={{ left: `calc(${percent}% - 0.6rem)` }}
              ></div>
            </div>

            {/* Labels aligned EXACTLY with bar */}
            <div className="flex justify-between items-center text14 font-medium w-full">
              <span>₹ 0</span>
              <span className="text-center">{percent}% Paid</span>
              <span>{totalAmount}</span>
            </div>

          </div>
        </div>

        {/* Agreement Value */}
        <div className="bg-yellow-100/60 rounded-lg px-4 py-3">
          <p className="text14 font-medium mb-2">
            Agreement Value
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Base Price" value={base} />
            <Field label="GST" value={gst} />
            <Field label="Other Charges" value={other} />
            <Field label="Total Amount" value={totalAmount} />
          </div>
        </div>

        {/* Amount Received */}
        <div className="bg-green-100/60 rounded-lg px-4 py-3">
          <p className="text14 font-medium mb-2">
            Amount Received
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Token Paid" value={"₹ 20 Lakhs"} />
            <Field label="Installment" value={"5"} />
            <Field label="Loan Amount" value={"₹ 90 Lakhs"} />
            <Field label="Total Received" value={received} />
          </div>
        </div>

        {/* Pending */}
        <div className="bg-red-100/60 rounded-lg px-4 py-3">
          <p className="text14 font-medium mb-2">
            Pending Received
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Remaining Amount"
              value={totalAmount}
            />
            <Field label="Due Date" value={"10 Nov 2025"} />
          </div>
        </div>

      </div>

       <div className="px-5 pt-4 flex flex-row gap-2">
        <h2 className="text15 font-medium">
          Installment and Payment History
        </h2>
      </div>
    <div className="p-4">

        <PaymentSchedule data={data} />
    </div>
    </div>
  );
};

export default PaymentHistory;