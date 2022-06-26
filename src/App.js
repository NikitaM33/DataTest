import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import { Home, NotFoundPage } from './pages';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
