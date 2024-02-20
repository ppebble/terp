/* eslint-disable no-return-await */
import React from 'react';
import axios from 'axios';
import ServiceUrls from '../config/ServiceUrls';
import AlertComponent from '../modules/alert/AlertComponent';
import { SignupModel } from '../model/SignupModel';
import { LoginModel } from '../model/LoginModel';

/**
 *
 * @returns Profile 전체 데이터
 */
export const GetTotalProfile = async () => {
  return await axios
    .get(`${ServiceUrls().localUrl}/member`)
    .then(res => res.data);
  // .catch(e => {
  //   AlertComponent({
  //     inputTitle: 'Network Error',
  //     inputText: `데이터 조회에 실패했습니다.`,
  //   });
  // });
};
//   return response.data;
/**
 *
 * @returns 자격증 현황 데이터
 */
export const getLicenseData = async () => {
  return await axios
    .get(`${ServiceUrls().localUrl}/init`)
    .then(res => res.data);
  // .catch(e => {
  //   AlertComponent({
  //     inputTitle: 'Network Error',
  //     inputText: `자격증 데이터 조회에 실패했습니다.`,
  //   });
  // });
};
/**
 *  회원가입 POST
 * @param param 회원가입 파라미터
 * @returns 성공여부
 */
export const postSignUp = async (param: SignupModel) => {
  return await axios
    .post(`${ServiceUrls().localUrl}/member/save`, param)
    .then(res => {
      if (res.data === 'success') {
        AlertComponent({
          inputTitle: '회원가입 성공',
          inputText: `가입이 완료되었습니다`,
        });
      } else {
        AlertComponent({
          inputTitle: '회원가입 실패',
          inputText: res.data,
        });
      }
    })
    .catch(res => {
      AlertComponent({
        inputTitle: '회원가입 실패',
        inputText: `서버와 연결이 끊겼습니다. ${res.message}`,
      });
    });
};

export const postLogin = async (param: LoginModel) => {
  return await axios
    .post(`${ServiceUrls().localUrl}/member/sign-in`, param)
    .then(res => res.data)
    .catch(res => {
      AlertComponent({
        inputTitle: '로그인실패',
        inputText: ` ${res.message}`,
      });
    });
};

/**
 *
 * @returns 개인 프로필 데이터
 */
export const getProfileData = async (userId: string) => {
  return await axios
    .get(`${ServiceUrls().localUrl}/member/profile?userId=${userId}`)
    .then(res => res.data)
    .catch(e => {
      AlertComponent({
        inputTitle: 'Network Error',
        inputText: `개인 프로필 조회에 실패하였습니다.`,
      });
      return false;
    });
};
