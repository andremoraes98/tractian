import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Industry from './pages/Industry';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/:industry" element={ <Industry /> }/>
        <Route path="/" element={ <Main /> }/>
      </Routes>
    </>
  );
}

export default App;
