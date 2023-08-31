import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import SubHeader from './components/subheader/SubHeader';
import HospitalDetails from './components/hospitals/HospitalDetails';

import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hospital/:id' element={<HospitalDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
