import React from 'react'
import {useNavigate} from "react-router-dom";

const Navbaruser = () => {
  const navigate1=useNavigate();
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
      <p className="text-white font-bold">Electricity Billing System</p>
        <button onClick={()=> navigate1("/adminlogin")} className=" absolute right-0 rounded bg-gray-900 text-white px-6 py-2 font-semibold">
          LogOut
        </button>
      </div>
    </div>
  )
}

export default Navbaruser