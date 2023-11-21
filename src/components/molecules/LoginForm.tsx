
import React from 'react';
import Button from '@/components/atoms/Button/index';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const handleLogin =() =>{
    console.log("Props de Molescula a Atomos");
    onLogin();
  };

  return (
    <div>
      {/* Otros campos del formulario */}
      <Button label="Iniciar sesión" onClick={handleLogin} />
    </div>
  );
};

export default LoginForm;
