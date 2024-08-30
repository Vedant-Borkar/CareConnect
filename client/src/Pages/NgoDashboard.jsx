import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Legend, LabelList } from 'recharts';
import NgoSidebar from '../components/NgoSidebar';

const NgoDashboard = () => {
  const donationData = [
    { month: 'Jan', orphanage: 450, oldAgeHome: 300 },
    { month: 'Feb', orphanage: 350, oldAgeHome: 200 },
    { month: 'Mar', orphanage: 500, oldAgeHome: 400 },
    { month: 'Apr', orphanage: 400, oldAgeHome: 350 },
    { month: 'May', orphanage: 550, oldAgeHome: 450 },
  ];

  const residentAgeDistributionData = [
    { ageGroup: 'Under 5', count: 15 },
    { ageGroup: '5-18', count: 25 },
    { ageGroup: '18-60', count: 50 },
    { ageGroup: '60+', count: 30 },
  ];
  return (
    <div className="flex">
      <NgoSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        {/* Remove this: <Router> */}
        <div>
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
              <h2 className="text-xl font-semibold mb-4">Resident Age Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={residentAgeDistributionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Remove this: </Router> */}
      </div>
    </div>
  );
};

export default NgoDashboard;
