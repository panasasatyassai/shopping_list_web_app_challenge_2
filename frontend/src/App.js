import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";  

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", category: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/items");
    setItems(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/items/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post("http://localhost:5000/api/items", form);
    }
    setForm({ name: "", quantity: "", category: "" });
    fetchItems();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`);
    fetchItems();
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, quantity: item.quantity, category: item.category });
    setEditingId(item.id);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? "Update" : "Add"} Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span className="item-text">
              <b>{item.name}</b> – {item.quantity} ({item.category})
            </span>
            <span>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
