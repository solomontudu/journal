import ListItem from "./ListItem";
import NoItems from "./NoItems";

export default function List({ suspense, handleDelete, handleAddSuspense }) {
  return (
    <div className="list">
      {suspense.length ? (
        suspense.map((txn) => (
          <ListItem
            id={txn.id}
            name={txn.name}
            date={txn.date}
            reason={txn.reason}
            amount={txn.amount}
            handleDelete={handleDelete}
            key={txn.id}
          />
        ))
      ) : (
        <NoItems handleAddSuspense={handleAddSuspense} />
      )}
    </div>
  );
}
