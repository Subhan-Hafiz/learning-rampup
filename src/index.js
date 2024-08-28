import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './Components/Headers';
import { Grommet } from 'grommet';
import { makeServer } from './server/server';
import HomePage from './Pages/HomePage';
import UsersPage from './Pages/UsersPage';

import { customTheme } from './styles/theme';


if (process.env.NODE_ENV === "development") {
  makeServer();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Grommet theme={customTheme} full>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/users' element={<UsersPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Grommet>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
