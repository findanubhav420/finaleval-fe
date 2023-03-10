import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EntriesPage from './pages/EntriesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContentPage from './pages/ContentTypePage/ContentTypePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/content" element={<ContentTypePage />} /> */}
          <Route path="/entries/:id" element={<EntriesPage />} />
          <Route path="/content-type" element={<ContentPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
