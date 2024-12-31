import { Link } from 'react-router-dom'
import { APP_NAME } from './constants';

function SiteLogo(){
  return (
    <Link to='/' className='text-lg font-bold text-gray-200'>
      {APP_NAME}
    </Link>
  );
};

export default SiteLogo;