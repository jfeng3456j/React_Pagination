const PaginationNavButton = (props) => {
  const {
    aria,
    icon,
    currentPage,
    targetPageNum = 1,
    pageNum = 1,
    paginate,
  } = props;

  const handleClick = (e) => {
    e.preventDefault();

    if (currentPage !== targetPageNum) {
      paginate(pageNum);
    } else {
      console.log("Target page is reached");
    }
  };

  return (
    <li
      className={`page-item ${currentPage === targetPageNum ? "disabled" : ""}`}
    >
      <a
        className="page-link"
        href="#!"
        aria-label={aria}
        onClick={handleClick}
      >
        <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
      </a>
    </li>
  );
};

export default PaginationNavButton;
