
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const API_URL = import.meta.env.VITE_API_URL;                        

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <BackButton />

      <h1 className="text-3xl md:text-4xl font-bold my-6 text-gray-800">
        Book Details
      </h1>

      {loading ? (
        <div className="flex justify-center mt-20">
          <Spinner />
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <div className="mb-4 flex justify-between">
            <span className="font-semibold text-gray-500">ID:</span>
            <span className="text-gray-700 break-all">{book._id}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="font-semibold text-gray-500">Title:</span>
            <span className="text-gray-800">{book.title}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="font-semibold text-gray-500">Author:</span>
            <span className="text-gray-800">{book.author}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="font-semibold text-gray-500">Publish Year:</span>
            <span className="text-gray-800">{book.publishYear}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="font-semibold text-gray-500">Created At:</span>
            <span className="text-gray-700">
              {book.createdAt ? new Date(book.createdAt).toLocaleString() : "-"}
            </span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="font-semibold text-gray-500">Last Updated:</span>
            <span className="text-gray-700">
              {book.updatedAt ? new Date(book.updatedAt).toLocaleString() : "-"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;