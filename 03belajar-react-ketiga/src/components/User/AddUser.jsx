import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddUser = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/users", {
        name,
        job,
      });
      console.log("User berhasil ditambahkan:", response.data);
      setError("");
      // Redirect
    } catch (error) {
      console.error("Gagal menambah data user:", error.response.data);
      setError("Gagal menambah data user");
    }
  };

  return (
    <div>
      <h2>AddUser</h2>
      <Form onSubmit={handleAddUser}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Job
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Job"
              name="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Add User</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddUser;
