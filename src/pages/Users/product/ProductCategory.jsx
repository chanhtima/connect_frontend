import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { useParams, useNavigate, Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import SelectBorder from "../../../components/SelectBorder";
import { getAll } from "../../../api/productApi";
import Pagination from "../../../components/Pagination";
import CardProduct from "../../../features/home/CardProduct";

function ProductCategory() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    PD_category: category || "",
    page: 1,
    limit: 12,
    total: 0,
  });
  const categories = [
    { label: "Rew Materials", name: "Rew Materials" },
    { label: "Food & Beverage", name: "Food & Beverage" },
    { label: "Tobacco", name: "Tobacco" },
    { label: "Etc.", name: "Etc." },
  ];

  const handleCategoryClick = (label) => {
    setSearch((prevSearch) => ({
      ...prevSearch,
      PD_category: label,
    }));
  };

  const [isMobile, setIsMobile] = useState(false);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    fetchData();
  }, [search.PD_category, search.page, search.limit]);

  const fetchData = async () => {
    try {
      const res = await getAll(search);
      console.log(res.data.productData);
      setData(res.data.productData);
      setSearch((prev) => ({
        ...prev,
        total: res.data.total,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Breadcrumbs
        page_name="Our Products"
        page_url="/products"
        title_name="All Products"
      />
      <div className="section-container">
        <div className="flex max-xl:flex-col justify-between ">
          <div
            className={`w-full ${isMobile ? "" : "xl:w-[20%] xl:border-r-2 "} `}
          >
            {isMobile ? (
              <SelectBorder
                label="Category"
                data={categories}
                value={categories.name}
                onChange={(e) => handleCategoryClick(e.target.value)}
                selectedOption="Select a category"
              />
            ) : (
              categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => handleCategoryClick(cat.label)}
                  className={`btn btn-ghost w-full !justify-between hover:bg-inherit hover:text-blue-2 text-lg  font-normal  ${
                    search.PD_category === cat.label ? " text-blue-2" : ""
                  }`}
                >
                  <div>{cat.name}</div>
                  <IoIosArrowForward />
                </button>
              ))
            )}
          </div>
          {/* table */}
          <div
            className={`w-full  flex-col flex justify-between min-h-[25rem] ${
              isMobile ? "" : "xl:w-[80%]"
            } pl-4 max-xl:mt-6`}
          >
            <div className="grid grid-cols-12 gap-4 mb-6">
              {data.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/productdetail/${item._id}`}
                  className=" col-span-12  sm:col-span-6 lg:col-span-4 3xl:col-span-3"
                >
                  <CardProduct data={item} />
                </Link>
              ))}
            </div>
            {search.total !== 0 && (
              <Pagination
                search={search}
                onPageChange={(page) =>
                  setSearch((prev) => ({ ...prev, page }))
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
