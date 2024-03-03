/**
 * Renders a message when there are no suspense items.
 * Optionally renders a button to add a new suspense item if handleAddSuspense prop is passed.
 */
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
