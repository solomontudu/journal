import { useState } from "react";
import { v4 as genId } from "uuid";
import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import List from "./components/List";
import Navigation from "./components/Navigation";

const data = [
  {
    id: 1,
    date: "18-01-2024",
    name: "Mithun Khadka",
    reason: "Buying farm supplies",
    amount: 12500,
  },
  {
    id: 2,
    date: "19-01-2024",
    name: "Major Shimray",
    reason: "Buying school supplies",
    amount: 30500,
  },
  {
    id: 3,
    date: "01-02-2024",
    name: "Solomon Tudu",
    reason: "Bank travel expense",
    amount: 2000,
  },
  {
    id: 4,
    date: "10-02-2024",
    name: "Roben Mardi",
    reason: "Vehicle fuel",
    amount: 5000,
  },
];

const emptyData = [];

function App() {
  const [page, setPage] = useState("home");
  const [suspense, setSuspense] = useState([]);

  function handleDelete(id) {
    const newSuspense = suspense.filter((txn) => txn.id !== id);
    setSuspense(newSuspense);
  }

  function handleAddItem(name, description, amount) {
    const id = genId();
    const date = Date.now();

    setSuspense((suspense) => [
      ...suspense,
      { id, date, name, reason: description, amount },
    ]);

    console.log(suspense);
  }

  return (
    <div className="window">
      <Navigation setPage={setPage} page={page} />

      {page === "home" && <Home suspense={suspense.length} setPage={setPage} />}
      {page === "create" && <Create handleAddItem={handleAddItem} />}
      {page === "list" && (
        <List
          setSuspense={setSuspense}
          suspense={suspense}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
