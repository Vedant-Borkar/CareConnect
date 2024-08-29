import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Sample data for graphs
  const donationData = [
    { name: 'Jan', orphanage: 4000, oldAgeHome: 2400 },
    { name: 'Feb', orphanage: 3000, oldAgeHome: 1398 },
    { name: 'Mar', orphanage: 2000, oldAgeHome: 9800 },
    { name: 'Apr', orphanage: 2780, oldAgeHome: 3908 },
    { name: 'May', orphanage: 1890, oldAgeHome: 4800 },
    { name: 'Jun', orphanage: 2390, oldAgeHome: 3800 },
    { name: 'Jul', orphanage: 3490, oldAgeHome: 4300 },
  ];

  const healthData = [
    { name: 'Jan', healthCheckups: 40, incidents: 2 },
    { name: 'Feb', healthCheckups: 30, incidents: 1 },
    { name: 'Mar', healthCheckups: 20, incidents: 5 },
    { name: 'Apr', healthCheckups: 27, incidents: 3 },
    { name: 'May', healthCheckups: 18, incidents: 4 },
    { name: 'Jun', healthCheckups: 23, incidents: 2 },
    { name: 'Jul', healthCheckups: 34, incidents: 1 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Old Age Home & Orphanage Dashboard</h1>
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
      </div>

      <div className="grid grid-cols-2 gap-6">
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
  );
};

export default Dashboard;
