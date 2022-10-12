import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api';


export const fetchImages = async (searchQuery, page) => {
    const key = "29337037-f6a5fd668b35f8f6ea13ad624"
  const response = await axios.get(`/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12&`);
  return response.data;
};