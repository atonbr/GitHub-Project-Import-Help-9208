import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';

// Import components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import InternshipList from './components/internships/InternshipList';
import InternshipDetail from './components/internships/InternshipDetail';
import ApplicationForm from './components/applications/ApplicationForm';
import Profile from './components/profile/Profile';
import AdminDashboard from './components/admin/AdminDashboard';
import CompanyDashboard from './components/company/CompanyDashboard';

const { FiUser, FiBriefcase, FiFileText, FiSettings, FiLogOut, FiMenu, FiX } = FiIcons;

function App() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setSidebarOpen(false);
  };

  const navigationItems = [
    { name: 'Dashboard', icon: FiBriefcase, path: '/dashboard' },
    { name: 'Internships', icon: FiBriefcase, path: '/internships' },
    { name: 'Applications', icon: FiFileText, path: '/applications' },
    { name: 'Profile', icon: FiUser, path: '/profile' },
  ];

  if (!user) {
    return (
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:relative lg:translate-x-0"
            >
              <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
                <h1 className="text-xl font-bold text-gray-800">InternHub</h1>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="mt-8 px-4 space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.path}`}
                    className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5 mr-3" />
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                >
                  <SafeIcon icon={FiLogOut} className="w-5 h-5 mr-3" />
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-md hover:bg-gray-100 mr-4"
                >
                  <SafeIcon icon={FiMenu} className="w-5 h-5" />
                </button>
                <h2 className="text-lg font-semibold text-gray-800">
                  Welcome back, {user.name}!
                </h2>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard user={user} />} />
              <Route path="/internships" element={<InternshipList />} />
              <Route path="/internships/:id" element={<InternshipDetail />} />
              <Route path="/applications" element={<ApplicationForm />} />
              <Route path="/profile" element={<Profile user={user} />} />
              {user.role === 'admin' && (
                <Route path="/admin" element={<AdminDashboard />} />
              )}
              {user.role === 'company' && (
                <Route path="/company" element={<CompanyDashboard />} />
              )}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;