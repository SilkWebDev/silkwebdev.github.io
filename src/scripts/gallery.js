const filterState = {
  filterCount: 0,
  hasInteracted: false,
};

function clearFilters() {
  resetFilters();
  showAllCategories();
}

function filterButtonClick() {
  // When the user first interacts with the gallery, hide all gallery elements
  if (filterState.hasInteracted === false) {
    filterState.hasInteracted = true;
    hideAllCategories();
  }

  // Track number of active filters - if this value === 0, no filters are active
  // and every gallery element will be hidden, leaving the gallery empty
  // this.classList.toggle('active'); // When using bs-data-toggle, the active is toggled automatically
  this.classList.contains('active')
    ? filterState.filterCount++
    : filterState.filterCount--;
  console.log(this);
  console.log(filterState.filterCount);

  // Gallery is empty, so we can choose a default behaviour. Currently, when no filters
  // are active, we display every gallery element again
  if (filterState.filterCount === 0) {
    clearFilters();
    return;
  }

  // Else, we still have active filters, and we toggle those elements
  // const filterCategory = this.querySelector('label').getAttribute('for');
  const filterCategory = this.getAttribute('data-category');
  toggleFilter(filterCategory);
}

function toggleFilter(category) {
  [].slice
    .call(
      document.querySelectorAll(`gallery-image-item[category="${category}"]`)
    )
    .forEach((elem) => {
      elem.classList.toggle('hidden');
    });
}

function hideAllCategories() {
  [].slice
    .call(document.querySelectorAll('gallery-image-item'))
    .forEach((elem) => {
      elem.classList.add('hidden');
    });
}

function showAllCategories() {
  [].slice
    .call(document.querySelectorAll('gallery-image-item'))
    .forEach((elem) => {
      elem.classList.remove('hidden');
    });
}

function resetFilters() {
  filterState.filterCount = 0;
  filterState.hasInteracted = false;
  [].slice
    .call(document.querySelectorAll('#filter-buttons button'))
    .forEach((elem) => {
      elem.classList.remove('active');
    });
}

function initFilterButtons() {
  const filterButtons = [].slice.call(
    document.querySelectorAll('.filter-button')
  );

  filterButtons.forEach((button) => {
    button.addEventListener('click', filterButtonClick);
  });
}
