import React, { useState } from 'react';
import { useFormik } from 'formik';
import './viewpatient.css';
import { useParams } from 'react-router-dom';
import instance from '../../../axios/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const AddVisit = () => {
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure double-digit month
        const day = String(date.getDate() ).padStart(2, '0'); // Ensure double-digit day
        
        return `${year}-${month}-${day}`;
    };
    const {id} = useParams();
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [values, setValues] = useState({
        disease: "",
        treatment: "",
        visit_date: formatDate(new Date()), 
        problem: "",
        feedback: "",
    });

    const onChange = (newDate) => {
        setValues({
            ...values,
            visit_date: formatDate(newDate)
        });
    };

   

    const fetchData = async() => {
        try {
            const response = await instance.post(`/patient/add-patient-visit/${id}`, values);
            toast.success(response.data.message);
        } catch(error) {
            toast.error(error.response.data.message);
        }
    };

    const toggleCalendar = () => {
        setCalendarVisible(!calendarVisible);
    };

    const { handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: values,
        onSubmit: (values, action) => {
            fetchData();
            action.resetForm();
        }
    });

    return (
        <div className="add-visit">
            <div className="form-container-addvisit">
                <h2>Add visit</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="patientDisease">Patient Disease</label>
                            <input type="text" className="form-control w-100" id="patientDisease" name="disease" value={values.disease} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="treatment">Treatment</label>
                            <input type="string" className="form-control w-100" id="treatment" name="treatment" value={values.treatment} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="problem">Problem</label>
                            <input type="text" className="form-control w-100" id="problem" name="problem" value={values.problem} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="feedback">Feedback</label>
                            <input type="text" className="form-control w-100" id="feedback" name="feedback" value={values.feedback} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="calendar">Calendar</label>
                            <input type="text" className="form-control w-100" id="calendar" name="calendar" value={values.visit_date} readOnly />
                        </div>
                    </div>
                    <b onClick={toggleCalendar}>Show Calendar</b>
                    {calendarVisible && (
                        <Calendar
                            onChange={onChange}
                            value={new Date(values.visit_date)} // Pass the selected date as a Date object
                        />
                    )}
                    <br />
                    <button type="submit" className="mt-4 btn btn-primary">Submit</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddVisit;
