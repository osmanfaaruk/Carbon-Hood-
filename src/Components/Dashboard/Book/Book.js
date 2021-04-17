import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import BookList from "./BookList";

const Book = () => {
  const [bookings, setBooking] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://damp-wildwood-49631.herokuapp.com/bookList?email="+loggedInUser.email)
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
