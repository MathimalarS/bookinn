import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
