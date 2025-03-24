import { NavigationBar } from "../NavigationBar";
import { Resources } from "./Resources";
import { Tips } from "./Tips";

// This component returns a set of tips and helpful resources to help
// the user with decreasing their carbon footprint
export const ResourcesPage = () => {
  return (
    <div className="bg-[#fffaf1] dark:bg-black">
      <NavigationBar />
      <div className="flex justify-center gap-20 mt-5">
        <Tips />
        <Resources /> 
      </div>
      
    </div>
  );
};
