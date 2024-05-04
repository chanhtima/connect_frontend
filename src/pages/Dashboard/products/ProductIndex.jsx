import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiPencilFill, RiDeleteBin2Fill } from "react-icons/ri";
import { deleteId, getAll } from "../../../api/productApi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function ProductIndex() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    PD_name: "",
    page: 1,
    limit: 10,
    total: 0,
  });

  useEffect(() => {
    fetchData();
  }, [search.page, search.limit]);

  const fetchData = async () => {
    try {
      const res = await getAll(search);
      setData(res.data.productData);
      setSearch((prev) => ({
        ...prev,
        total: res.data.total,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    setSearch((prev) => ({ ...prev, page: 1 }));
    fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteId(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const totalPages = Math.ceil(search.total / search.limit);

  const handlePrevPage = () => {
    setSearch((prev) => ({ ...prev, page: Math.max(1, prev.page - 1) }));
  };

  const handleNextPage = () => {
    setSearch((prev) => ({
      ...prev,
      page: Math.min(totalPages, prev.page + 1),
    }));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Link
            to="/dashboard/product/create"
            className="btn bg-green-3 text-white hover:bg-green-3/80"
          >
            สร้าง
          </Link>
        </div>
        <div className="form-control flex flex-row gap-2 ">
          <input
            type="text"
            name="textSearch"
            placeholder="ค้นหา สินค้า"
            className="input input-bordered w-full lg:w-auto"
            value={search.PD_name}
            onChange={(e) => setSearch({ ...search, PD_name: e.target.value })}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch} className="btn bg-green-3 text-white">
            ค้นหา
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-12 z-1">
        <table className="table">
          <thead className="sticky top-0 bg-white shadow-sm text-center">
            <tr>
              <th className="text-lg">No.</th>
              <th className="text-lg min-w-[10rem]">image</th>
              <th className="text-lg min-w-[16rem]">Name</th>
              <th className="text-lg min-w-[10rem]">category</th>
              <th className="text-lg min-w-[12rem]">details</th>
              <th className="text-lg min-w-[7rem]" />
            </tr>
          </thead>
          <tbody>
            {data.map((el, idx) => (
              <tr className="h-[4rem] py-2" key={idx}>
                <th>
                  {search.page > 1 ? (search.page - 1) * 10 + idx + 1 : idx + 1}
                </th>

                <td className="py-4">
                  <div>
                    {el.PD_image.length !== 0 && (
                      <img
                        src={`data:${el.PD_image[0].image_type};base64,${el.PD_image[0].image}`}
                        alt="Product Image"
                        className="object-cover mx-auto w-10 h-10"
                      />
                    )}
                  </div>
                </td>
                <td>{el.PD_name}</td>
                <td>{el.PD_category}</td>
                <td>
                  <p className="line-clamp-2">{el.PD_detail}</p>
                </td>
                <th className=" flex gap-2">
                  <Link to={`/dashboard/product/${el._id}`} className="p-2">
                    <RiPencilFill size={20} />
                  </Link>
                  <button
                    className="p-2 text-red-600"
                    onClick={() => handleDelete(el._id)}
                  >
                    <RiDeleteBin2Fill size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={search.page === 1}
          className="btn mr-2 btn-circle"
        >
          <IoIosArrowBack size={20} />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setSearch((prev) => ({ ...prev, page: i + 1 }))}
            className={`btn btn-circle ${
              search.page === i + 1 ? "bg-green-3 " : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={search.page === totalPages}
          className="btn ml-2  btn-circle"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductIndex;
