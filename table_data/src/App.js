import { useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);

  const handleAdd = () => {
    if (!place || !name || !age) return;

    setPeople([...people, { place, name, age }]);
    setPlace("");
    setName("");
    setAge("");
  };

  const handleClear = () => {
    setPlace("");
    setName("");
    setAge("");
  };

  const handleRemove = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Add People to Table</h1>

      <div className="form">
        <input
          name="place"
          placeholder="e.g. Mumbai"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <input
          name="name"
          placeholder="e.g. Akash"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          name="age"
          placeholder="e.g. 24"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {people.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Name</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.place}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
