import { useState } from "react";

function Program4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedName(name);
    setSubmittedEmail(email);
  }

  return (
    <div>
      <h2>Program 4 - Student Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {submittedName && (
        <div>
          <h3>Submitted Information</h3>
          <p>Name: {submittedName}</p>
          <p>Email: {submittedEmail}</p>
        </div>
      )}
    </div>
  );
}

export default Program4;