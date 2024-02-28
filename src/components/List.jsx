import ListItem from "./ListItem";

export default function List({ suspense, handleDelete }) {
  return (
    <div className="list">
      {suspense.length ? (
        suspense.map((txn) => (
          <ListItem
            key={txn.id}
            id={txn.id}
            name={txn.name}
            date={txn.date}
            reason={txn.reason}
            amount={txn.amount}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p>no items found</p>
      )}
    </div>
  );
}
