import ListItem from "./ListItem";

export default function List({ suspense, handleDelete }) {
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
        <p>no items found</p>
      )}
    </div>
  );
}
