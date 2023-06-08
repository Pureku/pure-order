"use client";

import React, { useState } from "react";

import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items to display per page
  const data = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`); // Sample data
  console.log(data);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedData = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex flex-col items-center">
      <ul className="space-y-4">
        {paginatedData.map((item, index) => (
          <li key={index} className="btn btn-secondary">
            {item}
          </li>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"btn btn-secondary"}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"btn btn-primary"}
        pageClassName={"btn btn-secondary"}
        previousClassName={"btn btn-secondary"}
        nextClassName={"btn btn-secondary"}
      />
    </div>
  );
};

export default Pagination;
