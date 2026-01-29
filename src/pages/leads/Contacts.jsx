import { Mail, Phone, UsersRound } from "lucide-react";

const contact = [
  {
    initial: "A",
    name: "Ajay Singh",
    role: "Owner, SpriteEra IT Solutions",
    email: "ajayverma@spriteera.com",
    phone: "+91 7896541230",
  },
  {
    initial: "H",
    name: "Harshit Kaushal",
    role: "Owner, SpriteEra IT Solutions",
    email: "harshitkaushal@spriteera.com",
    phone: "+91 7896541230",
  },
];

export default function Contacts() {
  return (
    <div className="w-full relative bg-white border-gray-200">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text16 font-medium">
          <UsersRound size={16} />
          <span>Contacts</span>
        </div>

        <button className="text16 font-medium text-blue-500 hover:underline">
          + Add
        </button>
      </div>

      <div className="border-t border-gray-200" />

      {/* Contact List */}
      <div className="divide-y divide-gray-200">
        {contact.map((c, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-x-10 gap-y-4 px-4 py-4 items-start"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-500 center text-white font-semibold">
                {c.initial}
              </div>

              <div>
                <p className="text16 font-medium text-black">{c.name}</p>
                <p className="text14 text-slate-500">{c.role}</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex relative flex-col gap-2 ml-[30%] text14 text-slate-500">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{c.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{c.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
