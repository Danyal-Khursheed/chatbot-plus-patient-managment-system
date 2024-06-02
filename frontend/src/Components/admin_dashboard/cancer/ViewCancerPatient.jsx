import React from 'react';
import Sidebar from '../sidebar.jsx/Sidebar';
import '../patient/viewpatient.css';

const ViewCancerPatient = () => {
  return (
    <>
    <div className="main">
      <Sidebar/>
  <div className="container-view-patient mt-5">
  
    <div className="row justify-content-center">
    
      <div className="col-md-8">
      
      <h1 className="title">Cancer Patient Details</h1>
        <div className="form-container">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input type="text" className="form-control" id="id" />
              </div>
              <div className="form-group">
                <label htmlFor="patientName">Patient Name</label>
                <input type="text" className="form-control" id="patientName" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" className="form-control" id="age" />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select className="form-control" id="maritalStatus">
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="problem">Problem</label>
                <input type="text" className="form-control" id="problem" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="disease">Disease</label>
                <input type="text" className="form-control" id="disease" />
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <textarea className="form-control" id="feedback" rows={3} defaultValue={""} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea className="form-control" id="address" rows={3} defaultValue={""} />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-secondary ml-2">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  
      </>
  )
}

export default ViewCancerPatient