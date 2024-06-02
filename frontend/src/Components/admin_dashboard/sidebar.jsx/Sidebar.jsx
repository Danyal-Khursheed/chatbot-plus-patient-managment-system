import React, {useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBed,
  faBedPulse,
  faUser,
  faDisease,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../public/assets/images/logo.png";
import logo3 from '../../../../public/assets/img/logo3.png'
import mobile_logo from "../../../../public/assets/images/mobile-logo.png";
import admin_image from "../../../../public/assets/images/admin_image.png";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../../axios/axiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reset_token } from "../../../Redux/slices/userAuth";
import { useDispatch} from "react-redux";
import Spinner from "../../../AdminProtected/Spinner";


const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    toast.success("Logout successfully");
     // Show loadertoast.success("Logout successfully");
    dispatch(reset_token());
    

    // Delay navigation to login page after 3 seconds
    setTimeout(() => {
      setLoading(false); // Hide loader
      navigate("/login");
    }, 3000);
  };

  //   try {
  //     const response = await instance.get('/logout');
  //     if (response) {
  //       // deleteCookie("token");
  //       toast.success(response.data.message);
  //       navigate('/login');
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.message);;
  //   }
  // };

  // const deleteCookie = (name) => {
  //   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  // };
  

  return (
    <>
      <div class="d-none d-lg-block d-md-block">
        <div className="container-fluid position-absolute">
          <div className="row flex-nowrap">
            <div className="col-auto px-0 col-md-3 col-xl-2 px-sm-2 background">
              <div className="px-3 pt-2 text-white d-flex flex-column align-items-center align-items-sm-start min-vh-100">
                <Link
                  href="/"
                  className="pb-3 text-white d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
                >
                  <span className=" d-sm-inline sidebar-heading">
                    {/* <img src={logo} alt="Logo" className="main-logo" /> */}
                    <img src={logo3} alt="Logo" className="main-logo" />
                    
                  </span>
                </Link>
                <ul
                  className="mb-0 nav nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <Link href="#" className="px-0 align-middle nav-link">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-none d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faHouse} /> Main Dashboard
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/admin/patient" className="px-0 align-middle nav-link sidebar-heading">
                      <i className="fs-4 bi-table" />{" "}
                      <span className="ms-1 d-none d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faBed} /> Patient
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="px-0 align-middle nav-link sidebar-heading">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-none d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faUser} /> Patient Visited
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/admin/cancer" className="px-0 align-middle nav-link sidebar-heading">
                      <i className="fs-4 bi-table" />{" "}
                      <span className="ms-1 d-none d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faBedPulse} /> Cancer Patient
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="px-0 align-middle nav-link sidebar-heading">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-none d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faUser} /> Cancer Patient Visited
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/combination" className="px-0 align-middle nav-link sidebar-heading">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-none d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faDisease} /> Combinations
                      </span>
                    </Link>
                  </li>
                </ul>
                <hr />
                <div className="pb-4 dropdown fixed-bottom mobile-bottom-logo">
                  <Link
                    href="#"
                    className="text-white d-flex align-items-center text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={admin_image}
                      alt="hugenerd"
                      width={30}
                      height={30}
                      className="rounded-circle"
                    />
                    <span className="mx-1 d-none d-sm-inline">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Dr Guftair Ahmed
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item" onClick={handleLogout} >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

      

      {/* --------------------------------------------------------------------------- */}
      <div className="d-md-none ">
      <div className="container-fluid max-width-limit mobile-background">
          <div className="row flex-nowrap ">
            <div className="col-auto px-0 col-md-3 col-xl-2 px-sm-2 mobile-background">
              <div className="px-3 pt-2 text-white d-flex flex-column align-items-center align-items-sm-start min-vh-100">
                <Link
                  href="/"
                  className="pb-3 text-white d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
                >
                  <span className=" d-sm-inline sidebar-heading">
                    <img src={mobile_logo} alt="Logo" className="mobile-main-logo" />
                  </span>
                </Link>
                <ul
                  className="mb-0 nav nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <Link href="#" className="px-0 align-middle nav-link">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faHouse} />
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/admin/patient" className="px-0 align-middle nav-link">
                      <i className="fs-4 bi-table" />{" "}
                      <span className="ms-1 d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faBed} />
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="px-0 align-middle nav-link">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/admin/cancer" className="px-0 align-middle nav-link">
                      <i className="fs-4 bi-table" />{" "}
                      <span className="ms-1 d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faBedPulse} />
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="px-0 align-middle nav-link">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/combination" className="px-0 align-middle nav-link">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-sm-inline sidebar-heading">
                        <FontAwesomeIcon icon={faDisease} />
                      </span>
                    </Link>
                  </li>
                </ul>
                <hr />
                <div className="pb-4 dropdown ">
                  <Link
                    href="#"
                    className="text-white d-flex align-items-center text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={admin_image}
                      alt="hugenerd"
                      width={30}
                      height={30}
                      className="rounded-circle dropdown-toggle"
                      data-bs-toggle="dropdown"
                    />
                    <span className="mx-1 d-sm-inline">
                    
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" onClick={handleLogout}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Sidebar;
