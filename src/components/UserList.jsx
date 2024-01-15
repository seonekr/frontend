import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* ... existing code ... */}
            {user.image_url && (
              <>
                , <strong>Image:</strong>{" "}
                <img
                  src={`http://localhost:8000${user.image_url}`}
                  alt={`Profile of ${user.username}`}
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
                {console.log("Image URL:", user.image_url)}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
