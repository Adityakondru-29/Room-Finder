import React, { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("home");
  const [role, setRole] = useState("finder");
  const [rooms, setRooms] = useState([]);

  const addRoom = (e) => {
    e.preventDefault();
    const form = e.target;
    const room = {
      location: form.location.value,
      rent: form.rent.value,
      contact: form.contact.value,
    };
    setRooms([...rooms, room]);
    form.reset();
    alert("Room added successfully!");
  };

  return (
    <div className="app">
      {tab === "home" && (
        <div className="home">
          <h1>Room Finder</h1>
          <p>Find or Post Rooms Easily</p>

          <div className="tabs">
            <button
              className={role === "finder" ? "active" : ""}
              onClick={() => setRole("finder")}
            >
              House Finder
            </button>
            <button
              className={role === "owner" ? "active" : ""}
              onClick={() => setRole("owner")}
            >
              Owner
            </button>
          </div>

          <button className="primary" onClick={() => setTab(role)}>
            Continue
          </button>
        </div>
      )}

      {tab === "owner" && (
        <div className="screen">
          <h2>Owner Dashboard</h2>

          <form className="form" onSubmit={addRoom}>
            <input name="location" placeholder="Location" required />
            <input name="rent" placeholder="Rent" required />
            <input name="contact" placeholder="Contact Number" required />
            <button type="submit">Add Room</button>
          </form>

          <button className="link" onClick={() => setTab("home")}>
            ⬅ Back
          </button>
        </div>
      )}

      {tab === "finder" && (
        <div className="screen">
          <h2>Available Rooms</h2>

          {rooms.length === 0 && <p>No rooms available</p>}

          {rooms.map((room, index) => (
            <div className="card" key={index}>
              <h3>{room.location}</h3>
              <p>💰 Rent: ₹{room.rent}</p>
              <p>📞 {room.contact}</p>
            </div>
          ))}

          <button className="link" onClick={() => setTab("home")}>
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
