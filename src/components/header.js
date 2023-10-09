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
                  <img id="site-logo" src="./../images/site-logo-128w.png"
                  srcset="
                    ./../images/site-logo-50w.png   50w,
                    ./../images/site-logo-128w.png 128w
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
customElements.define('off-header-element', OffHeader);
