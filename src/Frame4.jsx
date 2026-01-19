import React from "react";
import Contacts from "./Contacts.jsx";
import LeadInfo from "./LeadInfo.jsx";
function Frame4() {
  return (
    <div className="flex flex-col mt-6 gap-3 justify-between  md:flex-row w-full ">

      {/* Left section */}
      <div className="w-full md:basis-[70%]">
        <Contacts />
      </div>

      {/* Right section */}
      <div className="w-full md:basis-[30%]">
        <LeadInfo />
        
      </div>

    </div>
  );
}


export default Frame4;
