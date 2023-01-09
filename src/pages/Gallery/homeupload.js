//import logo from './logo.svg';
import './homeupload.css'
//import BackgroundImagePage from './bg';
import Apple from './upload';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function Homeupload() {
  return (
    
    
    <div className="upload-header">
      <div className="Arrow-div">
        <KeyboardDoubleArrowLeftIcon className="DoubleArrowLeftIcon"/>
      </div>
        <Apple/>
    </div>
  );
}

export default Homeupload;