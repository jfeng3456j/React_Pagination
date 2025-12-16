const PaginationNavButton = (props) => {
  const {
    aria,
    icon,
    currentPage,
    targetPageNum = 1,
    pageNum = 1,
    disabled = false,
    paginate,
  } = props;

  const handleClick = (e) => {
    e.preventDefault();

    if (!disabled && currentPage !== targetPageNum) {
      paginate(pageNum);
    } else {
      console.log("Target page is reached");
    }
  };

  const isDisabled = disabled || currentPage === targetPageNum;

  return (
    <li className={`page-item ${isDisabled ? "disabled" : ""}`}>
      <a
        className="page-link"
        href="#!"
        aria-label={aria}
        onClick={handleClick}
        // style={isDisabled ? { pointerEvents: "none" } : {}}
      >
        <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
      </a>
    </li>
  );
};

export default PaginationNavButton;
