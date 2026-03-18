import React from 'react'

function Button1(props) {
    const value = props.value;
    const labelColors = {
        "Call this week": "bg-green-500",
        Qualified: "bg-pink-500",
        Negotiation: "bg-blue-700",
        Discussion: "bg-yellow-400 text-black"
    };
    return (
        <span
          className={`inline-flex items-center justify-center text-white text-xs px-2 py-1 leading-none rounded ${labelColors[value] || "bg-gray-400"}`}
        >
            {value}
        </span>
    )
}
function Badge({ text, color }) {
  return (
    <span
     className={`${color} text-white text-xs px-2 py-1 inline-flex items-center justify-center leading-none rounded-md`}

    >
      {text}
    </span>
  );
}
export { Button1, Badge }
