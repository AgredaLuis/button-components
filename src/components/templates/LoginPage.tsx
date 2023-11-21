// src/pages/LoginPage.tsx
import React from 'react';
import LoginForm from '@/components/molecules/LoginForm';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    console.log('Iniciar sesión');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
