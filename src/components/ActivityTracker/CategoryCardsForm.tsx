import { activitiesLoggedType } from "./ActivityTrackerTypes";
import CategoryCard from "./CategoryCard";
import { LogActivityButton } from "./LogActivityButton";
import { ClearCheckboxesButton } from "./ClearCheckboxesButton";
import { useContext } from "react";
import { ActivitiesLogged } from "./ActivityTrackerContexts";

// This component will display the full form that will be displayed to the user, containing the category cards
// with their respective daily activities, as well as a button for the user to log their activities or clear the 
// ones they have currently selected.
export const CategoryCardForm : React.FC = () => {
 // Array that will be used to assign a category as a prop to each category card
  const categories : string[] = ["Energy", "Food", "Waste", "Transportation"];

  // Retrieve the state that will tell us if the user logged their activities or not
  const { isActivityLogged }: activitiesLoggedType = useContext(ActivitiesLogged);

  return (
    <>
    {/* If the user has not yet logged their activities, then the form should be display so that they can do so.
    Otherwise, the logged activities card containing their final selections will be displayed. */}
      {!isActivityLogged && (
        <form className="flex-col justify-between">
          {/* Container that will align all categoryCards in a row */}
          <div className="flex justify-between gap-2">
            {categories.map((category) => (
              <CategoryCard key={category} category={category}  />
            ))}
          </div>

          {/* Container to center the button */}
          <div className="flex justify-center mt-4 gap-20">
            {/* Button that the user will click to submit all their selected activities */}
            <LogActivityButton />

            {/* Buttons that the user will click to clear all checked activities */}
            <ClearCheckboxesButton />
          </div>
        </form>
      )}
    </>
  );
};
