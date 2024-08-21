import React from 'react';
import { Grommet, Box, Nav, Anchor } from 'grommet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CertificatesPage from './Pages/CertificatesPage';

function App() {
  return (
    <Grommet>
      <Router>
        <Nav direction="row" background="brand" pad="medium">
          <Anchor href="/home" label="Home" />
          <Anchor href="/certificates" label="Certificates" />
        </Nav>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
