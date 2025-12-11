const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ol className="list-group mb-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="list-group-item"
          style={{ textAlign: "left" }}
        >
          {post.title}
        </li>
      ))}
    </ol>
  );
};

export default Posts;
