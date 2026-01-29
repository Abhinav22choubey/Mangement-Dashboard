import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Layers,
  CheckCircle,
  Briefcase,
  FolderKanban,
  RefreshCcw,
  Wallet,
  Users,
  Ticket,
  Notebook,
  BarChart3,
  Settings,
  ChevronRight
} from "lucide-react";
import { useLocation, useNavigate, Link, Outlet } from "react-router-dom";
import Header from "./Header";

// import SideTools from "../SideTools";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    Participants: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

 const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    link: "/dashboard",
  },
  {
    name: "Leads",
    icon: <Layers size={20} />,
    expandable: true,
    subItems: [
      { name: "All Leads", link: "/dashboard/leads/all" },
      { name: "Kanban", link: "/dashboard/leads/kanban" },
      { name: "Add Leads", link: "/dashboard/leads/add" },
      { name: "Follow Ups", link: "/dashboard/leads/follow-ups" },
    ],
  },
  {
    name: "Booking",
    icon: <CheckCircle size={20} />,
    link: "/dashboard/booking",
  },
  {
    name: "Client",
    icon: <Briefcase size={20} />,
    link: "/dashboard/client",
  },
  {
    name: "Projects",
    icon: <FolderKanban size={20} />,
    expandable: true,
    subItems: [
      { name: "Builder Projects", link: "/dashboard/projects/builder" },
      { name: "Properties", link: "/dashboard/projects/properties" },
      { name: "Add Leads", link: "/dashboard/projects/add-leads" },
    ],
  },
  {
    name: "Inventory",
    icon: <RefreshCcw size={20} />,
    expandable: true,
    subItems: [
      { name: "Project Inventory", link: "/dashboard/inventory/project" },
    ],
  },
  {
    name: "Expenses",
    icon: <Wallet size={20} />,
    link: "/dashboard/expenses",
  },
  {
    name: "Employee",
    icon: <Users size={20} />,
    link: "/dashboard/employee",
  },
  {
    name: "Tickets",
    icon: <Ticket size={20} />,
    link: "/dashboard/tickets",
  },
  {
    name: "Notes",
    icon: <Notebook size={20} />,
    link: "/dashboard/notes",
  },
  {
    name: "Report",
    icon: <BarChart3 size={20} />,
    link: "/dashboard/report",
  },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    link: "/dashboard/settings",
  },
];

  const toggleSection = (name) => {
    setExpandedSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
      <div className="h-[calc(100vh-52px)] flex">
        {/* SIDEBAR */}
        <div
          className={`bg-white h-full py-4 shadow-md overflow-x-hidden relative hide-scrollbar ${
            expanded ? "w-64" : "w-16"
          }`}
        >
          {/* LOGO */}
          {/* <div className="px-2 mb-1">
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.img
                  key="logo"
                  src="/logo.png"
                  className="max-h-10 mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                <motion.h1
                  key="mini"
                  className="text-xl font-medium text-center text-(--primary)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  SP
                </motion.h1>
              )}
            </AnimatePresence>
          </div> */}

          {/* MENU */}
          <div className="px-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.link;

              return (
                <div key={item.name}>
                  <motion.div
                    className={`flex items-center px-2 py-1.5 rounded-md cursor-pointer  text15 ${
                      isActive
                        ? "bg-(--primary) text-white"
                        : "text-[#4E5E6A] hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      item.expandable
                        ? toggleSection(item.name)
                        : navigate(item.link)
                    }
                    whileHover={{ x: 3 }}
                  >
                    <span
                      className={`p-1 rounded-md ${
                        isActive
                          ? "bg-(--primary) text-white"
                          : "bg-(--tertiary)/80"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {expanded && (
                      <div className="flex justify-between ml-3 w-full">
                        <span className="text15">{item.name}</span>
                        {item.expandable && (
                          <motion.div
                            animate={{
                              rotate: expandedSections[item.name] ? 90 : 0,
                            }}
                          >
                            <ChevronRight size={16} />
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>

                  {/* SUB MENU */}
                  <AnimatePresence>
                    {item.expandable &&
                      expandedSections[item.name] &&
                      expanded && (
                        <motion.div
                          className="mt-1 space-y-1"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          {item.subItems.map((sub) => (
                            <Link to={sub.link} key={sub.name}>
                              <motion.div
                                className={`flex items-center px-4 py-2 rounded-md ${
                                  location.pathname === sub.link
                                    ? "bg-(--primary)/15 text-(--primary)"
                                    : "text-[#4E5E6A] hover:bg-gray-100"
                                }`}
                                whileHover={{ x: 3 }}
                                onClick={() => setActiveItem(sub.name)}
                              >
                                <div className={`ml-1 size-1.5 rounded-full ${location.pathname === sub.link ? "bg-(--primary)" : "bg-[#4E5E6A]"}`}/>
                                <span className="ml-5 text15">
                                  {sub.name}
                                </span>
                              </motion.div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* FOOTER BUTTONS */}
          {/* <div className="absolute bottom-4 w-full px-4 space-y-2">
            <button
              onClick={() => navigate("/contest")}
              className="w-full bg-(--primary) text-white p-2 rounded-md"
            >
              {expanded ? "← Main Menu" : <ChevronLeft />}
            </button>

            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full border-2 border-(--primary) text-(--primary) p-2 rounded-md"
            >
              {expanded ? "Collapse ←" : <ArrowRight />}
            </button>
          </div> */}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col w-full">
          {/* <div className="flex justify-between shadow ">
            
            <Header />
          </div> */}

          <div className="flex-1 p-6 overflow-y-auto bg-[#f9f9f9]">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
