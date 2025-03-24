import { useContext } from "react";
import { ActivitiesLogged } from "./ActivityTrackerContexts";
import { activitiesLoggedType } from "./ActivityTrackerTypes";
import { setItem } from "../../utils/localStorage";

// This component will be displayed once the user has selected their daily activities and will allow
// them to return to the category cards form to add/remove activities
export const EditLoggedActivitiesButton : React. FC = () => {
  // Retrieve the set of selected activities from the context
  const { setActivityAsLogged }: activitiesLoggedType =
    useContext(ActivitiesLogged);

  // Function to handle when the user clicks the button
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Prevent page from reloading
    event.preventDefault();

    // Set the log activities button to false so that the user can edit ie.
    // so that the category cards form which only renders when the isActivityLogged
    // is false can be displayed
    setActivityAsLogged(() => {
      setItem("setActivityAsLogged", false);
      return false;
    });
  };

  return (
    <button
      className="bg-[#fffaf1]"
      onClick={(event) => handleClick(event)}
    >
      Edit
    </button>
  );
};
