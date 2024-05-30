import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import CardImageNews from "../../../features/home/CardImageNews";
import { getNewsAll } from "../../../api/newsApi";
import Pagination from "../../../components/Pagination";
function NewsArticles() {
  const [newsList, setNewsList] = useState([]);
  const [search, setSearch] = useState({
    NE_name: "",
    page: 1,
    limit: 12,
    total: 0,
  });
  useEffect(() => {
    getData();
  }, [search.page, search.limit]);
  const getData = async () => {
    try {
      const res = await getNewsAll(search);
      console.log(res.data.newsData);
      setNewsList(res.data.newsData);
      setSearch((prev) => ({
        ...prev,
        total: res.data.total,
      }));
    } catch (error) {
      console.error("Error fetching data News:", error);
    }
  };

  return (
    <>
      <Breadcrumbs
        page_name="LATEST NEWS & ARTICLES"
        page_url="/news"
        title_name="New & Events"
      />
      <div className="section-container">
        <div className="flex max-xl:flex-col justify-between mb-12">
          <div
            className={`w-full  flex-col flex justify-between min-h-[25rem] pl-4 max-xl:mt-6`}
          >
            <div className=" grid grid-cols-12 gap-6">
              {newsList.map((item, idx) => (
                <div
                  key={idx}
                  className=" col-span-12 sm:col-span-6 xl:col-span-3"
                >
                  <Link to={`/newsdetail/${item._id}`}>
                    <CardImageNews data={item} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {search.total !== 0 && (
          <Pagination
            search={search}
            onPageChange={(page) => setSearch((prev) => ({ ...prev, page }))}
          />
        )}
      </div>
    </>
  );
}

export default NewsArticles;
