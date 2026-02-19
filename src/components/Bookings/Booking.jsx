import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Building2,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

// ---------------- DATA ----------------
const weeklyData = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 5 },
  { day: "Wed", value: 30 },
  { day: "Thu", value: 20 },
  { day: "Fri", value: 20 },
  { day: "Sat", value: 30 },
  { day: "Sun", value: 35 },
];

const monthlyData = [
  { month: "Jan", value: 1 },
  { month: "Feb", value: 3 },
  { month: "Mar", value: 2 },
  { month: "Apr", value: 2.5 },
  { month: "May", value: 1 },
  { month: "Jun", value: 3 },
  { month: "Jul", value: 3.6 },
  { month: "Aug", value: 2.3 },
  { month: "Sep", value: 3 },
  { month: "Oct", value: 2.3 },
  { month: "Nov", value: 3.8 },
  { month: "Dec", value: 3 },
];

const pieData = [
  { name: "Amount Received", value: 2.6, color: "#00AD28" },
  { name: "Amount Pending", value: 6.6, color: "#0088FF" },
  { name: "Refund Initiated", value: 1.6, color: "#FFCC00" },
  { name: "Refund Complete", value: 0.6, color: "#CB30E0" },
];

// ---------------- PIE LABEL ----------------
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
}) => {
  const RADIAN = Math.PI / 180;

  const sx = cx + outerRadius * Math.cos(-midAngle * RADIAN);
  const sy = cy + outerRadius * Math.sin(-midAngle * RADIAN);

  const ex = cx + (outerRadius + 25) * Math.cos(-midAngle * RADIAN);
  const ey = cy + (outerRadius + 25) * Math.sin(-midAngle * RADIAN);

  const mx = ex + (ex > cx ? 30 : -30);
  const my = ey;

  return (
    <>
      <path
        d={`M${sx},${sy} L${ex},${ey} L${mx},${my}`}
        stroke="black"
        fill="none"
      />

      <text
        x={mx + (mx > cx ? 5 : -5)}
        y={my}
        textAnchor={mx > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {name}
      </text>
    </>
  );
};

// ---------------- CARD ----------------
const StatCard = ({ title, value, bg, iconBg, Icon }) => {
  return (
    <div className={`flex justify-between items-center p-4 rounded-xl ${bg}`}>
      <div className={`w-10 h-10 flex items-center justify-center rounded-md ${iconBg}`}>
        <Icon size={18} color="#fff" />
      </div>

      <div className="text-right">
        <h2 className="text30 font-semibold">{value}</h2>
        <p className="text12 text-gray-500">{title}</p>
      </div>
    </div>
  );
};

// ---------------- MAIN ----------------
const Booking = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div className="bg-white rounded-md p-6 w-full">

          <h1 className="text25 font-semibold mb-6">Booking Dashboard</h1>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard title="Total Bookings" value="998" bg="bg-blue-50" iconBg="bg-[var(--sky)]" Icon={Building2} />
            <StatCard title="Today's New Booking" value="5" bg="bg-yellow-50" iconBg="bg-[var(--yellow)]" Icon={ClipboardList} />
            <StatCard title="Pending Booking" value="15" bg="bg-yellow-50" iconBg="bg-[var(--yellow)]" Icon={ClipboardList} />
            <StatCard title="Cancelled Booking" value="135" bg="bg-orange-50" iconBg="bg-orange-400" Icon={CheckCircle} />
          </div>

          {/* REVENUE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            <StatCard title="Total Revenue" value="₹ 15.3 Cr" bg="bg-yellow-50" iconBg="bg-[var(--yellow)]" Icon={Building2} />
            <StatCard title="Total Received Amount" value="₹ 5.3 Cr" bg="bg-orange-50" iconBg="bg-orange-400" Icon={Building2} />
            <StatCard title="Total Pending Amount" value="₹ 10 Cr" bg="bg-orange-50" iconBg="bg-orange-400" Icon={Building2} />
            <StatCard title="Today Revenue" value="₹ 147 Lakh" bg="bg-orange-50" iconBg="bg-orange-400" Icon={Building2} />
          </div>

          {/* ACTIONABLE */}
          <h2 className="text25 font-semibold mt-8 mb-4">Actionable Client</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard title="New Booking" value="105" bg="bg-yellow-50" iconBg="bg-[var(--yellow)]" Icon={ClipboardList} />
            <StatCard title="Token Amount Paid" value="₹ 5.3 Cr" bg="bg-orange-50" iconBg="bg-orange-400" Icon={ClipboardList} />
            <StatCard title="Agreement Pending" value="50" bg="bg-orange-50" iconBg="bg-orange-400" Icon={ClipboardList} />
            <StatCard title="Complete" value="30" bg="bg-orange-50" iconBg="bg-orange-400" Icon={CheckCircle} />
            <StatCard title="Cancelled Booking" value="5" bg="bg-yellow-50" iconBg="bg-[var(--yellow)]" Icon={CheckCircle} />
            <StatCard title="Refund Initiated" value="₹ 10 Lakhs" bg="bg-orange-50" iconBg="bg-orange-400" Icon={CheckCircle} />
          </div>

          {/* GRAPHS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text20 font-semibold mb-4">Weekly booking graph</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text20 font-semibold mb-4">Monthly Revenue Graph</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PIE */}
          <div className="bg-white p-6 rounded-xl shadow mt-8">
            <h3 className="text20 font-semibold mb-6">Pricing Breakdown</h3>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              <div className="flex justify-center w-full lg:w-1/2">
                <ResponsiveContainer width={400} height={350}>
                  <PieChart
                    margin={{ top: 20, right: 80, left: 80, bottom: 20 }}
                    style={{ overflow: "visible" }}
                  >
                    <Pie
                      data={pieData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={110}
                      label={renderCustomizedLabel}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* LEGEND */}
              <div className="space-y-6 ml-3 w-full lg:w-1/2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-4 bg-green-500" />
                  <p className="text18">Total Amount Received: ₹ 2.6 Cr</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-4 bg-blue-500" />
                  <p className="text18">Total Pending Amount: ₹ 6.6 Cr</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-4 bg-yellow-400" />
                  <p className="text18">Total Refund Initiated: ₹ 1.6 Cr</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-4 bg-purple-500" />
                  <p className="text18">Total Refund Complete: ₹ 60 Lakhs</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;
