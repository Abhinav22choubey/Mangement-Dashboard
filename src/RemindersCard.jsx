import { useState } from "react";
import { Bell, Plus, Layers, CheckCircle, Repeat } from "lucide-react";

const initialReminders = [
  {
    id: 1,
    title: "Call to Client for sale purpose",
    time: "Today, 1:00 PM",
    completed: true,
    recurring: false,
  },
  {
    id: 2,
    title: "Call to Client for sale purpose",
    time: "Today, 1:00 PM",
    completed: true,
    recurring: true,
  },
  {
    id: 3,
    title: "Call to Client for sale purpose",
    time: "Tue, 27 Jan 26, 1:00 PM",
    completed: false,
    recurring: true,
  },
  {
    id: 4,
    title: "Call to Client for sale purpose",
    time: "Tue, 27 Jan 26, 1:00 PM",
    completed: false,
    recurring: true,
  },
];

export default function RemindersCard() {
  const [reminders, setReminders] = useState(initialReminders);

  const toggleComplete = (id) => {
    setReminders((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, completed: !r.completed } : r
      )
    );
  };

  const addReminder = () => {
    const newReminder = {
      id: Date.now(),
      title: "New Reminder",
      time: "Today, 6:00 PM",
      completed: false,
      recurring: false,
    };
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="w-full max-w-sm bg-white mt-4 border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3">
        <Bell size={16} />
        <h2 className="font-semibold text-[15px]">Reminders (Private)</h2>
      </div>

      <div className="border-t border-black/5" />

      {/* Add Reminder */}
      <button
        onClick={addReminder}
        className="flex items-center gap-2 px-4 py-2 w-full text-blue-500 text-sm hover:bg-blue-50 transition"
      >
        <Plus size={18} />
        Add Reminder
      </button>

      <div className="border-t border-black/5" />

      {/* List */}
      <div className="px-2 py-2 space-y-1.5 max-h-[260px] overflow-y-auto">
        {reminders.map((item) => (
          <div key={item.id}>
            <div
              className={`flex items-center justify-between gap-3 px-3 py-1.5  rounded-md hover:bg-gray-50 transition
              ${
                item.completed
                  ? "border-l-4 border-red-500"
                  : ""
              }`}
            >
              <div className="flex items-start gap-1">
                <Layers size={15} className="text-gray-500 mt-0.5" />

                <div>
                  <p className="text-xs font-medium text-blue-700">
                    {item.title}
                  </p>

                  <div className="flex items-center gap-1 mt-0.5  text-[10px] text-gray-600">
                    {item.recurring && <Repeat size={10} />}
                    <span >{item.time}</span>
                  </div>
                </div>
              </div>

              {/* Show tick ONLY if completed */}
              {item.completed && (
                <button onClick={() => toggleComplete(item.id)}>
                  <CheckCircle size={16} className="text-blue-700" />
                </button>
              )}
            </div>

            <div className="border-t border-black/5 my-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
