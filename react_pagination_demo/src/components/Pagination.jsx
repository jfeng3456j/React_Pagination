const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
