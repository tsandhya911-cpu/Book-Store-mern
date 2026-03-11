// import axios from "axios";
// import { useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import BackButton from "../components/BackButton";
// import Spinner from "../components/Spinner";
// import { useSnackbar } from 'notistack';


// const DeleteBook = () => {
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { enqueueSnackbar } = useSnackbar()
//   const handleDeleteBook = () => {
//     setLoading(false);
//     axios
//       .delete(`http://localhost:5555/books/${id}`)
//       .then(() => {
//         setLoading(false);
//         enqueueSnackbar("Book Delete successfully", { variant: 'success' })
//         navigate('/');
//       })
//       .catch((error) => {
//         setLoading(false);
//         // alert('An error happened.Please check console')
//         enqueueSnackbar("error"), { variant: "error" }
//         console.log(error);
//       })
//   };





//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4">DeleteBook</h1>
//       {loading ? <Spinner /> : ''}
//       <div className="flex flex-col items-center border-2 border-sky-500  rounded-xl w-[600px] p-8 mx-auto">

//         <h3 className="text-2xl">Are you Sure You wnt to Delete this Book ?</h3>
//         <button className="p-4 bg-red-400 text-white m-8 w-full" onClick={handleDeleteBook}>
//           Yes, Delete it
//         </button>
//       </div>
//     </div>
//   )
// }

// export default DeleteBook

import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: 'success' });
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
        Delete Book
      </h1>

      {loading && (
        <div className="flex justify-center my-6">
          <Spinner />
        </div>
      )}

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 border border-red-400 flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
          Are you sure you want to delete this book?
        </h3>

        <button
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;