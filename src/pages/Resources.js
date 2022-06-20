import React, { useState, useEffect } from "react";
import Map, { Marker, Popup, } from "react-map-gl";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Data from '../data/ag-offices.json';
import mapboxgl from "mapbox-gl";


// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

 function Resources() {
  const [viewport, setViewport] = useState({
    width: "60",
    height: "60",
    zoom: 9.5
  });
  
  const [selectedOffice, setSelectedOffice] = useState(null);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      })
    })
  }, [])

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
    <>
    <div>
    <h1 className="custom-head">Resources</h1>
  </div>
  <div>
    <Container>
      <Card className="text-center resource-info" border="info" style={{ background: '#242526', borderWidth: 3  }}>
        <Card.Body>
          We at Dad's Visits want to make it easy for you to contact and locate your local AG and or Child Support office. Our map provides local offices near your location for your convenience. By clicking any of the markers, it will provide you with the name, address, and location of child support offices, attorney general offices, DHHS offices, or any source of local child support services for your convenience. 
        </Card.Body>
      </Card>
    </Container>
  </div>
    <div className="map-pos">
      <Map className="map-align" 
      {...viewport} 
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/apogue/ckz6cl5nc000116pdd2wjpuea"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
        {Data.features.map(office => (
          <Marker offsetLeft={-20}
          offsetTop={-20}
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
              <p>{selectedOffice.properties.NUMBER}</p>
            </div>
          </Popup>
        ) : null}
      </Map>
    </div>
    </>
  );
}
export default Resources;