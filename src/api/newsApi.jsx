import defaultAxios from "./axios";
function getQueryString(search) {
    const params = Object.keys(search)
      .filter((key) => search[key] !== "") 
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(search[key])}`
      )
      .join("&");
    return params;
  }
  export function getNewsAll(filter) {
    return defaultAxios.get(`/news?${getQueryString(filter)}`);
  }
  export function getNewsId(id) {
    return defaultAxios.get(`/news/${id}`);
  }
//   export function deleteId(id) {
//     return defaultAxios.delete(`/product/${id}`);
//   }
  
//   export function CreateProduct(formData) {
//     return defaultAxios.post(`/product/`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   }
//   export function UpdateGoodsProduct(formData, id) {
//     return defaultAxios.patch(`/product/${id}`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   }
  