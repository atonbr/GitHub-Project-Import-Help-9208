import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, FiSave, FiX, FiGraduationCap, FiCalendar } = FiIcons;

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    university: 'University of California, Berkeley',
    major: 'Computer Science',
    graduationYear: '2024',
    gpa: '3.8',
    bio: 'Passionate computer science student with a strong interest in web development and machine learning. Looking for opportunities to apply my skills in a real-world environment.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git'],
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    setProfileData({
      ...profileData,
      skills: skillsArray,
    });
  };

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
  };

  const applications = [
    {
      id: 1,
      position: 'Software Engineering Intern',
      company: 'TechCorp Inc.',
      status: 'Under Review',
      appliedDate: '2024-01-15',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 2,
      position: 'Data Science Intern',
      company: 'DataFlow Solutions',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-12',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 3,
      position: 'UX Design Intern',
      company: 'Creative Studios',
      status: 'Rejected',
      appliedDate: '2024-01-10',
      statusColor: 'bg-red-100 text-red-800',
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and track your applications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <SafeIcon icon={FiEdit2} className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center text-green-600 hover:text-green-700"
                    >
                      <SafeIcon icon={FiSave} className="w-4 h-4 mr-1" />
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex items-center text-gray-600 hover:text-gray-700"
                    >
                      <SafeIcon icon={FiX} className="w-4 h-4 mr-1" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <SafeIcon icon={FiMail} className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <SafeIcon icon={FiPhone} className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="university"
                      value={profileData.university}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <SafeIcon icon={FiGraduationCap} className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.university}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Major</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="major"
                      value={profileData.major}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <span>{profileData.major}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="graduationYear"
                      value={profileData.graduationYear}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <div className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 text-gray-400 mr-2" />
                      <span>{profileData.graduationYear}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GPA</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="gpa"
                      value={profileData.gpa}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <span>{profileData.gpa}</span>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-700">{profileData.bio}</p>
                )}
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.skills.join(', ')}
                    onChange={handleSkillsChange}
                    placeholder="Enter skills separated by commas"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications Sent</span>
                  <span className="text-xl font-semibold text-blue-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interviews</span>
                  <span className="text-xl font-semibold text-green-600">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Response Rate</span>
                  <span className="text-xl font-semibold text-purple-600">67%</span>
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
              <div className="space-y-4">
                {applications.map((application) => (
                  <div key={application.id} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-sm font-medium text-gray-900">{application.position}</h4>
                    <p className="text-sm text-gray-600">{application.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${application.statusColor}`}>
                        {application.status}
                      </span>
                      <span className="text-xs text-gray-500">{application.appliedDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;