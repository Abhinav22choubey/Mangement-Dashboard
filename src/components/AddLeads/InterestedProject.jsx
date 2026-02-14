import { useState, useEffect } from "react"; // ✅ added useEffect
import { SquarePen, X, Plus, Dot } from "lucide-react";
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

export default function InterestedProjects({ formData: parentFormData, setFormData: setParentFormData, errors }) { // ✅ added errors

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
      note: "Client prefers possession by next year. Follow up after site visit.",
    },
  ]);

  const [formData, setFormData] = useState(initialForm);
  const [featureInput, setFeatureInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // ✅ Sync projects with parent form
  useEffect(() => {
    if (setParentFormData) {
      setParentFormData(prev => ({
        ...prev,
        projects: projects
      }));
    }
  }, [projects, setParentFormData]);

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

  const handleAddProject = (e) => {
    e.preventDefault();

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
    <div className="max-width border border-black/10 rounded-md px-4 py-4 flex flex-col gap-4">

      {/* 🔥 GLOBAL PROJECT ERROR */}
      {errors?.projects && (
        <p className="text-red-500 text-sm">{errors.projects}</p>
      )}

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text15 font-semibold">
          3. Interested Projects / Property
        </h2>

        <button
          type="button"
          className="flex items-center gap-2 text15 font-semibold text-(--primary)"
        >
          <Plus size={16} />
          Add Project / Property
        </button>
      </div>

      {/* ADD PROJECT FORM */}
      <div className="border border-black/10 rounded-md bg-white p-5 space-y-2">
        <h3 className="text15 font-semibold mb-3">
          Add Project / Property
        </h3>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
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
            <option>Palm Residency</option>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
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
        <div className="space-y-1">
          <label className="text14">Key Features</label>

          <input
            type="text"
            className="w-full h-[35px] px-3 text14 border border-black/25 rounded-md
            focus:outline-none focus:ring-1 focus:ring-(--primary)"
            placeholder="Enter Key Features that the client want (Press enter to add)"
            value={featureInput}
            onChange={e => setFeatureInput(e.target.value)}
            onKeyDown={addFeature}
          />

          {formData.features.length > 0 && (
            <div className="space-y-1 pt-2">
              {formData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 h-[30px]
                  border border-black/10 rounded-md"
                >
                  <span className="text14">{feature}</span>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => editFeature(feature, index)}
                      className="text-(--primary)"
                    >
                      <SquarePen size={16} />
                    </button>

                    <button
                      type="button"
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
          type="button"
          onClick={handleAddProject}
          className="w-[56px] h-[25px] bg-(--primary) text-white text12 rounded-[3px]"
        >
          Add
        </button>
      </div>

      {/* PROJECT CARDS */}
      {projects.map((item, index) => (
        <div
          key={index}
          className="relative border border-black/5 rounded-md bg-white"
        >
          <div
            className={`h-[10px] rounded-t-md ${
              item.status === "Ready to Move"
                ? "bg-[#FFCC00]"
                : "bg-[#34C759]"
            }`}
          />

          <div className="absolute top-4 right-4 flex gap-2">
            <button
              type="button"
              className="w-[25px] h-[25px] rounded-full bg-(--primary) flex center"
            >
              <SquarePen size={14} className="text-white" />
            </button>

            <button
              type="button"
              onClick={() => removeProject(index)}
              className="w-[25px] h-[25px] rounded-full bg-[#EB3223] flex center"
            >
              <X size={14} className="text-white" />
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
            <div className="space-y-3">
              <Info label="Lead Intent" value={item.intent} />
              <Info label="Preferred Location" value={item.location} />

              <div>
                <p className="text12 font-medium text-[#4E5E6A] mb-1">
                  Key Features Required
                </p>
                <ul>
                  {item.features.map((f, i) => (
                    <li key={i} className="text14 font-medium flex gap-0">
                      <Dot /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Info label="Notes" value={item.note} />
            </div>

            <div className="space-y-3">
              <Info label="Project Name" value={item.project} highlight />
              <Info label="Budget" value={item.budget} danger />
            </div>

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
      <p className="text12 font-medium text-[#4E5E6A]">{label}</p>
      <p
        className={`text14 font-medium ${
          highlight
            ? "text-(--sky)"
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
