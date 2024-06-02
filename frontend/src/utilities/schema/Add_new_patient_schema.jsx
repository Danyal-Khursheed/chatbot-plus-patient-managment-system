import * as Yup from "yup";


export const addNewPatient = Yup.object({
    name: Yup.string().required('Please Enter Patient Name'),
    age: Yup.number().required('Please Enter Patient Age'),
    gender: Yup.string().required('Please Enter Patient Gender'),
    status: Yup.string().required('Please Enter Patient Status'),
    contact: Yup.string(),
    address : Yup.string(),
    
});

export const EditDiseaseSchema = Yup.object({
    disease: Yup.string().required('Please Enter Patient Disease'),
})
