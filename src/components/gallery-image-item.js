class GalleryImageItem extends HTMLElement {
  #modalId = 'galleryImageModal';
  #sizes =
    '(max-width: 575px) 100vw, (max-width: 991px) 50vw, (max-width: 1199px) 333px, 400px';

  constructor() {
    super();
    this.html = document.createElement('div');
    this.html.classList.add('col', 'gallery-image-item');
    this.image = document.createElement('img');
    this.image.classList.add('gallery-image');
    this.image.setAttribute('loading', 'lazy');
    this.image.addEventListener('click', () => {
      const modal = document
        .getElementById(this.#modalId)
        .querySelector('.modal');
      const img = modal.querySelector('img');
      img.src = this.image.src;
      img.srcset = this.image.srcset;
      modal.style.display = 'flex';
    });
    this.html.appendChild(this.image);
  }

  connectedCallback() {
    this.hasAttribute('img-src')
      ? (this.image.src = this.getAttribute('img-src'))
      : (this.image.src = '');
    if (this.hasAttribute('img-srcset')) {
      this.image.srcset = this.getAttribute('img-srcset');
      this.image.sizes = this.#sizes;
    }
    this.appendChild(this.html);
  }
}

customElements.define('gallery-image-item', GalleryImageItem);
