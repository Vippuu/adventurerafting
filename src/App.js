import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Popover from './Components/Popover';
import WSPGallery from './Components/WSPGallery';


import "./style.css";
import{BrowserRouter,Routes,Route} from "react-router-dom";

export default function App() {
 
  const galleryImages = [
    {
      img: './images/g1.jpg'
    },
    {
      img:  './images/g2.jpg'
    },
    {
      img: './images/g3.jpg'
    },
    {
      img:  './images/g4.jpg'
    },
    {
      img:  './images/g5.jpg'
    },
    {
      img: './images/g6.jpg'
    },
    {
    img:  './images/g7.jpg'
    },
   
    {
    img: './images/g8.jpg'
    }
  ]

  
  return (
    <div>
      <> 
      
    <BrowserRouter>
        <Navbar/>
     
     
      
        
        
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about" element={<About/>} /> 
            <Route path="/join" element={<Popover/>} /> 
            
            {/* <Route path="/Contact" element={<Contact showAlert={showAlert}/>} />   */}
            
            <Route path="/Pics" element={<WSPGallery galleryImages={galleryImages}/>} />

        </Routes>
    
      </BrowserRouter>      



   </>
    </div>
  )
}
