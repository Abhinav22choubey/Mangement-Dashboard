// AssignPeopleChip.jsx
import { X } from "lucide-react";

const AssignPeopleChip = ({ item, onRemove }) => {
  return (
    <div
      className="relative flex items-center w-[148px] h-[30px] border border-black/10 rounded-[5px] bg-white"
    >
      {/* Avatar */}
      <div className="absolute left-[9px] top-[5px] w-[20px] h-[20px] rounded-full bg-[#993B3B] flex items-center justify-center text-white text-[10px] font-medium">
        {item.name?.[0]?.toUpperCase()}
      </div>

      {/* Name */}
      <span className="absolute left-[35px] top-[7px] text-[12px] leading-[15px] text-black truncate max-w-[75px]">
        {item.name}
      </span>

      {/* Remove icon */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute left-[123px] top-[7px] w-[16px] h-[16px] flex items-center justify-center"
      >
        <X size={14} className="text-[#4E5E6A]" />
      </button>
    </div>
  );
};

export default AssignPeopleChip;
