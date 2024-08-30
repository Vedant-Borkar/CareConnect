import React from 'react';
// Remove this: import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import UserSidebar from '../components/UserSidebar';

const UserDashboard = () => {
    const donationData = [
        { name: 'Jan', orphanage: 400, oldAgeHome: 240 },
        { name: 'Feb', orphanage: 300, oldAgeHome: 139 },
        { name: 'Mar', orphanage: 200, oldAgeHome: 980 },
        { name: 'Apr', orphanage: 278, oldAgeHome: 390 },
        { name: 'May', orphanage: 189, oldAgeHome: 480 },
      ];
    
      const healthData = [
        { name: 'Jan', healthCheckups: 400, incidents: 240 },
        { name: 'Feb', healthCheckups: 300, incidents: 139 },
        { name: 'Mar', healthCheckups: 200, incidents: 980 },
        { name: 'Apr', healthCheckups: 278, incidents: 390 },
        { name: 'May', healthCheckups: 189, incidents: 480 },
      ];
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        {/* Remove this: <Router> */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Volunteer Dashboard</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Residents Overview</h2>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-2xl font-bold">120</h3>
                  <p className="text-gray-500">Total Residents</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">80</h3>
                  <p className="text-gray-500">Old Age Home</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">40</h3>
                  <p className="text-gray-500">Orphanage</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Volunteer Overview</h2>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-2xl font-bold">50</h3>
                  <p className="text-gray-500">Total Volunteers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">30</h3>
                  <p className="text-gray-500">Old Age Home</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">20</h3>
                  <p className="text-gray-500">Orphanage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Donations Over Time</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={donationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="orphanage" stroke="#8884d8" />
                  <Line type="monotone" dataKey="oldAgeHome" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Health Checkups & Incidents</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="healthCheckups" stroke="#8884d8" />
                  <Line type="monotone" dataKey="incidents" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Remove this: </Router> */}
      </div>
    </div>
  );
};

export default UserDashboard;
