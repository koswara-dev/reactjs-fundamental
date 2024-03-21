import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddUserOld = () => {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    email: "",
    hobbies: [],
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      const updatedHobbies = checked
        ? [...user.hobbies, value]
        : user.hobbies.filter((hobby) => hobby != value);
      setUser({ ...user, hobbies: updatedHobbies });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User yang ditambahkan:", user);
    // Lakukan operasi lain seperti mengirim data ke server
    // POST data ke REST API
  };

  return (
    <Container>
      <h2>Add User</h2>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value="Male"
                  checked={user.gender === "Male"}
                  onChange={handleChange}
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value="Female"
                  checked={user.gender === "Female"}
                  onChange={handleChange}
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalHobby">
            <Form.Label column sm={2}>
              Hobby
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="checkbox"
                name="hobbies"
                value="Hooby 1"
                checked={user.hobbies.includes("Hooby 1")}
                label="Hobby 1"
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                name="hobbies"
                value="Hobby 2"
                checked={user.hobbies.includes("Hobby 2")}
                label="Hobby 2"
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                name="hobbies"
                value="Hobby 3"
                checked={user.hobbies.includes("Hobby 3")}
                label="Hobby 3"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group> */}
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Add User</Button>
            </Col>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default AddUserOld;
