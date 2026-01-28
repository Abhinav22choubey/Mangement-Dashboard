import React from "react";
import {
  User,
  Phone,
  MessageCircleMore,
  NotepadText,
  CalendarFold,
} from "lucide-react";

export default function NegotiationRight() {
  return (
    <div className=" flex items-center justify-center  p-3">
      {/* Card */}
      <div className="w-full max-w-[340px] bg-white  overflow-hidden">
        {/* Header */}
        <div className="p-3">
          <h2 className="text-lg font-medium text-black">Negotiation</h2>
          <p className="text14 text-[#666E81] mt-1">Mon, 25 Dec 2025, 5:35 PM</p>
        </div>

        <div className="border-t border-black/5" />

        {/* Followed By */}
        <div className="flex items-center gap-3 p-3">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={14} className="text-black" />
          </div>
          <div>
            <p className="text12 text-[#4E5E6A]">Followed By:</p>
            <p className="text14 text-black">Ashish Kumar</p>
          </div>
        </div>

        <div className="border-t border-black/5" />

        {/* Follow Type */}
        <div className="flex items-center gap-3 p-3">
          <Phone size={20} className="text-black" />
          <div>
            <p className="text12 text-[#4E5E6A]">Follow Type:</p>
            <p className="text14 text-black">Call</p>
          </div>
        </div>

        <div className="border-t border-black/5" />

        {/* Client Says */}
        <div className="flex items-start gap-3 p-3">
          <MessageCircleMore size={20} className="text-black mt-1" />
          <div>
            <p className="text12 text-[#4E5E6A]">What’s Client Says</p>
            <p className="text14 text-black mt-1">Ask Proposal of XYZ Project</p>
          </div>
        </div>

        <div className="border-t border-black/5" />

        {/* Notes */}
        <div className="flex items-start gap-3 p-3">
          <NotepadText size={28} className="text-black mt-1" />
          <div>
            <p className="text12 text-[#4E5E6A]">Notes</p>
            <p className="text14 text-black mt-1">
              Client comparing with XYZ project, follow-up after 2 days.
            </p>
          </div>
        </div>

        <div className="border-t border-black/5" />

        {/* Next Follow Date */}
        <div className="flex items-center gap-3 p-3">
          <CalendarFold size={20} className="text-black" />
          <div>
            <p className="text12 text-[#4E5E6A]">Next Follow Date</p>
            <p className="text14 text-black">Wed, 27 Dec 2025</p>
          </div>
        </div>

        <div className="border-t border-black/5" />

        {/* Actions */}
        <div className="flex gap-3 p-3">
          <button className="bg-[var(--primary)] text-white px-4 py-2 rounded text15">
            Edit
          </button>
          <button className="bg-[var(--green)] text-white px-4 py-2 rounded text15">
            Add Notes
          </button>
        </div>
      </div>
    </div>
  );
}
