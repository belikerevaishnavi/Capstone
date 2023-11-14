import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signin } from './signin'; // Import the named export
import { Register } from './register'; // Import the named export
import { LandingPage } from './landing';
import Courts from './courts';
import RolesPage from './roles';
import AboutUs from './about';
import Navbar from './navbar';
import ServicesPage from './services';
import MyCasesId from './myCasesId';
import MyCases from './myCases';
import Organizations from './organizations';
import CaseForm from './caseForm';
import ContactUs from './contact';
import OrgCity from './orgCity';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/courts" element={<Courts />} />
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/myCasesId" element={<MyCasesId />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/caseForm" element={<CaseForm />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/myCases" element={<MyCases />} />
          <Route path="/orgCity" element={<OrgCity />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
