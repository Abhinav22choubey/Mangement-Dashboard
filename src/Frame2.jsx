import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  X,
  Search
} from "lucide-react";

// Dummy leads data
const initialLeads = [
  { id: 1, name: "SpriteEra IT Solution Pvt Ltd", status: "Negotiation", source: "Facebook" },
  { id: 2, name: "Apna Parcha Pvt. Ltd", status: "Negotiation", source: "Facebook" },
  { id: 3, name: "Ramesh Kumar", status: "Qualified", source: "Facebook" },
  { id: 4, name: "SpriteEra IT Solution Pvt Ltd", status: "Negotiation", source: "Facebook" },
  { id: 5, name: "SpriteEra IT Solution Pvt Ltd", status: "Discussion", source: "Facebook" },
  { id: 6, name: "SpriteEra IT Solution Pvt Ltd", status: "Negotiation", source: "Facebook" },
  { id: 7, name: "SpriteEra IT Solution Pvt Ltd", status: "Negotiation", source: "Facebook" }
];

const ALL_LABELS = ["Call this week", "Qualified", "Negotiation", "Discussion"];

const labelColors = {
  "Call this week": "bg-green-500",
  Qualified: "bg-pink-500",
  Negotiation: "bg-blue-700",
  Discussion: "bg-yellow-400 text-black"
};

export default function LeadsSidebar() {
  const [labels, setLabels] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const pageSize = 5;

  const addLabel = (label) => {
    if (!labels.includes(label)) {
      setLabels((prev) => [...prev, label]);
    }
  };

  const removeLabel = (index) => {
    setLabels((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredLeads = useMemo(() => {
    return initialLeads.filter((lead) => {
      const matchSearch = lead.name.toLowerCase().includes(search.toLowerCase());
      const matchLabel = labels.length === 0 || labels.includes(lead.status);
      return matchSearch && matchLabel;
    });
  }, [search, labels]);

  const totalPages = Math.ceil(filteredLeads.length / pageSize) || 1;

  const paginatedLeads = filteredLeads.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="w-[319px] min-h-screen border bg-white text-sm font-inter relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <div className="flex items-center gap-3">
          <ArrowLeft size={16} className="text-gray-600" />
          <span className="text-blue-700 font-medium">Leads</span>
          <span className="text-gray-500">Kanban</span>
        </div>
        <MoreVertical size={16} />
      </div>

      {/* Label dropdown */}
      <div className="flex gap-2 px-4 mt-3 relative">
        <button
          onClick={() => setShowDropdown((p) => !p)}
          className="flex-1 border rounded px-3 py-1 text-gray-600 flex items-center justify-center gap-1"
        >
          Label <ChevronDown size={16} />
        </button>
        <button
          onClick={() => setShowDropdown(true)}
          className="border rounded px-3"
        >
          +
        </button>

        {showDropdown && (
          <div className="absolute top-10 left-4 right-4 bg-white border rounded shadow z-10">
            {ALL_LABELS.map((l) => (
              <div
                key={l}
                onClick={() => {
                  addLabel(l);
                  setShowDropdown(false);
                  setPage(1);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {l}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected labels */}
      <div className="flex flex-wrap gap-2 px-4 mt-3">
        {labels.map((label, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs ${
              labelColors[label] || "bg-gray-400"
            }`}
          >
            {label}
            <button
              onClick={() => {
                removeLabel(i);
                setPage(1);
              }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
        <div className="border rounded flex items-center px-2">
          <input
            className="flex-1 py-1 outline-none"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
          <Search className="text-gray-500" size={20} />
        </div>
      </div>

      {/* Leads list */}
      <div className="mt-4">
        {paginatedLeads.length === 0 && (
          <div className="text-center text-gray-400 py-6">No leads found</div>
        )}

        {paginatedLeads.map((lead, idx) => (
          <div
            key={lead.id}
            className={`px-4 py-3 border-b ${
              idx === 0 && page === 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ChevronDown size={16} className="-rotate-90" />
                <span className="font-medium">{lead.name}</span>
              </div>
              <span className="border rounded px-2 py-[1px] text-xs bg-white text-gray-600">
                {lead.source}
              </span>
            </div>

            <div className="mt-2 ml-5">
              <span
                className={`text-white inline-block text-xs px-2 py-[2px] rounded ${
                  labelColors[lead.status] || "bg-gray-400 text-white"
                }`}
              >
                {lead.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 py-3 border-t">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <span>{page}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
