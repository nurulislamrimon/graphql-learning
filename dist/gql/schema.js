"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = ` 
  type Book {
    id:ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(id:ID!):Book
  }
`;
