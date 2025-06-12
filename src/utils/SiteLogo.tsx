import React from 'react';
import { Link } from 'react-router-dom'
import { APP_NAME } from './constants';

const SiteLogo: React.FC = () => {
  return (
    <Link to='/' className='flex items-center text-lg font-bold text-gray-200'>
      {APP_NAME}
    </Link>
  );
};

export default SiteLogo;