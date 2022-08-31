import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';
import CreateForms from './pages/CreateForms/CreateForms';
import Industry from './pages/Industry';
import Main from './pages/Main';
import ReadPage from './pages/ReadPage/ReadPage';
import UpdatePage from './pages/UpdatePage/UpdatePage';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/create" element={ <CreateForms /> }/>
        <Route path="/update" element={ <UpdatePage /> }/>
        <Route path="/read" element={ <ReadPage /> }/>
        <Route path="/:industry" element={ <Industry /> }/>
        <Route path="/" element={ <Main /> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
