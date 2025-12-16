import { useRef, useEffect } from "react";
import PaginationNavButton from "./PaginationNavButton";
import PageNumButton from "./PageNumButton";
import PageEllipsisButton from "./PageEllipsisButton";
import { getPageNum } from "../Util/PaginationLogic";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumToDisplay = getPageNum(currentPage, totalPages);
  const activePageRef = useRef(null);

  // focus the active page, when current page changes
  useEffect(() => {
    if (activePageRef.current) {
      activePageRef.current.focus();
    }
  }, [currentPage]);

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
        {pageNumToDisplay.map((number, index) => {
          if (typeof number === "string") {
            return (
              <PageEllipsisButton
                key={index}
                type={number}
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
              />
            );
          } else {
            return (
              <PageNumButton
                key={index}
                number={number}
                currentPage={currentPage}
                paginate={paginate}
                ref={number === currentPage ? activePageRef : null}
              />
            );
          }
        })}
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
