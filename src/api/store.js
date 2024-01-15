import { axiosCredentials } from "util/util";

export function GetStoreListAPI(store_id) {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/${store_id}`
  );
}

export function GetOrderListAPI() {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/order`
  );
}
