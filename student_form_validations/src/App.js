import { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    college: "",
    email: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.college.trim()) {
      newErrors.college = "College is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (form.username && form.username !== form.username.toLowerCase()) {
      newErrors.username = "Username must be lowercase only";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>College</label>
        <input name="college" value={form.college} onChange={handleChange} />
        {errors.college && <p className="error">{errors.college}</p>}

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} />
        {errors.address && <p className="error">{errors.address}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
