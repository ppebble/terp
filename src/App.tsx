import './tools/css/App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
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

const Layout = styled.div`
  display: flex;
  padding: 12px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

function App() {
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <SideNav />
        <Routes>
          <Route path="/" element={<FormDashboard />} />
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/member" element={<FormUserList />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
