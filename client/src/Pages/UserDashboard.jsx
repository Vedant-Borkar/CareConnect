import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import UserSidebar from '../components/UserSidebar';

const UserDashboard = () => {
    const volunteerData = [
        { name: 'Jan', oldAgeHome: 30, orphanage: 20 },
        { name: 'Feb', oldAgeHome: 25, orphanage: 15 },
        { name: 'Mar', oldAgeHome: 35, orphanage: 25 },
        { name: 'Apr', oldAgeHome: 28, orphanage: 22 },
        { name: 'May', oldAgeHome: 32, orphanage: 18 },
      ];

    const activityData = [
        { name: 'Jan', hours: 120, activities: 40 },
        { name: 'Feb', hours: 110, activities: 38 },
        { name: 'Mar', hours: 130, activities: 45 },
        { name: 'Apr', hours: 115, activities: 42 },
        { name: 'May', hours: 125, activities: 50 },
      ];

  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold mb-4">Volunteer Dashboard</h1>
          <div className="grid grid-cols-2 gap-6">
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
              <h2 className="text-xl font-semibold mb-4">Volunteer Participation Over Time</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={volunteerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="oldAgeHome" stroke="#8884d8" />
                  <Line type="monotone" dataKey="orphanage" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Volunteer Hours & Activities</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="hours" stroke="#8884d8" />
                  <Line type="monotone" dataKey="activities" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
