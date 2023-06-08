import { useRef, useEffect } from "react";
import { createMapView } from "../../arcgis-map";

import './styles.css';

const MapView = () =>{
    const mapRef = useRef();
 
    useEffect(() => {

        const view = createMapView(mapRef.current);
        return () => { view && view.destroy();};
  
    }, []);
  
    return <div className="viewDiv" ref={mapRef} />;

  
}

export default MapView;