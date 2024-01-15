import { axiosCredentials } from "util/util";

export function GetGoodsChatListAPI(goods_id) {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/chat/list/${goods_id}`
  );
}

export function GetChatListAPI() {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/chat/list`
  );
}
