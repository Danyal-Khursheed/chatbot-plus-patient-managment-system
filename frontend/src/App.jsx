import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import './App.css';

const Login = lazy(() => import('./Authentication/Login/Login'));
const Confirm_Email = lazy(() => import('./Authentication/forgetPassword/Confirm_Email'));
const OTP_verification = lazy(() => import('./Authentication/forgetPassword/OTP_verification'));
const Reset_password = lazy(() => import('./Authentication/forgetPassword/Reset_password'));
const Sidebar = lazy(() => import('./Components/admin_dashboard/sidebar.jsx/Sidebar'));
const Combination = lazy(() => import('./Components/admin_dashboard/combinations/Combination'));
const Patient = lazy(() => import('./Components/admin_dashboard/patient/Patient'));
const ViewPatient = lazy(() => import('./Components/admin_dashboard/patient/ViewPatient'));
const CancerPatient = lazy(() => import('./Components/admin_dashboard/cancer/CancerPatient'));
const AdminProtected = lazy(() => import('./AdminProtected/AdminProtected'));
const AddNew = lazy(() => import('./Components/admin_dashboard/patient/AddNew'));
const EditPatient = lazy(() => import('./Components/admin_dashboard/patient/EditPatient'));
const AddVisit = lazy(() => import('./Components/admin_dashboard/patient/AddVisit'));
const EditDisease = lazy(() => import('./Components/admin_dashboard/patient/disease/EditDisease'));
const ViewSingleDisease = lazy(() => import('./Components/admin_dashboard/patient/disease/ViewSingleDisease'));
const Navbar = lazy(() => import('./Components/Main/Navbar/Navbar'));
const Home = lazy(() => import('./Components/Main/Home/Home'));
const Footer = lazy(() => import('./Components/Main/Footer/Footer'));
const About = lazy(() => import('./Components/Main/About/About'));
const Treatment = lazy(() => import('./Components/Main/Treatment/Treatment'));
const SingleTreatment = lazy(() => import('./Components/Main/Treatment/SingleTreatment'));
const VisitUs = lazy(() => import('./Components/Main/VisitUs/VisitUs'));
const Medbot = lazy(() => import('./Components/Main/About/Medbot'));

function App() {
  const location = useLocation();
  
  const shouldShowHeaderFooter = (location) => {

    const currentPath = location.pathname;
    return currentPath === '/' || currentPath.startsWith('/offer/') || currentPath.startsWith('/about') || currentPath.startsWith('/medbot') || currentPath.startsWith('/treatment') || currentPath.startsWith('/visit-us') || currentPath.startsWith('/login') ;
  };

  const showHeaderFooter = shouldShowHeaderFooter(location);

  

  return (
    <>
    
    {showHeaderFooter && (
      <Suspense fallback={<div>Loading...</div>}>
     <Navbar/>
    </Suspense>)}
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password/email-verification" element={<Confirm_Email />} />
      <Route path="/forget-password/otp-verification" element={<OTP_verification />} />
      <Route path="/forget-password/reset-password" element={<Reset_password />} />

      {/* main route */}
      <Route path="/" element={<Home/>}/>
      <Route path='/offer/:id' element={<SingleTreatment/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/treatment' element={<Treatment/>}/>
      <Route path='/visit-us' element={<VisitUs/>}/>
      <Route path='/medbot' element={<Medbot/>}/>

      {/* main route */}
    
      <Route path="/admin/" element={<AdminProtected/>} >
        <Route path="combination" element={<Combination />} />
        <Route path="patient" element={<Patient />} />
        <Route path="patient/add-new" element={<AddNew />} />
        <Route path="patient/view/:id" element={<ViewPatient />} />
        <Route path="patient/edit/:id" element={<EditPatient />} />
        <Route path="patient/disease/view/:id" element={<ViewSingleDisease/>} />
        <Route path="patient/disease/edit/:id" element={<EditDisease/>} />
        <Route path="patient/view/add-new-visit/:id" element={<AddVisit/>} />
        <Route path="cancer" element={<CancerPatient/>} />
        <Route path="cancer/view" element={<ViewPatient />} />
        <Route path="cancer/edit" element={<ViewPatient />} />
      </Route>

    </Routes>
    </Suspense>
    {showHeaderFooter && (
      <Suspense fallback={<div>Loading...</div>}>
     <Footer />
    </Suspense>)}
    </>
  );
}

export default App;
