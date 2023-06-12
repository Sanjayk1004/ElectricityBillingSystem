import React, { useEffect, useState } from "react";
import Navbaruser from './Navbaruser';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Home() {
  const [user, setUserData] = useState({});
  const { userid } = useParams();

  useEffect(() => {
    fetchUserData(userid);
  }, [userid]);

  const fetchUserData = async (userid) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/electricity/get/${userid}`);
      setUserData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchUser = (newId) => {
    fetchUserData(newId);
  };

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <Navbaruser />
      <div className="content">
        <form className="form-content">
          <div className="flex max-w-2xl mx-auto border-b shadow-2xl">
            <div className="px-20 py-10">
              <div className="font-bold text-2xl text-left tracking-wider">
                <h1 className="text-center">Bill</h1>
              </div>
              <div className="form-item">
                <div className="h-25 w-25 mx-25">
                  <div className="block text-gray-600 text-sm text-left font-bold mr-50">Service Id:</div>
                  <div className="block text-gray-600 text-sm text-left font-normal my-2">{user.serviceId}</div>
                  <div className="block text-gray-600 text-sm text-left font-bold">User Name</div>
                  <div className="block text-gray-600 text-sm text-left font-normal my-2">{user.userName}</div>
                  <div className="block text-gray-600 text-sm text-left font-bold">Due Date</div>
                  <div className="block text-gray-600 text-sm text-left font-normal my-2">{user.dueDate}</div>
                  <div className="block text-gray-600 text-sm text-left font-bold">Units Consumed</div>
                  <div className="block text-gray-600 text-sm text-left font-normal my-2">{user.unitsConsumed}</div>
                  <div className="block text-gray-600 text-sm text-left font-bold">Total Cost</div>
                  <div className="block text-gray-600 text-sm text-left font-normal my-2">{user.totalCost}</div>
                </div>
              </div>
              <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6" type="submit">Pay Bill</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
