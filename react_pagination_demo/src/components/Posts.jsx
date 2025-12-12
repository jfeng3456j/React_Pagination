const Posts = ({ posts, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  /*return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="list-group-item"
          style={{ textAlign: "left" }}
        >
          {post.id} ...
          {post.title}
        </li>
      ))}
    </ul>
  );*/

  return (
    <div className="table-responsive mb-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" style={{ width: "5%" }}>
              ID
            </th>
            <th scope="col" style={{ width: "25%" }}>
              Title
            </th>
            <th scope="col" style={{ width: "70%" }}>
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
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
