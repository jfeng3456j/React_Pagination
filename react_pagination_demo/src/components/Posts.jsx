const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="table-responsive mb-4"
      style={{ maxHeight: "600px", minHeight: "600px", overflowY: "auto" }}
    >
      <table className="table table-striped table-hover mb-0">
        <thead>
          <tr>
            <th scope="col" style={{ width: "2.5%" }}>
              ID
            </th>
            <th scope="col" style={{ width: "22.5%" }}>
              Title
            </th>
            <th scope="col" style={{ width: "75%" }}>
              Content
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td style={{ textAlign: "left" }}>{post.title} </td>
              <td
                style={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  textAlign: "left",
                }}
              >
                {post.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
