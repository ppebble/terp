/* eslint-disable import/prefer-default-export */
import React from 'react';
import useProfileStore, {
  ProfileStoreType,
} from '../../zustand/profile.store.module';
import AlertComponent from '../alert/AlertComponent';

export default function TechGradeOptions() {
  const currentProfile = useProfileStore(
    (state: ProfileStoreType) => state.current,
  );
  if (currentProfile.length < 1) {
    AlertComponent({
      inputTitle: 'Network Error',
      inputText: `조회된 데이터가 없습니다.`,
    });
    return false;
  }
  const groupByTechGrade = currentProfile.reduce((acc: any, obj: any) => {
    const { techGrade } = obj;
    acc[techGrade] = acc[techGrade] ?? [];
    acc[techGrade].push(obj);
    return acc;
  }, {});

  return {
    series: [
      {
        name: 'members',
        data: [
          // 초급 = 없음 + 초급
          groupByTechGrade.초급.length + groupByTechGrade.없음.length,
          groupByTechGrade.중급.length,
          groupByTechGrade.고급.length,
          groupByTechGrade.특급.length,
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
      categories: ['초급', '중급', '고급', '특급'],
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
