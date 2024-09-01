import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactsPage from "./pages/ContactsPage";
import ProjectPageId from "./pages/ProjectPageId";
import './App.css';

function App() {
  return (
    <div className="App"> 
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPageId />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>
        <Footer />      
    </div>
  )
}

export default App;
