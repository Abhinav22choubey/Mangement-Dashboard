import {
  Check,
  IdCardLanyard as IdCard,
  MessageCircle,
  NotebookText,
  CalendarFold,
} from "lucide-react";
import prof from "./assets/profile.jpg";
const Icon = ({ children }) => (
  <div className="w-[20px] h-[20px] flex items-center justify-center opacity-50 shrink-0">
    {children}
  </div>
);

export default function ActivityRight() {
  return (
    <div className="w-full max-w-[360px] bg-white border pl-1 mt-4 overflow-hidden">

      {/* Header */}
      <div className="flex gap-3 items-start pt-4 pb-2 px-3">
        <div className="w-7 h-7 rounded-full bg-(--green) flex items-center justify-center shrink-0">
          <Check size={16} className="text-white" />
        </div>

        <div>
          <h3 className="text18 font-semibold">Visit Done</h3>
          <p className="text14 text-[#667085]">
            Mon, 25 Dec 2025, 5:35 PM
          </p>
        </div>
      </div>

      <Divider />

      {/* Followed By */}
      <Row
        icon={<IdCard size={28} />}
        label="Followed By"
        value={
          <div className="flex items-center gap-2 mt-1">
            <img
              src={prof}
              alt="avatar"
              className="w-6 h-6 object-cover rounded-full"
            />
            <span>Ashish Kumar</span>
          </div>
        }
      />

      <Divider />

      {/* Title */}
      <Row
        icon={<MessageCircle size={20} />}
        label="Title"
        value="ABC Heights – Sunday Visit"
      />

      <Divider />

      {/* Description */}
      <Row
        icon={<MessageCircle size={20} />}
        label="Description"
        value="Client is interested in ABC Heights on sunday visit and he ask proposal of the site."
      />

      <Divider />

      {/* Notes */}
      <Row
        icon={<NotebookText size={20} />}
        label="Notes"
        value="Client comparing with XYZ project, follow-up after 2 days."
      />

      <Divider />

      {/* Next Follow Date */}
      <Row
        icon={<CalendarFold size={20} />}
        label="Next Follow Date"
        value="Wed, 27 Dec 2025"
      />
        <Divider />

      {/* Buttons */}
      <div className="flex gap-3 p-4">
        <button className="bg-(--primary) text-white px-5 py-2 rounded-lg text15">
          Edit
        </button>
        <button className="bg-(--green) text-white px-5 py-2 rounded-lg text15">
          Add Notes
        </button>
      </div>
    </div>
  );
}

/* Reusable components */

function Divider() {
  return <div className="h-px bg-black/5 w-full" />;
}

function Row({ icon, label, value }) {
  return (
    <div className="flex gap-3 p-2 px-3 items-center">
      <Icon>{icon}</Icon>

      <div className="flex-1">
        <p className="text12 text-[#667085]">{label}</p>
        <div className="text14 text-black mt-0 leading-tight">
          {value}
        </div>
      </div>
    </div>
  );
}
