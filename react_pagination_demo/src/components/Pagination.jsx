const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  //Ellipses logic
  const getPageNum = () => {
    const pages = [];

    const maxVisiblePages = 5; // Maximum number of visible pages

    if (totalPages <= maxVisiblePages + 2) {
      //display all pages if total pages <= 7 (5 + 2 ellipses)
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    // display first page
    pages.push(1);

    //display ellipsis at 2 and > 3
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    //adjust near beginning
    if (currentPage <= 3) {
      end = 4;
    }

    //adjust near end
    if (currentPage >= totalPages - 2) {
      start = totalPages - 3;
    }

    //add ellipsis after 1st page
    if (start > 2) {
      pages.push("ellipsis-start");
    }

    //add middle pages
    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    //add ellipsis before last page
    if (end < totalPages - 1) {
      pages.push("ellipsis-end");
    }

    // always display last pages
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumToDisplay = getPageNum();

  const handleEllipsisClick = (type) => {
    if (type === "ellipsis-start") {
      const targetPage = Math.max(2, currentPage - 3);
      paginate(targetPage);
    } else if (type === "ellipsis-end") {
      // add ellipsis from page 3 and on forward
      const targetPage = Math.min(totalPages - 1, currentPage + 3);
      paginate(targetPage);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center mb-0">
        {/* first page button */}
        <li>
          <a
            className="page-link"
            href="!#"
            aria-label="Frist"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default link behavior
              if (currentPage !== 1) {
                paginate(1);
              } else {
                // Handle the case where the current page is already the first page
                console.log("Already on the first page");
              }
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {/* previous page button */}
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
            <span aria-hidden="true">&lsaquo;</span>
          </a>
        </li>

        {/* display page numbers and  ellipses logic */}
        {pageNumToDisplay.map((number, index) => (
          <li
            key={index}
            className={`page-item ${number === currentPage ? "active" : ""}
                      ${typeof number === "string" ? "ellipsis" : ""}`}
          >
            {typeof number === "string" ? (
              <a
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  handleEllipsisClick(number);
                }}
                className="page-link"
                title="Jump to nearby pages"
              >
                ...
              </a>
            ) : (
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
            )}
          </li>
        ))}
        {/* next page button */}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="!#"
            aria-label="Next"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                paginate(currentPage + 1);
              }
            }}
          >
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </li>

        {/* last page button */}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href="#!"
            aria-label="Last"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                paginate(totalPages);
              }
            }}
          >
            <span aria-hidden="true"> &raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
