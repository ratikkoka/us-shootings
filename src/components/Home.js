import React, { useEffect } from "react";
import DeckMap from "./DeckMap";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Form } from "react-bootstrap";

export default function Home() {
  let [date, setDate] = useState("6/6/2022");
  let [selected, setSelected] = useState("deaths");

  let [min, setMin] = useState(new Date("4/25/2022").getTime());
  let max = new Date("6/6/2022").getTime() - 86400000;

  useEffect(() => {
    if (selected == "mass") {
      setMin(new Date("1/1/2022").getTime());
    } else if (selected == "injury") {
      setMin(new Date("5/13/2022").getTime());
    }
  }, [selected]);

  function handleChange(event, newValue) {
    setDate(new Date(newValue).toLocaleDateString());
  }

  function handleSelectChange(event) {
    setSelected(event.target.id);
  }

  return (
    <div>
      <DeckMap date={date} selected={selected} />
      <div className="panel-container">
        <div className="panel-content">
          <Form className="radio-buttons" onChange={handleSelectChange}>
            <Form.Check
              defaultChecked={true}
              type="radio"
              id="deaths"
              name="layer"
              label="Total Deaths"
            />
            <Form.Check
              type="radio"
              id="injury"
              name="layer"
              label="Total Injuries"
            />
            <Form.Check
              type="radio"
              id="mass"
              name="layer"
              label="Mass Shootings"
            />
          </Form>
          <div className="date-container">
            <div>Date</div>
            <div>{date}</div>
          </div>
          <StyledEngineProvider injectFirst>
            <Slider
              min={min}
              max={max}
              defaultValue={max}
              className="slider"
              step={86400000}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={handleChange}
              valueLabelFormat={(value) => {
                return new Date(value).toLocaleDateString();
              }}
            />
          </StyledEngineProvider>
        </div>
        <div className="panel-source">
          <div>Press Shift to Rotate Map</div>
          <div>
            Source:{" "}
            <a href="https://www.gunviolencearchive.org/">
              Gun Violence Archive
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
