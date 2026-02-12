import { useState } from "react";
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
export default function BasicDetails() {
  const [people, setPeople] = useState([]);
  const [labels, setLabels] = useState([]);

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
          />

          <Input
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="Enter Phone Number"
            inputClass="h-[35px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="lg:col-span-2">
            <Input
              name="organization"
              label="Organization"
              placeholder="Enter Organization Name"
              inputClass="h-[35px]"
            />
          </div>

          <Select name="source" label="Source" selectClass="h-[35px]">
            <option value="">Select Source</option>
            <option>Website</option>
            <option>Referral</option>
            <option>Campaign</option>
          </Select>

          <Select name="leadOwner" label="Lead Owner" selectClass="h-[35px]">
            <option value="">Select Lead</option>
            <option>Admin</option>
            <option>Sales Team</option>
          </Select>
        </div>

        <MultiSearchSelect
          name="assignedPeople"
          label="Assign People"
          placeholder="Select People (Press enter to add)"
          containerClass="w-full"
          inputClass="h-[35px]"
          chipClass="h-[30px] px-2 gap-2 text14"
          selectedValues={people}
          onChange={setPeople}
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
          placeholder="Enter label (Press enter to add)"
          containerClass="w-full"
          inputClass="h-[35px]"
          chipClass="h-[24px] px-2 text-white text12 bg-(--primary)"
          selectedValues={labels}
          onChange={setLabels}
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
            />
          </div>

          <Input
            name="vatNumber"
            label="VAT Number"
            placeholder="Enter VAT Number"
            inputClass="h-[35px]"
          />

          <Input
            name="gstNumber"
            label="GST Number"
            placeholder="Enter GST Number"
            inputClass="h-[35px]"
          />
        </div>

        <TextArea
          name="address"
          label="Address"
          placeholder="Enter Address"
          rows={2}
          className="w-full"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <Select name="city" label="City" selectClass="h-[35px]">
            <option value="">Select City</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </Select>

          <Select name="state" label="State" selectClass="h-[35px]">
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
          />
        </div>

      </div>
    </div>
  );
}
