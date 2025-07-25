package com.example.librarymanagement.service;

import com.example.librarymanagement.repository.BookRepository;


public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void processBook() {
        System.out.println("BookService: processing book");
        bookRepository.fetchBook();
    }
}
