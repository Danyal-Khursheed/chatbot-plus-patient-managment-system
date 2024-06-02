import React from "react";
import "./Comb.css";
import "./model.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis ,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../sidebar.jsx/Sidebar";
import { Link } from "react-router-dom";


const Combination = () => {
  return (
    <>
    <Sidebar/>
      {/* Desktop */}
      <div className="d-none d-lg-block d-md-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 p-0" ></div>

            <div className="col-lg-9 ">
              <div className="main-heading mt-5 ">
                <h1 className="overflow-hidden"> Disease Combination</h1>
              </div>

              <div className="filters mt-5 ">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="container-search-bar">
                      <input type="text" placeholder="Search..." />
                      <div className="search" />
                    </div>

                  </div>
                  <div className="col-lg-6">

                  </div>
                  <div className="col-lg-3 ">


                    <div className="d-flex ">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Filter
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" href="#">
                              Action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              Another action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              Something else here
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              Separated link
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary add-new"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table mt-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Disease</th>
                    <th scope="col">Combination</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <FontAwesomeIcon
                        className="dropdown-toggle"
                        icon={faEllipsis}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          class="modal fade "
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content mode-background">
              <div class="modal-body">
                <div className="model-page ">
                  <div className="container ">
                    <h3 className="heading">Add New Combination</h3>
                    <div className="form">
                      {/* Login field */}
                      <input
                        placeholder="Enter the Disease"
                        type="text"
                        className="input-field mt-3"
                      //   value={email}
                      //   onChange={(e)=>setEmail(e.target.value)}
                      />
                      {/* Password field */}
                      <input
                        placeholder="Enter the Combination"
                        type="text"
                        className="input-field mt-3"
                      //   value={password}
                      //   onChange={(e)=>setPassword(e.target.value)}
                      />
                      {/* Remember me checkbox */}
                    </div>
                    <ToastContainer />
                  </div>
                </div>
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

      {/* Mobile */}
      <div className="d-md-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 "></div>

            <div className="col-sm-8 mobile-main-dev">
              <div className="main-heading mt-5 ">
                <h2 className="overflow-hidden "> Disease Combination</h2>
                <br/>
                <div class="search-container">
    <form >
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  </div>
  </div>

              <div className="filters mt-5 ">
                <div className="row">
                  <div className="col-sm-9">
                  
                  </div>
                  <div className="col-sm-3 mobile-filter">
                    <div className="d-flex float-start">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Filter
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" href="#">
                              Action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              Another action
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              Something else here
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              Separated link
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table mt-5  ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">abc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        </div>
      

      {/* popup */}
    </>
  );
};

export default Combination;
