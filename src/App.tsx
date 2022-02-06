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

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    (async function(){
      const f = await fetch('https://api.ipify.org?format=json')
      if(f.ok){
        let { ip }: any = await f.json();
        dispatch({type: 'ADD_IP', payload: ip});
        console.log(ip);
        
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
          {/* <Route path="/Login" element={} /> */}
          {/* <Route path='/Signup'  element={}/> */}
          {/* <Route path='Cart' element={}/> */}
          {/* <Route path='/Product/:id' element={}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
