// import BookSingleCard from "./BookSingleCard";

// const BooksCard = ({ books }) => {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {books.map((item) => (
//         <BookSingleCard
//           key={item._id}
//           books={item}
//         />
//       ))}
//     </div>
//   );
// };

// export default BooksCard;

import { useState } from "react";
import BookSingleCard from "./BookSingleCard";
import BookModel from "./BookModel";

const BooksCard = ({ books }) => {

    const [showModel, setShowModel] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleOpenModel = (book) => {
        setSelectedBook(book);
        setShowModel(true);
    };

    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {books.map((item) => (
                    <BookSingleCard
                        key={item._id}
                        books={item}
                        openModel={() => handleOpenModel(item)}
                    />
                ))}
            </div>

            {showModel && (
                <BookModel
                    book={selectedBook}
                    onClose={() => setShowModel(false)}
                />
            )}
        </>
    );
};

export default BooksCard;