import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signin } from './signin';
import { Register } from './register';
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
import AllCases from './allCases';
import LegalTech from './legalTech';

function App() {
  const isSignInOrRegister = window.location.pathname === '/' || window.location.pathname === '/register';

  return (
    <div className="App">
      <Router>
        {!isSignInOrRegister && <Navbar />}
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
          <Route path="/allCases" element={<AllCases />} />
          <Route path="/legalTech" element={<LegalTech />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
