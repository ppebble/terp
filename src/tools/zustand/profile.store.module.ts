import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { LicenseDataType } from '../modules/chart/DashboardLicenseData';
import { ProfileIndividualProps } from '../model/ProfileIndividualProps';
import { ProfileInfo } from '../model/ProfileInfo';

type actionItem = {
  setTotalData: (memberList: ProfileInfo[]) => void;
  setCurrentMember: (memberList: ProfileInfo[]) => void;
  setLicenseData: (initDataList: LicenseDataType[]) => void;
  setIndProfileData: (profileData: ProfileIndividualProps) => void;
  setLeaveMember: (memberList: ProfileInfo[]) => void;
  setSelectedUser: (userId: string) => void;
};
export type ProfileStoreType = {
  totalData: ProfileInfo[];
  current: ProfileInfo[];
  leave: ProfileInfo[];
  licenseData: LicenseDataType[];
  indProfileData: ProfileIndividualProps;
  loading: boolean;
  selectedUser: string;
  error: null | string | unknown;
  action: actionItem;
};

const useProfileStore = create<ProfileStoreType>()(
  devtools(
    persist(
      set => ({
        totalData: [],
        current: [],
        licenseData: [],
        indProfileData: {} as ProfileIndividualProps,
        leave: [],
        loading: false,
        selectedUser: '',
        error: '',
        action: {
          setTotalData: (memberList: ProfileInfo[]) => {
            set({ totalData: memberList }, undefined, 'SET_TOTAL_DATA');
          },
          setLicenseData: (initDataList: LicenseDataType[]) => {
            set({ licenseData: initDataList }, undefined, 'SET_LICENSE_DATA');
          },
          setIndProfileData: (profileData: ProfileIndividualProps) => {
            set({ indProfileData: profileData }, undefined, 'SET_IND_DATA');
          },
          setSelectedUser: (userId: string | '') => {
            set({ selectedUser: userId }, undefined, 'SELECTED_USER');
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
            set(
              {
                leave: memberList,
              },
              undefined,
              'LEAVE_USER',
            );
          },
        },
      }),
      {
        name: 'profile-store', // 저장소 key값
        version: 1.0, // version 정보
      },
    ),
  ),
);
export const useTotalData = () => useProfileStore(state => state.totalData);
export const useCurrent = () => useProfileStore(state => state.current);
export const useIndProfile = () =>
  useProfileStore(state => state.indProfileData);
export const useLeave = () => useProfileStore(state => state.leave);
export const useLicense = () => useProfileStore(state => state.licenseData);
export const useSelectedUser = () =>
  useProfileStore(state => state.selectedUser);
// export default useProfileStore;
export const useProfileAction = () => useProfileStore(state => state.action);
