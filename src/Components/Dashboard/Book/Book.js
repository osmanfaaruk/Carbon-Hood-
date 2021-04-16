import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import BookList from "./BookList";

const Book = () => {
  const [bookings, setBooking] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/bookList?email="+loggedInUser.email)
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div>
      {bookings.map(order => (
        <BookList bookList={order}></BookList>
      ))}
    </div>
  );
};

export default Book;
