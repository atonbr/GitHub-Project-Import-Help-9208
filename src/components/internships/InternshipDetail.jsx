import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiCalendar, FiDollarSign, FiClock, FiUsers, FiArrowLeft } = FiIcons;

const InternshipDetail = () => {
  const internship = {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    duration: '12 weeks',
    stipend: '$2,500/month',
    posted: '2 days ago',
    description: 'Join our engineering team and work on cutting-edge web applications using React, Node.js, and cloud technologies. You will be working alongside experienced developers on real-world projects that impact thousands of users.',
    responsibilities: [
      'Develop and maintain web applications using React and Node.js',
      'Collaborate with cross-functional teams to define and implement new features',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and testing processes',
      'Learn and apply best practices in software development',
    ],
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Strong foundation in JavaScript, HTML, and CSS',
      'Experience with React or similar frontend frameworks',
      'Familiarity with version control systems (Git)',
      'Excellent problem-solving and communication skills',
    ],
    benefits: [
      'Competitive monthly stipend',
      'Mentorship from senior engineers',
      'Access to learning resources and courses',
      'Networking opportunities',
      'Potential for full-time offer',
    ],
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=face',
    companyInfo: {
      size: '500-1000 employees',
      industry: 'Technology',
      founded: '2015',
      website: 'https://techcorp.com',
    },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <button className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
          Back to Internships
        </button>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-start space-x-6">
            <img
              src={internship.logo}
              alt={internship.company}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {internship.title}
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {internship.company}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
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

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {internship.type}
                </span>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Apply Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Internship</h2>
              <p className="text-gray-700 leading-relaxed">{internship.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {internship.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {internship.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Get</h2>
              <ul className="space-y-3">
                {internship.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About {internship.company}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Industry</span>
                  <span className="text-gray-900 font-medium">{internship.companyInfo.industry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Company Size</span>
                  <span className="text-gray-900 font-medium">{internship.companyInfo.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="text-gray-900 font-medium">{internship.companyInfo.founded}</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <a
                    href={internship.companyInfo.website}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Company Website
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">12 Applicants</p>
                    <p className="text-xs text-gray-600">Applied this week</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <SafeIcon icon={FiCalendar} className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">3 Days Left</p>
                    <p className="text-xs text-gray-600">To apply</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200"
            >
              Apply for This Position
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InternshipDetail;