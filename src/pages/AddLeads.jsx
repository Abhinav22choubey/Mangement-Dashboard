import React from 'react'
import BasicDetails from '../components/AddLeads/BasicDetails'
import ContactDetails from '../components/AddLeads/ContactDetails'
import InterestedProject from '../components/AddLeads/InterestedProject'

function AddLeads() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  const handleSaveAndAddAnother = (e) => {
    e.preventDefault();
    console.log("Save & Add Another Clicked");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='
        mx-0 sm:mx-4 
        gap-4 
        flex flex-col 
        bg-white 
        px-3 sm:px-6 
        py-4
      '
    >
      <h2 className="text-lg font-semibold mb-0">Add Leads</h2>

      <BasicDetails />
      <ContactDetails />
      <InterestedProject />

      <div className='flex gap-3'>
        <button
          type="submit"
          className="px-4 py-2 bg-[#238EEB] text-white rounded-md text-sm hover:bg-blue-600 transition"
        >
          Save
        </button>

        <button
          type="button"
          onClick={handleSaveAndAddAnother}
          className="px-4 py-2 bg-[#238EEB] text-white rounded-md text-sm hover:bg-blue-600 transition"
        >
          Save & Add Another
        </button>
      </div>
    </form>
  )
}

export default AddLeads;
