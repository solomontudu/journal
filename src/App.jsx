import { useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import List from "./components/List";
import Navigation from "./components/Navigation";

const data = [
  {
    id: 1,
    date: "18-1-24",
    name: "Mithun Khadka",
    reason: "Buying farm supplies",
    amount: 12500,
  },
  {
    id: 2,
    date: "19-1-24",
    name: "Major Shimray",
    reason: "Buying school supplies",
    amount: 30500,
  },
  {
    id: 3,
    date: "1-2-24",
    name: "Solomon Tudu",
    reason: "Bank travel expense",
    amount: 2000,
  },
  {
    id: 4,
    date: "10-2-24",
    name: "Roben Mardi",
    reason: "Vehicle fuel",
    amount: 5000,
  },
];

const emptyData = [];

function App() {
  const [page, setPage] = useState("list");
  const [suspense, setSuspense] = useState(emptyData);

  return (
    <div className="window">
      <Navigation setPage={setPage} page={page} />

      {page === "home" && <Home suspense={suspense.length} setPage={setPage} />}
      {page === "create" && <Create />}
      {page === "list" && (
        <List setSuspense={setSuspense} suspense={suspense} />
      )}
    </div>
  );
}

export default App;
