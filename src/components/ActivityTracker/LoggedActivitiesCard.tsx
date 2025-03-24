import { useContext } from "react";
import { ActivitiesLogged, ActivityContext, SelectedDate } from "./ActivityTrackerContexts";
import {
  activitiesLoggedType,
  selectedActivitiesType,
  selectDateType
} from "./ActivityTrackerTypes";
import { Energy, Food, Waste, Transportation } from "./Data";
import { getItem, setItem } from "../../utils/localStorage";
import { EditLoggedActivitiesButton } from "./EditLoggedActivitiesButton";
import { NewEntryButton } from "./NewEntryButton";
import { MonthlyCarbonEmissions, YearlyCarbonEmissions } from "../DataVisualization/DataVisualizationData";

// This component will display all the selected activities that the user decided to log, and provide them with
// the option to either edit their entry or create a new one
export const LoggedActivitiesCard : React.FC = () => {
    // Retrieve state to check if the user logged their activity from the loggedActivityButton 
    // component using context
    const { isActivityLogged }: activitiesLoggedType = useContext(ActivitiesLogged);

    // Get the selected activities to display to the user
    const { selectedActivities }: selectedActivitiesType = useContext(ActivityContext);

    // Get the selected date
    const { selectedDate } : selectDateType = useContext(SelectedDate);

  // Initialize variable to store the total carbon that the user emitted for the day
  let totalCarbonEmittedToday = 0;

  // Combine all the data objects together in a nested array format where each inner array
  // is of the form ["activityName", "carbonValue" ] so we can match the selected activities
  // to their associated carbon value and display them
  let allData: string[][] = Object.entries({
    ...Energy,
    ...Food,
    ...Waste,
    ...Transportation,
  });

  // Since we are displaying a list for each activity in allData, we need a unique key for each list
  // therefore, this hashMap will match each activity to a unique ID
  const idHashMap = new Map<string, number>();
  let idCount = 0;

  allData.forEach((activityArray) => {
    idHashMap.set(activityArray[0], idCount++);
  });

  // Remove all the activities that the user did not select from allData
  allData = allData.filter((activityArray) => {
    // Filter selectedActivities to see if the activity in the current activityArray was selected
    const findMatchingActivity: string[] = selectedActivities.filter(
      (activity: string) => activity == activityArray[0]
    );

    // If the currentActivity was selected return it, otherwise filter it ouf of allData
    if (findMatchingActivity.length > 0) {
      return activityArray;
    } else {
      return false;
    }
  });

  // Store the daily logged activities in local storage with a new key
  setItem("loggedActivities", allData);

  // Set allData to what is retrieved from localStorage. This will make sure that if the user reloads
  // or exists the page, then the logged activities will not be lost
  allData = getItem("loggedActivities");

  // Will use the selectedDate to increment the counter for the totalCarbon emitted
  // for this mount and for the year

  // First get the month and the year from the date string by splitting it up into parts
  // "month day year" => ["month", "day", "year"]
  const dateStringArray = selectedDate.split(" ");
  const month = dateStringArray[0];
  const year = dateStringArray[2];

  // Update the totalCarbon for each hashMap by updating the value stored in the key of the
  // month and the year
  const currMonthlyEmissionVal = MonthlyCarbonEmissions.get(month) || 0;
  MonthlyCarbonEmissions.set(month, currMonthlyEmissionVal + totalCarbonEmittedToday);

  const currYearlyEmissionVal = YearlyCarbonEmissions.get(Number(year)) || 0;
  YearlyCarbonEmissions.set(Number(year), currMonthlyEmissionVal + currYearlyEmissionVal);

  return (
    <>
      {/* If the user clicked log activities, this component will show with their selected activities 
            Otherwise, it will remain hidden */}

      {isActivityLogged && (
        
        <div className="flex justify-center mt-10">
            
            <div className="bg-[#556B2F] dark:bg-[#033500]  flex flex-col justify-between w-full h-70 shadow overflow-auto">
                {/* Iterate through all of the daily activities of the user and display them to the user 
                along with the amount of carbon that was emitted for each activity */}
                {allData.map((activityArray) => {
                    // Keep a running total of the total amount of carbon that the user emitted
                    totalCarbonEmittedToday += Number(activityArray[1]);
                  return (
                    <>
                        <li key={idHashMap.get(activityArray[0])} className="text-white ml-5 mt-3">
                        {activityArray[0]}&nbsp;emitted: {activityArray[1]}{" "} Kg of CO2
                        </li>
                    </>
                    );
                })}
            <p className="text-white ml-5"> Total Carbon Emitted: {totalCarbonEmittedToday} Kg of CO2</p>
            
            <div className="flex flex-row justify-between mb-3 mr-10 ml-10 ">
                <EditLoggedActivitiesButton />
                <NewEntryButton />  
            </div>
            
            </div>
        </div> 
      )}
    </>
  );
};
