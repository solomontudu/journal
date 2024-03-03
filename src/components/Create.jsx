import { useState } from "react";
import List from "./List";

export default function Create({ handleAddItem, suspense, handleDelete }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function formValidate(e) {
    e.preventDefault();

    handleAddItem(name, description, amount);
    setName("");
    setDescription("");
    setAmount(0);
  }

  return (
    <>
      <form className="create" onSubmit={formValidate} method="post">
        <div>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="For what?"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Create</button>
        </div>
      </form>
      <List suspense={suspense} handleDelete={handleDelete} />
    </>
  );
}
