import { useState, useEffect } from "react";

function Program6() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Program 6 - User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong> - {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Program6;