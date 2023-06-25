import axios from "axios";

// api-key : 8e942b8ec30d4549a57c22a430c705b1
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8e942b8ec30d4549a57c22a430c705b1",
  },
});
