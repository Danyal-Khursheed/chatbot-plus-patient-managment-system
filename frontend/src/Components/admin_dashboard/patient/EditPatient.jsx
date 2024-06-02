import React, { useEffect, useState } from 'react'
import './viewpatient.css'
import Sidebar from '../sidebar.jsx/Sidebar'
import instance from '../../../axios/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';


const EditPatient = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();



  const updateData = async (data) =>{
    try{
      console.log(data)
      const response = await instance.put(`/patient/update-single-patient/${id}`, data);
      await toast.success(response.data.message);
      reset();
      //  navigate(`/admin/patient/view/${id}`)
      
    }
    catch(error){
      toast.error(error.response.data.message);
    }
  }

  


  return (
    <div className="main">
      <Sidebar />
      <div className="mt-5 container-view-patient">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="title">Edit Patient Details</h1>
            <div className="form-container">
            <form onSubmit={handleSubmit(updateData)}>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Patient Name</label>
                    <input type="text" className="form-control" id="Name" name="Name" {...register('Name',{required:'Please Enter patient Name'})}  />
                    {errors.Name && <p>{errors.Name.message}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="Age" name="Age" {...register('Age')}  />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select className="form-control" id="Gender" name='Gender' {...register('Gender')}>
                    <option>Select Gender</option>
                      <option>M</option>
                      <option>F</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select className="form-control" id="maritalStatus" name='Status' {...register('Status')}>
                    <option>Select Status</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divorced</option>
                      <option>Widowed</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" className="form-control" id="Contact_us" name="Contact_us" {...register('Contact_us')} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea className="form-control" id="Address" name="Address" rows={3} {...register('Address')} />
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditPatient;
