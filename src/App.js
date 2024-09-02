import './App.css';
import { Route, Routes, Navigate, useLocation, useParams } from "react-router-dom";
import HeaderComponent from './component/header/Header';
import DevicesComponent from './component/devices/Devices';
import InventoryComponent from './component/inventory/Inventory';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/devices" element={<DevicesComponent />}>
          <Route path="inventory" element={<InventoryComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
