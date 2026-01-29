import React from "react";
import { FileText } from "lucide-react";

const documents = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  title: "Aadhar Card",
  desc: "This is client aadhar card details for using",
  time: "Mon, 11:45 AM, 11 Dec, 2025",
}));

function DocumentCard({ doc }) {
  return (
    <div className="relative w-[199px] h-[230px] bg-white border border-black/5 ">
      {/* Document Icon */}
      <div className="absolute left-[28px] top-[-7px] w-[149px] h-[149px] flex items-center justify-center">
        <div className="w-[120px] h-[120px] rounded-md bg-gray-100 flex items-center justify-center">
          <FileText className="w-12 h-12 text-red-500" />
        </div>
      </div>

      {/* Divider */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[150px] w-[180px] border-t border-black/5" />

      {/* Title */}
      <h3 className="absolute left-1/2 -translate-x-1/2 top-[154px] w-[186px] font-semibold text-[15px] leading-[18px] text-black truncate">
        {doc.title}
      </h3>

      {/* Description */}
      <p className="absolute left-1/2 -translate-x-1/2 top-[173px] w-[186px] text-[12px] leading-[15px] text-black line-clamp-2">
        {doc.desc}
      </p>

      {/* Time */}
      <p className="absolute left-1/2 -translate-x-1/2 top-[206px] w-[186px] text-[12px] leading-[15px] font-medium text-black truncate">
        {doc.time}
      </p>
    </div>
  );
}

export default function Documents() {
  return (
    <div className="w-full bg-white relative right-3">
      {/* Responsive grid container */}
      <div
        className="grid gap-4 justify-items-start p-4"
        style={{
          maxWidth: "1164px",
          gridTemplateColumns: "repeat(auto-fill, minmax(199px, 1fr))",
        }}
      >
        {documents.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}
