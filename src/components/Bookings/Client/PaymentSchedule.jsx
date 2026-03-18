import React from "react";

import { Eye, Clock } from "lucide-react";
const PaymentSchedule = ({ data = [] }) => {
    // fallback data (your Figma)
    const fallback = [
        {
            installment: "Token Amount",
            amount: "₹50L",
            dueDate: "11 Oct 2025",
            status: "Success",
            paymentDate: "5:25 PM, 6 Oct 2025",
            mode: "Cash",
            ref: "NA",
        },
        {
            installment: "1st Slab",
            amount: "₹40L",
            dueDate: "11 Nov 2025",
            status: "Pending",
            paymentDate: "5:25 PM, 6 Oct 2025",
            mode: "Cash",
            ref: "NA",
        },
        {
            installment: "2nd Slab",
            amount: "₹40L",
            dueDate: "11 Dec 2025",
            status: "Pending",
            paymentDate: "NA",
            mode: "NA",
            ref: "NA",
        },
        {
            installment: "3rd Slab",
            amount: "₹40L",
            dueDate: "11 Jan 2026",
            status: "Pending",
            paymentDate: "NA",
            mode: "NA",
            ref: "NA",
        },
        {
            installment: "Final",
            amount: "₹60L",
            dueDate: "11 Feb 2026",
            status: "Pending",
            paymentDate: "NA",
            mode: "NA",
            ref: "NA",
        },
    ];

    const rows = data.length ? data : fallback;

    const statusColor = (status) => {
        if (status === "Success") return "text-(--green)";
        if (status === "Pending") return "text-red-500";
        return "text-gray-500";
    };

    return (
        <div className="w-full   bg-white border border-black/10 ">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <h2 className="text15 font-medium">
                        Payment Schedule (Installments)
                    </h2>
                </div>

                <div className="flex items-center gap-3">
                    <button className="text-(--primary) text14 font-medium">
                        + Add
                    </button>
                    <button className="bg-(--primary) text-white text12 px-3 py-1 rounded">
                        See All
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-black/5"></div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="w-full text-center">
                    {/* Head */}
                    <thead className="border-b border-black/5 [&_th]:font-normal">
                        <tr className="text14 font-normal">
                            <th className="px-2 py-2 border-r border-black/5">Installment</th>
                            <th className="px-2 py-2 border-r border-black/5">Amount</th>
                            <th className="px-2 py-2 border-r border-black/5">Due Date</th>
                            <th className="px-2 py-2 border-r border-black/5">Status</th>
                            <th className="px-2 py-2 border-r border-black/5">Payment Date</th>
                            <th className="px-2 py-2 border-r border-black/5">Payment Mode</th>
                            <th className="px-2 py-2 border-r border-black/5">Reference No.</th>
                            <th className="px-2 py-2 text-center">Action</th> {/* last one no border */}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {rows.map((item, i) => (
                            <tr className="border-b border-black/5 text14">
                                <td className="px-2 py-2 border-r border-black/5">{item.installment}</td>
                                <td className="px-2 py-2 border-r border-black/5">{item.amount}</td>
                                <td className="px-2 py-2 border-r border-black/5">{item.dueDate}</td>

                                <td className={`px-2 py-2 font-medium border-r border-black/5 ${statusColor(item.status)}`}>
                                    {item.status}
                                </td>

                                <td className="px-2 py-2 border-r border-black/5">{item.paymentDate}</td>
                                <td className="px-2 py-2 border-r border-black/5">{item.mode}</td>
                                <td className="px-2 py-2 border-r border-black/5">{item.ref}</td>

                                <td className="px-2 py-2 flex justify-center text-center">
                                    <button className="bg-(--primary) p-2 rounded-full text-white">
                                        <Eye size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default PaymentSchedule;