/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { InitAttributeType, fetchInitData } from '../../redux/init';
import { ProfileAttributes } from '../../redux/profile';

type MemberDataType = {
  initData?: any;
};

export default function MemberOptions() {
  return {
    series: [
      {
        name: 'members',
        data: [7, 6, 2, 4, 2, 1, 1, 1, 1],
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
      categories: [
        '주임',
        '대리',
        '과장',
        '차장',
        '부장',
        '이사',
        '상무',
        '대표',
        '회장',
      ],
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
