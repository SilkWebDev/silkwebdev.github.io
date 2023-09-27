class OffHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="height: auto">
          <div class="container navbar-container subpage-navbar">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                  <img id="site-logo" src="images/site-logo-128w.png"
                  srcset="
                    images/site-logo-50w.png   50w,
                    images/site-logo-128w.png 128w
                  "
                  sizes="(max-width: 767px) 50px, 100px" />
                  <h1 id="site-brand-text">
                    J. S. Kerr <br />
                    Building Limited
                  </h1>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navContent"
                  aria-controls="navContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onclick="toggleButtonClicked(this)"
                >
                  <span>
                    <i class="bi-list" id="hamburger-icon"></i>
                  </span>
                </button>
                <div
                  class="collapse navbar-collapse justify-content-end"
                  id="navContent"
                >
                  <ul class="navbar-nav ml-auto mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="index.html"
                        >Home</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="services.html">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="project-gallery.html"
                        >Project Gallery</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact-us.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
      </div>`;
  }
}

class Footer extends HTMLElement {
  email = 'jskbwk@gmail.com';
  tel = '07725247726';
  facebookLink = '#';
  instagramLink = '#';

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `    
    <footer>
      <div class="container wrapper" id="footer-container">
        <div class="row flex-column flex-lg-row row-gap-4">
          <div class="col">
            <div class="row footer-row">
              <div class="col-12 mb-1" style="text-align: center">
                <h5 class="text-uppercase">Links</h5>
              </div>
              <div class="col-12" style="text-align: center">
                <ul
                  class="list-unstyled d-flex justify-content-center flex-wrap"
                >
                  <li style="padding-right: 10px">
                    <a href="index.html" class="text-white">Home</a>
                  </li>
                  <li style="padding-right: 10px">
                    <a href="services.html" class="text-white">Services</a>
                  </li>
                  <li style="padding-right: 10px">
                    <a href="project-gallery.html" class="text-white"
                      >Project Gallery</a
                    >
                  </li>
                  <li>
                    <a href="contact-us.html" class="text-white">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row footer-row">
              <div class="col-12 mb-1" style="text-align: center">
                <h5 class="text-uppercase">CONTACT</h5>
              </div>
              <div class="col-12" style="text-align: center">
                <ul class="list-unstyled">
                  <li>
                    <i
                      class="bi bi-telephone fs-5"
                      style="padding-right: 10px"
                    ></i
                    >${this.tel}
                  </li>
                  <li>
                    <i
                      class="bi bi-envelope-at fs-5"
                      style="padding-right: 10px"
                    ></i
                    >${this.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row footer-row">
              <div class="col-12 mb-1" style="text-align: center">
                <h5 class="text-uppercase">SOCIAL</h5>
              </div>
              <div class="col-12" style="text-align: center">
                <ul
                  class="list-unstyled d-flex justify-content-center flex-wrap"
                >
                  <li class="px-2">
                    <a class="text-white" href="${this.facebookLink}"
                      ><i class="bi bi-facebook fs-4"></i
                    ></a>
                  </li>
                  <li class="px-2">
                    <a class="text-white" href="${this.instagramLink}"
                      ><i class="bi bi-instagram fs-4"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">© 2023 Copyright | Silk Web</div>
    </footer>`;
  }
}

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

customElements.define('off-header-element', OffHeader);
customElements.define('footer-element', Footer);
customElements.define('gallery-image-item', GalleryImageItem);
