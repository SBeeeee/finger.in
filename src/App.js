import './App.css';
import Welcome from './components/welcome/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
