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
customElements.define('footer-element', Footer);