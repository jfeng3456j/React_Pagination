import PaginationConstants from "../Constants/PaginationConstants";
import PaginationNavButton from "./PaginationNavButton";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxVisiblePages = PaginationConstants.DEFAULT_MAX_VISIBLE_PAGES; // Maximum number of visible pages
  const ellipsis_pages_jump = PaginationConstants.ELLIPSIS_PAGES_JUMP_COUNT; //Click on ellipsis to page jump by default value

  //Ellipses logic
  const getPageNum = () => {
    const pages = [];

    if (totalPages <= maxVisiblePages + 2) {
      //display all pages if total pages <= 7 (visible pages + 2 ellipses)
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
      const targetPage = Math.max(2, currentPage - ellipsis_pages_jump);
      paginate(targetPage);
    } else if (type === "ellipsis-end") {
      // add ellipsis from page 3 and on forward
      const targetPage = Math.min(
        totalPages - 1,
        currentPage + ellipsis_pages_jump
      );
      paginate(targetPage);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center mb-0">
        {/* first page button */}
        <PaginationNavButton
          aria={"First"}
          icon={"&laquo;"}
          currentPage={currentPage}
          paginate={paginate}
        />
        {/* previous page button */}
        <PaginationNavButton
          aria={"Previsou"}
          icon={"&lsaquo;"}
          currentPage={currentPage}
          pageNum={currentPage - 1}
          paginate={paginate}
        />
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
        <PaginationNavButton
          aria={"Next"}
          icon={"&rsaquo;"}
          currentPage={currentPage}
          targetPageNum={totalPages}
          pageNum={currentPage + 1}
          paginate={paginate}
        />
        {/* last page button */}
        <PaginationNavButton
          aria={"Last"}
          icon={"&raquo;"}
          currentPage={currentPage}
          targetPageNum={totalPages}
          pageNum={totalPages}
          paginate={paginate}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
