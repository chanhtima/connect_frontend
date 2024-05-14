import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ search, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(1, search.page - 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(totalPages, search.page + 1));
  };

  const totalPages = Math.ceil(search.total / search.limit);

  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <button
        onClick={handlePrevPage}
        disabled={search.page === 1}
        className="btn mr-2 btn-circle "
      >
        <IoIosArrowBack size={20} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`btn btn-circle hover:bg-gray-1 ${
            search.page === i + 1 ? " bg-dark-blue text-white" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={search.page === totalPages}
        className="btn ml-2 btn-circle"
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
};

export default Pagination;
