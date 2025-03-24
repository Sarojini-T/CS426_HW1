import type {categoryData} from "./ActivityTrackerTypes";

// Stores a set of mock predefined daily activities for each category as well as their carbon  output
export const Energy: categoryData = {
   "Laundry" : "2.4",
   "Used a dryer" : "2.2",
   "Used Microwave" : "0.3",
   "Heating" : "7",
   "Electricity": "0.7",
   "Used AI" : "8",
   "Used Hot Water" : "0.7",
};

export const Food: categoryData = {
    "Ate fruits": "0.1",
    "Ate meat": "2.5",
    "Ate dairy": "1",

};

export const Waste: categoryData = {
    "Used Plastic cutlery" : "0.02",
    "Bought Fast fashion" : "8",
    "Used Plastic wraps": "0.02",
    "Threw away trash": "0.7",
    "Used Plastic bag": "0.03",
};

export const Transportation: categoryData = {
    "Drove" : "0.4",
    "Biked" : "0.05",
    "Walked": "0.02",
    "Public Transportation": "0.2"
};

