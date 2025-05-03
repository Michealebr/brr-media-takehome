import React from 'react';

interface EmptyProps {
  message: string;
}
const Empty: React.FC<EmptyProps> = ({ message }) => {
  return (
    <div className="text-center mt-10 text-gray-400 italic">{message}</div>
  );
};

export default Empty;
