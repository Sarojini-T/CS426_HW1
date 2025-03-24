import { useState } from "react";
import { LoggedActivitiesCard } from "./LoggedActivitiesCard";
import { ActivitiesLogged, ActivityContext } from "./ActivityTrackerContexts";
import { getItem } from "../../utils/localStorage";
import { CategoryCardForm } from "./CategoryCardsForm";
import { EntryDate } from "./EntryDate";
import { NavigationBar} from "../NavigationBar";

// Component will display the navigation bar as well as a form with checkboxes where users can log 
// their daily activities daily. Once they log their activities, they can see them displayed in a card along
// with the carbon emitted for each activity. They have the option to either edit the list or add a new entry.
const ActivityTrackerPage : React.FC = () => {
  // Create a state to store the selected activities of the user
  const [selectedActivities, setSelectedActivities] = useState<string[]>(() => {
    // Set the default value to an array of selected activities stored in local storage
    // If there are none, set to an empty array ie. no checkboxes are selected
    const activities = getItem("selectedActivities") || [];
    // return as default state string array
    return activities;
  });

  // Create state that will be used to display the selected activities in the logged activities card
  const [ isActivityLogged, setActivityAsLogged] = useState<boolean>(() => {
    const isLogged : boolean = getItem("setActivityAsLogged");
    console.log("isLogged", isLogged)
    return isLogged;
  });

  return (
    // Wrap the component in a context so that all the components nested within it and their children can 
    // access the state passed in as the value
    <div className=" bg-[#fffaf1] dark:bg-black gap-5 ">
      <NavigationBar/>
        <ActivityContext.Provider
        value={{ selectedActivities, setSelectedActivities }}>
          <ActivitiesLogged.Provider value={{isActivityLogged, setActivityAsLogged}}>
                  {/* Container for the category cards and the logged activity card */}
                  <div className="flex flex-col justify-between gap-20 ml-5 mr-5">
                    {/* Container for the Date selection input */}
                    <div className="flex justify-center gap-30">
                      < EntryDate /> 
                    </div>
                    
                    {/* Display the category form component*/}
                    <CategoryCardForm />
                    {/* cContainer to center the card that contains the selected activities */}
                    <div className="flex flex-col justify-between gap-5">
                      {/* Display all the submitted activities as well as their carbon values */}
                      <LoggedActivitiesCard />
                      <div className="flex ">
                      </div>
                    </div>
                  </div>
          </ActivitiesLogged.Provider>
      </ActivityContext.Provider>
    </div>  
  );
};

export default ActivityTrackerPage;
