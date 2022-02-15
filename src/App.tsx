import React, { useEffect } from 'react';
import './App.css';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from './Pages/Home/Home';
// Components
import Navbar from './Components/Navbar/Navbar';
import Announcement from './Components/Announcement/Announcement';
import { useDispatch } from 'react-redux';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    (async function(){
      const f = await fetch('https://api.ipify.org?format=json')
      if(f.ok){
        let { ip }: any = await f.json();
        dispatch({type: 'ADD_IP', payload: ip});
      }
    })();
  },[])
  return (
    <div className="App">
      <Router>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Signup'  element={<Signup />}/>
          <Route path='/Cart' element={<Cart />}/>
          {/* <Route path='/Product/:id' element={}/> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
