const express = require("express")
const cors = require("cors")
const { v4: uuidv4 } = require("uuid")

const app = express();
app.use(cors());
app.use(express.json());

 
let items = [
  {
    id: uuidv4(),
    name: "Milk",
    quantity: "1 gallon",
    category: "Dairy"
  },
  {
    id: uuidv4(),
    name: "Biscuit",
    quantity: "2 packs",
    category: "Snacks"
  }
];
 
app.get("/api/items", (req, res) => {
  res.json(items);
});
 
app.post("/api/items", (req, res) => {
  const { name, quantity, category } = req.body;

  if (!name || !quantity || !category) {
    return res.status(400).json({ error: "Name, quantity, and category are required" });
  }

  const newItem = {
    id: uuidv4(),
    name,
    quantity,
    category
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

 
app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, quantity, category } = req.body;

  const item = items.find((i) => i.id === id);
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  if (!name || !quantity || !category) {
    return res.status(400).json({ error: "Name, quantity, and category are required" });
  }

  item.name = name;
  item.quantity = quantity;
  item.category = category;
  res.json(item);
});

 
app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});
 
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
