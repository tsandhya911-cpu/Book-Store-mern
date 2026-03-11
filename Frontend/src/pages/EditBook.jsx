// import axios from "axios";
// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom";
// import BackButton from "../components/BackButton";
// import Spinner from "../components/Spinner";
// import { useSnackbar } from "notistack";
// const EditBook = () => {

//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [publishYear, setPublishYear] = useState('')
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const { id } = useParams();
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:5555/books/${id}`)
//       .then((res) => {
//         setAuthor(res.data.author);
//         setPublishYear(res.data.publishYear);
//         setTitle(res.data.title)
//         setLoading(false);
//       }).catch((error) => {
//         setLoading(false);
//         alert('An error happened.Please check console')
//         console.log(error);
//       })
//   }, [])

//   const handleEditBook = () => {
//     const data = {
//       title,
//       author,
//       publishYear
//     };
//     setLoading(true);
//     axios
//       .put(`http://localhost:5555/books/${id}`, data)
//       .then(() => {
//         setLoading(false);
//         enqueueSnackbar("Book editd duccessfully", { variant: "success" })
//         navigate('/')
//       })
//       .catch((error) => {
//         setLoading(false);
//         // alert('An error happened.Please check console')
//         enqueueSnackbar("Error", {variant:"error"})
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
//         <button className="p-2  bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
//       </div>
//     </div>
//   )
// }

// export default EditBook;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error fetching book details", { variant: "error" });
        console.error(error);
      });
  }, [id, enqueueSnackbar]);

  const handleEditBook = () => {
    if (!title || !author || !publishYear) {
      enqueueSnackbar("Please fill all fields", { variant: "warning" });
      return;
    }

    const data = { title, author, publishYear };
    setLoading(true);

    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book updated successfully", { variant: "success" });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error updating book", { variant: "error" });
        console.error(error);
      });
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <BackButton />

      <h1 className="text-3xl md:text-4xl font-bold my-6 text-gray-800">
        Edit Book
      </h1>

      {loading && (
        <div className="flex justify-center my-6">
          <Spinner />
        </div>
      )}

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        {/* Title */}
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

        {/* Author */}
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

        {/* Publish Year */}
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
          onClick={handleEditBook}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditBook;