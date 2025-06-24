import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBriefcase, FiMapPin, FiCalendar, FiDollarSign, FiSearch, FiFilter, FiClock } = FiIcons;

const InternshipList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const internships = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      duration: '12 weeks',
      stipend: '$2,500/month',
      posted: '2 days ago',
      description: 'Join our engineering team and work on cutting-edge web applications using React, Node.js, and cloud technologies.',
      requirements: ['Computer Science major', 'JavaScript experience', 'Git knowledge'],
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'DataFlow Solutions',
      location: 'New York, NY',
      type: 'Remote',
      duration: '16 weeks',
      stipend: '$3,000/month',
      posted: '3 days ago',
      description: 'Work with our data science team to analyze large datasets and build machine learning models.',
      requirements: ['Statistics background', 'Python/R experience', 'SQL knowledge'],
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 3,
      title: 'UX Design Intern',
      company: 'Creative Studios',
      location: 'Los Angeles, CA',
      type: 'Part-time',
      duration: '10 weeks',
      stipend: '$2,000/month',
      posted: '5 days ago',
      description: 'Create beautiful and user-friendly designs for mobile and web applications.',
      requirements: ['Design portfolio', 'Figma/Sketch experience', 'User research skills'],
      logo: 'https://images.unsplash.com/photo-1558403194-611308249627?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 4,
      title: 'Marketing Intern',
      company: 'Growth Marketing Co.',
      location: 'Austin, TX',
      type: 'Hybrid',
      duration: '12 weeks',
      stipend: '$1,800/month',
      posted: '1 week ago',
      description: 'Support our marketing team with campaign development, content creation, and analytics.',
      requirements: ['Marketing coursework', 'Social media experience', 'Analytics tools'],
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
  ];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || internship.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Internship Opportunities</h1>
          <p className="text-gray-600">Discover amazing internship opportunities from top companies</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SafeIcon icon={FiSearch} className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search internships or companies..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SafeIcon icon={FiFilter} className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="appearance-none bg-white pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* Internship Cards */}
        <div className="grid gap-6">
          {filteredInternships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={internship.logo}
                      alt={internship.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {internship.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-3">
                        {internship.company}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                          {internship.location}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiDollarSign} className="w-4 h-4 mr-1" />
                          {internship.stipend}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                          Posted {internship.posted}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">
                        {internship.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.requirements.map((req, reqIndex) => (
                            <span
                              key={reqIndex}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      internship.type === 'Full-time' ? 'bg-green-100 text-green-800' :
                      internship.type === 'Part-time' ? 'bg-blue-100 text-blue-800' :
                      internship.type === 'Remote' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {internship.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Details
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <SafeIcon icon={FiBriefcase} className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No internships found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default InternshipList;