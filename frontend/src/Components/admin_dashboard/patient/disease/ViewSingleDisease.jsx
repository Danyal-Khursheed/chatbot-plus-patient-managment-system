import React, { useEffect, useState, useRef } from 'react';
import instance from '../../../../axios/axiosInstance';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../../../AdminProtected/Spinner';
import Sidebar from '../../sidebar.jsx/Sidebar';
import '../viewpatient.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useReactToPrint} from 'react-to-print';


const ViewSingleDisease = () => {
  const navigate = useNavigate();
  const printRef = useRef();
  const [diseaseDetail, setDiseaseDetail] = useState(null);
  console.log(diseaseDetail);
  const { id } = useParams();


  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const deleteDisease = async (id) => {
    try {
      const response = await instance.delete(`/patient/delete-single-patient-disease/${id}`);
      toast.success(response.data.message);
      navigate('/admin/patient')
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  const fetchData = async () => {
    try {
      const response = await instance.get(`/patient/view-single-patient-disease/${id}`);
      
      setDiseaseDetail(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    deleteDisease();
    fetchData();
  }, [id]);

  return (
    <>
      <div className="main" >
        <Sidebar />
        <div className="container-view-patient mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="title">Disease Details</h1>
              {diseaseDetail ? (
                <>
                  {diseaseDetail.map((disease, index) => (
                    <div key={index}>
                      <div className="buttons">
                      <button className="btn btn-success my-4" onClick={handlePrint}>Print</button>
                        <Link to={`/admin/patient/disease/edit/${disease.id}`} className="btn btn-warning my-4 mx-3">Edit</Link>
                        <button className="btn btn-danger my-4 mx-1" onClick={() => deleteDisease(id)}>Delete</button>
                      </div>
                      <div className="form-container" >
                        <form ref={printRef}> 
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="patientName">Disease Name</label>
                              <input type="text" className="form-control w-100" id="patientName" value={disease.disease} readOnly />
                            </div>
                            <div className="form-group">
                              <label htmlFor="maritalStatus">Problem</label>
                              <input type="text" className="form-control w-100" id="status" value={disease.problem} readOnly />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className='form-group'>
                              <label htmlFor="treatment">Treatment</label>
                              <input type="text" className="form-control w-100" id="treatment" value={disease.treatment} readOnly />
                            </div>
                            <div className="form-group">
                              <label htmlFor="gender">Feedback</label>
                              <input type="text" className="form-control w-100" id="gender" value={disease.feedback} readOnly />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="problem">Visit Date</label>
                              <input type="text" className="form-control w-100" id="contact" value={disease.visit_date} readOnly />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default ViewSingleDisease;
