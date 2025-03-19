// import axios from "axios";

// // Axios Instance with Default Config
// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:4000/api/v1", // Replace with your API's base URL
// });

// // API Connector Function
// export const apiConnector = async (method, url, bodyData = null, headers = null, params = null) => {
//   try {
//     if (!method || !url) {
//       throw new Error("The API method and URL are required. Please provide valid values.");
//     }

//     const validMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
//     if (!validMethods.includes(method.toUpperCase())) {
//       throw new Error(`Invalid HTTP method: ${method}. Supported methods are ${validMethods.join(", ")}.`);
//     }

//     const defaultHeaders = {
//       "Content-Type": "application/json",
//     };

//     const response = await axiosInstance({
//       method,
//       url,
//       ...(bodyData && { data: bodyData }),
//       headers: { ...defaultHeaders, ...headers },
//       ...(params && { params }),
//     });

//     return response.data; // Return the API response
//   } catch (error) {
//     console.error("API Error:", error.response?.data || error.message || "Unknown Error");
//     throw error; // Rethrow for further handling by the calling function
//   }
// };

import axios from "axios";

export const axiosInstance=axios.create({});


export const apiConnector=(method,url,bodyData,headers,params)=>{
  return axiosInstance({
    method:`${method}`,
    url: `${url}`,
    data:bodyData?bodyData:null,
    headers:headers?headers:null,
    params:params?params:null,
  });
}