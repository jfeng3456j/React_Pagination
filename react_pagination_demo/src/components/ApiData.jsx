import { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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

  // get Current posts
  const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10 (last index)
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0 (first index)
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // posts.slice(0, 10)

  //onclick change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>API Data</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default ApiData;
