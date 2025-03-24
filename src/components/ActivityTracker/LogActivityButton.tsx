import { useContext } from "react";
import { ActivitiesLogged } from "./ActivityTrackerContexts";
import { activitiesLoggedType } from "./ActivityTrackerTypes";
import { setItem } from "../../utils/localStorage";

// When user clicks this button, it will log their selected activities by displaying them in the
// LoggedActivitiesCard component. When clicked, it will clear all the data stored in the local storage, 
// giving the user a clean slate for a new entry
export const LogActivityButton : React.FC = () => {
  // Retrieve state from CategoryCardsForm to set when an activity is logged
  const { isActivityLogged, setActivityAsLogged }: activitiesLoggedType =
    useContext(ActivitiesLogged);

  // Event handler for when user clicks the button
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Prevent page from reloading
    event.preventDefault();
    setActivityAsLogged(() => true);
    console.log("isActivityLogged after", isActivityLogged);

    // Store the value of the state in local storage because this will be used to conditionally
    // render components and we need its value to be persistent
    setItem("setActivityAsLogged", true);
  };

  return (
    <>
      {/* Button that user clicks to log their activity ie: display it in the logged activities card */}
      <button
        type="submit"
        className="bg-[#fffaf1] border rounded w-30 shadow"
        onClick={(event) => handleClick(event)}
      >
        Log Activities
      </button>
    </>
  );
};
