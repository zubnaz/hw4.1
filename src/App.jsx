import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import Menu from './Menu/Menu';
function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='favorite' element={<Favorite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
