import React from 'react';

interface IProps
{
    title: string,
    author: string,
    price: number,
    removeBook: (title: string) => void;
}
const Book = ({ title, author, price, removeBook }: IProps) =>
{
    return (
        <div style={{ backgroundColor: 'lightgoldenrodyellow', padding: '25px', borderTopRightRadius: '15px', borderBottomLeftRadius: '15px' }} className="my-3">
            <h3>Book Title: {title}</h3>
            <h5>Author: {author}</h5>
            <h5>Price: {price}$</h5>
            <button className="btn btn-danger" onClick={() => removeBook(title)}>Remove</button>
        </div>
    );
};

export default Book;