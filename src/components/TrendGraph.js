import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns";

export default function CasesGraph({ data, type, title }) {
  var parsedData = [];
  let scale = { text: "date", type: "time" };
  if (type != "rateKill") {
    var holder = {};

    data.forEach(function (day) {
      if (holder.hasOwnProperty(day["Incident Date"])) {
        holder[day["Incident Date"]] =
          holder[day["Incident Date"]] + parseInt(day[type]);
      } else {
        holder[day["Incident Date"]] = parseInt(day[type]);
      }
    });

    for (var prop in holder) {
      parsedData.push({ x: new Date(prop), y: holder[prop] });
    }
  } else {
    var holder = {};

    data.forEach(function (day) {
      let float = isNaN(parseFloat(day[type])) ? 0 : parseFloat(day[type]);
      if (holder.hasOwnProperty(day["State"])) {
        holder[day["State"]] = holder[day["State"]] + float;
      } else {
        holder[day["State"]] = float;
      }
    });

    for (var prop in holder) {
      parsedData.push({ x: prop, y: holder[prop] });
    }

    parsedData = parsedData.sort((a, b) => a.y - b.y);

    scale = { text: "state" };
  }

  return (
    <Line
      data={{
        datasets: [
          {
            data: parsedData,
            borderColor: "rgba(255,0,0,0.8)",
            borderWidth: 1,
            fill: {
              target: "origin",
              above: "rgba(255,0,0,0.3)",
              below: "rgba(255,0,0,0.3)",
            },
          },
        ],
      }}
      options={{
        hover: {
          mode: "nearest",
          axis: "x",
          intersect: false,
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 5,
            backgroundColor: "white",
          },
        },
        scales: {
          x: scale,
          y: {
            text: `${title}`,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "nearest",
            axis: "x",
            intersect: false,
            callbacks: {
              title: (context) => {
                if (type == "rateKill") {
                  return context[0].raw.x;
                }
                return context[0].raw.x.toLocaleDateString();
              },
              beforeLabel: function () {
                let label = `${title}:`;
                return label;
              },
            },
          },
        },
      }}
    />
  );
}
