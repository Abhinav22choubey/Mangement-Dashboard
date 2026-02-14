import React, { useState } from 'react'
import BasicDetails from '../components/AddLeads/BasicDetails'
import ContactDetails from '../components/AddLeads/ContactDetails'
import InterestedProjects from '../components/AddLeads/InterestedProject'

function AddLeads() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: '',
    source: '',
    leadOwner: '',
    assignedPeople: [],
    labels: [],
    website: '',
    vatNumber: '',
    gstNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    contacts: [],
    projects: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FINAL DATA:", formData);
  };

  const handleSaveAndAddAnother = (e) => {
    e.preventDefault();
    console.log("SAVE & ADD:", formData);

    setFormData({
      name: '',
      phone: '',
      organization: '',
      source: '',
      leadOwner: '',
      assignedPeople: [],
      labels: [],
      website: '',
      vatNumber: '',
      gstNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      contacts: [],
      projects: []
    });
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

      <BasicDetails 
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
      />

      <ContactDetails 
        formData={formData}
        setFormData={setFormData}
      />

      <InterestedProjects 
        formData={formData}
        setFormData={setFormData}
      />

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
