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
export function getAll(filter) {
  return defaultAxios.get(`/product?${getQueryString(filter)}`);
}
export function getProductId(id) {
  return defaultAxios.get(`/product/${id}`);
}
export function deleteId(id) {
  return defaultAxios.delete(`/product/${id}`);
}

export function CreateProduct(formData) {
  return defaultAxios.post(`/product/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
export function UpdateGoodsProduct(formData, id) {
  return defaultAxios.patch(`/product/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
