import { useContext } from "react";
import { ActivitiesLogged, ActivityContext } from "./ActivityTrackerContexts";
import {
  activitiesLoggedType,
  selectedActivitiesType,
} from "./ActivityTrackerTypes";
import { setItem } from "../../utils/localStorage";

// This component will return a button that when click, will bring the user back to the categoryCardsForm
// to select a new set of activities
export const NewEntryButton : React.FC  = () => {
  // Get the state using context to set an activity as logged
  const { setActivityAsLogged }: activitiesLoggedType =
    useContext(ActivitiesLogged);

  // Get the selected activities
  const { setSelectedActivities }: selectedActivitiesType =
    useContext(ActivityContext);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Prevent page from reloading
    event.preventDefault();

    // If the user clicks to enter a new entry, reset the list of selected activities
    setSelectedActivities(() => {
      // Update the array in local storage
      setItem("selectedActivities", []);
      return [];
    });

    // Set the isActivityLogged state to false so that the category form can be shown
    setActivityAsLogged(() => {
      // Update the value in local storage
      setItem("setActivityAsLogged", false);
      return false;
    });
  };
  return (
    <button
      className="bg-[#fffaf1]"
      onClick={(event) => handleClick(event)}
    >
      New Entry
    </button>
  );
};
