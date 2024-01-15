import { axiosCredentials } from "util/util";

export function CheckReviewAPI(goods_id) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/check-review/${goods_id}`
  );
}

export function CreateReviewAPI(data, goods_id) {
  return axiosCredentials(
    "post",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/review/${goods_id}`,
    data
  );
}

export function DeleteReviewAPI(review_id) {
  return axiosCredentials(
    "delete",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/review/${review_id}`
  );
}

export function UpdateReviewAPI(data, review_id) {
  return axiosCredentials(
    "patch",
    `${process.env.REACT_APP_BACKEND_API_URL}/store/review/${review_id}`,
    data
  );
}
