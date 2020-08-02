import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const accessKey = process.env.REACT_APP_ACCESS_KEY;
export default axios.create({
  baseUrl: baseUrl,
  headers: {
    Authorization: `CLIENT-ID ${accessKey}`,
  },
});
