import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    getData();
  }, []);

  const query = searchParams.get("query") ?? "";
  const filteredData = users.filter((user) =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );
  const handleSetQuery = (newValue) => {
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <h1>Users</h1>
      <SearchBar handleSetQuery={handleSetQuery} />
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>
            <Link to={user.id.toString()}>
              {user.firstName} &nbsp;
              {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
