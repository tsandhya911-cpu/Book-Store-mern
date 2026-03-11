// import React from "react";
// import { Link } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";

// const BackButton = ({ destination = "/" }) => {
//     return (
//         <div className="flex">
//             <Link
//                 to={destination}
//                 className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
//             >
//                 <IoArrowBack className="text-2xl" />
//             </Link>
//         </div>
//     );
// };

// export default BackButton;

import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="mb-6">
      <Link
        to={destination}
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-fit transition-colors"
      >
        <IoArrowBack className="text-2xl mr-2" />
        <span className="font-semibold">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;