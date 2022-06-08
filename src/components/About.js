import React, { useState, useEffect } from "react";

export default function About() {
  return (
    <div>
      <Team />
      <AboutContent />
    </div>
  );
}

function Team() {
  return (
    <div className="team-section">
      <div className="team-member">
        <img className="member-photo" src="" alt="" />
        <h3 className="member-name">Peter Kidane</h3>
        <h4 className="member-status">Senior</h4>
      </div>
      <div className="team-member">
        <img className="member-photo" src="img/ratik.png" alt="Ratik Koka" />
        <h3 className="member-name">Ratik Koka</h3>
        <h4 className="member-status">Senior</h4>
      </div>
      <div className="team-member">
        <img className="member-photo" src="" alt="" />
        <h3 className="member-name">Travis Le</h3>
        <h4 className="member-status">Senior</h4>
      </div>
      <div className="team-member">
        <img
          className="member-photo"
          src="img/jun.jpg"
          alt="Jun Nguyen"
        />
        <h3 className="member-name">Jun Nguyen</h3>
        <h4 className="member-status">Senior</h4>
      </div>
      <div className="team-member">
        <img className="member-photo" src="img/peter.jpg" alt="Peter Zhou" />
        <h3 className="member-name">Peter Zhou</h3>
        <h4 className="member-status">Junio</h4>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="about-content">
      <div className="about-explanation">
        <ul>
          <li>
            Our idea came from the recent and current news, which is heavily
            focused on gun violence.
          </li>
          <li>
            In a time interval, we try to answer and to understand how the trend
            of mass shootings look like and the number of people that were
            impacted over the last few years.
          </li>
          <li>
            We will be looking at data from mass shootings and the number of
            deaths/injured.
          </li>
        </ul>
      </div>

      <div className="acknowledgements">
        <h2>Acknowledgements</h2>
        <p>Special thanks to Professor Bo Zhao and our TA, Steven Bao.</p>
      </div>

      <div className="sources">
        <h2>Sources</h2>
        <ul>
          <li>
            <a href="https://www.gunviolencearchive.org/reports/number-of-gun-deaths">
              Gun Violence Deaths 2022
            </a>
          </li>
          <li>
            <a href="https://www.gunviolencearchive.org/reports/number-of-gun-injuries">
              Gun Violence Injuries 2022
            </a>
          </li>
          <li>
            <a href="https://www.gunviolencearchive.org/reports/mass-shooting">
              Mass Shootings 2022
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
