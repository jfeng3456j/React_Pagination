import PaginationNavButton from "./PaginationNavButton";
import PageNumButton from "./PageNumButton";
import PageEllipsisButton from "./PageEllipsisButton";
import { getPageNum, handleEllipsisClick } from "../Util/PaginationLogic";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumToDisplay = getPageNum(currentPage, totalPages);

  return (
    <nav>
      <ul className="pagination justify-content-center mb-0">
        {/* first page button */}
        <PaginationNavButton
          aria="First"
          icon="&laquo;" //<<
          currentPage={currentPage}
          paginate={paginate}
        />
        {/* previous page button */}
        <PaginationNavButton
          aria="Previous"
          icon="&lsaquo;" //<
          currentPage={currentPage}
          pageNum={currentPage - 1}
          paginate={paginate}
        />
        {/* display page numbers and ellipsis logic */}
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
                  handleEllipsisClick(
                    number,
                    currentPage,
                    totalPages,
                    paginate
                  );
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
          icon={"&rsaquo;"} //>
          currentPage={currentPage}
          targetPageNum={totalPages}
          pageNum={currentPage + 1}
          paginate={paginate}
        />
        {/* last page button */}
        <PaginationNavButton
          aria={"Last"}
          icon={"&raquo;"} //>>
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
