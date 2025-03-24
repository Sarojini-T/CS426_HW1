// Define all types used by the ActivityTracker components

// CategoryData is an object containing an activity as a key, and the carbon output as a value
export type categoryData = {
    [activity: string] : string
}

// Create a type for the activity context in ActivityTrackerPage component 
export type selectedActivitiesType = {
    selectedActivities : string[];
    setSelectedActivities : React.Dispatch<React.SetStateAction<string[]>>;
}

// Create a type for the ActivitiesLogged context 
export type activitiesLoggedType = {
    isActivityLogged : boolean,
    setActivityAsLogged : React.Dispatch<React.SetStateAction<boolean>>
}

// Create a type for the EditDate context
export type editDateType = {
    isDateSelected : boolean, 
    setDateAsSelected: React.Dispatch<React.SetStateAction<boolean>>
}

// Create a type for the SelectDate context
export type selectDateType = {
    selectedDate : string,
    setSelectedDate :  React.Dispatch<React.SetStateAction<string>>
}