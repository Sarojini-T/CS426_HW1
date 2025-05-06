import { useState } from "react";
import { EditDate } from "./ActivityTrackerContexts";
import { EditDateButton } from "./EditDateButton";
import { getItem, setItem } from "../../utils/localStorage";
import { months } from "../DataVisualization/DataVisualizationData";

// This component will display the user's selected date as well as a button
// to allow the user to edit the date
export const EntryDate : React.FC = () => {
    // States that will track when a user selects a date and the value of the selected date
    const [isDateSelected, setDateAsSelected ] = useState<boolean>(() =>{
        return getItem("isDateSelected");
    });
    const [ selectedDate, setSelectedDate ] = useState<string>(() => {
        return getItem("selectedDate");
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        // Store the date the user selected in a javascript date object
        const date = new Date(event.target.value);

        // Since the Date object returns the month as a number and it is 0 index
        // we will map it to an array of months where the index contains the month name
    
        // Extract the month, day, and year from the object
        const month = months[date.getMonth()];
        const day = date.getDate() + 1;
        const year = date.getFullYear();

        // Combine the month, day and year into a string
        const entryDate = month.toString().concat(" ").concat(day.toString()).concat(" ").concat(year.toString());
       
        // When the user selects a date, change the isDateSelected state
        setDateAsSelected(() => {
            setItem("isDateSelected", true);
            return true});

        // Change the selectedDate state to reflect the new date
        setSelectedDate(() => {
            setItem("selectedDate", entryDate)
            return entryDate}); 
    }

    return(
        // Wrap component in a context so that the buttons can access the state
        <EditDate.Provider value={{isDateSelected, setDateAsSelected}}>
            {/* If a date is selected, then display the selected date and the edit date 
            button, otherwise, display the input prompting the user to select a date */}
            { isDateSelected ? 
            <div className="flex justify-between gap-3 mt-10">
                <h1 className="dark:text-white">{selectedDate}</h1>
                <EditDateButton />
            </div> : <label className="dark:text-white text-3xl mt-5"> Select the date  
            <input type="date" className="border dark:bg-white dark:text-black" onChange={(event) => handleChange(event)} /> 
            </label>    
            }
        </EditDate.Provider>

    );
}