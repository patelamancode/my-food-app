import {Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MenuList from './pages/MenuList';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/menulist' element={<MenuList />} />
      <Route path='cart' element={<Cart />}/>
     </Routes>
    </div>
  );
}

export default App;
