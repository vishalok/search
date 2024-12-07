
import axios from "axios";

// const API_URL = "http://localhost:5000/api/blogs";
const API_URL = "https://search-backend-iqwp.onrender.com/api/blogs";

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
 //   console.log("Data fetched:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};
