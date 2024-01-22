import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

export function axiosCredentials(method, url, data, config) {
  let headers = {};
  let token = JSON.parse(window.localStorage.getItem("token"));
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (config && config.headers) {
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
  }
  return axios({
    method: method,
    url: url,
    data: data,
    withCredentials: true,
    crossDomain: true,
    headers: headers,
    ...config,
  });
}

export function checkSession() {
  let token = JSON.parse(window.localStorage.getItem("token"));
  return token;
}

export function NumberInput(value) {
  let num = value.replace(/[^0-9]/g, "");
  if (num.length > 8) num = num.slice(0, 12);
  return num;
}

export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
