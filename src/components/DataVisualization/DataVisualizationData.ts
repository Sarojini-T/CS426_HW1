import { getItem } from "../../utils/localStorage";

// File that will store the data used to create the charts

// hashMap to track the total amount of carbon emissions per month
export const MonthlyCarbonEmissions = new Map <string, number>();

// hashMap to track Yearly Carbon emissions of the form
export const YearlyCarbonEmissions = new Map <number , number>();

// Add in mock data for each month
export const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

// Populate the map with mock monthly emissions values in the range of (0.39 , 0.50)
months.forEach((month) => MonthlyCarbonEmissions.set(month, Math.floor((Math.random() * (0.51 - 0.39) + 0.39)*100)/100));

// Add in mock data for each year
export const years = [2020, 2021, 2022, 2023, 2024, 2025];


// Populate the map with mock yearly emissions values in the range of (2,4)
years.forEach((year) => YearlyCarbonEmissions.set(year, Math.round(Math.random() * (5 - 4) + 2)));

// Functions to set the color of the bars/lines and x & y axis of the charts based
// on if the theme is light or dark because the charts are made with material UI 
// components and we cannot use className="dark:...."
const currTheme = getItem("theme"); 

export const getAxisColor = () => {
    return currTheme == "dark" ? "#FFFFFF" : "#000000";
}

export const getBarColor = () => {
    return currTheme == "dark" ? "#033500" : "#556B2F";
}
  