import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeploydog, faFacebook, faFacebookF, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
    faBell,
  faGripHorizontal,
  faHome,
  faPlus,
  faSearch,
  faSearchPlus,
  faTv,
  faUserAlt,
  faUserCog,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">
              {" "}
              <FontAwesomeIcon icon={faDeploydog} /><span>Codeddit</span>{" "}
            </Link>
          </li>
          <li>
            {" "}
            <button id="search_btn" class="tooltip" data-tooltip="Search">
              {" "}
              {/* <i class="fas fa-search"></i> */}
              <Link to="/">
                {" "}
                <FontAwesomeIcon icon={faSearch} />{" "}
              </Link>{" "}
            </button>{" "}
          </li>

          <li id="space2"></li>

          <li>
            {" "}
            <Link to="/" className="">
              <FontAwesomeIcon icon={faHome} />
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/" className="">
              {" "}
              <FontAwesomeIcon icon={faUsers} />
            </Link>{" "}
          </li>
          <li>
          {" "}
            <Link to="/" className="">
              {" "}
              <FontAwesomeIcon icon={faTv} />
            </Link>{" "}
          </li>
          <li>
            {" "}
            {" "}
            <Link to="/" className="">
              {" "}
              <FontAwesomeIcon icon={faUserAlt} />
            </Link>{" "}
          </li>
          <li id="space1"></li>
          <li>
          {" "}
            <Link to="/" className="">
              {" "}
              <FontAwesomeIcon icon={faPlus} />
            </Link>{" "}
          </li>
          <li>
          {" "}
            <Link to="/" className="">
              {" "}
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </Link>
          </li>
          <li>
          {" "}
            <Link to="/" className="">
              {" "}
              <FontAwesomeIcon icon={faBell} />
            </Link>
          </li>
          <li>
          {" "}
            <Link to="/" className="">
              {" "}
              <FontAwesomeIcon icon={faUserCog} />
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
