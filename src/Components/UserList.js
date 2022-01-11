import React, { useState } from "react";

export const UserList = (props) => {
  const { users = [] } = props;
  console.log("users in list", users);
  const [checkedArray, setArray] = useState([]);
  const handleCheckBox = (e, id) => {
    console.log("checking id event", e);

    const selectedUser = users.find((e, index) => e.id === id);
    if (e.target.checked) {
      setArray([...checkedArray, selectedUser]);
    } else {
      //unchecked remove the user in list
      const userToBeRemoved = checkedArray.filter(
        (e, index, arr) => e.id !== id
      );
      console.log("userToBeRemoved id", userToBeRemoved);
      setArray([...userToBeRemoved]);
    }

    console.log("checking selectedUser", selectedUser);
  };

  return (
    <>
      <div>
        <h1>List Of Users</h1>
        {users &&
          users.map((e) => (
            <UserInfo user={e} handleCheckBox={handleCheckBox} />
          ))}
      </div>
      <div>
        <h1>Selected Users </h1>
        {checkedArray && checkedArray.map((e) => <div>{e.name}</div>)}
      </div>
    </>
  );
};

export const UserInfo = (props) => {
  const { user, handleCheckBox, hideCheckBox = false } = props;
  const id = user.id;
  return (
    <div>
      <li>{user.name}</li>
      {!hideCheckBox && <li>{user.email}</li>}
      {!hideCheckBox && (
        <input
          type="checkbox"
          name="users"
          onClick={(e) => handleCheckBox(e, id)}
        />
      )}
    </div>
  );
};

// style={{ display: "flex", margin: "auto"}}
