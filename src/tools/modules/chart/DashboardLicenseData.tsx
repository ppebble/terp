/* eslint-disable import/prefer-default-export */
import React from 'react';
import useProfileStore from '../../zustand/profile.store.module';

export type LicenseDataType = {
  idx: number;
  userId: string;
  licenseName: string;
};

export default function LicenseChartOptions() {
  const useProfile = useProfileStore();

  const { licenseData } = useProfile;
  const infoProc = licenseData.filter((member: LicenseDataType) =>
    member.licenseName.includes('정보처리기사'),
  );
  const itq = licenseData.filter((member: LicenseDataType) =>
    member.licenseName.includes('ITQ'),
  );
  const orgMngEng = licenseData.filter((member: LicenseDataType) =>
    member.licenseName.includes('조직운용기사'),
  );
  return {
    series: [
      {
        // data build ...  전체 / 정보처리기사 / itq / 조직운용기사
        name: 'members',
        data: [
          licenseData.length,
          infoProc.length,
          itq.length,
          orgMngEng.length,
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
      categories: ['전체', '정보처리기사', 'ITQ', '조직운용기사'],
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
