"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Booking Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br /><br />

        <input name="email" placeholder="Email" onChange={handleChange} />
        <br /><br />

        <input name="date" type="date" onChange={handleChange} />
        <br /><br />

        <input name="time" type="time" onChange={handleChange} />
        <br /><br />

        <textarea name="message" placeholder="Message" onChange={handleChange} />
        <br /><br />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}