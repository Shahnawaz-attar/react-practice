import React, { useEffect, useState } from "react";

const API = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userList = users.map(user => {
    return <h4 key={user.id}>{user.name}</h4>;
  });

  return <div>{userList}</div>;
};

export default API;
