import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { useParams } from "react-router-dom";
import { getNewsId } from "../../../api/newsApi";
import formatDataTH from "../../../libs/formatDataTH";
import Dateicon from "../../../assets/icon/Dateicon.svg";

function NewsArticleDetail() {
  const { id } = useParams();
  const [dataById, setDataById] = useState({
    NE_name: "",
    updatedAt: "",
    NE_image: [],
  });

  useEffect(() => {
    getDataById();
  }, [id]);

  const getDataById = async () => {
    try {
      const res = await getNewsId(id);
      setDataById(res.data.newsById);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <Breadcrumbs
        page_url="/news"
        title_name="New & Events"
        sub_page={dataById.NE_name}
      />
      <div className="px-12 md:px-24 xl:px-40 pb-8 min-h-screen">
        <div className="text-center">
          <h1 className="text-head mt-4">{dataById.NE_name}</h1>
          <div className="flex items-center gap-1 justify-center mb-4">
            <img src={Dateicon} alt="" />
            <p className="p-0">{formatDataTH(dataById.updatedAt)}</p>
          </div>
          {dataById.NE_image && dataById.NE_image.length !== 0 && (
            <img
              src={`data:${dataById.NE_image[0].image_type};base64,${dataById.NE_image[0].image}`}
              alt="Product Image"
              className="w-[70%] max-h-[30rem] object-cover mx-auto"
            />
          )}
        </div>
        <div className="mt-8">
          <p>{dataById.NE_detail}</p>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: dataById.NE_texteditor }}
        />
      </div>
    </>
  );
}

export default NewsArticleDetail;
