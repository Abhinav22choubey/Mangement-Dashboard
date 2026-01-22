import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  CircleX,
  Search
} from "lucide-react";

import { Button1 } from "./Buttons/Button1.jsx";

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
    <div className="w-[400px] sticky top-[50px] h-[calc(100vh-50px)] border border-gray-200 bg-white text-sm font-inter relative overflow-y-auto">

      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
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
          className="flex-1 border border-gray-200 rounded px-3 h-8 text-gray-600 flex items-center justify-center gap-1 leading-none"
        >
          Label <ChevronDown size={16} />
        </button>

        <button
          onClick={() => setShowDropdown(true)}
          className="border border-gray-200 rounded px-3 h-8 flex items-center justify-center"
        >
          +
        </button>

        {showDropdown && (
          <div className="absolute top-10 left-4 right-4 bg-white border border-gray-200 rounded shadow z-10 overflow-hidden">
            {ALL_LABELS.map((l) => (
              <div
                key={l}
                onClick={() => {
                  addLabel(l);
                  setShowDropdown(false);
                  setPage(1);
                }}
                className="h-10 flex items-center justify-center text-sm hover:bg-gray-100 cursor-pointer transition"
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
            className={`flex items-center justify-center gap-2 px-3 h-7 rounded-full text-white text-sm leading-none ${
              labelColors[label] || "bg-gray-400"
            }`}
          >
            {label}
            <button
              onClick={() => { removeLabel(i); setPage(1); }}
              className="flex items-center justify-center"
            >
              <CircleX size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
        <div className="border border-gray-200 rounded flex items-center px-2 h-8">
          <input
            className="flex-1 h-full outline-none leading-none"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
          <Search className="text-gray-500" size={18} />
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
            className={`px-4 py-3 border-b border-gray-200 ${
              idx === 0 && page === 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ChevronDown size={16} className="-rotate-90" />
                <span className="font-medium line-clamp-1">{lead.name}</span>
              </div>

              <span className="border border-gray-200 flex items-center justify-center rounded px-2 h-5 text-xs bg-white text-gray-600 leading-none">
                {lead.source}
              </span>
            </div>

            <div className="mt-2 ml-5 flex items-center">
              <Button1 value={lead.status} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 h-12 border-t border-gray-200">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="disabled:opacity-30 flex items-center justify-center"
        >
          <ChevronLeft size={16} />
        </button>

        <span>{page}</span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="disabled:opacity-30 flex items-center justify-center"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
