import React from 'react'
import './css/Pagination.css'

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    let page = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        page.push(i);
    }
    return (
        <div>
            {
                page.map((page, index) => {
                    return (
                        <button key={index} onClick={() => setCurrentPage(page)} clasName={page == currentPage ? 'active' : ''}> {page} </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination
