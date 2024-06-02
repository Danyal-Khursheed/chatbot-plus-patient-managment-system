import Joi from "joi";
import { poolWithDB } from "../db/database.js";

export const showCombination = async (req, res) => {
    try {
        const { page = 1, pageSize = 10 } = req.query;
        const offset = (page - 1) * pageSize;

        const query = 'SELECT * FROM combination LIMIT ? OFFSET ?';
        // Issue: Passing a callback function to poolWithDB.query, which may lead to multiple responses
        const result = await poolWithDB.query(query, [parseInt(pageSize), offset], (error, result) => {
            if(error){
                // Sending a response inside the callback function
                res.status(404).json({
                    success: false,
                    message: "An error occurred while fetching combination data from the database",
                    error: error.message
                });
            }
            // Sending another response outside the if condition
            res.status(200).json({
                success: true,
                message: "Successfully fetched data",
                result
            });
        });

        console.log(result);
    } catch (error) {
        console.error("Error occurred while fetching combination data:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching combination data from the database",
            error: error.message
        });
    }
};


export const createCombination = async (req, res) => {
    try{
    const {disease, combination}= req.body;

    const schema = Joi.object({
        disease: Joi.string().email().required(),
        combination: Joi.string().min(4).required(),
    });

    const { error } = schema.validate(req.body);

    await poolWithDB.query('INSERT INTO combination(disease, combination) VALUE (?, ?)',[disease,combination], async(error, result) => {
        if(error){
            res.status(404).json({
                success: false,
                message: "An error occurred while creating combination data from the database",
                error: error.message
            });
        }

        res.status(200).json({
            success: true,
            message: "Disease added successfully",
            result
        });
    });

} catch (error) {
    console.error("Error occurred while fetching combination data:", error);
    res.status(500).json({
        success: false,
        message: "An error occurred while fetching combination data from the database",
        error: error.message
    });
}
}




export const updateCombination = async (req, res) => {
    try{
    const {id} = req.params;
    const {disease, combination}= req.body;

    const schema = Joi.object({
        disease: Joi.string().email().required(),
        combination: Joi.string().min(4).required(),
    });

    const { error } = schema.validate(req.body);

    const result = await poolWithDB.query('UPDATE combination SET disease = ?, combination = ? WHERE S_NO = ?', [disease, combination, id]);

    // Check if any rows were affected
    if (result.affectedRows === 0) {
        return res.status(404).json({
            success: false,
            message: "Disease with the provided ID not found"
        });
    }

        res.status(200).json({
            success: true,
            message: "Disease updated successfully",
            
        });
    

} catch (error) {
    console.error("Error occurred while updating combination data:", error);
    res.status(500).json({
        success: false,
        message: "An error occurred while updating combination data from the database",
        error: error.message
    });
}
}


export const deleteCombination = async(req, res) => {
    const {id} = req.params;

     await poolWithDB.query('DELETE FROM combination WHERE S_NO = ?',[id], async ( err, result ) => {
        if(err){
            return res.status(404).json({
                success: false,
                message: "Error in deleting combination query",
                err : err.message
            });
        }
        res.status(200).json({
            success: true,
            message: "Disease Deleted successfully",
            
        });
        
     });
    

}




/////////////////////




































