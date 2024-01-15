import { axiosCredentials } from "../util/util";

export function checkTokenAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/check-token`,
    data
  );
}

export function loginAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/signin`,
    data
  );
}

export function SignupAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/signup`,
    data
  );
}

export function SendEmailAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/send-email`,
    data
  );
}

export function GoogleLoginAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/google`,
    data
  );
}

export function DeleteUserAPI() {
  return axiosCredentials(
    "delete",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/my-page`
  );
}

export function GetSeller() {
  return axiosCredentials(
    "get",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/my-page`
  );
}

export function ChangeProfile(data) {
  return axiosCredentials(
    "patch",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/my-page`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
}

export function ChangePasswordAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/my-page`,
    data
  );
}

export function ChangeSellerProfile(data, store_id) {
  return axiosCredentials(
    "patch",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/${store_id}`,
    data
  );
}

export function ChangeSellerAPI(data) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/user/seller-signup`,
    data
  );
}
