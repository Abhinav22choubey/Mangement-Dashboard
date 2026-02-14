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

  // 🔥 ADDED: error state
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔥 ADDED: validation function
  const validateForm = () => {
    let newErrors = {};

    // Basic Details
    if (!formData.name || formData.name.trim() === '') {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Contacts validation
    if (!formData.contacts || formData.contacts.length === 0) {
      newErrors.contacts = "At least one contact is required";
    } else {
      formData.contacts.forEach((c, i) => {
        if (!c.name) {
          newErrors[`contact_name_${i}`] = "Contact name is required";
        }
        if (!c.email) {
          newErrors[`contact_email_${i}`] = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(c.email)) {
          newErrors[`contact_email_${i}`] = "Invalid email";
        }
      });
    }

    // Projects validation
    if (!formData.projects || formData.projects.length === 0) {
      newErrors.projects = "At least one project is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 validation check
    if (!validateForm()) {
      console.log("Validation Errors:", errors);
      return;
    }

    console.log("FINAL DATA:", formData);
  };

  const handleSaveAndAddAnother = (e) => {
    e.preventDefault();

    // 🔥 validation check
    if (!validateForm()) return;

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

    // 🔥 reset errors
    setErrors({});
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
        errors={errors}   // 🔥 added
      />

      <ContactDetails 
        formData={formData}
        setFormData={setFormData}
        errors={errors}   // 🔥 added
      />

      <InterestedProjects 
        formData={formData}
        setFormData={setFormData}
        errors={errors}   // 🔥 added
      />

      {/* 🔥 GLOBAL ERRORS */}
      {errors.contacts && (
        <p className="text-red-500 text-sm">{errors.contacts}</p>
      )}

      {errors.projects && (
        <p className="text-red-500 text-sm">{errors.projects}</p>
      )}

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
