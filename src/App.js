import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import ShippingInfo from './components/ShippingInfo/ShippingInfo';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/review-order" element={<ReviewOrder/>}></Route>
        <Route path="/shipping" element={<ShippingInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
