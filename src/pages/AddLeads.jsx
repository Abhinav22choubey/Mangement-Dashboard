import React from 'react'
import BasicDetails from '../components/AddLeads/BasicDetails';
import ContactDetails from '../components/AddLeads/ContactDetails';
import InterestedProject from '../components/AddLeads/InterestedProject';

function AddLeads() {
  return (
    <div className='mx-2 gap-2 flex flex-col mt-0 text20 border-gray-200 border-x-gray-200 bg-white px-6 py-4'>
      Add Leads
      <BasicDetails />
      <ContactDetails />
      <InterestedProject />
      <div className='flex  gap-2'>
        <button
          
          className="px-4 py-2 bg-[#238EEB] text-white rounded-md text-[14px]"
        >
          Save
        </button>
        <button
          
          className="px-4 py-2 bg-[#238EEB] text-white rounded-md text-[14px]"
        >
          Save  & Add Another
        </button>
      </div>
    </div>
  )
}

export default AddLeads
