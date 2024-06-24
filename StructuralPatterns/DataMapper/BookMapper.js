const mongoose = require('mongoose');
const Book = require('../domain/Book');

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedYear: Number
});

const BookModel = mongoose.model('Book', bookSchema);

class BookMapper {
    static async insert(book) {
        const bookModel = new BookModel({
            title: book.title,
            author: book.author,
            publishedYear: book.publishedYear
        });
        await bookModel.save();
        return new Book(bookModel._id, bookModel.title, bookModel.author, bookModel.publishedYear);
    }

    static async findById(id) {
        const bookModel = await BookModel.findById(id);
        if (bookModel) {
            return new Book(bookModel._id, bookModel.title, bookModel.author, bookModel.publishedYear);
        }
        return null;
    }

    static async update(book) {
        const bookModel = await BookModel.findById(book.id);
        if (bookModel) {
            bookModel.title = book.title;
            bookModel.author = book.author;
            bookModel.publishedYear = book.publishedYear;
            await bookModel.save();
            return new Book(bookModel._id, bookModel.title, bookModel.author, bookModel.publishedYear);
        }
        return null;
    }

    static async delete(id) {
        const result = await BookModel.findByIdAndDelete(id);
        return result != null;
    }
}

module.exports = BookMapper;
