import './App.css';
import AddBill from './admin/AddBill';
import Home from './admin/Home';
import Login from './admin/Login';
import HomeUser from './user/HomeUser';
import Loginuser from './user/Loginpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateBill from './admin/UpdateBill';
function App() {
  return(
  <div className='App'>
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
          <Route path="/Homeadmin" element={<Home/>}/>
            <Route path="/AddBill" element={<AddBill/>}/>
            <Route path="/adminlogin" element={<Login />}/>
            <Route path="/Homeuser" element={<HomeUser />}/>
            {/* <Route path="/userlogin" element={<Loginuser />}/> */}
            <Route path="/updateBill/:serviceid" element={<UpdateBill/>}/>
    </Routes>
  </BrowserRouter> 
  </div>
  );
}

export default App;

