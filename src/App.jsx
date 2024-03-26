import { useState } from "react";
import { v4 as genId } from "uuid";
import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import List from "./components/List";
import Navigation from "./components/Navigation";


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
  const [page, setPage] = useState("home");
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
