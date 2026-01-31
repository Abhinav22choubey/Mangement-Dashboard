import { useMemo, useState } from "react";
import {
  Plus,
  Tag,
  Upload,
  Search,
  Printer,
  FileSpreadsheet,
  Crosshair,
  CircleX,
  Columns2,
  CalendarFold,
  ChevronDown
} from "lucide-react";

const ALL_LABELS = ["Qualified", "Negotiation", "Discussion", "Call this week"];

const labelStyles = {
  Qualified: "bg-[#00D744] text-white",
  Negotiation: "bg-[#005897] text-white",
  Discussion: "bg-yellow-400 text-black",
  "Call this week": "bg-green-600 text-white"
};

export default function KanbanHeader() {
  const [labels, setLabels] = useState([]);
  const [search, setSearch] = useState("");
  const [showLabelDropdown, setShowLabelDropdown] = useState(false);

  const availableLabels = useMemo(
    () => ALL_LABELS.filter((l) => !labels.includes(l)),
    [labels]
  );

  return (
    <div className="bg-white border border-black/5 rounded-md w-full">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 h-auto sm:h-[55px] border-b border-black/5">
        <h2 className="text18 font-medium text-black">Kanban</h2>

        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 border border-black/5 rounded-sm px-3 h-[30px] text14 text-[#4E5E6A]">
            <Tag size={16} />
            Manage labels
          </button>

          <button className="flex items-center gap-2 border border-black/5 rounded-sm px-3 h-[30px] text14 text-[#4E5E6A]">
            <Upload size={16} />
            Import lead
          </button>

          <button
            onClick={() => alert("Add lead clicked")}
            className="flex items-center gap-2 border border-black/5 rounded-sm px-3 h-[30px] text14 text-[#4E5E6A]"
          >
            <Plus size={16} />
            Add lead
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 px-4 sm:px-6 py-3 relative">
        {/* View */}
        <button className="h-[30px] w-[31px] border border-black/5 rounded-sm center">
          <Columns2 size={16} className="text-[#4E5E6A]" />
        </button>

        {/* Label dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowLabelDropdown((p) => !p)}
            className="h-[30px] px-4 border border-black/5 rounded-sm text14 text-[#4E5E6A] flex items-center gap-1"
          >
            Label <ChevronDown size={14} />
          </button>

          {showLabelDropdown && (
            <div className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded shadow">
              {availableLabels.map((l) => (
                <div
                  key={l}
                  onClick={() => {
                    setLabels((p) => [...p, l]);
                    setShowLabelDropdown(false);
                  }}
                  className="h-9 center text14 hover:bg-gray-100 cursor-pointer"
                >
                  {l}
                </div>
              ))}
              {availableLabels.length === 0 && (
                <div className="h-9 center text12 text-gray-400">
                  No more labels
                </div>
              )}
            </div>
          )}
        </div>

        {/* Selected labels */}
        {labels.map((label) => (
          <div
            key={label}
            className={`flex items-center gap-2 px-4 h-[30px] rounded-full text14 ${labelStyles[label]}`}
          >
            {label}
            <button onClick={() => setLabels((p) => p.filter((l) => l !== label))}>
              <CircleX size={14} />
            </button>
          </div>
        ))}

        <button
          onClick={() => setShowLabelDropdown(true)}
          className="h-[30px] w-[31px] border border-black/5 rounded-sm center"
        >
          <Plus size={16} className="text-[#4E5E6A]" />
        </button>

        {/* Spacer */}
        <div className="flex-1 hidden md:block" />

        {/* Actions */}
        <button className="h-[30px] w-[31px] border border-black/5 rounded-sm center">
          <Crosshair size={16} className="text-[#4E5E6A]" />
        </button>

        <button className="h-[30px] px-3 border border-black/5 rounded-sm flex items-center gap-1 text14 text-[#4E5E6A]">
          <FileSpreadsheet size={16} />
          Excel
        </button>

        <button className="h-[30px] px-3 border border-black/5 rounded-sm flex items-center gap-1 text14 text-[#4E5E6A]">
          <Printer size={16} />
          Print
        </button>

        {/* Search */}
        <div className="h-[30px] px-2 border border-black/5 rounded-sm flex items-center gap-2">
          <input
            className="outline-none text14 w-[120px] sm:w-[160px]"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search size={16} className="text-[#4E5E6A]" />
        </div>

        {/* Date */}
        <div className="h-[30px] px-3 border border-black/5 rounded-sm flex items-center gap-2 text14 text-[#4E5E6A]">
          <span className="hidden sm:block">11 Mar, 25 - 20 Apr, 26</span>
          <span className="sm:hidden">Date</span>
          <CalendarFold size={16} />
        </div>
      </div>
    </div>
  );
}
