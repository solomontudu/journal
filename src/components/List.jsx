import ListItem from "./ListItem";

export default function List({ suspense }) {
  return (
    <div className="list">
      {suspense ? (
        suspense.map((txn) => (
          <ListItem
            key={txn.id}
            id={txn.id}
            name={txn.name}
            date={new Date().getFullYear}
            reason={txn.reason}
            amount={txn.amount}
          />
        ))
      ) : (
        <p>no items found</p>
      )}
    </div>
  );
}
