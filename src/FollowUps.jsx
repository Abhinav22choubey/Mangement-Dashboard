import { Clock, Eye, Menu } from "lucide-react";
import p from "./assets/p5.jpg";

const followUps = [
  { id: 1, date: "25 Dec, 2025", time: "4:30 PM", by: "Ashish Kumar", status: "Negotiation", nextDate: "26 Dec, 2025", avatar: `${p}` },
  { id: 2, date: "26 Dec, 2025", time: "11:00 AM", by: "Rohit Sharma", status: "Pending", nextDate: "27 Dec, 2025", avatar: `${p}` },
  { id: 3, date: "27 Dec, 2025", time: "2:15 PM", by: "Neha Verma", status: "Completed", nextDate: "—", avatar: `${p}` },
  { id: 4, date: "28 Dec, 2025", time: "10:00 AM", by: "Amit Patel", status: "Negotiation", nextDate: "29 Dec, 2025", avatar: `${p}` },
  { id: 5, date: "29 Dec, 2025", time: "3:45 PM", by: "Priya Singh", status: "Pending", nextDate: "30 Dec, 2025", avatar: `${p}` },
  { id: 6, date: "30 Dec, 2025", time: "5:30 PM", by: "Karan Mehta", status: "Completed", nextDate: "—", avatar: `${p}` },
];

export default function FollowUps() {
  return (
    <div id="followup" className="w-full mt-4 py-2 bg-white text-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-2 border-b border-gray-200/60">
        <div className="flex items-center gap-2 font-medium">
          <Clock size={18} />
          Follow Ups
        </div>

        <div className="flex items-center gap-4">
          <button className="text-blue-500 font-medium">+ Add</button>
          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
            See All
          </button>
        </div>
      </div>

      {/* Scroll container */}
      <div className="overflow-x-auto">

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1.2fr_1fr_2fr_1.2fr_1.2fr_0.6fr] border-b border-gray-200/60 font-medium min-w-[720px]">
          {["Date", "Time", "Followed By", "Status", "Next Date", ""].map((h, i) => (
            <div
              key={i}
              className="px-4 py-2 justify-center flex border-r border-gray-200/60 last:border-r-0"
            >
              {h || <Menu size={18} />}
            </div>
          ))}
        </div>

        {/* Rows */}
        {followUps.map((item) => (
          <div
            key={item.id}
            className="
              md:grid md:grid-cols-[1.2fr_1fr_2fr_1.2fr_1.2fr_0.6fr]
              border-b border-gray-200/60
              flex flex-col md:flex-none
              min-w-[720px]
            "
          >
            <Cell>{item.date}</Cell>
            <Cell>{item.time}</Cell>

            <Cell center={false}>
              <div className="flex items-center gap-2 min-w-0">
                <Avatar name={item.by} src={item.avatar} />
                <span className="truncate">{item.by}</span>
              </div>
            </Cell>

            <Cell>{item.status}</Cell>
            <Cell>{item.nextDate}</Cell>

            <Cell>
              <button className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                <Eye size={14} className="text-white" />
              </button>
            </Cell>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cell({ children, center = true }) {
  return (
    <div
      className={`px-4 py-1.5 border-r border-gray-200/60 last:border-r-0 flex items-center ${
        center ? "justify-center" : ""
      }`}
    >
      {children}
    </div>
  );
}

function Avatar({ src, name }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-[10px] text-white">
      {name?.[0]}
    </div>
  );
}
