import React from "react";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../patient/patient.css";
import Sidebar from "../sidebar.jsx/Sidebar";
import { Link } from "react-router-dom";

const CancerPatient = () => {
  return (
    <>
      <>
        <div className="container-fluid p-0 patient-dev">
          <div className="row ">
            <div className="col-sm-3 z-3 ">
              <Sidebar />
            </div>
            <div className="col-sm-9 p-4 patient-main-dev">
              <h1 className="title mb-5">Cancer Patient Records</h1>
              <div className="col-sm-8 mt-4">
                <form class="search">
                  <div class="search__wrapper">
                    <input
                      type="text"
                      name=""
                      placeholder="Search for..."
                      class="search__field"
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
                <Button
                  variant="primary"
                  type="button"
                  class="btn btn-primary add-new-button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Add New
                </Button>{" "}
                <div
                  class="modal fade "
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content mode-background">
                      <div class="modal-body">
                        <h2>Add New</h2>
                        <form>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="id">ID</label>
                              <input
                                type="text"
                                className="form-control"
                                id="id"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="patientName">Patient Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="patientName"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="age">Age</label>
                              <input
                                type="number"
                                className="form-control"
                                id="age"
                              />
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
                              <label htmlFor="maritalStatus">
                                Marital Status
                              </label>
                              <select
                                className="form-control"
                                id="maritalStatus"
                              >
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorced</option>
                                <option>Widowed</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="problem">Problem</label>
                              <input
                                type="text"
                                className="form-control"
                                id="problem"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="disease">Disease</label>
                              <input
                                type="text"
                                className="form-control"
                                id="disease"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="feedback">Feedback</label>
                              <textarea
                                className="form-control"
                                id="feedback"
                                rows={3}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="address">Address</label>
                              <textarea
                                className="form-control"
                                id="address"
                                rows={3}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <button
                              type="reset"
                              className="btn btn-secondary ml-2"
                            >
                              Reset
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <table className="table">
                <caption>List of users</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Mertial Status</th>
                    <th scope="col">Visit Date</th>
                    <th scope="col">Problem</th>
                    <th scope="col">Disease</th>
                    <th scope="col">Feedback</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <div className="dropdown ">
                        <p
                          className="btn btn-secondary dropdown-toggle three-dot-btn"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <FontAwesomeIcon
                            className="dropdown-toggle text-dark "
                            icon={faEllipsis}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          />
                        </p>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link
                            to="/admin/cancer/view"
                            className="dropdown-item"
                          >
                            View
                          </Link>
                          <Link
                            to="/admin/cancer/edit"
                            className="dropdown-item"
                          >
                            Edit
                          </Link>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>

              {/* pagination */}

              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      2<span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CancerPatient;
