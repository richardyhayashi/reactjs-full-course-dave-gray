import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowsSize from '../hooks/useWindowSize.js';

const Header = ({ title }) => {
    const { width } = useWindowsSize();
  
    return (
    <header className='Header'>
      <h1>{title}</h1>
      {width < 760 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
    </header>
  );
};

export default Header;