import axios from "axios";


// const axiosWithAuth = () => {
//   // const token = localStorage.getItem("token");
//   return axios.create({
//     headers: { Authorization: Bearer ${localStorage.getItem('token')} }
//   });
// export default axiosWithAuth;

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token"); // Retrieve token from local storage
  return axios.create({ // Return new instance of axios
    headers: {
      Authorization: `Bearer ${token}`
    },
    baseURL: "https://seanmx96-airbnb-optimal-price.herokuapp.com/"
  });
};

export default axiosWithAuth;