// import axios from "axios";
// import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import BackButton from "../components/BackButton";
// import Spinner from "../components/Spinner";
// import { useSnackbar } from "notistack";

// const CreateBook = () => {

//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [publishYear, setPublishYear] = useState('')
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const handleSaveBook = () => {
//     const data = {
//       title,
//       author,
//       publishYear
//     };
//     setLoading(true);

//     axios
//       .post('http://localhost:5555/books', data)
//       .then(() => {
//         setLoading(false);
//         enqueueSnackbar("Book Created successfully", { variant: 'success' })
//         navigate('/')

//       })
//       .catch((error) => {
//         setLoading(false);
//         // alert('An error happened.Please check console')
//         enqueueSnackbar("error"), { variant: "error" }
//         console.log(error);
//       })
//   }
//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4">Create Book</h1>
//       {loading ? <Spinner /> : ''}
//       <div className="flex flex-col border-2 border-sky-400  rounded-xl w-[600px] p-4 mx-auto">
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Title</label>
//           <input
//             type='text'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />


//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Author</label>
//           <input
//             type='text'
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Publish Year</label>
//           <input
//             type='number'
//             value={publishYear}
//             onChange={(e) => setPublishYear(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />
//         </div>
//         <button className="p-2  bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
//       </div>
//     </div>
//   )
// }

// export default CreateBook;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    if (!title || !author || !publishYear) {
      enqueueSnackbar("Please fill all fields", { variant: "warning" });
      return;
    }

    const data = { title, author, publishYear };
    setLoading(true);

    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error occurred! Check console", { variant: "error" });
        console.error(error);
      });
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <BackButton />

      <h1 className="text-3xl md:text-4xl font-bold my-6 text-gray-800">
        Create Book
      </h1>

      {loading && (
        <div className="flex justify-center my-6">
          <Spinner />
        </div>
      )}

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter book title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter author name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter publish year"
          />
        </div>

        <button
          onClick={handleSaveBook}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;