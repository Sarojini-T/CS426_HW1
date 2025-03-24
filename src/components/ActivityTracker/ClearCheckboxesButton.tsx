import { ActivityContext } from "./ActivityTrackerContexts";
import { useContext } from "react";
import { selectedActivitiesType } from "./ActivityTrackerTypes";
import { setItem } from "../../utils/localStorage";

// This component will return a button allowing the user to clear all selected checkboxes
export const ClearCheckboxesButton : React.FC = () => {
  // Retrieve the array of selected activities using a context
  const { setSelectedActivities }: selectedActivitiesType =
    useContext(ActivityContext);

  // Function to handle when the user clicks the button
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Prevent default behavior of reloading the page
    event.preventDefault();

    // Clear all selected activities by using the state
    setSelectedActivities(() => []);

    // Update the array stored in local storage
    setItem("selectedActivities", []);
  };

  return (
    <button
      className="border rounded w-30 shadow bg-[#fffaf1]"
      onClick={(event) => handleClick(event)}
    >
      Clear
    </button>
  );
  
};
