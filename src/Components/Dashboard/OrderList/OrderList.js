import React, { useEffect, useState } from "react";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [status, setStatus] = useState([])

  useEffect(() => {
    fetch("https://damp-wildwood-49631.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [orderList]);

    const updateData = (id) => {
      const url = `https://damp-wildwood-49631.herokuapp.com/update/${id}`
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(status)
      })
          .then(res => {
              if (res) {
                  console.log(res)
                  alert('Your status has been updated successfully');
              }
          })
    }


  const updateStatus = (e) => {
    const data = {...status}
        data[e.target.name] = e.target.value;
        setStatus(data)
        // setShow(true);
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
            <td>{list.email}</td>
            <td>{list.serviceName}</td>
            <td>${list.serviceCost}</td>
            <td>{list.date}</td>
            <td>
                <h3>
                  <select 
                    value={list.status}
                    onChange={updateStatus}
                    className="form-control text center btn btn-dark"
                    name="status"
                  >
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Done</option>
                  </select>
                </h3>
                    <button className="btn btn-success"onClick={() => updateData(list._id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
