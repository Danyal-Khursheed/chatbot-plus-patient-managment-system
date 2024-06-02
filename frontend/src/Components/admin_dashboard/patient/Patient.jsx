import React, { useEffect, useState } from "react";
import Sidebar from "./../sidebar.jsx/Sidebar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./patient.css";
import { Link } from "react-router-dom";
import instance from "../../../axios/axiosInstance";


const Patient = () => {
  const [patientData, setPatientData] = useState([]);
  const [page,setPage] = useState(1);
  const [offset] = useState(10)
  const [search, setSearch] = useState('')

  const deletePatient = async (id) => {
    try {
      const response = await instance.delete(`patient/delete-single-patient/${id}`);
      console.log(response.data.message); // Log success message
      // Optionally, you can fetch data again after deletion to update the UI
      fetchData();
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const handleSearch = (e) =>{
    setSearch(e.target.value);
  }

  
  const fetchData = async () => {
    try {
      const response = await instance.get(`/patient/show-all-patient?page=${page}&pageSize=${offset}&search=${search}` );
     setPatientData(response.data.patients);
    
    }
    catch (err) {
      alert(err.response.data.message)
    }

  }
  useEffect(() => {
    
    fetchData();
  }, [page, offset, search])

  const nextPage = () => {
    setPage(page + 1)
  }
  
  const previousPage = () => {
    setPage(prevPage => prevPage - 1);
  }
 
  // console.log(patientData)
  return (
    <>
      <div className="container-fluid p-0 patient-dev">
        <div className="row ">
          <div className="col-sm-3 z-3 ">
            <Sidebar />
          </div>
          <div className="col-sm-9 p-4 patient-main-dev">
            <h1 className="title mb-5">Patient Records</h1>
            <div className="col-sm-8 mt-4">
              <form className="search">
                <div className="search__wrapper">
                  <input
                    type="text"
                    name=""
                    placeholder="Search for..."
                    class="search__field"
                    onChange={handleSearch}
                  />
                  <FontAwesomeIcon
                    className="search__icon"
                    icon={faMagnifyingGlass}
                  />
                </div>
              </form>
            </div>
            <div className="col-sm-4 d-flex">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filters
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to="/admin/patient/add-new">
              <Button
                variant="primary"
                type="button"
                className="btn btn-primary mx-2"
                
              >
                Add New
              </Button>{" "}
              </Link>
            </div>






            <table className="table">
            
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Mertial Status</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {patientData.map((data, index) => (
                <tr key={data.id}>
                  <th  scope="row">{(page -1) * offset + index + 1}</th>
                  <td>{data.Name}</td>
                  <td>{data.Age}</td>
                  <td>{data.Status}</td>
                  <td>{data.Gender}</td>
                  <td>{data.Address}</td>
                  <td>{data.Contact_us}</td>

                  
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
                      <Link to={`/admin/patient/view/${data.id}`} className="dropdown-item">View</Link>

                        <Link to={`/admin/patient/edit/${data.id}` }className="dropdown-item" >Edit</Link>
                        <a className="dropdown-item" onClick={()=> deletePatient(data.id)} >Delete</a>
                      </div>
                    </div>



                  </td>
                  </tr>
              ))}

                
              </tbody>
              
            </table>

            {/* pagination */}

            <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item">
      { page === 1 ? (
        <span className="page-link disabled" disabled onClick={previousPage}>
          Previous
        </span>
      ) : (
        <span className="page-link cursor-pointer" onClick={previousPage}>
          Previous
        </span>
      )}
    </li>
    
    <li className="page-item active">
      <span className="page-link">
        {page}
        <span className="sr-only">(current)</span>
      </span>
    </li>
    
    <li className="page-item">
      <a className="page-link" onClick={nextPage} href="#">Next</a>
    </li>
  </ul>
</nav>




          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
