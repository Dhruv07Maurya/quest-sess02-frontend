import React, { useState } from "react";
import Todo from "./Todo"; 

const NgoDashboard = () => {
  
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      address: "123 Main St",
      contact: "+1 234 567 890",
      age: 28,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      address: "456 Oak Ave",
      contact: "+1 234 567 891",
      age: 32,
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michaelb@example.com",
      address: "789 Pine Blvd",
      contact: "+1 234 567 892",
      age: 24,
    },
    {
      id: 4,
      name: "Emma Johnson",
      email: "emmajohnson@example.com",
      address: "101 Maple Rd",
      contact: "+1 234 567 893",
      age: 29,
    },
  ];

  const [selectedRow, setSelectedRow] = useState(null); 
  const [modalOpen, setModalOpen] = useState(false); 

  const handleRowClick = (userData) => {
    setSelectedRow(userData); 
    setModalOpen(true); 
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">NGO - Dashboard</h2>

      <center>
        <p>(Click the User to Assign Task)</p>
      </center>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td onClick={() => handleRowClick(item)}>{item.name}</td>
              <td onClick={() => handleRowClick(item)}>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.contact}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && selectedRow && (
        <Todo
          user={selectedRow} 
          handleCloseModal={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default NgoDashboard;
