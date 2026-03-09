import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModel = ({ book, onClose }) => {
    return (
        <div
            className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[500px] max-w-full bg-white rounded-lg p-5 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose}
                />

                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
                    {book.publishYear}
                </h2>

                <h4 className="my-2 text-gray-500">{book._id}</h4>

                <div className="flex items-center gap-x-2">
                    <PiBookOpenTextLight className="text-red-300 text-2xl" />
                    <h2 className="my-1">{book.title}</h2>
                </div>

                <div className="flex items-center gap-x-2">
                    <BiUserCircle className="text-red-300 text-2xl" />
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <p className="mt-4 font-semibold">
                    About this Book
                </p>

                <p className="my-2 text-gray-600 text-sm leading-relaxed">
                    This book provides valuable knowledge and insights for readers who are interested
                    in learning more about the subject. It explains important concepts in a simple and
                    easy-to-understand way, making it helpful for both beginners and experienced readers.
                    Through practical examples and clear explanations, the book helps readers develop
                    a deeper understanding and improve their skills.
                </p>
            </div>
        </div>
    );
};

export default BookModel;