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

const Layout = styled.div`
  display: flex;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

function App() {
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Layout>
        <SideNav />
        <Routes>
          <Route path="/signup" element={<FormSignUp />} />
          <Route path="/member" element={<FormUserList />} />
          <Route path="/grid" element={<LoginComponent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
