
import axios from 'axios';
 const API_KEY = '42710952-cb07850fe6c5f6774b64d780f';
const baseURL = 'https://pixabay.com/api/';

let page = 1;
const perPage = 15; 

export async function fetchImages(searchQuery, page, perPage) {
  const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response.data.hits;
}
   
export async function fetchMoreImages() {
  const searchTerm = inputElement.value.trim();
  const response = await fetchImages(searchTerm, page, perPage);
  page +=1; 
  return response;
}