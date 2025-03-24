import { Energy, Food, Waste, Transportation } from "./Data.ts";
import { categoryData } from "./ActivityTrackerTypes.ts";
import { DailyActivityInput } from "./DailyActivityInput.tsx";

// Define the props of CategoryCard
type Props = {
  category: string;
};

// Each card will be associated with a distinct category and will contain checkboxes with 
// pre-defined daily activities related to that category that the user can select/unselect
const CategoryCard: React.FC<Props> = ({ category }) => {
  // Using the Category passed into the CategoryCard as a prop, get the corresponding set of daily activities
  // from the data file which contains an object of activities for each category
  const getCategoryData = (category: { category: string }): categoryData => {
    switch (category.category) {
      case "Energy":
        return Energy;
      case "Food":
        return Food;
      case "Waste":
        return Waste;
      case "Transportation":
        return Transportation;
      default:
        return {};
    }
  };

  return (
    // Container for the category cards
    <div className="bg-[#556B2F] dark:bg-[#033500] shadow w-full h-auto" >
      {/* container for the card information : the category and the daily activities */}
      <div className="overflow-auto flex flex-col">
        <h1 className="flex justify-center text-white ">{category}</h1>
          {/* Container for the checkboxes */}
          <div className="flex flex-col ml-5">
            {/* Convert the category object into an array of key, value pairs ['activity', 'carbonVal'] so we can then 
                map over it and create a checkbox input for each activity using the DailyActivityInput component*/}
            {Object.entries(getCategoryData({ category })).map(([activity]) => (
              <DailyActivityInput key={activity} activity={activity} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default CategoryCard;
