import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import FormUserList from '../../../component/FormUserList';

// const profileListContainer = connect(
//   state => ({
//     profile: state.profiles,
//   }),
//   dispatch => ({}),
// )(FormUserList);

// export default profileListContainer;

export default function ProfileListContainer() {
  const profiles = useSelector(state => state.profiles);

  return <FormUserList profiles={profiles} />;
}
