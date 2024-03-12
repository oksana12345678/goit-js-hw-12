const API_KEY = '42710952-cb07850fe6c5f6774b64d780f';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
  const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}