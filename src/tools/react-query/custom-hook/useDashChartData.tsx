import LicenseChartOptions from '../../modules/chart/DashboardLicenseData';
import MemberOptions from '../../modules/chart/DashboardMemberData';
import TechGradeOptions from '../../modules/chart/DashboardTechGradeData';

export function useChartData() {
  const chartData = (chartOptions: any) => {
    if (chartOptions.length < 1) {
      return false;
    }
    return {
      options: chartOptions,
      data: chartOptions.series,
      type: chartOptions.chart.type,
      height: chartOptions.chart.height,
    };
  };
  const memberChartData = chartData(MemberOptions());
  const licenseChartData = chartData(LicenseChartOptions());
  const techGradeChartData = chartData(TechGradeOptions());
  return { memberChartData, licenseChartData, techGradeChartData };
}
