// import React from 'react'

// const Spinner = () => {
//   return (
//     <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600'>Spinner</div>
//   )
// }

// export default Spinner

import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;