import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import CreateForms from './pages/CreateForms/CreateForms';
import DeletePage from './pages/DeletePage/DeletePage';
import Graphics from './pages/Graphics/Graphics';
import Industry from './pages/Industry/Industry';
import Main from './pages/Main/Main';
import ReadPage from './pages/ReadPage/ReadPage';
import UpdateForms from './pages/UpdateForms/UpdateForms';
import UpdatePage from './pages/UpdatePage/UpdatePage';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/:unit/create" element={ <CreateForms /> }/>
        <Route path="/:unit/read/:id" element={ <Graphics /> }/>
        <Route path="/:unit/read" element={ <ReadPage /> }/>
        <Route path="/:unit/update/:id" element={ <UpdateForms /> }/>
        <Route path="/:unit/update" element={ <UpdatePage /> }/>
        <Route path="/:unit/delete" element={ <DeletePage /> }/>
        <Route path="/:unit" element={ <Industry /> }/>
        <Route path="/" element={ <Main /> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
