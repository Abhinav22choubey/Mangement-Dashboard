import React from "react";
import { Layers,Crown,Briefcase } from "lucide-react";

function Frame31() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-4 rounded-md ">
      <div className="justify-end gap-1 ml-2 flex">
        <span>
          <Layers />
        </span>
        <h1 className="ml-2 text-xl font-medium">
          SpriteEra IT Solutions Pvt. Ltd.
        </h1>
      </div>

     <div className="flex justify-center gap-2">
  <button className="flex items-center gap-2 px-3 py-1 text-sm text-white rounded bg-gradient-to-r from-yellow-300 to-yellow-600">
    <Crown size={16} /> Update Status
  </button>

  <button className="flex items-center gap-2 px-3 py-1 text-sm text-white rounded bg-blue-500">
    <Briefcase size={16} /> Convert to Client
  </button>
</div>

    </div>
  );
}

export default Frame31;
