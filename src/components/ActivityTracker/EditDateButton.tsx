import { useContext } from "react";
import { EditDate } from "./ActivityTrackerContexts";
import { editDateType } from "./ActivityTrackerTypes";

// This component returns a button that will allow the user to choose the date of their entry
export const EditDateButton : React.FC = () => {
    // Retrieve the state function that sets the dat from the context
    const {setDateAsSelected} : editDateType = useContext(EditDate);
    return <button type="submit" className="border bg-[#fffaf1]"onClick={(() => setDateAsSelected(() => false))}> Edit Date</button>
}