import React from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function PaginationTable({ search, data, fetchLists, noBorder }) {
    const handlePaginationSearch = (e) => {
      if (e.target.name === "limit") {
        return fetchLists({
          ...search,
          [e.target.name]: e.target.value,
          page: 1,
        });
      }
      fetchLists({ ...search, [e.target.name]: e.target.value });
    };
    const handlePage = (num) => {
      fetchLists({ ...search, page: num });
    };
    const lastPage = Math.ceil(search.total / search.limit) || 1;
  
    return (
      <div
        className={`text-text-black-table flex h-12 items-center justify-end gap-2 rounded-b-lg bg-white pr-2 text-xs font-semibold ${
          !noBorder && "border-b-[1px]"
        } border-border-gray-table`}
      >
        <div className="flex items-center">
          <div className="whitespace-nowrap">Rows per page:</div>
          <select
            id="limit"
            name="limit"
            className="ml-2 h-8 rounded-lg  border border-gray-300  bg-gray-50 text-xs text-gray-500 focus:border-blue-500 focus:ring-blue-500"
            onChange={handlePaginationSearch}
          >
            <option value="5">5</option>
            <option value="10" selected="selected">
              10
            </option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
  
        <div className="mx-5 whitespace-nowrap">
          {search.limit * (search.page - 1) + 1}-
          {search.limit * (search.page - 1) + data.length} of {search.total}
        </div>
  
        <button
          className="btn-paginations"
          onClick={() => {
            handlePage(1);
          }}
          disabled={1 == search.page}
        >
          <CgPushChevronLeft className="text-lg" />
        </button>
        <button
          className="btn-paginations"
          onClick={() => {
            if (search.page == 1) return;
            handlePage(search.page - 1);
          }}
          disabled={search.page == 1}
        >
          <HiChevronLeft className="text-lg" />
        </button>
        <button
          className="btn-paginations"
          onClick={() => {
            handlePage(search.page + 1);
          }}
          disabled={search.page == lastPage}
        >
          <HiChevronRight className="text-lg" />
        </button>
        <button
          className="btn-paginations"
          onClick={() => {
            handlePage(lastPage);
          }}
          disabled={search.page == lastPage}
        >
          <CgPushChevronRight className="text-lg font-bold" />
        </button>
      </div>
    );
  }

export default PaginationTable