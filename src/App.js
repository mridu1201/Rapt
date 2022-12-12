import Home from './pages/home/Home';
import Event from './pages/events/Event';
import { Route,Routes } from 'react-router-dom';
import AboutUs from './pages/aboutUs/about';
import HomeGallery from './pages/Gallery/homegallery';


function App() {
  return (
  <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Events' element={<Event/>}></Route>
      <Route path='/Gallery' element={<HomeGallery/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
    </Routes>
  </div>
  );
}
export default App;