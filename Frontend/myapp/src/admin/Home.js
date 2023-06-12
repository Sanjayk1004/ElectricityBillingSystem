import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom";
import Navbar from './Navbar';
const Home = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const loadData=()=>{
  axios.get('http://127.0.0.1:8080/electricity/getall')
    .then(resp => {
      setData(resp.data);
      console.log(data)
    })
  }        
 
  const handleDelete=(serviceid)=>{
    let result=window.confirm('Are you sure to delete this record ?');
    if(serviceid){
      axios.delete(`http://localhost:8080/electricity/deleteDetails/${serviceid}`)
      .then(resp=>{
        alert(resp.data.data)
            console.log(resp.data)
            loadData()
        })
        .catch(error=>{
          console.log(error)
        })
        }
  }
  useEffect(() => {
    loadData();
  },[])

  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-8">
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-bold text-gray-500 uppercase tracking-wider py-3 px-4 ">
                Service Id
              </th>
              <th className="text-left font-bold text-gray-500 uppercase tracking-wider py-3 px-4">
                User Name
              </th>
              <th className="text-left font-bold text-gray-500 uppercase tracking-wider py-3 px-4">
                Due Date
              </th>
              <th className="text-center font-bold text-gray-500 uppercase tracking-wider py-3 px-2">
                Units Consumed
              </th>
              <th className="text-right font-bold text-gray-500 uppercase tracking-wider py-3 px-2">
                Total Cost
              </th>
              <th className=" text-right font-bold text-gray-500 uppercase tracking-wider py-3 px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map(user => (
              <tr key={user.serviceid}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.serviceid}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.username}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.duedate}</div>
                </td>
                <td className="text-lft px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.unitsconsumed}</div>
                </td>
                <td className="text-right px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.totalamount}</div>
                </td>
                <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                  <Link to={'/updateBill/${user.serviceid}'}>
                  <a  onClick={()=> navigate("/updateBill")}className="text-indigo-600 hover:text-indigo-600 px-4 hover:cursor-pointer">Edit</a>
                  <a  onClick={e=>handleDelete(user.serviceid)} className= " text-indigo-600 hover:text-indigo-600 px-4 hover:cursor-pointer">Delete</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Home;
