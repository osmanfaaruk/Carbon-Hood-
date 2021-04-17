import React, { useEffect, useState } from "react";


const OrderList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("https://damp-wildwood-49631.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [orderList]);


  const updateStatus = data => {
    console.log('updating', data.name);
  }

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Customer Email</th>
          <th scope="col">Service Name</th>
          <th scope="col">Service Cost</th>
          <th scope="col">Booking Date</th>
          <th scope="col">Select Status</th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((list) => (
          <tr>
            {/* <th scope="row">1</th> */}
            <td>{list.email}</td>
            <td>{list.serviceName}</td>
            <td>${list.serviceCost}</td>
            <td>{list.date}</td>
            <td>
              <div className="dropdown">
                <p
                  className="btn btn-info dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Status
                </p>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <p onClick={updateStatus}  name="On Going"className="dropdown-item">On Going</p>
                  </li>
                  <li>
                    <p onClick={updateStatus} name="P" className="dropdown-item">Pending</p>
                  </li>
                  <li>
                    <p onClick={updateStatus}  className="dropdown-item">Done</p>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
