import { fetchImages } from './js/pixabay-api';
import './css/loader-styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  renderGallery,
  galleryElement,
  showEndOfCollectionMessage,
  appendImagesToGallery,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const scrollToTopBtn = document.querySelector('.scroll-to-top');

const searchForm = document.querySelector('.form');
const inputElement = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

hideloadMoreBtn();
hideLoader();

let searchTerm = '';
let pageCounter = 1;
const perPage = 15;

searchForm.addEventListener('submit', submitHandle);
async function submitHandle(event) {
  event.preventDefault();
  searchTerm = inputElement.value.trim();
  pageCounter = 1;

  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topCenter',
    });
    hideloadMoreBtn();

    return;
  }

  showLoader();
  try {
    const images = await fetchImages(searchTerm, pageCounter, perPage);
    if (images.length === 0) {
      galleryElement.innerHTML = '';
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
      hideloadMoreBtn();
      return;
    } else {
      renderGallery(images);
      inputElement.value = '';
      showloadMoreBtn();
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
    const images = await fetchImages(searchTerm, (pageCounter += 1), perPage);
    appendImagesToGallery(images);

    const galleryCardHeight =
      galleryElement.firstElementChild.getBoundingClientRect().height;
    window.scrollBy({ top: galleryCardHeight * 3, behavior: 'smooth' });

    if (images.length <= perPage) {
      hideloadMoreBtn(), showEndOfCollectionMessage();
    }
  } catch (error) {
    console.error('Error fetching more images:', error);
    iziToast.error({
      title: 'Error',
      message: `Error fetching more images: ${error}`,
    });
  } finally {
    hideLoader();
  }
});

// *loader
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

// * button load more images
function showloadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');
}

function hideloadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
