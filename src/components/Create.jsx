import { useState } from "react";

export default function Create({ handleAddItem }) {
  const [name, setName] = useState();
  // const [date, setDate] = useState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function formValidate(e) {
    e.preventDefault();

    const curSuspense = {
      name,
      // date,
      description,
      amount,
    };

    setName("");
    // setDate("");
    setDescription("");
    setAmount(0);

    handleAddItem(
      curSuspense.name,
      // curSuspense.date,
      curSuspense.description,
      curSuspense.amount
    );
  }

  return (
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
        <input
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Why is the suspense being given out?"
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
  );
}
