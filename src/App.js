
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Service from './components/Service';
import Contactus from './components/Contactus';

function App() {
  return (
 <Router>
  <Navbar/>
  
  <Routes>
  <Route path='/' element={<Dashboard/>} />
  <Route path='/service' element={<Service/>} />
  <Route path='/contact' element={<Contactus/>} />


  </Routes>
  <Footer/>
 </Router>
  );
}

export default App;
