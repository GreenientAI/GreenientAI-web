import React from 'react';

const ErrorText: React.FC = ({ children }) => {
  return (
    <div style={{color: 'red'}}>
      {children}
    </div>
  );
};

export default ErrorText;