import React, { FC } from 'react';
import { Home } from './pages/Home/Home';
import { Expense } from './pages/Expense/Expense';
import { Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/expense/:amount'
        element={<Expense />}
      />
    </Routes>
  );
}

export default App;
