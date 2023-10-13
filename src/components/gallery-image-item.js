class GalleryImageItem extends HTMLElement {
  #modalId = 'galleryImageModal';
  #sizes =
    '(min-width: 1920px) 364px, (min-width: 1200px) 297px, (min-width: 1000px) calc(33.33vw - 78px), (min-width: 780px) calc(50vw - 104px), (min-width: 580px) calc(50vw - 61px), calc(100vw - 98px)';
  constructor() {
    super();
    this.html = document.createElement('div');
    this.html.classList.add('col', 'gallery-image-item');
    this.image = document.createElement('img');
    this.image.classList.add('gallery-image');
    if (aboveFoldCount > 0) {
      aboveFoldCount--;
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
      this.setModalTitleAndSubtitle(
        this.getAttribute('img-title'),
        this.getAttribute('img-subtitle')
      );
    });
    this.html.appendChild(this.image);
  }

  connectedCallback() {
    this.image.src = this.getSrc();
    this.image.srcset = this.getSrcSet();
    this.image.sizes = this.#sizes;
    this.appendChild(this.html);
  }

  setModalTitleAndSubtitle(title, subtitle) {
    const tt = document
      .getElementById(this.#modalId)
      .querySelector('h2#modal-footer-title');
    const st = document
      .getElementById(this.#modalId)
      .querySelector('h3#modal-footer-subtitle');
    tt.innerText = title;
    st.innerText = subtitle;
  }

  getSrc() {
    const root = this.getAttribute('img-root');
    const catg = this.getAttribute('category');
    const file = this.getAttribute('img-file');
    const dim = this.getAttribute('img-srcset');
    const extn = this.getAttribute('img-ext');
    const d = dim.split(',');
    return `${root}${catg}/${file}-${d[0]}${extn}`;
  }

  getSrcSet() {
    const root = this.getAttribute('img-root');
    const catg = this.getAttribute('category');
    const file = this.getAttribute('img-file');
    const extn = this.getAttribute('img-ext');
    const dims = this.getAttribute('img-srcset').split(',');
    let srcset = '';

    for (let i = 0; i < dims.length; i++) {
      srcset += `${root}${catg}/${file}-${dims[i]}${extn} ${dims[i]}`;
      if (i !== dims.length - 1) {
        srcset += ',';
      }
    }

    // for (let dim of dims) {
    //   srcset += `${root}${catg}/${file}-${dim}${extn} ${dim}, `;
    // }
    return srcset;
  }
}

let aboveFoldCount = 6;

customElements.define('gallery-image-item', GalleryImageItem);
