import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import OrderTrack from './components/OrderTrack/OrderTrack';
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
        <Route path="/shipping" element={
          <RequireAuth>
              <ShippingInfo/>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/order-track" element={
          <RequireAuth>
            <OrderTrack/>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
