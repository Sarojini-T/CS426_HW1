import { NavigationBar } from "../NavigationBar";
import { MonthlyEmissionsChart }  from "./MonthlyEmissionsChart";
import { YearlyEmissionsChart }  from "./YearlyEmissionsChart";

// This component will return two charts, one displaying the monthly carbon
// emissions of the user and the other displays the yearly ones
export const DataVisualizationPage : React.FC = () => {   
    return(
        <div className="bg-[#fffaf1] dark:bg-black w-full sm:w-full lg:w-full md:w-full"> 
            <NavigationBar/>
            <h1 className="flex justify-center mt-5 ml-5"> Data Visualization </h1>
            <div className="flex flex-col justify-between gap-10 w-full aspect-w-16 aspect-h-9">
                <MonthlyEmissionsChart />
                <YearlyEmissionsChart />   
            </div>
        </div>    
    );
}
