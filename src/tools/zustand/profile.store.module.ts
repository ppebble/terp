import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { LicenseDataType } from '../modules/chart/DashboardLicenseData';

export interface ProfileInfo {
  empNo: string;
  userId: string;
  userName: string;
  userEmail: string;
  tel: string;
  position: string;
  spot: string;
  task: string;
  techGrade: string;
  scienceTechCertify: string;
  locDetail: string;
  hiredate: string;
  leavedate: string;
}
export type ProfileStoreType = {
  totalData: ProfileInfo[];
  current: ProfileInfo[];
  leave: ProfileInfo[];
  licenseData: LicenseDataType[];
  loading: boolean;
  error: null | string | unknown;
  setTotalData: (memberList: ProfileInfo[]) => void;
  setCurrentMember: (memberList: ProfileInfo[]) => void;
  setLicenseData: (initDataList: LicenseDataType[]) => void;
  setLeaveMember: (memberList: ProfileInfo[]) => void;
  //   fetchProfile: () => void;
};

const useProfileStore = create<ProfileStoreType>()(
  persist(
    devtools((set, get) => ({
      totalData: [],
      current: [],
      licenseData: [],
      leave: [],
      loading: false,
      error: '',
      setTotalData: (memberList: ProfileInfo[]) => {
        set({ totalData: memberList });
      },
      setLicenseData: (initDataList: LicenseDataType[]) => {
        set({ licenseData: initDataList });
      },
      setCurrentMember: (memberList: ProfileInfo[]) => {
        for (let i = 0; i < memberList.length; i += 1) {
          if (memberList[i].leavedate) {
            memberList.splice(i, 1);
            i -= 1;
          }
        }
        set({
          current: memberList,
        });
      },
      setLeaveMember: (memberList: ProfileInfo[]) => {
        for (let i = 0; i < memberList.length; i += 1) {
          if (!memberList[i].leavedate) {
            memberList.splice(i, 1);
            i -= 1;
          }
        }
        set({
          leave: memberList,
        });
      },
    })),

    {
      name: 'profile-store', // 저장소 key값
      storage: createJSONStorage(() => sessionStorage), // 저장소
      version: 1.0, // version 정보
    },
  ),
);

export default useProfileStore;
