import React, { useState, useEffect } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";

class WorldMap extends React.Component {
  constructor() {
    super();
    this.state = {
      geographies: null,
      projection: geoEqualEarth()
        .scale(160)
        .translate([800 / 2, 450 / 2])
    };
    //TODO store the file localy
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json").then(
      response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`);
          return;
        }
        response.json().then(worlddata => {
          this.setState({
            geographies: feature(worlddata, worlddata.objects.countries)
              .features
          });
        });
      }
    );
  }
  render() {
    let { visits } = this.props;
    let { geographies, projection } = this.state;
    if (geographies)
      return (
        <svg width={800} height={450} viewBox="0 0 800 450">
          <g className="countries">
            {geographies.map((d, i) => (
              <path
                key={`path-${i}`}
                d={geoPath().projection(projection)(d)}
                className="country"
                fill="#888"
                stroke="#000"
                strokeWidth={0.5}
              />
            ))}
          </g>
          <g className="markers">
            {
              visits.map((visit,index)=>
              <circle
                key={index}
                cx={projection([visit["longitude"], visit["latitude"]])[0]}
                cy={projection([visit["longitude"], visit["latitude"]])[1]}
                r={10}
                fill="#0f0"
                className="marker"
              />
              )
            }
          </g>
        </svg>
      );
    else return <div></div>;
  }
}

export default WorldMap;
