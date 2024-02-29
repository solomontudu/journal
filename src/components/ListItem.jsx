export default function ListItem({
  id,
  date,
  name,
  reason,
  amount,
  handleDelete,
}) {
  const suspenseDate = new Date(date);
  let dayMonth = `${suspenseDate.getDate()}-${suspenseDate.getMonth() + 1}`;

  const year = new Date(date).getFullYear();

  return (
    <div className="listItem">
      <div className="listItem-header">
        <p>{dayMonth}</p>
        <span>{year}</span>
      </div>
      <div className="listItem-details">
        <div>
          <p>{name}</p>
          <p>{`${reason} - Rs. ${amount}/--`}</p>
        </div>
        <div onClick={() => handleDelete(id)}>
          <svg
            fill="var(--red-light)"
            width="800px"
            height="800px"
            viewBox="-1.7 0 20.4 20.4"
          >
            <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
