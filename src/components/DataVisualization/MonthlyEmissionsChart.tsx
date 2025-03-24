import { BarChart } from "@mui/x-charts/BarChart";
import { months, MonthlyCarbonEmissions } from "./DataVisualizationData";
import { MakeOptional } from "@mui/x-charts/internals";
import { BarSeriesType } from "@mui/x-charts";
import { getAxisColor, getBarColor } from "./DataVisualizationData";

// This component will use the barChart from material UI to display the user's total
// carbon emissions per month
export const MonthlyEmissionsChart: React.FC = () => {
  // Retrieve the color for the x-axis and the bars of the chart 
  const chartAxisColor = getAxisColor();
  const barColor = getBarColor();

  // The original material UI BarChart component has a series field with an array of objects
  // of the form [{data : value}], this variable is of the same type but populates the value
  // field with the collected monthly total carbon emissions from the users' data ( which was stored
  // in a MonthlyCarbonEmissions hashMap : {month : carbonValue})
  const barChartData: MakeOptional<BarSeriesType, "type">[] = [
    {
      data: Array.from(MonthlyCarbonEmissions.values()),
      color : barColor,
    },
  ];

  
  return (
    <BarChart
    // Adds all the months to the x-axis and adds a color to the labels base on the theme
      xAxis={[{ scaleType: "band", data: months, sx: {
        "& .MuiChartsAxis-tickLabel": { fill: chartAxisColor }},
      }]}

      // Adds a color to the labels based on the theme
      yAxis={[{sx: {
        "& .MuiChartsAxis-tickLabel": { fill: chartAxisColor }}
      }]}
      series={barChartData}
      width={950}
      height={300}
    />
  );
};
