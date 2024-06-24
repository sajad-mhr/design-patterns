const BookMapper = require('./dataMapper/BookMapper');
const Book = require('./domain/Book');

(async () => {
    // ایجاد کتاب جدید
    let book = new Book(null, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925);
    book = await BookMapper.insert(book);
    console.log('Book created:', book);

    // یافتن کتاب بر اساس ID
    book = await BookMapper.findById(book.id);
    console.log('Book found:', book);

    // به‌روزرسانی کتاب
    book.title = 'The Great Gatsby (Updated Edition)';
    book = await BookMapper.update(book);
    console.log('Book updated:', book);

    // حذف کتاب
    const deleted = await BookMapper.delete(book.id);
    console.log('Book deleted:', deleted);

    // بستن ارتباط با دیتابیس
    mongoose.connection.close();
})();
