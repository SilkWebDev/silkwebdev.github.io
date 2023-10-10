class GalleryImageItem extends HTMLElement {
  #modalId = 'galleryImageModal';
  #sizes =
    '(min-width: 1920px) 364px, (min-width: 1200px) 297px, (min-width: 1000px) calc(33.33vw - 78px), (min-width: 780px) calc(50vw - 104px), (min-width: 580px) calc(50vw - 61px), calc(100vw - 98px)';
  #numberBeforeFold = 6;
  constructor() {
    super();
    this.html = document.createElement('div');
    this.html.classList.add('col', 'gallery-image-item');
    this.image = document.createElement('img');
    this.image.classList.add('gallery-image');
    if (this.#numberBeforeFold > 0) {
      this.#numberBeforeFold--;
    } else {
      this.image.setAttribute('loading', 'lazy');
    }
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
