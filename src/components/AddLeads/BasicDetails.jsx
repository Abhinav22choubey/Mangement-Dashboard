import { useEffect } from "react";
import Input from "../../common/Input.jsx";
import Select from "../../common/Select.jsx";
import TextArea from "../../common/TextArea.jsx";
import MultiSearchSelect from "../../common/MultiSearchSelect.jsx";

/* ---------------- MOCK DATA ---------------- */
const mockPeople = [
  { _id: "1", name: "Abhinav" },
  { _id: "2", name: "Rohit" },
  { _id: "3", name: "Aman" },
  { _id: "4", name: "Priya" },
];

const mockLabels = [
  { _id: "l1", name: "90% Probability" },
  { _id: "l2", name: "High Priority" },
  { _id: "l3", name: "Warm Lead" },
];

/* ---------------- FETCH FUNCTIONS ---------------- */
const fetchPeople = async (query) =>
  mockPeople.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

const fetchLabels = async (query) =>
  mockLabels.filter((l) =>
    l.name.toLowerCase().includes(query.toLowerCase())
  );

/* ---------------- COMPONENT ---------------- */
export default function BasicDetails({ formData, setFormData, handleChange }) {

  // sync multi-select to parent state
  const handlePeopleChange = (values) => {
    setFormData(prev => ({
      ...prev,
      assignedPeople: values
    }));
  };

  const handleLabelsChange = (values) => {
    setFormData(prev => ({
      ...prev,
      labels: values
    }));
  };

  return (
    <div className="max-width flex-col border border-black/10 rounded-md px-4 py-4">

      <h2 className="text15 font-semibold mb-4">
        1. Basic Details
      </h2>

      <div className="flex flex-col pl-5 gap-2 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <Input
            name="name"
            label="Name"
            placeholder="Enter Name"
            inputClass="h-[35px]"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter Phone Number"
            inputClass="h-[35px]"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="lg:col-span-2">
            <Input
              name="organization"
              label="Organization"
              placeholder="Enter Organization Name"
              inputClass="h-[35px]"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <Select
            name="source"
            label="Source"
            selectClass="h-[35px]"
            value={formData.source}
            onChange={handleChange}
          >
            <option value="">Select Source</option>
            <option>Website</option>
            <option>Referral</option>
            <option>Campaign</option>
          </Select>

          <Select
            name="leadOwner"
            label="Lead Owner"
            selectClass="h-[35px]"
            value={formData.leadOwner}
            onChange={handleChange}
          >
            <option value="">Select Lead</option>
            <option>Admin</option>
            <option>Sales Team</option>
          </Select>
        </div>

        <MultiSearchSelect
          name="assignedPeople"
          label="Assign People"
          placeholder="Select People"
          selectedValues={formData.assignedPeople || []}
          onChange={handlePeopleChange}
          fetchOptions={fetchPeople}
          canAddNew
          addNewLabel="Add new person"
          onAddNew={async (name) => ({
            _id: Date.now().toString(),
            name,
          })}
        />

        <MultiSearchSelect
          name="labels"
          label="Label"
          placeholder="Enter label"
          selectedValues={formData.labels || []}
          onChange={handleLabelsChange}
          fetchOptions={fetchLabels}
          canAddNew
          addNewLabel="Create label"
          onAddNew={async (name) => ({
            _id: Date.now().toString(),
            name,
          })}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="lg:col-span-2">
            <Input
              name="website"
              type="url"
              label="Website"
              placeholder="Enter Website"
              inputClass="h-[35px]"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <Input
            name="vatNumber"
            label="VAT Number"
            placeholder="Enter VAT Number"
            inputClass="h-[35px]"
            value={formData.vatNumber}
            onChange={handleChange}
          />

          <Input
            name="gstNumber"
            label="GST Number"
            placeholder="Enter GST Number"
            inputClass="h-[35px]"
            value={formData.gstNumber}
            onChange={handleChange}
          />
        </div>

        <TextArea
          name="address"
          label="Address"
          placeholder="Enter Address"
          rows={2}
          value={formData.address}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <Select
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </Select>

          <Select
            name="state"
            label="State"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option>UP</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
          </Select>

          <Input
            name="zipCode"
            label="Zip Code"
            placeholder="Enter Zip Code"
            inputClass="h-[35px]"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>

      </div>
    </div>
  );
}