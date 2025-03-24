import { createContext } from "react";
import {
  selectedActivitiesType,
  activitiesLoggedType,
  editDateType,
  selectDateType,
} from "./ActivityTrackerTypes";

// Context that will be used to pass the state defined in ActivityTrackerPage to DailyActivity component
export const ActivityContext = createContext<selectedActivitiesType>({
  selectedActivities: [],
  setSelectedActivities: () => {},
});

// Context that will be used to pass data from logActivityButton to DailyActivityCard component
export const ActivitiesLogged = createContext<activitiesLoggedType>({
  isActivityLogged: false,
  setActivityAsLogged: () => {},
});

// Context for when a user wants to edit a Date
export const EditDate = createContext<editDateType>({
    isDateSelected : false,
    setDateAsSelected : () => {}
});

// Context for the selected date
// Context for when a user wants to edit a Date
export const SelectedDate = createContext<selectDateType>({
    selectedDate : "", 
    setSelectedDate : () => {}
});
