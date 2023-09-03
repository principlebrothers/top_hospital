import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HospitalDetails from './components/hospitals/HospitalDetails';
import './App.css';
import About from './components/about_page/About';
import Contact_us from './components/contact_us/Contact_us';
import Packages from './components/packages/Packages';
import PatientServices from './components/patient_services/PatientServices';
import MedicalTravel from './components/medical_travel/MedicalTravel';
import Layout from './components/layout/Layout';
import MedicalService from './components/medical_services/MedicalService';
import PreTravelSevices from './components/pre_travel_services/PreTravelSevices';
import PostTreatmentServices from './components/post_treatment_services/PostTreatmentServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './pages/404/Error';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='hospital/:id' element={<HospitalDetails />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact_us />} />
          <Route path='packages' element={<Packages />} />
          <Route path='patient-services' element={<PatientServices />} />
          <Route path='medical-travel' element={<MedicalTravel />} />
          <Route path='medical-services' element={<MedicalService />} />
          <Route path='pre-travel-services' element={<PreTravelSevices />} />
          <Route
            path='post-treatment-services'
            element={<PostTreatmentServices />}
          />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
