import Axios from "axios";

const headers = {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}

 const axios = Axios.create({
    baseURL: "https://bayut.p.rapidapi.com",
    headers: headers
})


let requestsInProgress = 0;

const limitRequests = (maxRequestsPerInterval, interval) => {
  return new Promise((resolve) => {
    requestsInProgress++;
    if (requestsInProgress <= maxRequestsPerInterval) {
      resolve();
    } else {
      setTimeout(() => {
        requestsInProgress--;
        resolve();
      }, interval);
    }
  });
};

export const makeRequest = async (url, options = {}) => {
  await limitRequests(10, 60 * 1000);
  return axios.request({ url, ...options });
};