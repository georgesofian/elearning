import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url()` }}>
      <div className="headerContainer">
          <h3>Site announcements</h3>
          <p>Testele de examinare 'afectate' de defectiunea tehnica a moodle FEAA, din 11.ianuarie.2022, se vor relua in aceeasi zi de la ora 11:00AM.
Multumim pentru intelegere.</p>
      </div>
    </div>
  );
}

export default Home;
