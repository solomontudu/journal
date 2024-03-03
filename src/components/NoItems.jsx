export default function NoItems({ handleAddSuspense }) {
  return (
    <div className="no-items">
      <p>There are no suspense</p>

      {handleAddSuspense && (
        <button onClick={handleAddSuspense}>Click to add a suspense</button>
      )}
      {/* <button onClick={handleAddSuspense}>Click to add a suspense</button> */}
    </div>
  );
}
