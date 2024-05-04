import React, { useEffect, useRef, useState } from "react";
import Input from "../.././../components/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  CreateProduct,
  UpdateGoodsProduct,
  getProductId,
} from "../../../api/productApi";
import Textarea from "../../../components/Textarea";
import SelectBorder from "../../../components/SelectBorder";
import { FaArrowLeft } from "react-icons/fa";

function Products() {
  const { id } = useParams();
  const [input, setInput] = useState({
    PD_name: "",
    PD_category: "",
    PD_detail: "",
    PD_texteditor: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const arrInput = { ...input };
    arrInput[e.target.name] = e.target.value;
    setInput(arrInput);
  };

  const OptionCategory = [
    { label: "Rew Materials", value: "Rew Materials" },
    { label: "Food & Beverage", value: "Food & Beverage" },
    { label: "Tobacco", value: "Tobacco" },
    { label: "Etc.", value: "Etc." },
  ];
  // File
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const handleClickFile = () => {
    hiddenFileInput.current.click();
  };
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    // ตรวจสอบว่าจำนวนรูปที่เลือกเกิน 5 รูปหรือไม่
    if (file.length + selectedFiles.length > 5) {
      // แจ้งเตือนถ้าเกิน 5 รูป
      alert("ไม่สามารถเลือกรูปเกิน 5 รูปได้");
      return; // ไม่ทำการเพิ่มรูปเข้าไปใน state
    }
    setFile([...file, ...selectedFiles]);
  };
  
  const handleDeletePreview = (index) => {
    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFile(updatedFiles);

    const updatedPreviewUrls = [...previewUrl];
    updatedPreviewUrls.splice(index, 1);
    setPreviewUrl(updatedPreviewUrls);
  };
  useEffect(() => {
    if (file.length > 0) {
      const urls = file.map((file) => URL.createObjectURL(file));
      setPreviewUrl(urls);
      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    } else {
      setPreviewUrl([]);
    }
  }, [file]);

  // update
  useEffect(() => {
    if (id) {
      getDataByID();
    }
  }, [id]);
  async function getDataByID() {
    try {
      setIsLoading(true);
      const res = await getProductId(id);
      const data = res.data.productById;
      setInput({
        PD_name: data?.PD_name,
        PD_category: data?.PD_category,
        PD_detail: data?.PD_detail,
        PD_texteditor: data?.PD_texteditor,
      });

      // Set PD_image to file and previewUrl
      if (data.PD_image && data.PD_image.length > 0) {
        const files = data.PD_image.map((image) => {
          // Convert base64 string to Blob
          const byteCharacters = atob(image.image);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: image.image_type });
          // Create File object from Blob
          return new File(
            [blob],
            `image_${image.image_id}.${image.image_type.split("/")[1]}`
          );
        });

        // Set files and previewUrls
        setFile(files);

        // Read files as base64 and set as previewUrls
        const promises = files.map((file) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
          });
        });

        Promise.all(promises).then((base64Urls) => {
          setPreviewUrl(base64Urls);
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // TextEditor
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setInput({
      ...input,
      PD_texteditor: data,
    });
  };

  // submit
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log(input);
    if (file.length === 0) {
      alert("Please select a file");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("PD_name", input.PD_name);
      formData.append("PD_detail", input.PD_detail);
      formData.append("PD_category", input.PD_category);
      formData.append("PD_texteditor", input.PD_texteditor);
      file.forEach((fileItem) => {
        formData.append("PD_image", fileItem);
      });
      if (id) {
        await UpdateGoodsProduct(formData, id);
      } else {
        await CreateProduct(formData);
      }
      navigate("/dashboard/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isLoading ? (
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Link to="/dashboard/product/">
              <FaArrowLeft />
            </Link>
            <h1 className="text-3xl">{id ? "แก้ไข" : "สร้าง"} Product </h1>
          </div>
          <div className="space-y-2 flex flex-col w-full ">
            <Input
              label="Name"
              name="PD_name"
              onChange={handleChange}
              value={input?.PD_name}
            />
            <SelectBorder
              label="Category"
              data={OptionCategory}
              selectedOption="เลือก"
              name="PD_category"
              onChange={handleChange}
              value={input?.PD_category}
            />
            <Textarea
              label="Details"
              name="PD_detail"
              onChange={handleChange}
              value={input?.PD_detail}
            />
            <div className="mt-2">
              <CKEditor
                editor={ClassicEditor}
                data={input?.PD_texteditor}
                onChange={handleEditorChange}
              />
            </div>
            <div className="my-2">
              <button className="btn" onClick={handleClickFile}>
                Upload file
              </button>
              <input
                type="file"
                onChange={handleFileChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
                multiple
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6 my-4">
            {previewUrl &&
              previewUrl.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`preview-${index}`}
                    className="rounded-lg"
                  />
                  <button
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-sm p-1 "
                    onClick={() => handleDeletePreview(index)}
                  >
                    X
                  </button>
                </div>
              ))}
          </div>
          <div className=" space-x-3">
            <button
              onClick={handleSubmit}
              className="btn bg-green-3 text-white hover:bg-green-3/80  w-56"
            >
              บันทึก
            </button>
            <Link to="/dashboard/product/" className="btn w-56">
              ยกเลิก
            </Link>
          </div>
        </div>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}
    </>
  );
}

export default Products;
