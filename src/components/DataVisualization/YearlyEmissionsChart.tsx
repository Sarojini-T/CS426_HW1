import { LineChart } from '@mui/x-charts/LineChart';
import { YearlyCarbonEmissions } from './DataVisualizationData';
import { getAxisColor, getBarColor } from './DataVisualizationData';

// This component will display the yearly carbon emissions of the user
// using a lineChart from material UI
export const YearlyEmissionsChart = () => {
    // Retrieve the color for the x-axis and the bars of the chart 
    const chartAxisColor = getAxisColor();
    const barColor = getBarColor();
     
  return (
    <LineChart
      xAxis={[{ scaleType: 'band', data : Array.from(YearlyCarbonEmissions.keys()),  sx: {
        "& .MuiChartsAxis-tickLabel": { fill: chartAxisColor }}
    }]}

    yAxis={[{ sx: {
        "& .MuiChartsAxis-tickLabel": { fill: chartAxisColor }}
    }]}
      series={[
        {
          data:  Array.from(YearlyCarbonEmissions.values()),
          area : true,
          color : barColor
        },
      ]}
      width={600}
      height={300}
    />
  );
}
