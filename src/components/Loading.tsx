import { Ring } from 'ldrs/react';
import 'ldrs/react/Ring.css';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Ring size="30" stroke="3" bgOpacity="0" speed="2" color="black" />
    </div>
  );
};

export default Loading;
