import { useState } from "react";
import "./AddItemList.css";

function AddItemList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (item.trim() === "") return;

    setItems([...items, item]);
    setItem("");
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Items to List</h2>

        <div className="input-row">
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">No items yet. Add your first one!</p>
        ) : (
          <ul className="list">
            {items.map((it, index) => (
              <li key={index}>
                <span>{it}</span>
                <button
                  className="remove"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AddItemList;
