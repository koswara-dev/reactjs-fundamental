import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetListUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

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

  const handleDeleteUser = async () => {
    const response = await axios.delete(
      `https://reqres.in/api/users/${userIdToDelete}`
    );
    console.log(response.status)
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== userIdToDelete)
    );
    setUserIdToDelete(null);
    setShowModal(false);
    setShowToast(true);
  };

  const handleShowModal = (userId) => {
    setUserIdToDelete(userId);
    setShowModal(true);
  };

  return (
    <div>
      <h2>GetListUser</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul> */}
      <Link to="add">
        <Button variant="primary">AddUser</Button>
      </Link>
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
              <td>
                <Link to={`edit/${user.id}`}>Edit</Link>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => handleShowModal(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal konfirmasi penghapusan */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menghapus pengguna ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast pemberitahuan */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">
              <h4>Sukses!</h4>
            </strong>
          </Toast.Header>
          <Toast.Body>Pengguna berhasil dihapus.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default GetListUser;
