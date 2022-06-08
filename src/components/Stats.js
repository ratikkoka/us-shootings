import React, { useState, useEffect } from "react";
import TrendGraph from "./TrendGraph";
import { usePapaParse } from "react-papaparse";

export default function Stats() {
  let [deaths, setDeaths] = useState([]);
  let [injury, setInjury] = useState([]);
  let [mass, setMass] = useState([]);

  const { readString } = usePapaParse();

  let datasets = [
    "/data/total-deaths-geoencoded.csv",
    "/data/total-injuries-geoencoded.csv",
    "/data/mass-shootings-geoencoded.csv",
  ];

  useEffect(() => {
    for (let i = 0; i < datasets.length; i++) {
      fetch(process.env.PUBLIC_URL + datasets[i])
        .then((response) => response.text())
        .then((responseText) => {
          readString(responseText, {
            worker: true,
            header: true,
            complete: (results) => {
              if (i == 0) {
                setDeaths(results.data);
              } else if (i == 1) {
                setInjury(results.data);
              } else {
                setMass(results.data);
              }
            },
          });
        });
    }
  });

  return (
    <div className="dashboard">
      <div className={"dashboard-container"}>
        <section>
          <h1 className="data-head">Shootings</h1>
          <h2 className="data-head">
            as of <span>6/6/2022</span>.
          </h2>
          <div className="data-cd">
            <div>
              <h3>Deaths</h3>
              <p>18,961</p>
            </div>
            <div>
              <h3>Injuries</h3>
              <p>16,005</p>
            </div>
          </div>
        </section>
      </div>
      <div className="widgets-container">
        <div className="widget">
          <h2>Total Deaths Trend</h2>
          <TrendGraph data={deaths} type="# Killed" title="Deaths" />
        </div>
        <div className="widget">
          <h2>Total Injuries Trend</h2>
          <TrendGraph data={injury} type="# Injured" title="Injuries" />
        </div>
        <div className="widget">
          <h2>Mass Shootings Trend</h2>
          <TrendGraph
            data={mass}
            type="# Killed"
            title="Mass Shooting Deaths"
          />
        </div>
        <div className="widget">
          <h2>Shooting Rates</h2>
          <TrendGraph data={deaths} type="rateKill" title="Shooting Rates" />
        </div>
      </div>
    </div>
  );
}
