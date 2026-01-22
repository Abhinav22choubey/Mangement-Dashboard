import Contacts from "./Contacts.jsx";
import LeadInfo from "./LeadInfo.jsx";
import InterestedProjects from "./InterestedProject.jsx";
import FollowUps from "./FollowUps.jsx";
import TimelineActivity from "./TimelineActivity.jsx";
import NotesPanel from "./NotesPanel.jsx";
import RemindersCard from "./RemindersCard.jsx";

function Frame4({ activeTab }) {
  const isOverview = activeTab === "overview";
  const isFollowUp = activeTab === "followup";
  const isActivity = activeTab === "activity";

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

    </div>
  );
}

export default Frame4;
