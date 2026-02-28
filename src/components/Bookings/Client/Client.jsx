import React from 'react'
import { useState } from 'react';
import Heading from '../../../common/Heading.jsx';
import StatusBar from '../../../common/StatusBar.jsx';
import TabOver from '../../../common/TabOver.jsx';
function Client() {
  const tabs = [
    { name: "Overview", id: "Coverview" },
    { name: "Projects", id: "Cprojects" },
    { name: "Payment History", id: "paymentHistory" },
    { name: "Activity", id: "activity" },
  ];
  const steps = [
    { id: 1, label: "New", status: "done" },
    { id: 2, label: "Contacted", status: "done" },
    { id: 3, label: "Visit Schedule", status: "done" },
    { id: 4, label: "Visit Done", status: "done" },
    { id: 5, label: "Negotiation", status: "active" },
    { id: 6, label: "Booking Confirm", status: "pending" },
    { id: 7, label: "Converted", status: "pending" },
  ];
  const [activeTab, setActiveTab] = useState("Coverview");
  return (
    <div>
      <Heading />
      <StatusBar steps={steps} />
      <TabOver tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default Client;
