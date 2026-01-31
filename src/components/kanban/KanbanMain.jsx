import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  useDroppable,
  MeasuringStrategy,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Users,SquareArrowOutUpRight ,Anchor } from "lucide-react";

import profile from "../../assets/kanban/profile.jpg";

/* -------------------- DATA -------------------- */

const STATUSES = [
  { id: "new", title: "New", color: "border-blue-500" },
  { id: "contacted", title: "Contacted", color: "border-sky-500" },
  { id: "planned", title: "Site Visit Planned", color: "border-orange-400" },
  { id: "done", title: "Site Visit Done", color: "border-yellow-400" },
  { id: "negotiation", title: "Negotiation", color: "border-green-500" },
];

const INITIAL_LEADS = [
  { id: "1", name: "Akash Kumar Singh", source: "Facebook", status: "new", assignees: 2 },
  { id: "2", name: "Rohit Sharma", source: "Instagram", status: "new", assignees: 1 },
  { id: "3", name: "Neha Verma", source: "Website", status: "new", assignees: 3 },

  { id: "4", name: "Amit Patel", source: "Facebook", status: "contacted", assignees: 2 },
  { id: "5", name: "Priya Singh", source: "Referral", status: "contacted", assignees: 1 },

  { id: "6", name: "Vikas Yadav", source: "Google Ads", status: "planned", assignees: 2 },
  { id: "7", name: "Anjali Mehta", source: "Website", status: "planned", assignees: 2 },

  { id: "8", name: "Suresh Kumar", source: "Facebook", status: "done", assignees: 1 },
  { id: "9", name: "Pooja Nair", source: "Instagram", status: "done", assignees: 3 },

  { id: "10", name: "Rahul Malhotra", source: "Referral", status: "negotiation", assignees: 2 },
  { id: "11", name: "Sneha Joshi", source: "Website", status: "negotiation", assignees: 1 },
];

/* -------------------- CARD -------------------- */

function LeadCard({ lead }) {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
    useSortable({
      id: lead.id,
      animateLayoutChanges: () => false,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? "transform 120ms ease-out",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-white rounded-[5px] shadow-sm
        w-full max-w-[250px] min-h-[84px]
        px-2.5 py-2
        cursor-grab active:cursor-grabbing
        transition-all
        ${isDragging ? "opacity-60 scale-[0.97]" : ""}
      `}
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
            <img src={profile} alt="Profile" className="w-6 h-6 rounded-full bg-contain" />
          <p className="text14 truncate max-w-[150px]">
            {lead.name}
          </p>
        </div>

        <div className="w-[20px] h-[20px]  flex items-center justify-center">
          <SquareArrowOutUpRight size={16} className="text-[#508bb8]" />
            
        </div>
      </div>

      {/* SOURCE */}
      <div className="flex items-center justify-between gap-1.5 mt-2">
        <div className="flex items-center gap-1.5">

        <Anchor size={12} className="text-[#4E5E6A]" />
        <span className="text12">{lead.source}</span>
        </div>
        <img src={profile} alt="Profile" className="w-4 h-4 rounded-full bg-contain" />
      </div>

      {/* BOTTOM */}
      <div className="flex items-center justify-between mt-2">
        <span className="bg-(--green) border border-[#2DAE05] text-white text-[10px] px-2 py-[2px] rounded-[2px]">
          Call this week
        </span>

        <div className="flex items-center gap-1 text12">
          <Users size={12} className="text-[#4E5E6A]" />
          {lead.assignees}
        </div>
      </div>
    </div>
  );
}

/* -------------------- COLUMN -------------------- */

function Column({ status, leads }) {
  const { setNodeRef, isOver } = useDroppable({ id: status.id });

  return (
    <div ref={setNodeRef} className="w-[260px] shrink-0">
      <div
        className={`bg-white h-10 rounded-md border-b-2 ${status.color} flex items-center px-4`}
      >
        <p className="text-sm font-semibold">{status.title}</p>
      </div>

      <div
        className={`mt-3 flex flex-col gap-2 min-h-[60px] rounded-md transition-colors
        ${isOver ? "bg-black/5 p-1" : ""}`}
      >
        <SortableContext
          items={leads.map((l) => l.id)}
          strategy={verticalListSortingStrategy}
        >
          {leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

/* -------------------- BOARD -------------------- */

export default function KanbanBoard() {
  const [leads, setLeads] = useState(INITIAL_LEADS);

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const activeLead = leads.find((l) => l.id === active.id);
    if (!activeLead) return;

    // Drop on column
    if (STATUSES.some((s) => s.id === over.id)) {
      setLeads((prev) =>
        prev.map((l) =>
          l.id === active.id ? { ...l, status: over.id } : l
        )
      );
      return;
    }

    // Drop on another card
    const overLead = leads.find((l) => l.id === over.id);
    if (!overLead) return;

    if (activeLead.status !== overLead.status) {
      setLeads((prev) =>
        prev.map((l) =>
          l.id === active.id ? { ...l, status: overLead.status } : l
        )
      );
    }
  };

  return (
    <div className="w-full">
      <DndContext
        collisionDetection={closestCorners}
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        onDragEnd={handleDragEnd}
      >
        <div className="bg-[#F2F4F6] rounded-md w-full overflow-hidden">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-6 w-max py-4 px-4">
              {STATUSES.map((status) => (
                <Column
                  key={status.id}
                  status={status}
                  leads={leads.filter((l) => l.status === status.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );
}
