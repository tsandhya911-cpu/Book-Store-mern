// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import Spinner from '../components/Spinner';
// import BookTable from '../components/home/BookTable';
// import BooksCard from '../components/home/BooksCard';

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showType, setShowType] = useState('table');

//     //ENV VARIABLE
//     const API_URL = import.meta.env.VITE_API_URL;

//     useEffect(() => {

//         setLoading(true);
//         axios

//             .get(`${API_URL}/books`)
//             .then((res) => {
//                 setBooks(res.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoading(false)

//             })
//     }, [])
//     return (
//         <div className='p-4'>
//             <div className='flex justify-center items-center gap-x-4'>
//                 <button
//                     className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
//                     onClick={() => setShowType('table')}>
//                     Table
//                 </button>
//                 <button
//                     className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg '
//                     onClick={() => setShowType('card')}>
//                     Card
//                 </button>

//             </div>

//             <div className='flex justify-between items-center'>
//                 <h1 className='text-3xl my-8'>Book List</h1>
//                 <Link to='/books/create'>
//                     <MdOutlineAddBox className='text-sky-800 text-4xl' />

//                 </Link>
//             </div>
//             {loading ? <Spinner /> : showType === 'table' ? (<BookTable books={books} />) : <BooksCard books={books} />}
//         </div>
//     )
// }

// export default Home;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { MdOutlineAddBox } from 'react-icons/md';
// import Spinner from '../components/Spinner';
// import BookTable from '../components/home/BookTable';
// import BooksCard from '../components/home/BooksCard';

// const Home = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [showType, setShowType] = useState('table');

//     const API_URL = import.meta.env.VITE_API_URL;

//     useEffect(() => {
//         setLoading(true);
//         axios.get(`${API_URL}/books`)
//             .then((res) => {
//                 setBooks(res.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 setLoading(false);
//             });
//     }, [API_URL]);

//     return (
//         <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
//             {/* View Switch Buttons */}
//             <div className="flex justify-center items-center gap-4 mb-6">
//                 <button
//                     className={`px-5 py-2 rounded-lg font-semibold transition-colors ${showType === 'table' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800 hover:bg-blue-400'
//                         }`}
//                     onClick={() => setShowType('table')}
//                 >
//                     Table View
//                 </button>
//                 <button
//                     className={`px-5 py-2 rounded-lg font-semibold transition-colors ${showType === 'card' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800 hover:bg-blue-400'
//                         }`}
//                     onClick={() => setShowType('card')}
//                 >
//                     Card View
//                 </button>
//             </div>

//             {/* Header + Add Button */}
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Book List</h1>
//                 <Link to="/books/create" className="hover:scale-110 transition-transform">
//                     <MdOutlineAddBox className="text-blue-700 text-5xl md:text-6xl" />
//                 </Link>
//             </div>

//             {/* Content */}
//             <div>
//                 {loading ? (
//                     <div className="flex justify-center mt-20">
//                         <Spinner />
//                     </div>
//                 ) : showType === 'table' ? (
//                     <BookTable books={books} />
//                 ) : (
//                     <BooksCard books={books} />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import Spinner from '../components/Spinner';
import BookTable from '../components/home/BookTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API_URL}/books`)
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [API_URL]);

    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
            {/* View Switch Buttons */}
            <div className="flex justify-center items-center gap-4 mb-6">
                <button
                    className={`px-5 py-2 rounded-lg font-semibold transition-colors ${showType === 'table' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800 hover:bg-blue-400'
                        }`}
                    onClick={() => setShowType('table')}
                >
                    Table View
                </button>
                <button
                    className={`px-5 py-2 rounded-lg font-semibold transition-colors ${showType === 'card' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800 hover:bg-blue-400'
                        }`}
                    onClick={() => setShowType('card')}
                >
                    Card View
                </button>
            </div>

            {/* Header + Add Button */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Book List</h1>
                <Link to="/books/create" className="hover:scale-110 transition-transform">
                    <MdOutlineAddBox className="text-blue-700 text-5xl md:text-6xl" />
                </Link>
            </div>

            {/* Content */}
            <div>
                {loading ? (
                    <div className="flex justify-center mt-20">
                        <Spinner />
                    </div>
                ) : showType === 'table' ? (
                    <BookTable books={books} />
                ) : (
                    <BooksCard books={books} />
                )}
            </div>
        </div>
    );
};

export default Home;