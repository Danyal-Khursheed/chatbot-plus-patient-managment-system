// router.js
import express from 'express';
import { login, logout, resetPassword, signup } from '../controller/adminAuth.js';
import { verifyToken } from '../utils/verifyToken.js';
import { OTP, verifyEmail, verifyOTP } from '../controller/forgetPassowrd.js';
import { sendOTP } from '../utils/otp/otpController.js';
import { createCombination, deleteCombination, showCombination, updateCombination } from '../controller/combination.js';
import { addVisitofPatient, createPatients, deletePatient, deletePatientDisease, editSingleDisease, showAllPatients, showSinglePatient, updateSinglePatient, updateSinglePatientDisease, viewSingleDisease } from '../controller/patients.js';

const router = express.Router();

router.post('/admin-signup', signup);
router.post('/admin-login', login);
router.get('/protected', verifyToken,(req,res)=>{
  res.json({
    success: true,
    message: 'Hello from protected route',
  })
})
//try
router.post('/email-verification', verifyEmail);
router.post ('/otp-sending',OTP);
router.post ('/otp-verification',verifyOTP);
router.post('/reset-password',resetPassword)
router.get('/logout',logout)

// combination

router.get('/combination/get-combination', verifyToken, showCombination);
router.post('/combination/create-combination',verifyToken, createCombination); 
router.put('/combination/update-combination/:id',verifyToken,  updateCombination); 
router.delete('/combination/delete-combination/:id',verifyToken,  deleteCombination); 


//patients

router.post('/patient/create-patient',verifyToken, createPatients);
router.get('/patient/show-all-patient',verifyToken, showAllPatients);
router.get('/patient/show-single-patient/:id',verifyToken, showSinglePatient);
router.post('/patient/add-patient-visit/:id',verifyToken, addVisitofPatient);
router.put('/patient/update-single-patient/:id',verifyToken, updateSinglePatient);
router.delete('/patient/delete-single-patient/:id',verifyToken, deletePatient);
router.put('/patient/update-single-patient-disease/:id',verifyToken, updateSinglePatientDisease);
router.delete('/patient/delete-single-patient-disease/:id',verifyToken, deletePatientDisease);
router.get('/patient/view-single-patient-disease/:id',verifyToken, viewSingleDisease);
router.put('/patient/edit-single-patient-disease/:id',verifyToken, editSingleDisease);
export default router;
