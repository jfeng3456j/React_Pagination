import { forwardRef } from "react";

const PageNumButton = forwardRef((props, ref) => {
  const { number, currentPage, paginate } = props;
  const handleClick = (e) => {
    e.preventDefault();
    paginate(number);
  };
  return (
    <li className={`page-item ${number === currentPage ? "active" : ""}`}>
      <a className="page-link" href="#!" onClick={handleClick} ref={ref}>
        {number}
      </a>
    </li>
  );
});

export default PageNumButton;
