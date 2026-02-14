import { useState, useEffect } from "react";
import { Mail, Phone, SquarePen, X } from "lucide-react";
import Input from "../../common/Input";

export default function ContactDetails({ formData, setFormData }) {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
  });

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ajay Singh",
      designation: "Owner, SpriteEra IT Solutions",
      email: "ajayverma@spriteera.com",
      phone: "+917896541230",
      primary: true,
    },
  ]);

  // 🔥 Added: Sync contacts with parent form
  useEffect(() => {
    if (setFormData) {
      setFormData((prev) => ({
        ...prev,
        contacts: contacts,
      }));
    }
  }, [contacts, setFormData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent parent form submission

    if (!form.name || !form.email) return;

    setContacts([
      ...contacts,
      {
        id: Date.now(),
        ...form,
        primary: false,
      },
    ]);

    setForm({ name: "", designation: "", email: "", phone: "" });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const makePrimary = (id) => {
    setContacts(
      contacts.map((c) => ({
        ...c,
        primary: c.id === id,
      }))
    );
  };

  return (
    <div className="border border-black/10 rounded-md p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text15 font-semibold">2. Contact Details</h2>
        <button
          type="button"
          className="text-(--primary) text15 font-semibold"
        >
          + Add Contact
        </button>
      </div>

      {/* Add Contact Form */}
      <div className="border border-black/10 rounded-md p-4 mb-3">
        <h3 className="text15 font-semibold mb-2">Add Contact</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <Input
            label="Name"
            id="contactName"
            placeholder="Enter Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            label="Designation"
            id="designation"
            placeholder="Enter Designation"
            name="designation"
            value={form.designation}
            onChange={handleChange}
          />
          <Input
            label="Email"
            id="email"
            placeholder="Enter Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="Phone Number"
            id="phone"
            placeholder="Enter Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 bg-(--primary) text-white text12 px-4 py-1.5 rounded"
        >
          Add
        </button>
      </div>

      {/* Contact List */}
      <div className="space-y-4">
        {contacts.map((c) => (
          <div
            key={c.id}
            className="border border-black/10 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gray-500 text-white center font-semibold">
                {c.name[0]}
              </div>

              <div>
                <p className="text14 font-medium">{c.name}</p>
                <p className="text14 text-gray-500">{c.designation}</p>
              </div>
            </div>

            {/* Middle */}
            <div className="flex flex-col gap-1 text14 text-gray-500">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                {c.email}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                {c.phone}
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              {c.primary && (
                <span className="text14 font-medium text-gray-500">
                  Primary
                </span>
              )}

              <button
                type="button"
                onClick={() => makePrimary(c.id)}
                className={`w-7 h-7 rounded-full center ${
                  c.primary
                    ? "bg-white border border-black/10 text-black/50 "
                    : "bg-blue-400 text-white"
                }`}
              >
                <SquarePen size={14} />
              </button>

              {!c.primary && (
                <button
                  type="button"
                  onClick={() => handleDelete(c.id)}
                  className="w-7 h-7 rounded-full bg-red-500 center"
                >
                  <X size={14} className="text-white" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
