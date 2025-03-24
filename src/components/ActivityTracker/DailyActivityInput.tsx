import { useContext } from "react";
import { ActivityContext } from "./ActivityTrackerContexts";
import { selectedActivitiesType } from "./ActivityTrackerTypes";
import { setItem } from "../../utils/localStorage";

// Define the type of the prop that this activity component will take as an input
type Prop = {
  activity: string;
};

// This component will take each activity passed in as a prop and display it in a checkbox input 
// format that the user can check/uncheck
export const DailyActivityInput: React.FC<Prop> = ({ activity }) => {
  // Retrieve the selected activities state from the context
  const { selectedActivities, setSelectedActivities }: selectedActivitiesType =
    useContext(ActivityContext);

  // Event handler for when a CheckBox is Selected
  const isActivitySelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedActivities((prevActivities) => {
      // If the activity is selected, then update the array of selected activities
      if (event.target.checked) {
        prevActivities = [...prevActivities, event.target.value];
      } else {
        // if the activity is unchecked, remove it from previous state
        prevActivities = prevActivities.filter(
          (activity: string) => activity !== event.target.value
        );
      }

      //Update local storage with the corrected state array
      setItem("selectedActivities", prevActivities);

      // Return the updated state
      return prevActivities;
    });
  };

  return (
    <label className="text-white">
      {/* This input takes an activity as a label and assigns it as its value. */}
      <input
        type="checkbox"
        name="activity"
        value={`${activity}`}
        onChange={(event) => isActivitySelected(event)}
        checked={selectedActivities.includes(activity)}
      />
      {activity}
    </label>
  );
};
