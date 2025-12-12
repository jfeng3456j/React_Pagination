const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="!#"
            aria-label="Previous"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              href="!#"
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="!#"
            aria-label="Next"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < pageNumbers.length) {
                paginate(currentPage + 1);
              }
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
