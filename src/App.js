import DropdownSelector from './components/DropdownSelector';
import MapView from './components/MapView';

import {basemaps} from './data';
import "./App.css";



function App() {
 return <div className='position-relative'>
    <DropdownSelector defaultValue='Select Basemap' options={basemaps}/>
    <MapView basemap="satellite" zoom="13"/>
 </div> 

}

export default App;
