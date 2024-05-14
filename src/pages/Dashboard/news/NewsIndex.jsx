import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNewsAll } from "../../../api/newsApi";
import { RiDeleteBin2Fill, RiPencilFill } from "react-icons/ri";
import { formatDate } from "../../../libs/formatDate";
import Pagination from "../../../components/Pagination";
function NewsIndex() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState({
    NE_name: "",
    page: 1,
    limit: 10,
    total: 0,
  });

  useEffect(() => {
    getData();
  }, [search.page, search.limit]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await getNewsAll(search);
      console.log(res.data.newsData);
      setData(res.data.newsData);
      setSearch((prev) => ({
        ...prev,
        total: res.data.total,
      }));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data News:", error);
    }
  };

  const handleSearch = () => {
    setSearch((prev) => ({ ...prev, page: 1 }));
    getData();
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getData();
    }
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
            placeholder="ค้นหา ข่าว"
            className="input input-bordered w-full lg:w-auto"
            value={search.NE_name}
            onChange={(e) => setSearch({ ...search, NE_name: e.target.value })}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch} className="btn bg-green-3 text-white">
            ค้นหา
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-12 min-h-[44rem] ">
        <table className="table !static">
          <thead className=" bg-white shadow-sm text-center">
            <tr>
              <th className="text-lg">No.</th>
              <th className="text-lg min-w-[10rem]">รูปภาพ</th>
              <th className="text-lg min-w-[8rem]">วันที่</th>
              <th className="text-lg min-w-[15rem]">ชื่อ</th>
              <th className="text-lg min-w-[12rem]">รายละเอียดอย่างย่อ</th>
              <th className="text-lg min-w-[7rem]" />
            </tr>
          </thead>
          <tbody>
            {data.map((el, idx) => (
              <tr className="h-[4rem] py-2 " key={idx}>
                <th>
                  {search.page > 1 ? (search.page - 1) * 10 + idx + 1 : idx + 1}
                </th>

                <td className="py-4  text-center">
                  <div>
                    {el.NE_image.length !== 0 && (
                      <img
                        src={`data:${el.NE_image[0].image_type};base64,${el.NE_image[0].image}`}
                        alt="Product Image"
                        className="object-cover mx-auto w-auto h-20"
                      />
                    )}
                  </div>
                </td>
                <td className=" text-center">{formatDate(el.updatedAt)}</td>
                {/* <td className=" text-center">{formatDate(el.updatedAt).split(' ')[1]}</td> */}
                <td>{el.NE_name}</td>
                <td>
                  <p className="line-clamp-2">{el.NE_detail}</p>
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
      {search.total !== 0 && (
        <Pagination
          search={search}
          onPageChange={(page) => setSearch((prev) => ({ ...prev, page }))}
        />
      )}
    </div>
  );
}

export default NewsIndex;
