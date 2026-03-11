// import { Link } from "react-router-dom";
// import { PiBookOpenTextLight } from "react-icons/pi";
// import { BiUserCircle, BiShow } from "react-icons/bi";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";
// import { useState } from "react";
// import BookModel from "./BookModel";

// const BookSingleCard = ({ books }) => {

//     const [showModel, setShowModel] = useState(false);

//     return (
//         <>
//             <div className="border-2 border-gray-500 rounded-lg px-4 py-3 m-4 relative hover:shadow-xl">

//                 {/* Publish Year */}
//                 <h2 className="absolute top-1 right-2 px-3 py-1 bg-red-300 rounded-lg">
//                     {books.publishYear}
//                 </h2>

//                 {/* Book ID */}
//                 <h4 className="my-2 text-gray-500">{books._id}</h4>

//                 {/* Title */}
//                 <div className="flex items-center gap-x-2">
//                     <PiBookOpenTextLight className="text-red-300 text-2xl" />
//                     <h2 className="my-1">{books.title}</h2>
//                 </div>

//                 {/* Author */}
//                 <div className="flex items-center gap-x-2">
//                     <BiUserCircle className="text-red-300 text-2xl" />
//                     <h2 className="my-1">{books.author}</h2>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex justify-between items-center gap-x-2 mt-4 p-2">

//                     {/* Modal Open */}
//                     <BiShow
//                         className="text-3xl text-blue-800 hover:text-black cursor-pointer"
//                         onClick={() => setShowModel(true)}
//                     />

//                     {/* Details */}
//                     <Link to={`/books/details/${books._id}`}>
//                         <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
//                     </Link>

//                     {/* Edit */}
//                     <Link to={`/books/edit/${books._id}`}>
//                         <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
//                     </Link>

//                     {/* Delete */}
//                     <Link to={`/books/delete/${books._id}`}>
//                         <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
//                     </Link>

//                 </div>
//             </div>

//             {/* Modal */}
//             {showModel && (
//                 <BookModel
//                     book={books}
//                     onClose={() => setShowModel(false)}
//                 />
//             )}
//         </>
//     );
// };

// export default BookSingleCard;

import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModel from "./BookModel";

const BookSingleCard = ({ books }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <div className="relative bg-white border border-gray-200 rounded-xl p-5 m-4 shadow hover:shadow-lg transition-shadow">
        {/* Publish Year */}
        <span className="absolute top-3 right-3 px-3 py-1 bg-red-300 text-white font-semibold rounded-lg">
          {books.publishYear}
        </span>

        {/* Book ID */}
        <p className="text-gray-400 text-sm mb-2 break-all">{books._id}</p>

        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <PiBookOpenTextLight className="text-red-400 text-2xl" />
          <h2 className="text-lg font-semibold">{books.title}</h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <BiUserCircle className="text-red-400 text-2xl" />
          <p className="text-gray-700">{books.author}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center gap-4 mt-2">
          {/* Modal Open */}
          <BiShow
            className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
            onClick={() => setShowModel(true)}
          />

          {/* Details */}
          <Link to={`/books/details/${books._id}`}>
            <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors" />
          </Link>

          {/* Edit */}
          <Link to={`/books/edit/${books._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors" />
          </Link>

          {/* Delete */}
          <Link to={`/books/delete/${books._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {showModel && <BookModel book={books} onClose={() => setShowModel(false)} />}
    </>
  );
};

export default BookSingleCard;