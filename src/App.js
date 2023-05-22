import './App.css';

import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, Link } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import IntroToBurn from './IntroToBurn';
import SideboardGuide from './SideboardGuide';
import NaviBar from './NaviBar';

function App() {
  return (
    <>
      <Header/>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/the-great-revel" element={<Home/>}/>
          <Route path="/intro-to-burn" element={<IntroToBurn/>}/>
          <Route path="/sideboard-guide" element={<SideboardGuide/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
