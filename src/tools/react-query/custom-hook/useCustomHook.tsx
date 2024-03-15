import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query';
import {
  GetTotalProfile,
  getLicenseData,
  postSignUp,
} from '../../service/ServiceAPI';
import { SignupModel } from '../../model/SignupModel';
import { useIsAuth } from '../../zustand/login.store.module';

export const useMainboardQuery = () => {
  const queryClient = useQueryClient();
  const auth = useIsAuth();
  const res = useQueries({
    queries: [
      {
        queryKey: ['getLicenseData'],
        queryFn: getLicenseData,
        enabled: auth,
      },
      {
        queryKey: ['getTotalData'],
        queryFn: GetTotalProfile,
      },
    ],
    combine: result => {
      return {
        data: result.map(e => e.data),
        pending: result.some(e => e.isPending),
        error: result.some(e => e.isError),
      };
    },
  });
  const { mutate: signupMutation } = useMutation({
    mutationFn: (param: SignupModel) => postSignUp(param),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTotalData'] });
    },
    onError: () => {
      return false;
    },
  });
  return {
    res,
    signupMutation,
  };
};
