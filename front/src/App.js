import './App.css';
import {BrowserRouter as Router, Routes, Route, Redirect,} from 'react-router-dom';
import Home from "./Component/Form/Home"
import Header from './Component/Header';
import Admin from './Component/Form/Admin';
import Game_Name from './Component/Form/Game_Name';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Game_Name" element={<Game_Name />}></Route>
      </Routes>
    </Router>
    
    
    
    </>
  );
}

export default App;
