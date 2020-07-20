import React from 'react';

import { AuthProvider } from './auth';
// import { ThemePortalProvider } from './theme';


const AppProvider: React.FC = ({ children }) => (
  // <ThemePortalProvider>
  <AuthProvider>
    {children}
  </AuthProvider>
  // </ThemePortalProvider>
);

export default AppProvider;
