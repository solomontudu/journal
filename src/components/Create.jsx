export default function Create() {
  return (
    <div className="create">
      <div>
        <input type="text" placeholder="Name" />
        <input type="date" />
      </div>
      <div>
        <textarea
          name="description"
          id="description"
          cols="42"
          rows="5"
        ></textarea>
      </div>
      <div>
        <input type="number" placeholder="Enter amount"/>
        <button type="submit">Create</button>
      </div>
    </div>
  );
}
