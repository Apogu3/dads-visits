import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";


 function Resources() {
  const [viewport, setViewport] = useState({
    latitude: 30.2672,
    longitude: -97.7431,
    width: "70vw",
    height: "80vh",
    zoom: 10
  });
  
  const [selectedOffice, setSelectedOffice] = useState(null);

  
  const agData = require("../data/ag-offices.json");

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedOffice(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGl {...viewport} 
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/apogue/ckz6cl5nc000116pdd2wjpuea"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
        {agData.features.map(office => (
          <Marker 
          key={office.properties.OFFICE_ID} 
          latitude={office.geometry.coordinates[1]}
          longitude={office.geometry.coordinates[0]}
          >
            <button 
            className="office-mrk" 
            onClick={(e) => {
              e.preventDefault();
              setSelectedOffice(office);
            }}>
              <img src="/location-48.png" alt="Office Icon" />
            </button>
          </Marker>
        ))}

        {selectedOffice ? (
          <Popup 
          latitude={selectedOffice.geometry.coordinates[1]} 
          longitude={selectedOffice.geometry.coordinates[0]}
          onClose={() => {
            setSelectedOffice(null);
          }}
          >
            <div className="office-popup">
              <h3>{selectedOffice.properties.NAME}</h3>
              <p>{selectedOffice.properties.ADDRESS}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}
export default Resources;