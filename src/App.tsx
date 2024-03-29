/* eslint-disable import/no-extraneous-dependencies */
import './tools/css/App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SideNav from './SideNav.jsx';
import FormSignUp from './component/FormSignUp';
import FormUserList from './component/FormUserList';
import LoginComponent from './component/Login';
import FormDashboard from './component/FormDashboard';
import Header from './component/Header';
import FormLeaveList from './component/FormLeaveList';
import FormProfile from './component/FormProfile';
import FormEditProfile from './component/FormEditProfile';
import FormAccessList from './component/access-component/FormAccessList';

const Layout = styled.div`
  display: flex;
  padding: 12px 0;
  color: #a7a9be;
  background-color: #f2f2f2;
  font-size: 1.2rem;
  font-family: sans-serif;
`;

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <ReactQueryDevtools initialIsOpen />
      <BrowserRouter>
        <Header />
        <aside className="sidebar">
          <SideNav />
        </aside>
        <Layout>
          <Routes>
            <Route path="/" element={<FormDashboard />} />
            <Route path="/signup" element={<FormSignUp />} />
            <Route path="/member" element={<FormUserList />} />
            <Route path="/access" element={<FormAccessList />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/member/leave" element={<FormLeaveList />} />
            <Route path="/member/profile" element={<FormProfile />} />
            <Route path="/member/profile/edit" element={<FormEditProfile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
