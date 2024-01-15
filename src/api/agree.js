import { axiosCredentials } from "util/util";

export function PolicyAPI(number) {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/terms/${number}`
  );
}
