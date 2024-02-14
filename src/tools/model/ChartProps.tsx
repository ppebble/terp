export function ChartProps() {
  return {
    series: [
      {
        name: 'members',
        data: [],
      },
    ],
    chart: {
      height: 300,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter(data: string) {
        return `${data}명`;
      },
      offsetY: -25,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },

    xaxis: {
      categories: [],
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter(data: string) {
          return `${data} 명`;
        },
      },
    },
    title: {
      text: '인력 사항 현황',
      floating: true,
      offsetY: 0,
      align: 'center',
      style: {
        color: '#444',
      },
    },
  };
}
