  import React, { useState } from "react";
  import { Search, Eye, Filter, Columns2,CircleX, Crosshair } from "lucide-react";
  import profile from "../../assets/kanban/profile.jpg";

  const clientsData = [
    {
      name: "Rahul Singh",
      project: "Twin Chalet",
      type: "Flat",
      config: "3BHK, A-105",
      status: "Complete",
      amount: "₹ 1.36 Cr",
      received: "₹ 12.5 Lakh",
      sales: "Nihal Singh",
    },
    {
      name: "Amit Sharma",
      project: "Green Valley",
      type: "Flat",
      config: "2BHK, B-203",
      status: "Pending",
      amount: "₹ 75 Lakh",
      received: "₹ 40 Lakh",
      sales: "Rohit Verma",
    },
    {
      name: "Priya Verma",
      project: "Sunshine Residency",
      type: "Flat",
      config: "3BHK, C-110",
      status: "Complete",
      amount: "₹ 95 Lakh",
      received: "₹ 95 Lakh",
      sales: "Ankit Gupta",
    },
    {
      name: "Vikas Yadav",
      project: "Royal Enclave",
      type: "Villa",
      config: "NA",
      status: "Pending",
      amount: "₹ 2.1 Cr",
      received: "₹ 1.2 Cr",
      sales: "Nihal Singh",
    },
    {
      name: "Sneha Patel",
      project: "Sky Heights",
      type: "Flat",
      config: "2BHK, D-404",
      status: "Complete",
      amount: "₹ 68 Lakh",
      received: "₹ 68 Lakh",
      sales: "Rohit Verma",
    },
    {
      name: "Karan Mehta",
      project: "Palm Residency",
      type: "Flat",
      config: "1BHK, A-101",
      status: "Pending",
      amount: "₹ 45 Lakh",
      received: "₹ 20 Lakh",
      sales: "Ankit Gupta",
    },
    {
      name: "Neha Gupta",
      project: "Lake View",
      type: "Villa",
      config: "NA",
      status: "Complete",
      amount: "₹ 1.8 Cr",
      received: "₹ 1.8 Cr",
      sales: "Nihal Singh",
    },
    {
      name: "Rohit Kumar",
      project: "Urban Nest",
      type: "Flat",
      config: "2BHK, B-210",
      status: "Pending",
      amount: "₹ 82 Lakh",
      received: "₹ 50 Lakh",
      sales: "Rohit Verma",
    },
    {
      name: "Pooja Singh",
      project: "Elite Homes",
      type: "Flat",
      config: "3BHK, E-305",
      status: "Complete",
      amount: "₹ 1.1 Cr",
      received: "₹ 1.1 Cr",
      sales: "Ankit Gupta",
    },
    {
      name: "Arjun Das",
      project: "City Square",
      type: "Flat",
      config: "2BHK, F-502",
      status: "Pending",
      amount: "₹ 90 Lakh",
      received: "₹ 60 Lakh",
      sales: "Nihal Singh",
    },
  ];

  const BookedClient = () => {
    const [search, setSearch] = useState("");

    const filteredData = clientsData.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="w-full p-1 md:p-1">
        {/* Container */}
        <div className="bg-white border border-black/10 rounded-md">

          {/* Header */}
          <div className="border-b  border-black/10 px-5 py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text18 font-medium">All Client</h2>

            <button className="bg-(--primary) text-white px-5 py-2 rounded text14">
              Add New Client
            </button>
          </div>

          {/* Top Controls */}
          <div className="px-5 py-2 text-black/60 border-b border-black/10 flex flex-wrap justify-between items-center gap-3">

            {/* Left controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button className="border border-black/10 p-2 rounded">
                <Columns2 className="text-black/60" size={16} />
              </button>

              <button className="border border-black/10 px-3 py-1 rounded flex items-center gap-1">
                <Filter className="text-black/60" size={14} /> Filter
              </button>

              <div className="flex items-center  gap-2 border border-2-black/40 rounded-full px-3 py-1 text14">
                Newly Launch
                <CircleX size={14} className="text-gray-500" />
              </div>
            </div>

            {/* Right controls */}
            <div className="flex flex-wrap items-center gap-2">

               <button className="border border-black/10 p-1 rounded">
                <Crosshair className="text-black/60" size={16} />
              </button> 
              <button className="border border-black/10 px-3 py-1 rounded text14">
                Excel
              </button>

              <button className="border border-black/10 px-3 py-1 rounded text14">
                Print
              </button>

             

              <div className="flex  justify-around items-center border border-black/10 px-2 py-1 rounded">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none px-2 text14"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Search size={14} className="text-gray-500" />
              </div>

              <div className="border border-black/10 px-3 py-1 rounded text14 text-gray-500">
                11 Mar, 25 - 20 Apr, 26
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-center border-collapse">
              <thead>
                <tr className="border-b border-black/10 text-center text16">
                  <th className="p-3 border-r border-black/10">Client Name</th>
                  <th className="p-3 border-r border-black/10">Project/Property</th>
                  <th className="p-3 border-r border-black/10">Type</th>
                  <th className="p-3 border-r border-black/10">Configuration</th>
                  <th className="p-3 border-r border-black/10">Booking Status</th>
                  <th className="p-3 border-r border-black/10">Amount</th>
                  <th className="p-3 border-r border-black/10">Received</th>
                  <th className="p-3 border-r border-black/10">Sales Person</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border-b border-black/10 text16">
                    <td className="p-3 border-r border-black/10">{item.name}</td>
                    <td className="p-3 border-r border-black/10">{item.project}</td>
                    <td className="p-3 border-r border-black/10">{item.type}</td>
                    <td className="p-3 border-r border-black/10">{item.config}</td>
                    <td className="p-3 border-r border-black/10">{item.status}</td>
                    <td className="p-3 border-r border-black/10">{item.amount}</td>
                    <td className="p-3 border-r border-black/10">{item.received}</td>

                    <td className="p-4 items-center justify-center border-r line-clamp-1 border-black/10 flex text-center gap-2">
                      <img className="w-6 h-6 rounded-full" src={profile} alt="profile" />
                      <span className="text16">{item.sales}</span>
                    </td>

                    <td className="p-3">
                      <button className="bg-(--primary) p-2 rounded-full text-white">
                        <Eye size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  };

  export default BookedClient;