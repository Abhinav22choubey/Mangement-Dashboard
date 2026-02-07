import { useState } from "react";
import { Pencil, X, Plus,Dot } from "lucide-react";
import Input from "../../common/Input";
import Select from "../../common/Select";

/* ---------------- INITIAL FORM ---------------- */
const initialForm = {
  intent: "",
  location: "",
  project: "",
  budget: "",
  type: "",
  status: "Ready to Move",
  features: [],
  note: "",
};

export default function InterestedProjects() {
  const [projects, setProjects] = useState([
  {
    intent: "Buy - Builder Project",
    location: "Noida Extension",
    project: "Twin Chalet",
    budget: "₹ 50 - 60 Lakhs",
    type: "2 BHK, 3 BHK",
    status: "Ready to Move",
    features: [
      "Natural sunlight & cross ventilation",
      "Vastu-compliant design",
      "Dedicated covered car parking",
      "Fire safety systems",
    ],
    note:
      "Spoke with client, looking for a 2BHK within ₹50L budget. Asked to share project details on WhatsApp.",
  },
  {
    intent: "Buy - Builder Project",
    location: "Greater Noida West",
    project: "Palm Residency",
    budget: "₹ 65 - 75 Lakhs",
    type: "3 BHK",
    status: "Under Construction",
    features: [
      "Clubhouse with gym",
      "Swimming pool",
      "24x7 security",
      "Power backup",
    ],
    note:
      "Client prefers possession by next year. Follow up after site visit.",
  },
]);

  const [formData, setFormData] = useState(initialForm);
  const [featureInput, setFeatureInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const addFeature = e => {
    if (e.key === "Enter" && featureInput.trim()) {
      e.preventDefault();

      if (editingIndex !== null) {
        setFormData(prev => {
          const updated = [...prev.features];
          updated[editingIndex] = featureInput.trim();
          return { ...prev, features: updated };
        });
        setEditingIndex(null);
      } else {
        setFormData(prev => ({
          ...prev,
          features: [...prev.features, featureInput.trim()],
        }));
      }
      setFeatureInput("");
    }
  };

  const editFeature = (feature, index) => {
    setFeatureInput(feature);
    setEditingIndex(index);
  };

  const removeFeature = index => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleAddProject = () => {
    if (!formData.intent || !formData.project) return;

    setProjects(prev => [...prev, formData]);
    setFormData(initialForm);
    setFeatureInput("");
    setEditingIndex(null);
  };

  const removeProject = index => {
    setProjects(prev => prev.filter((_, i) => i !== index));
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="max-width border border-black/10 rounded-md px-4 py-6 flex flex-col gap-6">

      {/* HEADER */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <h2 className="text-[18px] font-semibold">
         3. Interested Projects / Property
        </h2>

        <button className="flex items-center gap-2 text-[14px] font-semibold text-(--primary)">
          <Plus size={16} />
          Add Project / Property
        </button>
      </div>

      {/* ADD PROJECT FORM */}
      <div className="border border-black/10 rounded-md py-4 px-6 bg-white space-y-2">
        <h3 className="text-[18px] font-semibold">Add Project / Property</h3>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Select
            label="Lead Intent"
            value={formData.intent}
            onChange={e => handleChange("intent", e.target.value)}
          >
            <option value="">Select Intent</option>
            <option>Buy - Builder Project</option>
            <option>Rent</option>
          </Select>

          <Select
            label="Project / Property Name"
            value={formData.project}
            onChange={e => handleChange("project", e.target.value)}
          >
            <option value="">Select Project</option>
            <option>Twin Chalet</option>
          </Select>

          <Select
            label="Type"
            value={formData.type}
            onChange={e => handleChange("type", e.target.value)}
          >
            <option value="">Select Type</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
          </Select>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Input
            label="Preferred Location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={e => handleChange("location", e.target.value)}
          />

          <Input
            label="Budget"
            placeholder="Enter Budget"
            value={formData.budget}
            onChange={e => handleChange("budget", e.target.value)}
          />

          <Select
            label="Project / Property Status"
            value={formData.status}
            onChange={e => handleChange("status", e.target.value)}
          >
            <option>Ready to Move</option>
            <option>Under Construction</option>
          </Select>
        </div>

        {/* KEY FEATURES */}
        <div>
          <label className="block text-[14px] mb-1">
            Key Features
          </label>

          <input
            className="w-full px-3 py-2 text-[14px] border border-black/25 rounded-md
            focus:outline-none focus:ring-2 focus:ring-(--primary)"
            placeholder="Enter key feature and press Enter"
            value={featureInput}
            onChange={e => setFeatureInput(e.target.value)}
            onKeyDown={addFeature}
          />

          {formData.features.length > 0 && (
            <div className="mt-3 space-y-2">
              {formData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2
                  border border-black/10 rounded-md"
                >
                  <span className="text-[14px]">
                    {feature}
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => editFeature(feature, index)}
                      className="text-[#238EEB]"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => removeFeature(index)}
                      className="text-[#EB3223]"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NOTE */}
        <Input
          label="Note"
          placeholder="Enter Note"
          value={formData.note}
          onChange={e => handleChange("note", e.target.value)}
        />

        {/* ADD BUTTON */}
        <button
          onClick={handleAddProject}
          className="px-4 py-2 bg-[#238EEB] text-white rounded-md text-[14px]"
        >
          Add
        </button>
      </div>

      {/* PROJECT CARDS */}
      {projects.map((item, index) => (
        <div
          key={index}
          className="relative border border-black/5 rounded-md bg-white overflow-hidden"
        >
          {/* TOP STRIP */}
          <div className="h-[10px] bg-[#FFCC00]" />

          {/* ACTION BUTTONS */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="w-[26px] h-[26px] rounded-full bg-[#238EEB] flex items-center justify-center">
              <Pencil size={14} className="text-white" />
            </button>
            <button
              onClick={() => removeProject(index)}
              className="w-[26px] h-[26px] rounded-full bg-[#EB3223] flex items-center justify-center"
            >
              <X size={14} className="text-white" />
            </button>
          </div>

          {/* CONTENT — FIGMA ORDER */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-0">

            {/* COLUMN 1 */}
            <div className="space-y-2">
              <Info label="Lead Intent" value={item.intent} />
              <Info label="Preferred Location" value={item.location} />

              <div>
                <p className="text-[12px] font-medium text-[#4E5E6A] mb-1">
                  Key Features Required
                </p>
                <ul className="space-y-0">
                  {item.features.length > 0 ? (
                    item.features.map((f, i) => (
                      <li
                        key={i}
                        className="text-[14px] flex flex-row font-medium leading-[17px]"
                      >
                        <Dot/>  {f}
                      </li>
                    ))
                  ) : (
                    <li className="text-[14px] font-medium">-</li>
                  )}
                </ul>
              </div>

              <Info label="Notes" value={item.note} />
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-6">
              <Info label="Project Name" value={item.project} highlight />
              <Info label="Budget" value={item.budget} danger />
            </div>

            {/* COLUMN 3 */}
            <div className="space-y-6">
              <Info label="Type" value={item.type} />
              <Info label="Property Status" value={item.status} />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- INFO COMPONENT ---------------- */
function Info({ label, value, highlight, danger }) {
  return (
    <div className="space-y-[3px]">
      <p className="text-[12px] font-medium text-[#4E5E6A]">
        {label}
      </p>
      <p
        className={`text-[14px] font-medium leading-[17px] ${
          highlight
            ? "text-[#005897]"
            : danger
            ? "text-[#EB3223]"
            : "text-black"
        }`}
      >
        {value || "-"}
      </p>
    </div>
  );
}
