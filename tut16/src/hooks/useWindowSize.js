import { useEffect, useState } from 'react';

const useWindowsSize = () => {
   const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
   });

   useEffect(() => {
      const handleResize = () => {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
         });
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
         console.log('runs if a useEffect dep changes');
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return windowSize;
}

export default useWindowsSize;