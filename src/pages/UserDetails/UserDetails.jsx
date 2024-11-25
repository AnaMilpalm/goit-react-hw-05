import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <img src={user.image} alt={`${user.image} ${user.lastName}`} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
    </div>
  );
};

export default UserDetails;
