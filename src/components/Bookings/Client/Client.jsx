import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../../../common/Heading.jsx';
import StatusBar from '../../../common/StatusBar.jsx';
import TabOver from '../../../common/TabOver.jsx';
import BookingOverview from './BookingOverview.jsx';
import { clientsData } from '../../../utils/data.js';
import NotesPanel from '../../../common/NotesPanel.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import PricingDetails from './PricingDetails.jsx';
import TimelineActivity from '../../../common/TimelineActivity.jsx';
import RemindersCard from '../../../common/RemindersCard.jsx';
import Projects from './Projects.jsx';
import PaymentHistory from './PaymentHistory.jsx';
function Client() {
  const { id } = useParams();
  console.log("Client ID from URL:", id);
  const {
    name,
    project,
    type,
    config,
    status,
    amount,
    received,
    sales,
  } = clientsData[id]
  console.log("Client Data:", clientsData[id]);
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
      {/* Overview Tab */}
      {activeTab === "Coverview" && <div className='flex flex-row gap-4'>
        <div className='w-[68%]'>
          <BookingOverview
            name={name}
            contact="+91 9874563210"
            organization="SpriteEra IT Solutions Pvt Ltd"
            salesPerson={sales}
            bookingDate="5:00 PM, 11 Oct 2025"
            bookingId="#AFB008263"
          />
          <ProjectDetails data={clientsData[id]} />
          <PricingDetails data={clientsData[id]} />
          <TimelineActivity />
        </div>
        <div className='w-[32%] pl-2'>
          <NotesPanel />
          <RemindersCard />
        </div>
      </div>}
      {/* Projects Tab */}
      {activeTab === "Cprojects" && <div className='flex flex-row gap-4'>
        <div className='w-full'>
          <Projects data={clientsData[id]} />
        </div> </div>
      }
      {/* Payment History Tab */}
      {
        activeTab === "paymentHistory" && <div className='flex'>
          <PaymentHistory data={clientsData[id]} />
        </div>
      }
      {/* Timeline Activity */}
      {activeTab === "activity" && <div className='flex'>
        <TimelineActivity />
      </div>}

    </div>
  )
}

export default Client;
