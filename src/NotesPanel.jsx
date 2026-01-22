import { useState } from "react";
import { Plus,NotepadText, EllipsisVertical } from "lucide-react";
import profile from "./assets/profile.jpg";
import { Badge } from "./Buttons/Button1.jsx";

const initialNotes = [
  {
    id: 1,
    title: "Interested, follow-up tomorrow",
    desc: "Client concerned about resale of the new doc...",
    time: "Tue, 27 Jan 26, 1:00 PM",
    tag: "Important",
    tagColor: "bg-blue-500",
    dot: "bg-red-500",
  },
  {
    id: 2,
    title: "Interested, follow-up tomorrow",
    desc: "Client concerned about resale of the new doc...",
    time: "Tue, 27 Jan 26, 1:00 PM",
    tag: "Help",
    tagColor: "bg-green-500",
    dot: "bg-red-500",
  },
  {
    id: 3,
    title: "Interested, follow-up tomorrow",
    desc: "Client concerned about resale of the new doc...",
    time: "Tue, 27 Jan 26, 1:00 PM",
    tag: "Help",
    tagColor: "bg-green-500",
    dot: "bg-red-500",
  },
  {
    id: 4,
    title: "Interested, follow-up tomorrow",
    desc: "Client concerned about resale of the new doc...",
    time: "Tue, 27 Jan 26, 1:00 PM",
    tag: "Help",
    tagColor: "bg-green-500",
    dot: "bg-red-500",
  },
];

export default function NotesPanel() {
  const [notes, setNotes] = useState(initialNotes);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New note",
      desc: "Write something...",
      time: new Date().toLocaleString(),
      tag: "New",
      tagColor: "bg-gray-500",
      dot: "bg-blue-500",
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="w-full max-w-sm bg-white mt-4 border border-black/5 rounded-md">
      {/* Header */}
      <div className=" px-4 flex col-auto">

        <NotepadText size={20} className="mt-3 mx-1" />
        <div className="py-3 font-semibold text-[15px]">Notes</div>
      </div>
        <div className="border-t border-black/5" />

      {/* Add note */}
      <button
        onClick={addNote}
        className="flex items-center gap-2 w-full px-4 py-2 text-blue-500 text-sm border-b border-black/5 hover:bg-blue-50 transition"
      >
        <Plus size={18} />
        Add Notes
      </button>

      {/* Notes list */}
      <div className="max-h-fit overflow-y-auto">
        {notes.map((note, index) => (
          <div
            key={note.id}
            className="relative flex items-start gap-3 px-4 py-2 border-b border-black/5 hover:bg-gray-50"
          >
            {/* Avatar */}
          
             <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${note.dot}`} />
                <p className="text-sm font-medium text-black line-clamp-1">
                  {note.title}
                </p>
              </div>
              <p className="text-xs text-[#47555f] mt-1 line-clamp-1">
                {note.desc}
              </p>
              <p className="text-[10px] text-[#4E5E6A] mt-1">{note.time}</p>
            </div>

            {/* Tag */}
            <div
              className={`absolute right-5 bottom-2   text-sm `}
            >
              <Badge text={note.tag} color={note.tagColor}></Badge>
            </div>

            {/* Menu only on first card */}
            {index === 0 && (
              <button className="absolute top-3 right-5 w-6 h-6 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition">
                <EllipsisVertical size={14} className="text-[#4E5E6A]" />
              </button>
            )}
          </div>
        ))}
        <div className="border-b mb-2" />
      </div>
    </div>
  );
}
