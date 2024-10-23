function getTestimonialModalId() {
  return 'testimonialImageModal';
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

function createModalFooter() {
  const modalFooter = document.createElement('div');
  const row = document.createElement('div');
  const headingCol = document.createElement('div');
  // const descriptionCol = document.createElement('div');

  modalFooter.classList.add('modal-footer');
  row.classList.add('row');
  headingCol.classList.add(
    'col',
    'd-flex',
    'col-12',
    // 'col-md-4',
    // 'col-lg-3',
    'flex-column'
  );
  // descriptionCol.classList.add('col', 'col-12', 'col-md-4', 'col-lg-3');

  row.appendChild(headingCol);
  // row.appendChild(descriptionCol);
  modalFooter.appendChild(row);

  const title = document.createElement('h2');
  title.id = 'modal-footer-title';
  title.innerText = 'Title';
  const subtitle = document.createElement('h3');
  subtitle.id = 'modal-footer-subtitle';
  subtitle.innerText = 'Subtitle';

  headingCol.appendChild(title);
  headingCol.appendChild(subtitle);

  return modalFooter;
}

function createImgModal(id, footer = false) {
  const modal = document.createElement('div');

  modal.classList.add('modal');

  const closeButton = document.createElement('div');
  closeButton.classList.add('close', 'cursor');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  closeButton.innerHTML = '<i class="bi bi-x"></i>';

  modal.appendChild(closeButton);

  const modalContent = document.createElement('div');
  modalContent.classList.add('img-modal-content');

  const modalImage = document.createElement('img');
  modalContent.appendChild(modalImage);

  if (footer) {
    const modalFooter = createModalFooter();
    modalContent.append(modalFooter);
  }

  modal.appendChild(modalContent);
  document.getElementById(id).appendChild(modal);
}
