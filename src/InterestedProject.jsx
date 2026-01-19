import { useState } from "react";
import { Building2, MoreVertical, Plus, ChevronDown, MoreHorizontal } from "lucide-react";

const projectsData = [
  {
    id: 1,
    leadIntent: "Buy - Builder Project",
    location: "Noida Extension",
    features: [
      "Natural sunlight & cross ventilation",
      "Vastu-compliant design",
      "Dedicated covered car parking",
      "Fire safety systems",
    ],
    notes:
      "Spoke with client, looking for a 2BHK within ₹50L budget. Asked to share project details on WhatsApp.",
    projectName: "Twin Chalet",
    budget: "₹ 50 - 60 Lakhs",
    propertyType: "2 BHK, 3 BHK",
    status: "Ready to Move",
    accent: "bg-yellow-400",
  },
  {
    id: 2,
    leadIntent: "Buy - Resale Property",
    location: "Noida Extension",
    features: [
      "Vastu-friendly orientation",
      "East Facing",
      "Lift available",
      "24×7 water supply",
    ],
    notes:
      "Client prefers middle floor and park facing flat. Wants possession within 2 months. Budget slightly flexible if society is premium.",
    projectName: "Shri Nivas Bhavan",
    budget: "₹ 50 - 60 Lakhs",
    propertyType: "2 BHK, 3 BHK",
    status: "Ready to Move",
    accent: "bg-green-500",
  },
  {
    id: 3,
    leadIntent: "Buy - Builder Project",
    location: "Greater Noida West",
    features: ["Club house", "Gym", "Swimming pool"],
    notes: "Client wants possession before Diwali.",
    projectName: "Sky Gardens",
    budget: "₹ 65 - 75 Lakhs",
    propertyType: "3 BHK",
    status: "Under Construction",
    accent: "bg-blue-500",
  },
];

function InfoItem({ label, value, highlight }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-slate-500 font-medium">{label}</span>
      <span
        className={`text-sm font-medium ${
          highlight === "blue" ? "text-blue-600" : "text-slate-900"
        } ${highlight === "red" ? "text-red-500" : ""}`}
      >
        {value}
      </span>
    </div>
  );
}

function ProjectCard({ project, showNotes }) {
  return (
    <div className="relative  rounded-lg overflow-hidden bg-white shadow-sm">
      <div className={`h-2 w-full ${project.accent}`} />

      <button className="absolute top-3 right-3 p-1 rounded-full bg-white shadow">
        <MoreHorizontal size={16} />
      </button>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-4">
          <InfoItem label="Lead Intent" value={project.leadIntent} />
          <InfoItem label="Preferred Location" value={project.location} />
        </div>

        <div className="flex flex-col gap-4">
          <InfoItem
            label="Project Name"
            value={project.projectName}
            highlight="blue"
          />
          <InfoItem label="Budget" value={project.budget} highlight="red" />
        </div>

        <div className="flex flex-col gap-4">
          <InfoItem label="Property Type" value={project.propertyType} />
          <InfoItem label="Property Status" value={project.status} />
        </div>

        <div className="md:col-span-3 w-full">
          <p className="text-xs text-slate-600 font-bold mb-1">
            Key Features Required
          </p>

          <ul className="list-disc ml-5 text-sm font-medium text-slate-900 space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {showNotes && project.notes && (
            <div className="mt-3">
              <InfoItem label="Notes" value={project.notes} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function InterestedProjects() {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded
    ? projectsData
    : projectsData.slice(0, 2);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white mt-4 py-4 relative">
      {/* Header */}
      <div className="flex items-center mx-4 justify-between  mb-4">
        <div className="flex items-center gap-2">
          <Building2 size={18} />
          <h2 className="text-sm font-medium">
            Interested Project / Property
          </h2>
        </div>

        <button className="flex items-center gap-1 text-sm text-blue-500 font-medium">
          <Plus size={16} /> Add
        </button>
      </div>
      <div className="border-t border-gray-200 pb-3" />
      {/* Cards wrapper */}
      <div className="relative mx-4 px-4">
        <div className="flex flex-col gap-4">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              showNotes={expanded || index === 0}
            />
          ))}
        </div>

        {/* Rectangle blur overlay (Figma style) */}
        {!expanded && projectsData.length > 2 && (
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full"
            style={{
              height: "31px",
              background: "#ffffff",
              filter: "blur(6px)",
            }}
          />
        )}

        {/* Floating button */}
        {projectsData.length > 2 && (
          <div className="relative left-1/2 bottom-0 justify-start flex -translate-x-1/2">
            <button
              onClick={() => setExpanded((p) => !p)}
              className="flex items-center gap-1 text-sm text-blue-600 font-medium px-4 py-1.5"
            >
              {expanded ? "View Less" : "View More"}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
