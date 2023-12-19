"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = ` 
  type Book {
    id:ID
    title: String
    author: String
    category:Category
  }
  type Category{
    id:ID
    name:String
  }

  type Query {
    books: [Book]
    book(id:ID!):Book
    categories:[Category]
    category(id:ID!):Category
  }
`;
