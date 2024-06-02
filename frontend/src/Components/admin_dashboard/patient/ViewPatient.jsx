import React, { useEffect, useState } from 'react';
import './viewpatient.css';
import Sidebar from '../sidebar.jsx/Sidebar';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from 'react-router-dom';
import instance from '../../../axios/axiosInstance';
import Button from "react-bootstrap/Button";



const ViewPatient = () => {

  const [patientData, setPatientData] = useState(null);
  const [disease, setDisease] = useState(null);

  

  const { id } = useParams();

  const deleteDisease= async(id) =>{
    try{
      const response = await instance.delete(`/patient/delete-single-patient-disease/${id}`)
    }
    catch(err){
      console.error("Error fetching data:", err);
    }
  }
  useEffect(() => {
    deleteDisease()

    const fetchData = async () => {

      try {
        const response = await instance.get(`/patient/show-single-patient/${id}`);
        setPatientData(response.data.data.patientData);
        setDisease(response.data.data.diseases);
        // console.log(response.data.data)
        // console.log(response.data.data.diseases)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="mt-5 container-view-patient">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="title">Patient Details</h1>
              
              <Link
                to={`/admin/patient/view/add-new-visit/${patientData.id}`}
                variant="primary"
                type="button"
                className="m-4 btn btn-primary add-new-button"
                
              >
                Add Visit
              </Link>
              <div className="form-container">
                {patientData && (<form>
                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="patientName">Patient Name</label>
                      <input type="text" className="form-control w-100" id="patientName" value={patientData.Name} readOnly />
                    </div>

                    <div className='form-group'>
                      <label htmlFor="age">Age</label>
                      <input type="number" className="form-control w-100" id="age" value={patientData.Age} readOnly />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="maritalStatus">Marital Status</label>
                      <input type="text" className="form-control w-100" id="status" value={patientData.Status} readOnly />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <input type="text" className="form-control w-100" id="gender" value={patientData.Gender} readOnly />
                    </div>
                  </div>
                  <div className="form-row">

                    <div className="form-group">
                      <label htmlFor="problem">Contact</label>
                      <input type="text" className="form-control w-100" id="contact" value={patientData.Contact_us} readOnly />
                    </div>


                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input type="text" className="form-control w-100" id="address" value={patientData.Address} readOnly />
                    </div>

                  </div>

                </form>)}
              </div>
              <table className="table m-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Problem</th>
                    <th scope="col">Disease</th>
                    <th scope="col">Treatment</th>
                    <th scope="col">Feedback</th>
                    <th scope="col">Visit Date</th>
                    <th scope="col">Status</th>

                  </tr>
                </thead>
                <tbody>
  {disease && disease.map((data, index) => (
    <tr key={data.id}>
      {console.log(data)}
      <th scope="row">{index + 1}</th>
      <td>{data.problem}</td>
      <td>{data.disease}</td>
      <td>{data.treatment}</td>
      <td>{data.feedback}</td>
      
      <td>{data.visit_date}</td>
      <td>
        <div className="dropdown ">
          <p className="btn btn-secondary dropdown-toggle three-dot-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FontAwesomeIcon
              className="dropdown-toggle text-dark "
              icon={faEllipsis}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={`/admin/patient/disease/view/${data.id}`} className="dropdown-item">View</Link>
            <Link to={`/admin/patient/disease/edit/${data.id}`} className="dropdown-item">Edit</Link>
            {/* Consider adding an onClick handler to handle delete action */}
            <Link className="dropdown-item" onClick={()=> deleteDisease(data.id)}>Delete</Link>
          </div>
        </div>
      </td>
    </tr>
  ))}
</tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPatient;
