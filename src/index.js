import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Headers from './Components/Headers';
import { Grommet } from 'grommet';
import { makeServer } from './server/server';
import HomePage from './Pages/HomePage';
import UsersPage from './Pages/UsersPage';

import { customTheme } from './styles/theme';
import { hpe } from 'grommet-theme-hpe';
import HeaderComponent from './Components/header/Header';
import DevicesComponent from './Components/devices/Devices';
import InventoryComponent from './Components/inventory/Inventory';


if (process.env.NODE_ENV === "development") {
  makeServer();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grommet full theme={hpe}>
      <BrowserRouter>
        {/* <Headers /> */}
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/users' element={<UsersPage />}></Route>
          <Route path="/devices" element={<DevicesComponent />} >
            <Route path="inventory" element={<InventoryComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Grommet>
  </React.StrictMode>
);

reportWebVitals();
