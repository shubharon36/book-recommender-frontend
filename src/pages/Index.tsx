
import React from 'react';
import { Navigate } from 'react-router-dom';

// This component now just redirects to the Home page
const Index: React.FC = () => {
  return <Navigate to="/" replace />;
};

export default Index;
