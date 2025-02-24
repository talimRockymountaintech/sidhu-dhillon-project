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
  useParams
} from 'react-router-dom';
import Home from './pages/Home';
import { Listing } from './pages/Listing';
import { Agents } from './pages/Agents';
import AgentsDetails from './pages/AgentsDetails';
import Agencies from './pages/Agencies';
import AgenciesDetails from './pages/AgenciesDetails';
import Contact from './pages/Contact';
import HomeLoanProcess from './pages/HomeLoanProcess';
import Faq from './pages/Faq';
import { Career } from './pages/Career';
import Dashboard from './pages/Dashboard';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Profile from './pages/Dashboard/Profile';
import { MyPackage } from './pages/Dashboard/MyPackage';
import MyFavourites from './pages/Dashboard/MyFavourites';
import MySearches from './pages/Dashboard/MySearches';
import Reviews from './pages/Dashboard/Reviews';
import { MyProperties } from './pages/Dashboard/MyProperties';
import { AddProperty } from './pages/Dashboard/AddProperty';

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
      <Route path="/home-loan-process" element={<HomeLoanProcess />} />
      <Route path="/career" element={<Career />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/dashboard/my-profile" element={<Profile />} />
      <Route path="/dashboard/my-package" element={<MyPackage />} />
      <Route path="/dashboard/my-favourites" element={<MyFavourites />} />
      <Route path="/dashboard/my-search" element={<MySearches />} />
      <Route path="/dashboard/reviews" element={<Reviews />} />
      <Route path="/dashboard/my-property" element={<MyProperties />} />
      <Route path="/dashboard/add-property" element={<AddProperty />} />



    </Routes>

  );
}

export default App;
