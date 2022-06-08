import React, { useState, useEffect } from "react";
import { Map } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { usePapaParse } from "react-papaparse";

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-122.195318, 47.987443, 80000],
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-80.454156, 25.564794, 8000],
});

const lightingEffect = new LightingEffect({
  ambientLight,
  pointLight1,
  pointLight2,
});

const material = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51],
};

const INITIAL_VIEW_STATE = {
  longitude: -85.7129,
  latitude: 37.0902,
  zoom: 3.75,
  minZoom: 3,
  maxZoom: 15,
  pitch: 35,
  bearing: -7,
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

export const colorRange = [
  [254, 240, 217],
  [253, 212, 158],
  [253, 187, 132],
  [252, 141, 89],
  [227, 74, 51],
  [179, 0, 0],
];

/* eslint-disable react/no-deprecated */
export default function DeckMap({
  mapStyle = MAP_STYLE,
  radius = 1000,
  upperPercentile = 1000,
  coverage = 10,
  date,
  selected,
}) {
  const [data, setHeat] = useState([]);

  const { readString } = usePapaParse();

  let datasets = [
    "/data/total-deaths-geoencoded.csv",
    "/data/total-injuries-geoencoded.csv",
    "/data/mass-shootings-geoencoded.csv",
  ];

  useEffect(() => {
    let url = "";
    if (selected == "deaths") {
      url = datasets[0];
    } else if (selected == "injury") {
      url = datasets[1];
    } else if (selected == "mass") {
      url = datasets[2];
    }
    fetch(process.env.PUBLIC_URL + url)
      .then((response) => response.text())
      .then((responseText) => {
        readString(responseText, {
          worker: true,
          header: true,
          complete: (results) => {
            let filteredData = results.data.filter((test) => {
              return new Date(test["Incident Date"]) <= new Date(date);
            });
            setHeat(filteredData);
          },
        });
      });
  }, [date, selected]);

  const layers = [
    new HexagonLayer({
      id: "heatmap",
      data,
      extruded: true,
      pickable: true,
      radius,
      upperPercentile,
      coverage,
      elevationRange: [1000, 5000],
      elevationScale: data && data.length ? 100 : 0,
      getPosition: (d) => [Number(d.Longitude), Number(d.Latitude)],
      material,
      transitions: {
        elevationScale: 2000,
      },
    }),
  ];

  function getTooltip({ object }) {
    if (!object) {
      return null;
    }
    const lat = object.position[1];
    const lng = object.position[0];
    const count = object.points.length;
    let deaths = 0;
    let injuries = 0;
    object.points.map(
      (point) => (deaths += parseInt(point.source["# Killed"]))
    );
    object.points.map(
      (point) => (injuries += parseInt(point.source["# Injured"]))
    );

    return `\
      Latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ""}
      Longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ""}
      Incidents: ${count}
      Deaths: ${deaths}
      Injuries: ${injuries}`;
  }

  return (
    <DeckGL
      layers={layers}
      effects={[lightingEffect]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
    >
      <Map reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} />
    </DeckGL>
  );
}
