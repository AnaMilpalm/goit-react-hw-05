import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsByUserId } from "../../services/api";

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPostsByUserId(userId);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    getData();
  }, [userId]);
  if (!posts.length) {
    return <h2>Loaing...</h2>;
  }
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
