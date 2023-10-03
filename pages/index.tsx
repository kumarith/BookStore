import React from "react";
import Link from "next/link";
import booklist from "./bookslist";
import { useState, useEffect } from "react";
import Search from "components/searchbar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import BookRecord from "components/BookRecord";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("impact"); // State for the search query
  const apiKey = "AIzaSyAnxD1AORZOcLPWRMmBtIWxMRRSrBzyS8Y";

  const booksList = {
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    border: "2px solid #333",
    padding: "20px",
  };

  useEffect(() => {
    async function fetchData() {
      if (searchQuery.trim() === "") {
        setBooks([]);
        return;
      }
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`
        );
        const data = await response.json();
        console.log("results " + data.items.length);
        setBooks(data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }

    fetchData();
  }, [searchQuery]);

  return (
    <div style={booksList}>
      <Search onSearch={(query) => {setSearchQuery(query); }}></Search>
      {books.map((bookItem: any) => (
        <BookRecord book={bookItem}></BookRecord> ))
      }
    </div>
  );
}
