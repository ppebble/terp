import React from 'react';
import Chart from 'react-apexcharts';

type ChartType = {
  ChartOptions: any;
};

function DataColumnChart({ ChartOptions }: ChartType) {
  return (
    <Chart
      options={ChartOptions.options}
      series={ChartOptions.data}
      type={ChartOptions.type}
      height={ChartOptions.height}
    />
  );
}
export default DataColumnChart;
