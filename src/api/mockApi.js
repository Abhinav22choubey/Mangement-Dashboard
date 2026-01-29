// mockApi.js
export const MOCK_PEOPLE = [
  { _id: "1", name: "Ashish Kumar", avatar: "https://i.pravatar.cc/150?img=1" },
  { _id: "2", name: "Rahul Sharma", avatar: "https://i.pravatar.cc/150?img=2" },
  { _id: "3", name: "Neha Verma", avatar: "https://i.pravatar.cc/150?img=3" },
  { _id: "4", name: "Pooja Singh", avatar: "https://i.pravatar.cc/150?img=4" },
  { _id: "5", name: "Amit Patel", avatar: "https://i.pravatar.cc/150?img=5" },
  { _id: "6", name: "Priya Gupta", avatar: "https://i.pravatar.cc/150?img=6" },
  { _id: "7", name: "Vikram Reddy", avatar: "https://i.pravatar.cc/150?img=7" },
  { _id: "8", name: "Anita Desai", avatar: "https://i.pravatar.cc/150?img=8" },
];

export const MOCK_LABELS = [
  { _id: "1", name: "High Priority", probability: 95 },
  { _id: "2", name: "Medium Priority", probability: 75 },
  { _id: "3", name: "Low Priority", probability: 45 },
  { _id: "4", name: "Urgent", probability: 90 },
  { _id: "5", name: "Follow Up", probability: 60 },
  { _id: "6", name: "Completed", probability: 100 },
];

// Fetch people with search
export const fetchPeople = async (query) => {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 500));
  
  if (!query) return [];
  
  return MOCK_PEOPLE.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

// Fetch labels with search
export const fetchLabels = async (query) => {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 500));
  
  if (!query) return [];
  
  return MOCK_LABELS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

// Add new person
export const handleAddPerson = async (name) => {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 800));
  
  // Return new person object
  return {
    _id: Date.now().toString(),
    name: name,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
  };
};

// Add new label
export const handleAddLabel = async (name) => {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 800));
  
  // Return new label object with default 90% probability
  return {
    _id: Date.now().toString(),
    name: name,
    probability: 90
  };
};