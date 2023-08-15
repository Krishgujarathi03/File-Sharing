import axios from "axios";

const API_URI = `http://localhost:5000`;
async function uploadFile(data) {
  try {
    const response = await axios.post(`${API_URI}/upload`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default uploadFile;
