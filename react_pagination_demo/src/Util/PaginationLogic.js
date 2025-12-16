import PaginationConstants from "../Constants/PaginationConstants";

//Ellipses logic
export const getPageNum = (currentPage, totalPages) => {
    const pages = [];
    const maxVisiblePages = PaginationConstants.DEFAULT_MAX_VISIBLE_PAGES; // Maximum number of visible pages

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

export const handleEllipsisClick = (type, currentPage, totalPages, paginate) => {
    const ellipsis_pages_jump = PaginationConstants.ELLIPSIS_PAGES_JUMP_COUNT; //Click on ellipsis to page jump by default value

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