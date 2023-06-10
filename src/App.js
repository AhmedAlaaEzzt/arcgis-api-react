import DropdownSelector from './components/DropdownSelector';
import MapView from './components/MapView';


import "./App.css";

const basemaps = [
    { value: 'satellite', label: 'Satellite' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'osm', label: 'Open Street Map' },
    { value: 'dark-gray-vector', label: 'Dark Gray Vector' },
];

function App() {
 return <div className='position-relative'>
    <DropdownSelector defaultValue='Select Basemap' options={basemaps}/>
    <MapView basemap="satellite" zoom="13"/>
 </div> 

}

export default App;
