import { useState, useEffect } from "react";
import Posts from "./Posts";

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPages, setPostsPerPage] = useState(10);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      };

      fetchData();
    } catch (exception) {
      console.log(exception);
    }
  }, []);

  console.log(posts);

  return (
    <div className="container">
      <h1>API Data</h1>
      <Posts posts={posts} loading={loading} className='container'/>
    </div>
  );
}

export default ApiData;
