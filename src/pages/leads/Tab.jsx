export default function Tab({ activeTab, setActiveTab }) {
  const tabs = [
    { name: "Overview", id: "overview" },
    { name: "Follow-Up", id: "followup" },
    { name: "Activity", id: "activity" },
    { name: "Documents", id: "documents" },
  ];

  return (
    <div className="w-full mt-4 flex justify-start pl-6 z-50 bg-white overflow-x-auto hide-scrollbar">
      <div className="flex gap-8 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-3 transition-all text14 whitespace-nowrap ${
              activeTab === tab.id
                ? "text-black font-medium"
                : "text-gray-500"
            }`}
          >
            {tab.name}

            {activeTab === tab.id && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-[60px] bg-gray-600 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
