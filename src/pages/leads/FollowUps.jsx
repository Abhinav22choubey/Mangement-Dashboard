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
    <div id="followup" className="w-full mt-4 py-2 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-2 border-b border-gray-200">
        <div className="flex items-center gap-2 font-medium text16">
          <Clock size={18} />
          Follow Ups
        </div>

        <div className="flex items-center gap-3">
          <button className="text-blue-500 font-medium text16">+ Add</button>
          <button className="bg-blue-500 text-white text12 px-3 py-1 rounded">
            See All
          </button>
        </div>
      </div>

      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-[1.2fr_1fr_2fr_1.2fr_1.2fr_0.6fr] border-b border-gray-200 font-medium min-w-[720px] text14">
        {["Date", "Time", "Followed By", "Status", "Next Date", ""].map((h, i) => (
          <div
            key={i}
            className="px-4 py-2 justify-center flex border-r border-gray-200 last:border-r-0"
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
            border-b border-gray-200
            md:grid md:grid-cols-[1.2fr_1fr_2fr_1.2fr_1.2fr_0.6fr]
            px-4 md:px-0 py-3 md:py-0
            flex flex-col md:flex-none gap-2 md:gap-0
          "
        >
          {/* Mobile layout */}
          <div className="md:hidden grid grid-cols-2 gap-y-2 text14">
            <LabelValue label="Date" value={item.date} />
            <LabelValue label="Time" value={item.time} />
            <LabelValue label="Followed By">
              <div className="flex items-center gap-2">
                <Avatar name={item.by} src={item.avatar} />
                {item.by}
              </div>
            </LabelValue>
            <LabelValue label="Status" value={item.status} />
            <LabelValue label="Next Date" value={item.nextDate} />

            <div className="col-span-2 flex justify-end mt-2">
              <button className="w-7 h-7 bg-blue-500 rounded-full center">
                <Eye size={14} className="text-white" />
              </button>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:contents">
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
              <button className="w-7 h-7 bg-blue-500 rounded-full center">
                <Eye size={14} className="text-white" />
              </button>
            </Cell>
          </div>
        </div>
      ))}
    </div>
  );
}

function LabelValue({ label, value, children }) {
  return (
    <div className="flex flex-col">
      <span className="text12 text-gray-500">{label}</span>
      <span className="text14 font-medium">{children || value}</span>
    </div>
  );
}

function Cell({ children, center = true }) {
  return (
    <div
      className={`px-4 py-1.5 border-r border-gray-200 last:border-r-0 flex items-center ${
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
    <div className="w-6 h-6 rounded-full bg-gray-400 center text-[10px] text-white">
      {name?.[0]}
    </div>
  );
}
