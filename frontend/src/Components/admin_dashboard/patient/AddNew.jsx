import React from 'react';
import { useForm } from 'react-hook-form';
import './ADD.css';
import { addNewPatient } from '../../../utilities/schema/Add_new_patient_schema';
import instance from '../../../axios/axiosInstance';

const AddNew = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (values) => {
        try {
            console.log("submit is hit");
            const response = await instance.post('/patient/create-patient', values);
            console.log(response.data);
            reset(); // Reset form after submission
        } catch (error) {
            console.error('Error creating patient:', error);
        }
    };

    return (
        <div className="container-add-new">
            <h2>Add New</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="Name">Patient Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="Name"
                        id="Name"
                        {...register('Name', { required: 'Patient Name is required' })}
                    />
                    {errors.Name && <p>{errors.Name.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="Age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        name="Age"
                        id="Age"
                        {...register('Age', { required: 'Age is required' })}
                    />
                    {errors.Age && <p>{errors.Age.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="Contact_us">Contact</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="Contact_us"
                        id="Contact_us"
                        {...register('Contact_us', { required: 'Contact is required' })}
                    />
                    {errors.Contact_us && <p>{errors.Contact_us.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="Gender">Gender</label>
                    <select
                        className="form-control"
                        name="Gender"
                        id="Gender"
                        {...register('Gender', { required: 'Gender is required' })}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.Gender && <p>{errors.Gender.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="Status">Marital Status</label>
                    <select
                        className="form-control"
                        name="Status"
                        id="Status"
                        {...register('Status', { required: 'Marital Status is required' })}
                    >
                        <option value="">Select Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                    {errors.Status && <p>{errors.Status.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <textarea
                        className="form-control"
                        id="Address"
                        name="Address"
                        {...register('Address', { required: 'Address is required' })}
                    />
                    {errors.Address && <p>{errors.Address.message}</p>}
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddNew;
