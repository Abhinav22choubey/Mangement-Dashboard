import React from 'react'
import BasicDetails from '../components/AddLeads/BasicDetails';
import ContactDetails from '../components/AddLeads/ContactDetails';
function AddLeads() {
  return (
    <div className='mx-2 gap-2 flex flex-col mt-0 text20 border-gray-200 border-x-gray-200 bg-white px-6 py-4'>
      Add Leads
      <BasicDetails />
      <ContactDetails />
    </div>
  )
}

export default AddLeads
