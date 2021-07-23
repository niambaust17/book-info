import React, { useState } from 'react';
import Book from './Book';

interface IBook
{
    title: string,
    author: string,
    price: number,
}
const Books = () =>
{
    const [bookInfo, setBookInfo] = useState<IBook>({} as IBook);
    const [bookInfoList, setBookInfoList] = useState<IBook[]>([]);

    const onClick = () =>
    {
        setBookInfoList([...bookInfoList, bookInfo]);
        setBookInfo({
            title: "",
            author: "",
            price: 0
        });
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setBookInfo({ ...bookInfo, [e.target.name]: e.target.value })

    const removeBook = (title: string) =>
    {
        const newBookInfoList = bookInfoList.filter(b => b.title !== title);
        setBookInfoList(newBookInfoList);
    }

    return (
        <div className="container">
            <div style={{ backgroundColor: 'lightgray', padding: '25px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
                <h1>Books Information</h1>
                <div>
                    <input type="text" className="form-control mb-3" value={bookInfo.title} onChange={onChange} name="title" placeholder="Book Title" id="" />
                    <input type="text" className="form-control mb-3" value={bookInfo.author} onChange={onChange} name="author" placeholder="Book Author" id="" />
                    <input type="number" className="form-control mb-3" value={bookInfo.price} onChange={onChange} name="price" placeholder="Book Price" id="" />
                    <button className="btn btn-success" onClick={onClick}>Add Book</button>
                </div>
            </div>
            {
                bookInfoList.map(book => <Book key={book.title} title={book.title} author={book.author} price={book.price} removeBook={removeBook} />)
            }
        </div>
    );
};

export default Books;