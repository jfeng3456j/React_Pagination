import { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPages] = useState(10);

  //get a list of of all current posts
  const indexofLastPost = currentPage * postPerPages;
  const indexOfFirstPost = indexofLastPost - postPerPages;
  const currentPosts = posts.slice(indexOfFirstPost, indexofLastPost);

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1>API Data</h1>
      <Posts posts={currentPosts} loading={loading} className="container" />
      <Pagination
        postPerPages={postPerPages}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ApiData;
