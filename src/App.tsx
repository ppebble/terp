/* eslint-disable import/no-extraneous-dependencies */
import './tools/css/App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Temp from './tools/modules/Temp';
import Writearea from './tools/modules/Writearea';
import SideNav from './SideNav.jsx';
import FormSignUp from './component/FormSignUp';
import FormUserList from './component/FormUserList';
import GridComponent from './tools/modules/GridComponent';
import TableComponent from './tools/modules/TableComponent';
import EduComponent from './tools/EduComponent';
import LoginComponent from './component/Login';
import FindIdComponent from './tools/modules/FindIdComponent';
import FormDashboard from './component/FormDashboard';
import Header from './component/Header';
import Mainlayout from './tools/modules/MainLayout';
import FormLeaveList from './component/FormLeaveList';
import FormProfile from './component/FormProfile';

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
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/member/leave" element={<FormLeaveList />} />
            <Route path="/member/profile" element={<FormProfile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
