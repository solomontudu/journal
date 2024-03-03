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

/**
 * App component.
 *
 * Defines the main application component.
 *
 * Manages state for the current page being viewed,
 * as well as the list of transactions (suspense array).
 *
 * Renders different page components based on current page.
 *
 * Contains handlers to add/delete transactions from suspense.
 */
function App() {
  const [page, setPage] = useState("list");
  const [suspense, setSuspense] = useState([]);

  /**
   * Deletes a transaction from suspense by id.
   *
   * Filters the suspense array to remove the object
   * with the matching id. Updates suspense with
   * the filtered array.
   */
  function handleDelete(id) {
    const newSuspense = suspense.filter((txn) => txn.id !== id);
    setSuspense(newSuspense);
  }

  /**
   * Adds a new transaction item to the suspense array.
   *
   * Generates a new unique ID and current timestamp for the item.
   * Uses the functional setSuspense update to append the new item object
   * to the existing suspense array.
   *
   * Logs suspense array after update.
   */
  function handleAddItem(name, description, amount) {
    const id = genId();
    const date = Date.now();

    setSuspense((suspense) => [
      ...suspense,
      { id, date, name, reason: description, amount },
    ]);

    console.log(suspense);
  }

  /**
   * Renders different page components based on current page state.
   *
   * Uses conditional rendering to show Home, Create, or List page
   * based on the 'page' state value. Passes necessary props like
   * suspense, handlers etc. to each page component.
   */
  return (
    <div className="window">
      <Navigation setPage={setPage} page={page} suspense={suspense} />

      {page === "home" && <Home suspense={suspense.length} setPage={setPage} />}
      {page === "create" && (
        <Create
          handleAddItem={handleAddItem}
          suspense={suspense}
          handleDelete={handleDelete}
        />
      )}
      {page === "list" && (
        <List
          setSuspense={setSuspense}
          suspense={suspense}
          handleDelete={handleDelete}
          handleAddSuspense={() => setPage("create")}
        />
      )}
    </div>
  );
}

export default App;
