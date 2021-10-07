import React from "react";


import Sidebar from "../Sidebar/Sidebar";
import UsersPost from "./UsersPost/UsersPost";


const containerStyle = {
  backgroundColor: "#F4FDFB",
  border: "1px solid red",
};
const ForumHome = ({data}) => {
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-5 col-sm-6 col-4">
          <Sidebar></Sidebar>
        </div>
        {/* <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center"></div> */}
        <div className="col-md-7 col-sm-6 col-8">
          <UsersPost data={data}></UsersPost>
        </div>
      </div>
    </section>
  );
};

export default ForumHome;
