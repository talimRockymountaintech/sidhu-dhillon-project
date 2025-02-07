import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams } from 'react-router-dom';
import Home from './pages/Home';
import { Listing } from './pages/Listing';
import { Agents } from './pages/Agents';
import AgentsDetails from './pages/AgentsDetails';
import Agencies from './pages/Agencies';
import AgenciesDetails from './pages/AgenciesDetails';
import Contact from './pages/Contact';

function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/pages/agents" element={<Agents />} />
      <Route path="/pages/agents-details" element={<AgentsDetails />} />
      <Route path="/pages/agencies" element={<Agencies />} />
      <Route path="/pages/agencies-details" element={<AgenciesDetails />} />
      <Route path="/contact" element={<Contact />} />
      
      
    </Routes>
 
  );
}

export default App;
