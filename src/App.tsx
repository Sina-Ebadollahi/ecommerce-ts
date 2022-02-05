import React from 'react';
import './App.css';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from './Pages/Home/Home';
// Components
import Navbar from './Components/Navbar/Navbar';
// const OffDeal = () => {
//   return(
//     <div style={{backgroundColor: 'green', minHeight: '5vh', fontSize: '1rem'}}>
//       <h2>
//         Super Deal! Free Shipping on Orders Over $50
//       </h2>
//     </div>
//   )
// }
function App() {
  return (
    <div className="App">
      <Router>
        {/* <OffDeal /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
