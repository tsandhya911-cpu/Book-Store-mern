// import { Link } from 'react-router-dom';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsBookshelf, BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineDelete } from 'react-icons/md';

// const BookTable = ({ books }) => {
//     return (
//         <table className='w-full border-separate border-spacing-2'>
//             <thead>
//                 <tr>
//                     <th className='border border-slate-600 rounded-md'>No</th>
//                     <th className='border border-slate-600 rounded-md'>Title</th>
//                     <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
//                     <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
//                     <th className='border border-slate-600 rounded-md '>operation</th>
//                 </tr>

//             </thead>
//             <tbody>
//                 {books.map((book, index) => (
//                     <tr key={book._id} className='h-8'>

//                         <td className='border border-slate-700 rounded-md text-center'>
//                             {index + 1}
//                         </td>

//                         <td className='border border-slate-700 rounded-md text-center'>
//                             {book.title}
//                         </td>

//                         <td className='border border-slate-700 rounded-md text-center'>
//                             {book.author}
//                         </td>

//                         <td className='border border-slate-700 rounded-md text-center'>
//                             {book.publishYear}
//                         </td>

//                         <td className='border border-slate-700 rounded-md text-center'>
//                             <div className='flex justify-center gap-x-4'>

//                                 <Link to={`/books/details/${book._id}`}>
//                                     <BsInfoCircle className='text-2xl text-green-800' />
//                                 </Link>

//                                 <Link to={`/books/edit/${book._id}`}>
//                                     <AiOutlineEdit className='text-2xl text-yellow-600' />
//                                 </Link>

//                                 <Link to={`/books/delete/${book._id}`}>
//                                     <MdOutlineDelete className='text-2xl text-red-600' />
//                                 </Link>

//                             </div>
//                         </td>

//                     </tr>
//                 ))}
//             </tbody>
//         </table>

//     )
// }

// export default BookTable


import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookTable = ({ books }) => {
    return (
        <div className="overflow-x-auto shadow-lg rounded-xl bg-white">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-4 py-2 text-center text-sm font-medium">No</th>
                        <th className="px-4 py-2 text-center text-sm font-medium">Title</th>
                        <th className="px-4 py-2 text-center text-sm font-medium hidden md:table-cell">Author</th>
                        <th className="px-4 py-2 text-center text-sm font-medium hidden md:table-cell">Publish Year</th>
                        <th className="px-4 py-2 text-center text-sm font-medium">Operation</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {books.map((book, index) => (
                        <tr
                            key={book._id}
                            className={`hover:bg-blue-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                        >
                            <td className="px-4 py-2 text-center">{index + 1}</td>
                            <td className="px-4 py-2 text-center">{book.title}</td>
                            <td className="px-4 py-2 text-center hidden md:table-cell">{book.author}</td>
                            <td className="px-4 py-2 text-center hidden md:table-cell">{book.publishYear}</td>
                            <td className="px-4 py-2 text-center">
                                <div className="flex justify-center gap-4">
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors" />
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-800 transition-colors" />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800 transition-colors" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;