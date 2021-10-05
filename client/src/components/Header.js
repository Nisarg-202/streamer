import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";


function Header() { 

    return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Streamy</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" style={{ marginRight: "20px", marginTop: "15px" }} to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/"><GoogleAuth /></Link>
      </li>
    </ul>
  </div>
</nav>
</div>;

 }

 export default Header;