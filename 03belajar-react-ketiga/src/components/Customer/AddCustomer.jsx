import React, { useState } from "react";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    name: "",
    gender: "",
    email: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Customer yang ditambahkan:", customer);
    // Lakukan operasi lain seperti mengirim data ke server
    // POST data ke REST API
  };

  return (
    <div>
      <h2>Form Input Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Customer:</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={customer.gender === "Male"}
            onChange={handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={customer.gender === "Female"}
            onChange={handleChange}
          />
          <label>Female</label>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alamat:</label>
          <textarea
            name="address"
            value={customer.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Tambah Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
