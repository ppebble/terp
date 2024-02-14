/* eslint-disable import/prefer-default-export */
import React from 'react';
import useProfileStore, {
  ProfileStoreType,
} from '../../zustand/profile.store.module';
import AlertComponent from '../alert/AlertComponent';
import { ChartProps } from '../../model/ChartProps';

export default function MemberOptions() {
  const currentProfile = useProfileStore(
    (state: ProfileStoreType) => state.current,
  );
  if (currentProfile.length < 1) {
    //   AlertComponent({
    //     inputTitle: 'Network Error',
    //     inputText: `조회된 데이터가 없습니다.`,
    //   });
    return ChartProps();
  }
  const groupBySpot = currentProfile.reduce((acc: any, obj: any) => {
    const { spot } = obj;
    acc[spot] = acc[spot] ?? [];
    acc[spot].push(obj);
    return acc;
  }, {});

  return {
    series: [
      {
        name: 'members',
        data: [
          groupBySpot.주임.length,
          groupBySpot.대리.length,
          groupBySpot.과장.length,
          groupBySpot.차장.length,
          groupBySpot.부장.length,
          groupBySpot.이사.length,
          groupBySpot.상무.length,
          groupBySpot.대표.length,
          groupBySpot.회장.length,
        ],
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
