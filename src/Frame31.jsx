import React from "react";
import { Layers,Crown,Briefcase } from "lucide-react";

function Frame31() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-4 rounded-md ">
      <div className="justify-end gap-1 flex">
        <span>
          <Layers />
        </span>
        <h1 className="ml-2 text-lg font-medium">
          SpriteEra IT Solutions Pvt. Ltd.
        </h1>
      </div>

      <div className="flex gap-2">
        <button className=" flex px-3 gap-2  py-1.5 text-sm font-medium text-white rounded bg-gradient-to-r from-yellow-300 to-yellow-600">
          <Crown /> Update Status
        </button>
        <button className="flex gap-2 px-3 py-1.5 text-sm font-medium text-white rounded bg-blue-500">
          <Briefcase /> Convert to Client
        </button>
      </div>
    </div>
  );
}

export default Frame31;
