
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModel = ({ book, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-white bg-opacity-60 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-6 flex flex-col"
            >
                {/* Close Button */}
                <AiOutlineClose
                    className="absolute top-4 right-4 text-3xl text-red-600 hover:text-red-800 cursor-pointer transition-colors"
                    onClick={onClose}
                />

                {/* Publish Year */}
                <span className="self-start px-3 py-1 bg-red-400 text-white font-semibold rounded-lg mb-2">
                    {book.publishYear}
                </span>

                {/* Book ID */}
                <p className="text-gray-400 text-sm mb-3 break-all">{book._id}</p>

                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                    <PiBookOpenTextLight className="text-red-400 text-2xl" />
                    <h2 className="text-lg font-semibold">{book.title}</h2>
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4">
                    <BiUserCircle className="text-red-400 text-2xl" />
                    <p className="text-gray-700">{book.author}</p>
                </div>

                {/* About Section */}
                <h3 className="text-gray-800 font-semibold mb-2">About this Book</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    This book provides valuable knowledge and insights for readers who are interested in
                    learning more about the subject. It explains important concepts in a simple and
                    easy-to-understand way, making it helpful for both beginners and experienced readers.
                    Through practical examples and clear explanations, the book helps readers develop a
                    deeper understanding and improve their skills.
                </p>
            </div>
        </div>
    );
};

export default BookModel;