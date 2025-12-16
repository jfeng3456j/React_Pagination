import { handleEllipsisClick } from "../Util/PaginationLogic";

const PageEllipsisButton = (props) => {
  const { type, currentPage, totalPages, paginate } = props;

  const handleClick = (e) => {
    e.preventDefault();
    handleEllipsisClick(type, currentPage, totalPages, paginate);
  };
  return (
    <li className="page-item ellipsis">
      <a
        className="page-link"
        title="Jump to nearby pages"
        href="#!"
        onClick={handleClick}
      >
        ...
      </a>
    </li>
  );
};

export default PageEllipsisButton;
