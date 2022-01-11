import React, { useState } from "react";
import { UserInfo } from "../Components/UserList";

export const SearchComponent = (props) => {
  const { users } = props;
  const [searchUserList, setList] = useState([]);
  const [inputData, setData] = useState();
  const handleSearch = () => {
    console.log("InputDat--", inputData);
    const data = users.filter((e, index, arr) => e.name.startsWith(inputData));
    console.log("data--", data);
    setList(data);
  };

  const handleChange = (e) => {
    // console.log(e.target.d)
  };

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <button onClick={handleSearch}>Search </button>
      </div>
      <div>
        {searchUserList &&
          searchUserList.map((e) => <UserInfo user={e} hideCheckBox={true} />)}
      </div>
    </>
  );
};
