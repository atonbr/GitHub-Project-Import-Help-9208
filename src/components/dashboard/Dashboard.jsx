import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBriefcase, FiUsers, FiFileText, FiTrendingUp, FiCalendar, FiMapPin } = FiIcons;

const Dashboard = ({ user }) => {
  const stats = [
    { name: 'Active Applications', value: '12', icon: FiFileText, color: 'bg-blue-500' },
    { name: 'Available Internships', value: '48', icon: FiBriefcase, color: 'bg-green-500' },
    { name: 'Companies', value: '24', icon: FiUsers, color: 'bg-purple-500' },
    { name: 'Success Rate', value: '87%', icon: FiTrendingUp, color: 'bg-yellow-500' },
  ];

  const recentInternships = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'DataFlow Solutions',
      location: 'New York, NY',
      type: 'Remote',
      posted: '3 days ago',
    },
    {
      id: 3,
      title: 'UX Design Intern',
      company: 'Creative Studios',
      location: 'Los Angeles, CA',
      type: 'Part-time',
      posted: '5 days ago',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your internship journey today.
          </p>
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

        {/* Recent Internships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Recent Internships</h2>
              <p className="text-gray-600 text-sm">Latest opportunities for you</p>
            </div>
            <div className="p-6 space-y-4">
              {recentInternships.map((internship) => (
                <div
                  key={internship.id}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiBriefcase} className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {internship.title}
                    </h3>
                    <p className="text-sm text-gray-600">{internship.company}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <SafeIcon icon={FiMapPin} className="w-3 h-3 mr-1" />
                        {internship.location}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <SafeIcon icon={FiCalendar} className="w-3 h-3 mr-1" />
                        {internship.posted}
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {internship.type}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              <p className="text-gray-600 text-sm">Get started with these actions</p>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-between p-4 text-left bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="flex items-center">
                  <SafeIcon icon={FiBriefcase} className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Browse Internships</span>
                </div>
                <SafeIcon icon={FiIcons.FiChevronRight} className="w-4 h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 text-left bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                <div className="flex items-center">
                  <SafeIcon icon={FiFileText} className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">View Applications</span>
                </div>
                <SafeIcon icon={FiIcons.FiChevronRight} className="w-4 h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 text-left bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                <div className="flex items-center">
                  <SafeIcon icon={FiUsers} className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Update Profile</span>
                </div>
                <SafeIcon icon={FiIcons.FiChevronRight} className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;