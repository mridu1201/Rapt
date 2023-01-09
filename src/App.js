import Home from './pages/home/Home';
import { Route,Routes } from 'react-router-dom';
import AboutUs from './pages/aboutUs/about';
import HomeGallery from './pages/Gallery/homegallery';
import Events from './pages/events/events';
import Homeupload from './pages/Gallery/homeupload';
import Up from './pages/events/Up/UpEvents';


function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Events' element={<Events/>}></Route>
      <Route path='/Gallery' element={<HomeGallery/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/UpEvents' element={<Up/>}></Route>
      <Route path='/Upload' element={<Homeupload/>}></Route>
    </Routes>
  </div>
  );
}
export default App;