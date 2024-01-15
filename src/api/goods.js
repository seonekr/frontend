import { axiosCredentials } from "util/util";

export function GoodsListAPI(category) {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/?category=${category}`
  );
}

export function GoodsSearchAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/search`,
    data
  );
}

export function CreateGoodsAPI(data, store_id) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/${store_id}`,
    data
  );
}

export function UpdateGoodsAPI(data) {
  return axiosCredentials(
    "patch",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/goods`,
    data
  );
}

export function DleteGoodsAPI(data) {
  return axiosCredentials(
    "delete",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/goods`,
    data
  );
}

export function DetailGoodsAPI(goods_id) {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/detail/${goods_id}`
  );
}

export function OrderAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/order`,
    data
  );
}
