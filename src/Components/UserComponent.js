import React, { useState, useEffect } from "react";
import { UserList } from "./UserList";
import { SearchComponent } from "./SearchComponent";

export const UserComponent = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let d = getUsers();

    const fn = async () => {
      d = await getUsers();
      console.log("jgjsd--", d);
      setUsers(d);
    };
    fn();
  }, []);
  return (
    <>
      <SearchComponent users={users} />
      <UserList users={users} />
    </>
  );
};

export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("resposne--", res);
  const data = await res.json();
  console.log("data--", data);
  return data;
  // return "";
};
