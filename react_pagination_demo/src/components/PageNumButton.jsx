const PageNumButton = (props) => {
  const { number, currentPage, paginate } = props;
  const handleClick = (e) => {
    e.preventDefault();
    paginate(number);
  };
  return (
    <li className={`page-item ${number === currentPage ? "active" : ""}`}>
      <a className="page-link" href="#!" onClick={handleClick}>
        {number}
      </a>
    </li>
  );
};

export default PageNumButton;
