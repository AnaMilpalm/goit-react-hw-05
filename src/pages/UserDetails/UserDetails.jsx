import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchUserById } from "../../services/api";

const UserDetails = () => {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUserById(userId);
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    getData();
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <img src={user.image} alt={`${user.image} ${user.lastName}`} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <nav>
        <Link to="info">Show info</Link>
        <Link to="posts">Show posts</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetails;
