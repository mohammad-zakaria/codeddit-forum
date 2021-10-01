import {  faCog, faFileAlt, faGripHorizontal, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to="/" className="">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/" className="">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
            </li>
            <li>
                    <Link to="/" className="">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Create Post</span>
                    </Link>
                </li>
            <div>
                <li>
                    <Link to="/" className="">
                        <FontAwesomeIcon icon={faUsers} /> <span>Group</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="" >
                        <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
            </div>
        </ul>
        <div>
            <Link to="/" className=""><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;