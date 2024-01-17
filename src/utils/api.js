import axios from "axios"

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': "process.env.REACT_APP_YT_APIKEY",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const apidata = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
  