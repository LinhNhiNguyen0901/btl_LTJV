import React from "react";
import logo from './Logo.png';
import { Link } from "react-router-dom";
//import {FaBriefcase, FaFileAlt, FaHouseUser, FaBars} from "react-icons/fa"

function SidebarAdmin() {
    return (
        <div className="sidebar d-flex flex-column justify-content-space-between bg-dark text-white p-4 vh-100 fixed-left">
            <div>
                <a href="d-flex align-items-center">
                    <img className='col-2' style={{ width: 105, height: 80, paddingRight: 0, paddingLeft: 25, marginTop: 10}} src={logo} alt='logo'/>
                </a>
                <ul className="nav nav-pills flex-column p-0 m-0">
                    <li className="nav-item p-1">
                        <Link to="news" className="nav-link text-white px-3" style={{marginTop: 5}}>
                            <i class="fa-solid fa-suitcase me-2 fs-5"></i>
                            <span className="fs-5">Recruitment News</span>
                        </Link>
                        <Link to="recruiters" className="nav-link text-white px-3">
                            <i class="fa-solid fa-file-lines me-2 fs-5"></i>
                            <span className="fs-5">Recruiters</span>
                        </Link>
                        <Link to="employees" className="nav-link text-white px-3">
                            <i class="fa-solid fa-building me-2 fs-5"></i>
                            <span className="fs-5">Employees</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarAdmin;