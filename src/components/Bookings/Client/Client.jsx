import React from 'react'
import { useState } from 'react';
import Heading from '../../../common/Heading.jsx';
import StatusBar from '../../../common/StatusBar.jsx';
import TabOver from '../../../common/TabOver.jsx';
import ClientOverview from './ClientOverview.jsx';
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
    // { id: 8, label: "Cancelled", status: "cancelled" },
  ];
  const [activeTab, setActiveTab] = useState("Coverview");
  return (
    <div>
      <Heading isCancelled={false} />
      <StatusBar steps={steps} />
      <TabOver tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ClientOverview
        name="Ajay Verma"
        contact="+91 9874563210"
        organization="SpriteEra IT Solutions Pvt Ltd"
        salesPerson="Nihal Singh"
        bookingDate="5:00 PM, 11 Oct 2025"
        bookingId="#AFB008263"
      />
    </div>
  )
}

export default Client;
