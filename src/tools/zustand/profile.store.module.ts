import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { LicenseDataType } from '../modules/chart/DashboardLicenseData';
import { ProfileIndividualProps } from '../model/ProfileIndividualProps';
import { ProfileInfo } from '../model/ProfileInfo';

export type ProfileStoreType = {
  totalData: ProfileInfo[];
  current: ProfileInfo[];
  leave: ProfileInfo[];
  licenseData: LicenseDataType[];
  indProfileData: ProfileIndividualProps;
  loading: boolean;
  selectedUser: string;
  error: null | string | unknown;
  setTotalData: (memberList: ProfileInfo[]) => void;
  setCurrentMember: (memberList: ProfileInfo[]) => void;
  setLicenseData: (initDataList: LicenseDataType[]) => void;
  setIndProfileData: (profileData: ProfileIndividualProps) => void;
  setLeaveMember: (memberList: ProfileInfo[]) => void;
  setSelectedUser: (userId: string) => void;
  //   fetchProfile: () => void;
};

const useProfileStore = create<ProfileStoreType>()(
  persist(
    devtools((set, get) => ({
      totalData: [],
      current: [],
      licenseData: [],
      indProfileData: {} as ProfileIndividualProps,
      leave: [],
      loading: false,
      selectedUser: '',
      error: '',
      setTotalData: (memberList: ProfileInfo[]) => {
        set({ totalData: memberList });
      },
      setLicenseData: (initDataList: LicenseDataType[]) => {
        set({ licenseData: initDataList });
      },
      setIndProfileData: (profileData: ProfileIndividualProps) => {
        set({ indProfileData: profileData });
      },
      setSelectedUser: (userId: string | '') => {
        set({ selectedUser: userId });
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
