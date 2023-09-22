function getTestimonialModalId() {
  return 'testimonialImageModal';
}

function createImageModal() {
  const modal = document.createElement('div');

  modal.classList.add('modal');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close', 'cursor');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  closeButton.innerHTML = '&times;';

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalImage = document.createElement('img');
  modalImage.style =
    'object-fit: cover; height: 100%; max-width: 100%; margin: auto; border-radius: 0.5rem;';
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalImage);

  modal.appendChild(modalContent);
  return modal;
}

function createTestimonialModal() {
  const modal = createImageModal();
  document.getElementById(getTestimonialModalId()).appendChild(modal);
}

function openTestimonialImageModal(testimonialId) {
  const modal = document
    .getElementById(getTestimonialModalId())
    .querySelector('.modal');
  const modalImage = modal.querySelector('img');

  const testimonial = document.getElementById(testimonialId);
  const imageURL = testimonial.dataset.url;
  modalImage.src = imageURL;

  modal.style.display = 'flex';
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'flex';
}

function createImageModalAtId(id) {
  const modal = createImageModal();
  document.getElementById(id).appendChild(modal);
}

function createModalFooter() {
  const modalFooter = document.createElement('div');
  const row = document.createElement('div');
  const headingCol = document.createElement('div');
  const descriptionCol = document.createElement('div');

  modalFooter.classList.add('modal-footer');
  row.classList.add('row');
  headingCol.classList.add(
    'col',
    'd-flex',
    'col-12',
    'col-md-4',
    'col-lg-3',
    'flex-column'
  );
  descriptionCol.classList.add('col', 'col-12', 'col-md-4', 'col-lg-3');

  row.appendChild(headingCol);
  row.appendChild(descriptionCol);
  modalFooter.appendChild(row);

  const title = document.createElement('h2');
  title.innerText = 'Title';
  const subtitle = document.createElement('h3');
  subtitle.innerText = 'Subtitle';

  headingCol.appendChild(title);
  headingCol.appendChild(subtitle);

  return modalFooter;
}

function createGalleryModalAtId(id) {
  const modal = document.createElement('div');

  modal.classList.add('modal');

  const closeButton = document.createElement('div');
  closeButton.classList.add('close', 'cursor');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  closeButton.innerHTML = '<i class="bi bi-x"></i>';
  // closeButton.innerHTML = '&times;';

  const modalContent = document.createElement('div');
  modalContent.classList.add('gallery-image-modal-content');

  const modalImage = document.createElement('img');
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalImage);

  const modalFooter = createModalFooter();
  modalContent.append(modalFooter);

  modal.appendChild(modalContent);
  document.getElementById(id).appendChild(modal);
}
