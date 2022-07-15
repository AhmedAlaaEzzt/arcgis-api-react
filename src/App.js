import "./App.css";
import { useRef, useEffect } from "react";

import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function App() {
  const mapRef = useRef();
 
  useEffect(() => {
    esriConfig.apiKey = "AAPKa303a70299c5477fbb4546010ac5eeabqxdUF8v_c4svuKvFI0XEbxPXbkhalk6YVekiJPQfaplQmO7DXXh__X270OOTrutL";

    const map = new Map({
      basemap: "osm-streets",
    });


    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [-118, 34],
      zoom: 8,
    });

  }, []);

  return <div className="viewDiv" ref={mapRef} />;
}

export default App;
