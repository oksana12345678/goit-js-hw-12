import { fetchImages, fetchMoreImages } from './js/pixabay-api';
import './css/loader-styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderGallery, galleryElement } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const searchForm = document.querySelector('.form');
const inputElement = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');


hideLoader();

searchForm.addEventListener('submit', submitHandle);

async function submitHandle(event) {
  event.preventDefault();
  const searchTerm = inputElement.value.trim();

  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topCenter', 
    });

    return;
  }
  showLoader();
  try {
    const images = await fetchImages(searchTerm);
    if (images.length === 0) {
      galleryElement.innerHTML = '';
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
    } else {
      renderGallery(images);
      inputElement.value = '';
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }
}


loadMoreBtn.addEventListener('click', async () => {
  try {
    showLoader();
    const images = await fetchMoreImages();
    if (images.length === 0) {
      loadMoreBtn.style.display = 'none'; 
      showEndOfCollectionMessage();
    } else {
      renderGallery(images);
      smoothScrollToGallery(); 
    }
  } catch (error) {
    console.error('Error fetching more images:', error);
  } finally {
    hideLoader();
  }
});


// function showEndOfCollectionMessage() {
//   const endMessage = document.createElement('p');
//   endMessage.textContent = "We're sorry, but you've reached the end of search results.";
//   postList.appendChild(endMessage);
// }

function smoothScrollToGallery() {
  const galleryHeight = galleryElement.getBoundingClientRect().height;
  window.scrollBy({ top: galleryHeight, behavior: 'smooth' });
}


function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}