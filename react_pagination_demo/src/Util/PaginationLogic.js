import { PaginationConstants } from "../Constants/VarConstants";

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

    //always display first page
    pages.push(1);

    // calculate middle pages
    if (currentPage <= 4) {
        // near beginning show 2, 3, 4, 5
        for (let i = 2; i <= maxVisiblePages; i++) {
            pages.push(i);
        }

        //add ellipsis and last pages
        pages.push("ellipsis-end");

    } else if (currentPage >= totalPages - 3) {
        pages.push("ellipsis-start")

        //set last 3 pages
        for (let i = totalPages - 4; i < totalPages; i++) {
            pages.push(i);
        }
    }
    else {
        // middle: show current - 1, current, current + 1
        pages.push("ellipsis-start");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("ellipsis-end");
    }

    // always display last page
    pages.push(totalPages);

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

        //near beginning, jump to last 3rd page
        if (currentPage <= 4) {
            const jumpToNearEnd = Math.max(5, totalPages - 3);
            paginate(jumpToNearEnd);
        } else {
            paginate(targetPage);
        }
    }

};