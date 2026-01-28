import Contacts from "./Contacts.jsx";
import LeadInfo from "./LeadInfo.jsx";
import InterestedProjects from "./InterestedProject.jsx";
import FollowUps from "./FollowUps.jsx";
import TimelineActivity from "./TimelineActivity.jsx";
import NotesPanel from "./NotesPanel.jsx";
import RemindersCard from "./RemindersCard.jsx";
import NegotiationRight from "./NegotiationRight.jsx";
import ActivityRight from "./ActivityRight.jsx";
import Documents from "./Documents.jsx";
import { File } from "lucide-react";
// main content area that displays different components based on the active tab

function Frame4({ activeTab }) {
  const isOverview = activeTab === "overview";
  const isFollowUp = activeTab === "followup";
  const isActivity = activeTab === "activity";
  const isDocuments = activeTab === "documents";

  return (
    <div className="flex flex-col mt-6 gap-3 justify-between md:flex-row w-full">

      {/* Left section */}
      <div className="w-full md:w-[70%] min-w-0">

        {isOverview && <Contacts />}
        {isOverview && <InterestedProjects />}

        {(isOverview || isFollowUp) && <FollowUps />}

        {(isOverview || isActivity) && <TimelineActivity />}

      </div>

      {/* Right section */}
      {isOverview && (
        <div className="w-full md:basis-[30%]">
          <LeadInfo />
          <NotesPanel />
          <RemindersCard />
        </div>
      )}
      {isFollowUp && (
          <div className="w-full md:basis-[30%]">
            <NegotiationRight />
          </div>
      )}
      {
        isActivity && (
          <div className="w-full md:basis-[30%]">
          <ActivityRight />
        </div>
        )
      }
      {
        isDocuments && (
          <div className="w-full">
             <div className="flex flex-row mb-1 mt-0">
              <File></File>
              Documents
      </div>
            <Documents />
          </div>
        )
      }
       
    </div>
  );
}

export default Frame4;
