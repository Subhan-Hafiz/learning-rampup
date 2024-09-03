import React from 'react';
import { Grommet, Box, Nav, Anchor } from 'grommet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CertificatesPage from './Pages/CertificatesPage';
import R from './Pages/Routes';

function App() {
  return (
    <Grommet>
      <Router>
        <Nav direction="row" background="brand" pad="medium">
          <Anchor href="/home" label="Home" />
          <Anchor href="/certificates" label="Certificates" />
          <Anchor href="/routes" label="Route" />
        </Nav>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/routes" element={<R />} />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
