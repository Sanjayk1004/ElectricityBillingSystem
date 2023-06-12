import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbaruser from "../user/Navbaruser";

export default function UpdateBill () {
  const navigate = useNavigate();
  const { serviceid } = useParams();
  const [user, setUser] = useState({
    serviceid:serviceid,
    username: "",
    duedate: "",
    unitsconsumed: "",
    totalamount: ""
  });
const {username,duedate,unitsconsumed,totalamount}=user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]:e.target.value });
  };
  useEffect(() => {
    loadUser();
  },[]); 
  const onSubmit = async(e) => {
   e.preventDefault();
   await axios.put(`http://localhost:8080/electricity/updatedetails/${serviceid}`,user);
   navigate("/Homeadmin")
 };
  const loadUser=async()=>{
    const result= await axios.get(`http://localhost:8080/electricity/deleteDetails/${serviceid}`);
    setUser(result.data);
    
  };
  return (
    <>
    <Navbaruser/>
    <div className="container">
    <div className="flex max-w-xl mx-auto border-b shadow-2xl">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl tracking-wider">
          <h1>Update Bill</h1>
        </div>
     <form className="form-con" onSubmit={(e)=>onSubmit(e)}>
        <div className="items-center justify-center h-14 w-full my-4">
          <div className="form-item">
          <label className="block text-gray-600 text-sm text-left font-bolt">
            User Name
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        </div>
        <div className="form-item">
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm text-left font-bolt">
            Due Date
          </label>
          <input
            type="date"
            name="duedate"
            value={duedate}
            onChange={(e) => onInputChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        </div>
        <div className="form-item">
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm text-left font-bolt">
            Units Consumed
          </label>
          <input
            type="text"
            name="unitsconsumed"
            value={unitsconsumed}
            onChange={(e) => onInputChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        </div>
        <div className="form-item">
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm text-left font-bolt">
            Total Amount
          </label>
          <input
            type="text"
            name="totalamount"
            value={totalamount}
            onChange={(e) => onInputChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6" type="submit">
            Update
          </button>
          <button
            onClick={() => navigate("/Homeadmin")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </>
  );
};