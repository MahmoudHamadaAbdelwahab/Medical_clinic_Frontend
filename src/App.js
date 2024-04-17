import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from './components/Uitily/NavBarLogin';
import FooterPage from './components/Uitily/Footer';
import HomePage from './page/Home/HomePage';
import LoginPage from './page/Auth/loginPage';
import RegisterPage from './page/Auth/registerPage';
import ContactUs from './components/Uitily/contactUs';
import Service from './components/services/service';
import BlogPost from './components/Doctor/blogposts';
import OurDoctors from './components/Doctor/ourDoctors';
import AboutUs from './components/Doctor/aboutUs';
import ProfilePatient from './components/Patient/profilePatient';
import ProfileDoc from './components/Admin/profileDoc';
import DetailsDoc from './components/Doctor/detailsDoc';
import SpecialtyEnt from './components/Doctor/specialtyDoc/specialtyEnt';
import SpecialtyEye from './components/Doctor/specialtyDoc/specialtyEye';
import SpecialtyCardiacCar from './components/Doctor/specialtyDoc/specialtyCardiacCar';
import SpecialtyHeartCare from './components/Doctor/specialtyDoc/specialtyHeartCare';
import SpecialtyNeurology from './components/Doctor/specialtyDoc/specialtyNeurology';
import SpecialtyOsteoporosis from './components/Doctor/specialtyDoc/specialtyOsteoporosis';
function App() {
  return (
    <div>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/recentBlog" element={<BlogPost/>} />
          <Route path="/recentBlog" element={<BlogPost/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/findADoc" element={<OurDoctors/>} />
          <Route path="/ourDoctor" element={<OurDoctors/>} />
          <Route path="/detailsDoc/:id" element={<DetailsDoc/>} />
          <Route path="/profileDoc" element={<ProfileDoc/>} />
          <Route path="/profilePatient" element={<ProfilePatient/>} />
          <Route path="/cardiac-car" element={<SpecialtyCardiacCar/>} />
          <Route path="/ent" element={<SpecialtyEnt/>} />
          <Route path="/eye" element={<SpecialtyEye/>} />
          <Route path="/heart-care" element={<SpecialtyHeartCare/>} />
          <Route path="/neurology" element={<SpecialtyNeurology/>} />
          <Route path="/osteoporosis" element={<SpecialtyOsteoporosis/>} />
        </Routes>
      </BrowserRouter>
      <FooterPage />
    </div>
  );
}

export default App;
