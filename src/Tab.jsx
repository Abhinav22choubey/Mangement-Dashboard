import { useEffect, useRef, useState } from "react";

const tabs = [
  { name: "Overview", id: "overview" },
  { name: "Follow-Up", id: "followup" },
  { name: "Activity", id: "activity" },
  { name: "Documents", id: "documents" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("overview");
  const OFFSET = 100;

  const isClickScrolling = useRef(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    isClickScrolling.current = true;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // allow scroll tracking again after animation
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let closestSection = null;
      let closestDistance = Infinity;

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - OFFSET);

        if (rect.bottom > OFFSET && rect.top < window.innerHeight) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = tab.id;
          }
        }
      });

      if (closestSection) {
        setActiveTab(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full mt-4 flex justify-center sticky top-0 z-50 bg-white border-b">
      <div className="w-full px-4 sm:px-6">
        <div className="flex gap-6 sm:gap-10 relative flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                scrollToSection(tab.id);
              }}
              className={`relative py-3 text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "font-medium text-black"
                  : "font-normal text-[#4E5E6A]"
              }`}
            >
              {tab.name}

              {activeTab === tab.id && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[4px] w-[75px] rounded-full bg-[#666E81]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
