import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from './Pages/Home/Homepage';
import Nopage from './Pages/Nopage/Nopage';
import Product from './Pages/Product/Product';
import Scroll from './Components/Scroll/Scroll';
import Cart from './Pages/Cart/Cart';
import Allproduct from './Pages/AllProduct/Allproduct';
import Signup from './Pages/Registration/Signup';
import Login from './Pages/Registration/Login';
import UserDashboard from './Pages/User/UserDashboard';
import Admin from './Pages/Admin/Admin';
import AddProductPage from './Pages/Admin/AddProductPage';
import UpadateProduct from './Pages/Admin/UpadateProduct';
import MyState from './Context/myState';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <MyState>
      <Router>
        <Scroll />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/*' element={<Nopage />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/AllProduct' element={<Allproduct />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/User-Dashbord' element={<UserDashboard />} />
          <Route path='/Admin-Dashbord' element={<Admin />} />
          <Route path='/Add-Product' element={<AddProductPage />} />
          <Route path='/Update-Product' element={<UpadateProduct />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}
