import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBriefcase, FiUsers, FiFileText, FiTrendingUp, FiPlus, FiEye, FiEdit, FiTrash2 } = FiIcons;

const CompanyDashboard = () => {
  const stats = [
    { name: 'Active Positions', value: '8', icon: FiBriefcase, color: 'bg-blue-500' },
    { name: 'Total Applications', value: '145', icon: FiFileText, color: 'bg-green-500' },
    { name: 'Interviews Scheduled', value: '23', icon: FiUsers, color: 'bg-purple-500' },
    { name: 'Hired Interns', value: '12', icon: FiTrendingUp, color: 'bg-yellow-500' },
  ];

  const internshipPosts = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      department: 'Engineering',
      applications: 45,
      status: 'Active',
      posted: '2024-01-15',
    },
    {
      id: 2,
      title: 'Marketing Intern',
      department: 'Marketing',
      applications: 32,
      status: 'Active',
      posted: '2024-01-12',
    },
    {
      id: 3,
      title: 'Data Analysis Intern',
      department: 'Analytics',
      applications: 28,
      status: 'Closed',
      posted: '2024-01-08',
    },
  ];

  const recentApplications = [
    {
      id: 1,
      applicant: 'John Doe',
      position: 'Software Engineering Intern',
      status: 'Under Review',
      appliedDate: '2024-01-16',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 2,
      applicant: 'Jane Smith',
      position: 'Marketing Intern',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-15',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 3,
      applicant: 'Bob Johnson',
      position: 'Data Analysis Intern',
      status: 'Accepted',
      appliedDate: '2024-01-14',
      statusColor: 'bg-green-100 text-green-800',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Dashboard</h1>
            <p className="text-gray-600">Manage your internship positions and applications</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
            Post New Internship
          </motion.button>
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
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Internship Posts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Your Internship Posts</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {internshipPosts.map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{post.title}</h3>
                        <p className="text-sm text-gray-600">{post.department}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>{post.applications} applications</span>
                          <span>Posted {post.posted}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {post.status}
                        </span>
                        <div className="flex space-x-1">
                          <button className="p-1 text-blue-600 hover:text-blue-700">
                            <SafeIcon icon={FiEye} className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-gray-700">
                            <SafeIcon icon={FiEdit} className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:text-red-700">
                            <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Applications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiUsers} className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{application.applicant}</p>
                        <p className="text-sm text-gray-600">{application.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${application.statusColor}`}>
                        {application.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{application.appliedDate}</p>
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

export default CompanyDashboard;