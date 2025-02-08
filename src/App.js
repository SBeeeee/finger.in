import './App.css';
import Welcome from './components/welcome/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
