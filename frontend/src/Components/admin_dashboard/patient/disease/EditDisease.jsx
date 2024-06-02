import React, { useState, useEffect } from 'react';
import '../viewpatient.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../sidebar.jsx/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { useFormik } from 'formik';
import { EditDiseaseSchema } from '../../../../utilities/schema/Add_new_patient_schema';
import { useParams } from 'react-router-dom';
import instance from '../../../../axios/axiosInstance';

const EditDisease = () => {
    const [visibleCalendar, setVisibleCalendar] = useState(false);
    const { id } = useParams();

    const fetchData = async (formData) => {
        try {
            const response = await instance.put(`/patient/edit-single-patient-disease/${id}`, formData);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure double-digit month
        const day = String(date.getDate()).padStart(2, '0'); // Ensure double-digit day
        return `${year}-${month}-${day}`;
    };

    const toggleCalendar = () => {
        setVisibleCalendar(!visibleCalendar);
    }

    const initialValues = {
        disease: "",
        treatment: "",
        problem: "",
        feedback: "",
        visit_date: null,
    }

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: EditDiseaseSchema,
        onSubmit: (formData, action) => {
            fetchData(formData);
            action.resetForm();
        }
    });

    useEffect(() => {
        // Fetch initial data here if needed
    }, [id]);

    return (
        <div className="main">
            <Sidebar />
            <div className="container-view-patient mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="title">Edit Disease Details</h1>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="patientName">Disease Name</label>
                                        <input type="text" className="form-control w-100" name='disease' id="patientName" value={values.disease} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.disease && touched.disease && <p style={{ color: "red" }}>{errors.disease}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="maritalStatus">Problem</label>
                                        <input type="text" className="form-control w-100" name="problem" id="status" value={values.problem} onChange={handleChange} onBlur={handleBlur} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className='form-group'>
                                        <label htmlFor="treatment">Treatment</label>
                                        <input type="text" className="form-control w-100" name='treatment' id="treatment" value={values.treatment} onChange={handleChange} onBlur={handleBlur} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender">Feedback</label>
                                        <input type="text" className="form-control w-100" name='feedback' id="gender" value={values.feedback} onChange={handleChange} onBlur={handleBlur} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="problem">Visit Date</label>
                                        <input type="text" className="form-control w-100" id="gender"  onClick={toggleCalendar} value={values.visit_date} />
                                        {visibleCalendar && (
                                            <Calendar
                                                onChange={(date) => {
                                                    handleChange({ target: { id: "visit_date", value: formatDate(date) } });
                                                    toggleCalendar();
                                                }}
                                                value={new Date(values.visit_date)}
                                            />
                                        )}
                                    </div>
                                </div>
                                <button type="submit">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EditDisease;
