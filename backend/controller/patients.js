import Joi from "joi";
import { poolWithDB } from "../db/database.js";

// for creating patient
export const createPatients = (req, res) => {
    try {
        const { Name, Age, Gender, Address, Contact_us, Status } = req.body;

        const schema = Joi.object({
            Name: Joi.string().required(),
            Age: Joi.number().required(),
            Gender: Joi.string().required(),
            Address: Joi.string().required(),
            Contact_us: Joi.number().required(),
            Status: Joi.string().required(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(500).json({ success: false, message: "Please fill all the credientials", error: error.message });
        }
        
        const insertPatientQuery = 'INSERT INTO add_patient(Name, Age, Gender, Address, Contact_us, Status) VALUES (?,?,?,?,?,?)';
        const insertPatientValues = [Name, Age, Gender, Address, Contact_us, Status];
        poolWithDB.query(insertPatientQuery, insertPatientValues, (insertPatientError, insertPatientResult) => {
            if (insertPatientError) {
                return res.status(500).json({ success: false, message: "An error occurred while adding patient details", error: insertPatientError.message });
            }
            res.status(200).json({ success: true, message: "Successfully added patient details" , data: insertPatientResult});
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while creating patients",
            err: err.message,
        });
    }
};



//show all the patients in the

export const showAllPatients = (req, res) => {
    let { page, pageSize, search } = req.query;
    page = parseInt(page, 10);
    pageSize = parseInt(pageSize, 10);

    // Default values if page or pageSize are not provided
    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(pageSize) || pageSize < 1) pageSize = 10;

    const limit = pageSize;
    const offset = (page - 1) * pageSize;

    let query = 'SELECT * FROM add_patient ORDER BY create_datetime DESC LIMIT ? OFFSET ?';
    let params = [limit, offset];

    if (search) {
        query = `
            SELECT * FROM add_patient 
            WHERE name LIKE ? 
            OR age LIKE ? 
            OR gender LIKE ? 
            OR status LIKE ? 
            OR address LIKE ? 
            ORDER BY create_datetime DESC 
            LIMIT ? OFFSET ?`;
        const searchTerm = `%${search}%`;
        params = [searchTerm, searchTerm, searchTerm, searchTerm, searchTerm, limit, offset];
    }

    poolWithDB.query(query, params, (error, result) => {
        if (error) {
            return res.status(500).json({ success: false, message: "An error occurred while showing all the patients", error: error.message });
        }
        res.status(200).json({ success: true, message: "Successfully retrieved all patients", patients: result });
    });
};



//show single patient

export const showSinglePatient = async (req, res) => {
    try {
        const { id } = req.params;

        // Fetch patient information
        const patientQuery = 'SELECT * FROM add_patient WHERE id = ?';
        const patientData = await new Promise((resolve, reject) => {
            poolWithDB.query(patientQuery, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.length === 0) {
                    reject({ message: "Patient not found" });
                } else {
                    resolve(result[0]);
                }
            });
        });

        // Fetch diseases associated with the patient
        const diseasesQuery = 'SELECT * FROM patient_visit WHERE patient_id = ?';
        const diseases = await new Promise((resolve, reject) => {
            poolWithDB.query(diseasesQuery, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.map(disease => ({
                        id :disease.id,
                        problem: disease.Problem,
                        disease: disease.Disease,
                        treatment: disease.Medicine,
                        feedback: disease.feedback,
                        visit_date: disease.create_datetime,
                    })));
                }
            });
        });
        console.log(patientData)
        res.status(200).json({
            success: true,
            message: "Successfully fetched the data",
            data: {
                patientData,
                diseases
            }
            
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching single patient data",
            error: err.message,
        });
    }
};



export const addVisitofPatient = async (req, res, next) => {
  try {
    const { Disease, Medicine, create_datetime, Problem, feedback } = req.body;
    const patientId = req.params.id;

  
    // const formattedVisitDate = new Date(visit_date).toISOString();

    const insertDiseaseQuery = `INSERT INTO patient_visit (patient_id, Disease, Medicine, create_datetime, Problem, feedback) VALUES (?, ?, ?, ?, ?, ?)`;
    const insertValues = [patientId,  Disease, Medicine, create_datetime, Problem, feedback];

    poolWithDB.query(insertDiseaseQuery, insertValues, (insertError, results) => {
      if (insertError) {
        console.error('Error adding patient disease data:', insertError.message);
        return res.status(500).json({ success: false, message: "An error occurred while adding patient disease data", error: insertError.message });
      }

      res.status(200).json({ success: true, message: "Visit added Successfully", result: results });
    });
  } catch (err) {
    console.error('General error:', err.message);
    res.status(500).json({ success: false, message: "An error occurred", error: err.message });
  }
};




export const updateSinglePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const {Name,Gender,Age,Contact_us,Status,Address } = req.body;

        // Fetch patient information
        const patientQuery = 'SELECT * FROM add_patient WHERE id = ?';
        poolWithDB.query(patientQuery, [id], async (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: "An error occurred while checking patient existence", error: err.message });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Patient not found",
                    
                });
            }

    
            const patientData = result[0];
            console.log(patientData);

            poolWithDB.query('UPDATE add_patient SET Name = ?, Age =? , Status=?, Gender = ? , Address =?, Contact_us=? WHERE id = ?',[Name, Age, Status,Address, Gender,Contact_us,id],(err, data) => {
                if (err) {
                    return res.status(500).json({ success: false, message: "An error occurred while checking patient existence", error: err.message });
                }

                // Placeholder success response
            res.status(200).json({
                success: true,
                message: "Patient information updated successfully",
                patient: result
            });

            })

           
            
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching single patient data",
            error: err.message,
        }); 
    }
};



export const updateSinglePatientDisease = async (req, res) => {
    try {
        const { id } = req.params;
        const { Disease, Medicine, Visit_Date, Problem, feedback } = req.body;

        // Check if the patient disease entry exists
        const diseaseQuery = 'SELECT * FROM patient_visit WHERE id = ?';
        poolWithDB.query(diseaseQuery, [id], async (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: "An error occurred while checking patient disease existence", error: err.message });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Patient disease entry not found",
                });
            }

            // Update the patient disease entry
            poolWithDB.query('UPDATE patient_visit SET Disease = ?, Medicine = ?, Visit_Date = ?, Problem = ?, feedback = ? WHERE id = ?', 
                [Disease, Medicine, Visit_Date, Problem, feedback, id], 
                (updateError, updateResult) => {
                    if (updateError) {
                        return res.status(500).json({ success: false, message: "An error occurred while updating patient disease details", error: updateError.message });
                    }

                    res.status(200).json({
                        success: true,
                        message: "Patient disease information updated successfully",
                        result: updateResult
                    });
                }
            );
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "An error occurred while updating patient disease details",
            error: err.message,
        });
    }
};



export const deletePatient = (req, res) => {
    try {
        const { id } = req.params;

        // Delete query to remove associated records from the patient_disease table
        const deleteAssociatedRecordsQuery = 'DELETE FROM patient_visit WHERE patient_id = ?';

        // Execute the delete query to remove associated records
        poolWithDB.query(deleteAssociatedRecordsQuery, [id], (error, results) => {
            if (error) {
                return res.status(500).json({ success: false, message: "An error occurred while deleting associated records", error: error.message });
            }

            // Proceed to delete the patient once associated records are deleted
            const deletePatientQuery = 'DELETE FROM add_patient WHERE id = ?';
            poolWithDB.query(deletePatientQuery, [id], (deleteError, deleteResults) => {
                if (deleteError) {
                    return res.status(500).json({ success: false, message: "An error occurred while deleting patient", error: deleteError.message });
                }

                // Check if any rows were affected
                if (deleteResults.affectedRows === 0) {
                    return res.status(404).json({ success: false, message: "Patient not found" });
                }

                // Patient deleted successfully
                res.status(200).json({ success: true, message: "Patient deleted successfully", result: deleteResults });
            });
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "An error occurred while deleting patient", error: err.message });
    }
};



export const viewSingleDisease = (req, res) => {
    try {
        
        const {id} = req.params;
        const query = 'SELECT * FROM patient_visit WHERE id = ?';

        poolWithDB.query(query,[id],(error,results)=>{
            if (error) {
                return res.status(500).json({ success: false, message: "An error occurred while deleting patient_disease", error: error.message });
            }
            else{
                res.status(200).send({ success: true, message:"Successfully fetch data of pateint_disease", results });
            }
        })
        

    } catch (error) {
        res.status(500).json({ success: false, message: "An error occurred while viewing single disease"});
    }
}
///////////////////////////////////////////////////////////////////////////////
export const editSingleDisease = (req, res, next) => {
    try{
        const {id} = req.params;
        const {Disease, Medicine, Problem ,feedback,Visit_Date} = req.body;
        const query = 'UPDATE patient_visit SET Disease = ?, Medicine= ?, Problem = ?, feedback = ?, Visit_Date = ? WHERE id = ?';


        poolWithDB.query(query, [Disease, Medicine, Problem ,feedback,Visit_Date, id], (error, result) => {
            if (error) {
                return res.status(500).json({ success: false, message: "An error occurred while editing patient_disease", error: error.message });
            }
            else{
                res.status(200).send({ success: true, message:"Successfully fetch data of pateint_disease", data : result });
            }
        })
    }
    catch(error) {
        res.status(500).json({ success: false, message: "An error occurred while editing single disease", error:error.message });
    }
}


export const deletePatientDisease = (req, res) => {
    try {
        const { id } = req.params;

        // Delete query to remove the patient from the database
        const deleteQuery = 'DELETE FROM patient_visit WHERE id = ?';

        // Execute the delete query
        poolWithDB.query(deleteQuery, [id], (error, results) => {
            if (error) {
                return res.status(500).json({ success: false, message: "An error occurred while deleting patient_disease", error: error.message });
            }

            // Check if any rows were affected
            if (results.affectedRows === 0) {
                return res.status(404).json({ success: false, message: "Patient not found" });
            }

            // Patient deleted successfully
            res.status(200).json({ success: true, message: "Patient disease deleted successfully", result: results });
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "An error occurred while deleting patient disease", error: err.message });
    }
};