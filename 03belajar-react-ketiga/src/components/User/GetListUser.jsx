import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const GetListUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        console.log("Daftar users:", response.data.data);
        setUsers(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil data users:", error.response.data);
        setError("Gagal mengambil data users");
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>GetListUser</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul> */}
      <Button variant="primary">AddUser</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>Edit Delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GetListUser;
