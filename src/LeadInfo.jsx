import React from "react";
import {
  Layers,
  MoreVertical,
  MoreHorizontal,
  UserRound,
  Phone,
  Building2,
  UsersRound,
  Search,
  Tag,
  CheckCircle2,
  MapPin,
  Globe,
  NotebookText,
  CalendarFold,
} from "lucide-react";

import profile from "./assets/profile.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";

// Common class for all muted (gray) icons
const mutedIconClass = "text-gray-400";

export default function LeadInfoPanel() {
  return (
    <div className="w-full max-w-sm bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-2">
          {/* Keep Layers icon normal */}
          <Layers size={18} />
          <h2 className="font-semibold text-sm">Lead Info</h2>
        </div>
        <button className="p-1 rounded-full shadow">
          <MoreHorizontal size={16} className={mutedIconClass} />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4 text-sm">
        <InfoRow
          icon={<UserRound size={18} className={mutedIconClass} />}
          label="Name"
          value="Ajay Verma"
        />
        <Divider />

        <InfoRow
          icon={<Phone size={18} className={mutedIconClass} />}
          label="Mobile No."
          value="+91 7896541230"
        />
        <Divider />

        <InfoRow
          icon={<Building2 size={18} className={mutedIconClass} />}
          label="Organization"
          value="SpriteEra IT Solutions Pvt. Ltd."
        />
        <Divider />

        {/* Lead Owner */}
        <div className="flex gap-3 items-start">
          <UsersRound size={18} className={`${mutedIconClass} mt-1`} />
          <div>
            <p className="text-gray-500 text-xs">Lead Owner</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src={profile}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>

              <p className="font-medium">Nihal Singh</p>
            </div>
          </div>
        </div>
        <Divider />

        {/* Assign People */}
        <div className="flex gap-3 items-start">
          <UsersRound size={18} className={`${mutedIconClass} mt-1`} />
          <div>
            <p className="text-gray-500 text-xs">Assign People</p>
            <div className="flex gap-2 mt-1">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src={profile}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src={p2}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src={p3}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src={p4}
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Divider />

        <InfoRow
          icon={<Search size={18} className={mutedIconClass} />}
          label="Source"
          value="Facebook"
        />
        <Divider />

        {/* Labels */}
        <div className="flex gap-3 items-start">
          <Tag size={18} className={`${mutedIconClass} mt-1`} />
          <div>
            <p className="text-gray-500 text-xs">Label</p>
            <div className="flex gap-2 mt-1 flex-wrap">
              <Badge text="Call this week" color="bg-green-600" />
              <Badge text="90% Close" color="bg-orange-500" />
            </div>
          </div>
        </div>
        <Divider />

        {/* Status */}
        <div className="flex gap-3 items-start">
          <CheckCircle2 size={18} className={`${mutedIconClass} mt-1`} />
          <div>
            <p className="text-gray-500 text-xs">Status</p>
            <Badge text="Negotiation" color="bg-blue-700" />
          </div>
        </div>
        <Divider />

        <InfoRow
          icon={<MapPin size={18} className={mutedIconClass} />}
          label="Address"
          value="84697 Lurline Track Lake Benton, Massachusetts, Iceland"
        />
        <Divider />

        <InfoRow
          icon={<Globe size={18} className={mutedIconClass} />}
          label="Website"
          value="www.spriteera.com"
          link
        />
        <Divider />

        <InfoRow
          icon={<NotebookText size={18} className={mutedIconClass} />}
          label="VAT Number"
          value="ABCIJEUY98794B"
        />
        <Divider />

        <InfoRow
          icon={<NotebookText size={18} className={mutedIconClass} />}
          label="GST Number"
          value="KIUH85464JLIOH"
        />
        <Divider />

        <InfoRow
          icon={<CalendarFold size={18} className={mutedIconClass} />}
          label="Created At"
          value="21 Jan 2026, 8:35 AM"
        />
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, link = false }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <p className="text-gray-500 text-xs">{label}</p>
        {link ? (
          <a
            href={`https://${value}`}
            className="text-blue-600 font-medium break-words"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium break-words">{value}</p>
        )}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="border-b" />;
}

function Badge({ text, color }) {
  return (
    <span
      className={`${color} text-white text-xs px-2 py-0.5 rounded-md font-medium`}
    >
      {text}
    </span>
  );
}
