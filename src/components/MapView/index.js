import { useRef, useEffect } from "react";
import { createMapView } from "../../arcgis-map";

import './styles.css';

const MapView = (props) =>{
    const {basemap, zoom} = props;
    const mapRef = useRef();
 
    useEffect(() => {

        const view = createMapView(mapRef.current, basemap, zoom);
        return () => { view && view.destroy();};
  
    }, []);
  
    return <div className="viewDiv" ref={mapRef} />;

  
}

export default MapView;