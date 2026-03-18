import React from "react";

const InfoItem = ({ label, value, highlight }) => {
  return (
    <div className="flex flex-col gap-[3px]">
      <span className="text12 text-[#4E5E6A] font-medium">{label}</span>
      <span
        className={`text14 font-medium ${
          highlight ? "text-(--sky)" : "text-black"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

const SalesPerson = ({ name }) => {
  return (
    <div className="flex flex-col gap-[3px]">
      <span className="text12 text-[#4E5E6A] font-medium">Sales Person</span>

      <div className="flex items-center gap-[5px]">
        <div className="w-[20px] h-[20px] rounded-full bg-[#993B3B]" />
        <span className="text14 font-medium text-black">{name}</span>
      </div>
    </div>
  );
};

const ClientOverview = ({
  name ,
  contact ,
  organization ,
  salesPerson,
  bookingDate ,
  bookingId,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm w-full">

      {/* Header */}
      <div className="px-4 sm:px-6 py-3 border-b border-black/5">
        <h3 className="text15 font-medium text-black">
          Booking Overview
        </h3>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">

          <InfoItem
            label="Name"
            value={name}
            highlight
          />

          <InfoItem
            label="Contact No."
            value={contact}
          />

          <InfoItem
            label="Organization"
            value={organization}
          />

          <SalesPerson
            name={salesPerson}
          />

          <InfoItem
            label="Booking Date"
            value={bookingDate}
          />

          <InfoItem
            label="Booking ID"
            value={bookingId}
          />

        </div>

      </div>
    </div>
  );
};

export default ClientOverview;