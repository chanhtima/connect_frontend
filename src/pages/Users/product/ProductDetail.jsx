import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { getProductId } from "../../../api/productApi";

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getByData();
  }, [id]);
  const getByData = async () => {
    const res = await getProductId(id);
    setData(res.data.productById);
    setCurrentImage(res.data.productById.PD_image[0]);
    setCurrentIndex(0);
  };
  const handleThumbnailClick = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
  };
  return (
    <>
      <Breadcrumbs
        page_url="/products"
        title_name="Products"
        sub_page={data.PD_name}
      />
      <div className="px-12 md:px-24  xl:px-40 pb-8 min-h-screen">
        <div className="grid grid-cols-2 gap-6 ">
          <div className=" col-span-2 lg:col-span-1">
            <div className="border p-4 rounded-xl min-h-[15.5rem]">
              {currentImage && (
                <img
                  src={`data:${currentImage.image_type};base64,${currentImage.image}`}
                  alt="Product Image"
                  className="object-cover max-h-[15.5rem] mx-auto"
                />
              )}
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto p-1">
              {data.PD_image &&
                data.PD_image.map((image, index) => (
                  <img
                    key={index}
                    src={`data:${image.image_type};base64,${image.image}`}
                    alt={`Thumbnail ${index}`}
                    className={`object-cover cursor-pointer border p-4 rounded-xl max-h-[9.5rem] ${
                      index === currentIndex ? "border-blue-2 border-2" : ""
                    }`}
                    onClick={() => handleThumbnailClick(image, index)}
                  />
                ))}
            </div>
          </div>
          <div className=" col-span-2 lg:col-span-1">
            <h1 className="text-head mt-4">{data.PD_name}</h1>
            <p className=" font-light">{data.PD_detail}</p>
          </div>
        </div>
        <div
          className="mt-12"
          dangerouslySetInnerHTML={{ __html: data.PD_texteditor }}
        />
      </div>
    </>
  );
}

export default ProductDetail;
