import React from "react";
import { useState } from "react";

const NgoRequest = () => {
  const [requests, setRequests] = useState([
    {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
      income: "$45,000",
      address: "123 Main St",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: 25,
      income: "$38,000",
      address: "456 Elm St",
    },
  ]);

  const handleApprove = (index) => {
    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

  return (
    <div className="request-container">
      <h2 className="request-title">Pending Requests</h2> <hr /> <br />
      {requests.length === 0 ? (
        <p className="no-requests">No requests available</p>
      ) : (
        <table className="request-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Income</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.age}</td>
                <td>{request.income}</td>
                <td>{request.address}</td>
                <td>
                  <button
                    className="approve-btn"
                    onClick={() => handleApprove(index)}
                  >
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleReject(index)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NgoRequest;
