import { useEffect, useRef, useState } from "react";

/**
 * Tabs Component
 *
 * A flexible tabs component with multiple styles and animated underline.
 *
 * @component
 * @example
 * ```jsx
 * <Tabs
 *   tabs={[
 *     { id: "all", label: "All Leads" },
 *     { id: "open", label: "Open", count: 12 },
 *     { id: "closed", label: "Closed", disabled: true }
 *   ]}
 *   activeTab={activeTab}
 *   onTabChange={setActiveTab}
 *   variant="underline"
 * >
 *   <AllLeads />
 *   <OpenLeads />
 *   <ClosedLeads />
 * </Tabs>
 * ```
 *
 * @param {Object} props
 * @param {{id:string,label:string,icon?:React.ReactNode,count?:number,disabled?:boolean}[]} props.tabs
 * @param {string} props.activeTab - Active tab id
 * @param {(id:string)=>void} props.onTabChange - Tab change callback
 * @param {('underline'|'pills'|'bordered')} [props.variant='underline']
 * @param {('sm'|'md'|'lg')} [props.size='md']
 * @param {string} [props.className]
 * @param {string} [props.tabClassName]
 * @param {string} [props.activeTabClassName]
 * @param {boolean} [props.showBorder=true]
 * @param {boolean} [props.animatedUnderline=true]
 * @param {string[]} [props.defaultHidden]
 * @param {React.ReactNode|React.ReactNode[]} props.children
 */

const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "underline",
  size = "md",
  className = "",
  tabClassName = "",
  activeTabClassName = "",
  showBorder = true,
  children,
  animatedUnderline = true,
  defaultHidden = [],
}) => {
  const activeTabLineRef = useRef(null);
  const activeTabRef = useRef(null);

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const activeTabIndex = tabs.findIndex((t) => t.id === activeTab);

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-6 py-4 text-base",
  };

  const moveUnderline = (btn) => {
    if (!btn || !activeTabLineRef.current) return;
    activeTabLineRef.current.style.width = btn.offsetWidth + "px";
    activeTabLineRef.current.style.left = btn.offsetLeft + "px";
  };

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      if (variant === "underline" && animatedUnderline) {
        moveUnderline(activeTabRef.current);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [variant, animatedUnderline]);

  useEffect(() => {
    if (variant === "underline" && animatedUnderline) {
      moveUnderline(activeTabRef.current);
    }
  }, [activeTab]);

  const getTabClasses = (tab, isActive) => {
    const base = `
      flex items-center gap-1 whitespace-nowrap min-w-fit font-medium
      transition-colors cursor-pointer
      ${sizeClasses[size]} ${tabClassName}
    `;

    if (variant === "underline") {
      return `${base} ${
        isActive
          ? `text-(--primary) ${activeTabClassName}`
          : "text-gray-500 hover:text-gray-600"
      } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}`;
    }

    if (variant === "pills") {
      return `${base} rounded-lg ${
        isActive
          ? `bg-(--primary) text-white ${activeTabClassName}`
          : "text-gray-500 hover:bg-gray-100"
      }`;
    }

    if (variant === "bordered") {
      return `${base} border ${
        isActive
          ? `bg-(--primary) text-white ${activeTabClassName}`
          : "bg-white text-gray-500 hover:bg-gray-50"
      }`;
    }

    return base;
  };

  return (
    <>
      {/* Tabs */}
      <div
        className={`relative flex overflow-x-auto ${
          showBorder && variant === "underline"
            ? "border-b border-gray-300"
            : ""
        } ${className}`}
      >
        {tabs.map((tab) => {
          if (defaultHidden.includes(tab.id) && width <= 766) return null;

          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              ref={isActive ? activeTabRef : null}
              disabled={tab.disabled}
              onClick={(e) =>
                !tab.disabled && onTabChange(tab.id)
              }
              className={getTabClasses(tab, isActive)}
            >
              {tab.icon}
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    isActive
                      ? "bg-white text-(--primary)"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}

        {variant === "underline" && animatedUnderline && (
          <hr
            ref={activeTabLineRef}
            className="absolute bottom-0 border-[1.8px] border-(--primary) rounded transition-all duration-300"
          />
        )}
      </div>

      {/* Content */}
      {children && (
        <div className="w-full">
          {Array.isArray(children)
            ? children[activeTabIndex]
            : children}
        </div>
      )}
    </>
  );
};

export default Tabs;
