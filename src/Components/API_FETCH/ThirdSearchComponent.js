import React, { useState } from "react";
import { Table, Input } from "antd";
import { userColumns } from "./column";
import { useTableSearch } from "./useTableSearch";
import {fetchUsers} from "../API/api"

import {fetchUsers2} from "../API/api"
import { useEffect } from "react";

const { Search } = Input;


// const fetchUsers = async () => {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/users/"
//   );
//   return { data };
// };


export default function ThirdSearch() {
  const [searchVal, setSearchVal] = useState(null);
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: fetchUsers
  });
  return (
    <>
      <Search
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        style={{ position: "sticky", top: "0", left: "0" }}
      />
      <br /> <br />
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={userColumns}
        loading={loading}
        pagination={false}
      />
    </>
  );
}