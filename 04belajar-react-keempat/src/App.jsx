import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import PageNotFound from './components/PageNotFound';
import { AuthProvider } from './context/AuthContext';
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
