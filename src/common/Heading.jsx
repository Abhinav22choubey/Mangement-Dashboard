import React from "react";
import { Layers, Crown, Briefcase } from "lucide-react";

function Heading({
  isCancelled 
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-4 rounded-md">
      
      <div className="justify-end gap-1 ml-2 flex">
        <span>
          <Layers />
        </span>

        <h1 className="ml-2 text25 font-medium">
          SpriteEra IT Solutions Pvt. Ltd.
        </h1>
      </div>

      <div className="flex justify-center gap-2">

        {!isCancelled&&(<button className="flex items-center gap-2 px-3 py-1 text14 text-white rounded bg-gradient-to-r from-yellow-300 to-yellow-600">
          <Crown size={16} /> Update Status
        </button>)}

        {!isCancelled&&(<button className="flex items-center gap-2 px-3 py-1 text14 text-white rounded bg-red-500">
          Cancel Booking
        </button>)}

        <button className="flex items-center gap-2 px-3 py-1 text14 text-white rounded bg-blue-500">
          Client Details
        </button>

      </div>

    </div>
  );
}

export default Heading;
