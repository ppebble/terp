import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormUserList from '../../../component/FormUserList';
import { getMember } from '../profile.jsx';

export default function ProfileGetListContainer() {
  const dispatch = useDispatch();

  const get = useCallback(() => {
    dispatch(getMember);
  }, [dispatch]);
  return bindActionCreators(getMember, dispatch);
}
