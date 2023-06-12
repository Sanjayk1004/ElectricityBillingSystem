import React, { useState } from 'react';
import axios from 'axios';
import './AddBill.css';
import {useNavigate} from "react-router";
import Navbar from './Navbar';
const AddBill = () => {
  //const navigate=useNavigate();
  const [serviceid, setServiceid] = useState('');
  const [username, setUsername] = useState('');
  const [duedate, setDuedate] = useState('');
  const [unitsconsumed, setUnitsconsumed] = useState('');
  const [totalamount, setTotalamount] = useState('');

  const handleServiceidChange = (event) => {
    setServiceid(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleDuedateChange = (event) => {
    setDuedate(event.target.value);
  };
  const handleUnitsconsumedChange = (event) => {
    setUnitsconsumed(event.target.value);
  };
  const handleTotalamountChange = (event) => {
    setTotalamount(event.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setServiceid('');
    setUsername('');
    setDuedate('');
    setUnitsconsumed('');
    setTotalamount('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      serviceid:serviceid,
      username:username,
      duedate:duedate,
      unitsconsumed:unitsconsumed,
      totalamount:totalamount
    };

    axios.post('http://127.0.0.1:8080/electricity/post',data);
  };

  return (
    <>
    <Navbar/>
    <div className="content">
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="flex max-w-xl mx-auto border-b shadow-2xl">
          <div className="px-8 py-8">
            <div className="font-bold text-2xl text-left tracking-wider">
              <h1>Add New Bill</h1>
            </div>
            <div className="form-item">
              <div className="items-center justify-center  h-14 w-full my-4">
                <label className="block text-gray-600 text-sm  text-left font-bold">Service Id</label>
                <input
                  type=""
                  className="h-10 w-96 border mt-2 px-2 py-2"
                  value={serviceid}
                  onChange={handleServiceidChange}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="items-center justify-center  h-14 w-full my-4">
                <label className="block text-gray-600 text-sm  text-left font-bold">User Name</label>
                <input
                  type="text"
                  className="h-10 w-96 border mt-2 px-2 py-2"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="items-center justify-center  h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-bold text-left">Due Date</label>
                <input
                  type="date"
                  className="h-10 w-96 border mt-2 px-2 py-2"
                  value={duedate}
                  onChange={handleDuedateChange}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="items-center justify-center  h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-bold text-left">Units Consumed</label>
                <input
                  type="text"
                  className="h-10 w-96 border mt-2 px-2 py-2"
                  value={unitsconsumed}
                  onChange={handleUnitsconsumedChange}
                />
              </div>
            </div>
            <div className="form-item">
              <div className="items-center justify-center  h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-bold text-left">Total Cost</label>
                <input
                  type="text"
                  className="h-10 w-96 border mt-2 px-2 py-2"
                  value={totalamount}
                  onChange={handleTotalamountChange}
                /> 
              </div>
            </div>
            <div className="items-center justify-center  h-14 w-full my-4 space-x-4 pt-4">
              <button  className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6" type="submit">Save</button>
              <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6" onClick={handleReset}>Clear</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddBill;
