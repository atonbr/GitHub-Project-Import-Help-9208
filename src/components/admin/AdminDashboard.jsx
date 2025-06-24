import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiBriefcase, FiFileText, FiTrendingUp, FiEye, FiEdit } = FiIcons;

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Users', value: '1,234', icon: FiUsers, color: 'bg-blue-500', change: '+12%' },
    { name: 'Active Internships', value: '156', icon: FiBriefcase, color: 'bg-green-500', change: '+8%' },
    { name: 'Applications', value: '2,891', icon: FiFileText, color: 'bg-purple-500', change: '+23%' },
    { name: 'Success Rate', value: '78%', icon: FiTrendingUp, color: 'bg-yellow-500', change: '+5%' },
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@company.com', role: 'Company', joined: '2024-01-14' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', joined: '2024-01-13' },
  ];

  const recentInternships = [
    { id: 1, title: 'Software Engineer Intern', company: 'TechCorp', applicants: 45, status: 'Active' },
    { id: 2, title: 'Data Science Intern', company: 'DataFlow', applicants: 32, status: 'Active' },
    { id: 3, title: 'UX Design Intern', company: 'Creative Studios', applicants: 28, status: 'Closed' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor and manage the internship platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Users */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Recent Users</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiUsers} className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === 'Student' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {user.role}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{user.joined}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Internships */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Recent Internships</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentInternships.map((internship) => (
                  <div key={internship.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{internship.title}</p>
                      <p className="text-sm text-gray-600">{internship.company}</p>
                      <p className="text-xs text-gray-500">{internship.applicants} applicants</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        internship.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {internship.status}
                      </span>
                      <div className="flex space-x-1">
                        <button className="p-1 text-blue-600 hover:text-blue-700">
                          <SafeIcon icon={FiEye} className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-gray-700">
                          <SafeIcon icon={FiEdit} className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;