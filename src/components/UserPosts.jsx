import { useEffect, useState } from "react";
import axios from "axios";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get("https://campusbazzarbackend.onrender.com/api/posts/user");
        if (response.data.status) {
          setPosts(response.data.posts);
                        console.log("posts -> ", posts);
          
        } else {
          setError("Failed to load posts.");
        }
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  if (loading) return <p className="text-center">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Posts</h2>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts found.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="border p-4 rounded-lg shadow">
              {post.images.length > 0 && (
                <img
                  src={post.images[0]}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h3 className="text-xl font-bold mt-2">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-700 font-semibold">Price: ${post.price}</p>
              <p className="text-sm text-gray-500">Category: {post.category}</p>
              <p className="text-sm text-gray-400">Likes: {post.likeCount}</p>
              <p className="text-xs text-gray-400">
                Posted on: {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPosts;
