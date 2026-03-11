
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
                {books.map((item) => (
                    <BookSingleCard
                        key={item._id}
                        books={item}
                        openModel={() => handleOpenModel(item)}
                    />
                ))}
            </div>

            {showModel && selectedBook && (
                <BookModel
                    book={selectedBook}
                    onClose={() => setShowModel(false)}
                />
            )}
        </>
    );
};

export default BooksCard;