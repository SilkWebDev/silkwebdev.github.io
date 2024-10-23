let index = 0;
const prefix = 'testimonial-';

const iconMap = {
  extension: 'bi-house-add',
  conversion: 'bi-house-gear',
  landscaping: 'bi-tree',
  'new-build': 'bi-houses',
  renovation: 'bi-house-up',
};

function createTestimonialCard(data) {
  const testimonial = document.createElement('div');
  testimonial.classList.add('testimonial', 'col');
  testimonial.setAttribute('data-url', data.imageURL);
  testimonial.id = prefix + ++index;
  const card = document.createElement('div');
  card.classList.add('card', 'invisible', 'slide-up');
  testimonial.appendChild(card);

  const cardBody = createCardBody(testimonial.id, data);
  card.appendChild(cardBody);

  if (data.testimony !== '' || data.imageURL !== '') {
    const cardFooter = createCardFooter(
      testimonial.id,
      data.testimony,
      data.imageURL
    );
    card.appendChild(cardFooter);
  }

  return testimonial;
}

function createCardBody(testimonialId, data) {
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitleBar = createCardTitleBar(
    data.title,
    data.subtitle,
    data.jobClassifications
  );
  const cardExcerpt = createTestimonialExcerpt(testimonialId, data.excerpt);
  const cardTestimonialBlock = createExpandedTestimonialBlock(
    testimonialId,
    data.testimony
  );

  cardBody.appendChild(cardTitleBar);
  cardBody.appendChild(createCardBar());
  cardBody.appendChild(cardExcerpt);
  cardBody.appendChild(cardTestimonialBlock);
  return cardBody;
}

function createCardFooter(testimonialId, testimony, imageURL) {
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');

  cardFooter.appendChild(
    createFooterButtons(testimonialId, testimony, imageURL)
  );
  return cardFooter;
}

function createFooterButtons(testimonialId, testimony, imageURL) {
  const buttonList = document.createElement('ul');
  buttonList.classList.add('testimonial-buttons');

  if (testimony !== '') {
    buttonList.appendChild(createExpandButton(testimonialId));
  }

  if (imageURL !== '') {
    buttonList.appendChild(createImageButton(testimonialId));
  }

  return buttonList;

  function createImageButton(testimonialId) {
    const button = document.createElement('li');
    button.classList.add('testimonial-button');

    const link = document.createElement('a');
    link.classList.add('btn', 'btn-primary');
    link.addEventListener('click', () => {
      openTestimonialImageModal(testimonialId);
    });

    const imgButton = document.createElement('span');
    const imgIcon = document.createElement('i');
    imgIcon.classList.add('bi-images');
    imgButton.appendChild(imgIcon);

    link.appendChild(imgButton);
    button.appendChild(link);

    return button;
  }

  function createExpandButton(testimonialId) {
    const button = document.createElement('li');
    button.classList.add('testimonial-button');

    const link = document.createElement('a');
    link.classList.add('btn', 'btn-primary');
    link.setAttribute('data-bs-toggle', 'collapse');
    link.setAttribute(
      'data-bs-target',
      generateCollapseClass(testimonialId, true)
    );

    const spanButtonOne = document.createElement('span');
    const iconButtonOne = document.createElement('i');
    iconButtonOne.classList.add('bi-three-dots-vertical');
    spanButtonOne.appendChild(iconButtonOne);

    const spanButtonTwo = document.createElement('span');
    spanButtonTwo.classList.add('hidden');
    const iconButtonTwo = document.createElement('i');
    iconButtonTwo.classList.add('bi-x');
    spanButtonTwo.appendChild(iconButtonTwo);

    link.appendChild(spanButtonOne);
    link.appendChild(spanButtonTwo);

    button.appendChild(link);
    return button;
  }
}

function createCardTitleBar(titleText, subtitleText, jobClassifications) {
  const cardTitleBar = document.createElement('div');
  cardTitleBar.classList.add('card-title-bar');

  const titleAndSubtitle = createTitleAndSubtitle(titleText, subtitleText);
  cardTitleBar.appendChild(titleAndSubtitle);

  const titleBarIcons = createCardTitleBarIcons(jobClassifications);
  if (titleBarIcons !== null) {
    cardTitleBar.appendChild(titleBarIcons);
  }

  return cardTitleBar;
}

function createTitleAndSubtitle(titleText, subtitleText) {
  // <div>
  //   <h5 class='card-title'>Title</h5>
  //   <h6 class='card-subtitle text-body-secondary'>Subtitle</h6>
  // </div>

  const titleAndSubtitle = document.createElement('div');
  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.innerText = titleText;
  const subtitle = document.createElement('h6');
  subtitle.classList.add('card-subtitle', 'text-body-secondary');
  subtitle.innerText = subtitleText;
  titleAndSubtitle.appendChild(title);
  titleAndSubtitle.appendChild(subtitle);
  return titleAndSubtitle;
}

function createCardTitleBarIcons(jobClassifications = []) {
  // <div class='card-title-bar-icons'>
  //   0 .. *
  //
  //     createTitleBarIcon();
  //
  // </div>

  if (jobClassifications.length < 1) return null;

  const cardTitleBarIcons = document.createElement('div');
  cardTitleBarIcons.classList.add('card-title-bar-icons');

  for (let job of jobClassifications) {
    const i = createCardTitleBarIcon(iconMap[job]);
    cardTitleBarIcons.appendChild(i);
  }

  return cardTitleBarIcons;
}

function createCardTitleBarIcon(iconClass) {
  const cardTitleBarIcon = document.createElement('div');
  cardTitleBarIcon.classList.add('card-title-bar-icon');

  const icon = document.createElement('i');
  icon.classList.add(iconClass);

  cardTitleBarIcon.append(icon);

  return cardTitleBarIcon;
}

function createCardBar() {
  // <div class="card-bar"></div>
  let cardBar = document.createElement('div');
  cardBar.classList.add('card-bar');
  return cardBar;
}

function createTestimonialExcerpt(testimonialId, excerptText) {
  let collapseIndex = generateCollapseClass(testimonialId);
  const testimonialExcerpt = document.createElement('div');
  testimonialExcerpt.classList.add(
    'testimonial-excerpt',
    'collapse',
    'show',
    collapseIndex
  );

  let excerpt = document.createElement('q');
  excerpt.innerText = excerptText;

  testimonialExcerpt.appendChild(excerpt);
  return testimonialExcerpt;
}

function createExpandedTestimonialBlock(testimonialId, testimony) {
  let collapseIndex = generateCollapseClass(testimonialId);
  const testimonialBlock = document.createElement('div');
  testimonialBlock.classList.add('collapse', collapseIndex);

  if (testimony !== '') {
    testimonialBlock.appendChild(createExpandedBlock(testimony));
  }
  return testimonialBlock;
}

function createExpandedBlock(testimony) {
  const expandedBlock = document.createElement('div');
  expandedBlock.classList.add('expanded-testimonial-block');

  let testimonyParagraphs = testimony.split('/x');
  for (let paragraph of testimonyParagraphs) {
    const p = document.createElement('p');
    p.innerText = paragraph;
    expandedBlock.appendChild(p);
  }

  return expandedBlock;
}

function appendTestimonial(id, testimonial) {
  document.getElementById(id).appendChild(createTestimonialCard(testimonial));
}

function addTestimonials(columns) {
  let index = 0;
  testimonials.forEach((testimonial) => {
    appendTestimonial(columns[index], testimonial);
    index === 0 ? index++ : index--;
  });
}

function generateCollapseClass(testimonialId, target = false) {
  let c = 'multi-collapse-' + testimonialId;
  if (target) {
    c = '.' + c;
  }
  return c;
}

const testimonials = [
  {
    title: 'Lydia & Jamie',
    subtitle: 'Extension, Malvern',
    jobClassifications: ['extension'],
    excerpt:
      'From our initial meeting to having the final extension signed off, Jim and his team delivered on every aspect.',
    testimony:
      'As everyone does when investing in their property, you look for a builder who listens to your needs, understands your vision and tries to make that a reality./x' +
      'From our initial meeting to having the final extension signed off, Jim and his team delivered on every aspect. They were polite, honest, clean and communicated with us throughout the whole process./x' +
      'Jim and his team have helped us turn our house into a forever home and we can not praise enough the extremely high quality of their work. We will only be using Jim for any interior or exterior work in the future as we know the end results will be nothing but superb.',
    imageURL: '',
  },
  {
    title: 'Tom & Jennie Hermolle',
    subtitle: 'Extension & Renovation, Malvern',
    jobClassifications: ['extension', 'renovation'],
    excerpt:
      "Jim has a fantastic team working with him who are all well-briefed, know what they are doing, work hard and importantly (especially as our family were living in the middle of the building works) we couldn't have asked for a nicer, more considerate team to be working on our house for months on end. They all take real pride in their work and go above and beyond to deliver the right outcome.",
    testimony:
      'Jim completed a kitchen-diner extension plus partial 2-story extension (and internal re-modeling) of our 1930s house. Due to the nature of the house (suspended floors and a big drop at the rear of the property) and some key elements of the design, it was not a straightforward job but Jim and his team were excellent throughout./x' +
      "The communication from Jim was always great and they always arrived and carried out work as agreed. Jim has a fantastic team working with him who are all well-briefed, know what they are doing, work hard and importantly (especially as our family were living in the middle of the building works) we couldn't have asked for a nicer, more considerate team to be working on our house for months on end. They all take real pride in their work and go above and beyond to deliver the right outcome./x" +
      'There were some technical challenges in the design e.g. with some extremely large steels that had been specified. Jim ensured that he found a way to make it work. We are very pleased with the end result and would highly recommend Jim and his team.',
    imageURL: '',
  },
  {
    title: 'Robin Marling, retired Chartered Surveyor',
    subtitle: 'Extension & Renovation, Malvern',
    jobClassifications: ['extension', 'renovation'],
    excerpt:
      'His workmanship was always good, and from years of experience he also offered suggestions which have improved the project. I am very pleased with the work and have no hesitation in recommending his firm.',
    testimony:
      'J. S. Kerr [Building Limited] carried out building works for me over a 4 month period, involving some demolitions / structural alterations, an extension, refurbishment of kitchen and bathroom, plumbing, heating and electrical modifications./x' +
      'Throughout, he was very diligent and reliable - he keeps his promises. He was always fair in his approach and had good control over his subcontractors, who all have to meet his own high standards./x' +
      'His workmanship was always good, and from years of experience he also offered suggestions which have improved the project. I am very pleased with the work and have no hesitation in recommending his firm.',
    imageURL: '',
  },
  {
    title: 'John & Sally',
    subtitle: 'Extension, Malvern',
    jobClassifications: ['extension'],
    excerpt:
      'We are also very satisfied with the work you have completed and the difference it has made to the property and would have no issues in recommending yourself to others.',
    testimony:
      'We have only praise for yourself and your fellow workers, all of which were very courteous and helpful during the extension works. It was very pleasing to see that at the end of every day everything was left clean and tidy./x' +
      'We received many comments from neighbours and passers-by who commented on what a good job you were making and how clean and tidy you left it. We are also very satisfied with the work you have completed and the difference it has made to the property and would have no issues in recommending yourself to others.',
    imageURL: './../images/project-images/extension/ex-churchill-1-1200w.jpg',
  },
  {
    title: 'Peter & Sue Rimell',
    subtitle: 'Barn Conversion, Kempsey',
    jobClassifications: ['conversion'],
    excerpt:
      'Jim explained every stage from start to finish, making the process appear easy. This was not a project for the faint-hearted, but the results are outstanding. Thank you Team!',
    testimony:
      'We engaged J. S. Kerr Building Limited on a recommendation from a friend (we viewed his previous barn conversions carried out for our friend). We had no building experience, and embarked on converting an old barn into our new home (see photo gallery)./x' +
      'Jim explained every stage from start to finish, making the process appear easy. His skilled team are respectful and helpful, all working to a high standard, leaving the site tidy. This was not a project for the faint-hearted, but the results are outstanding. The oak beams created by Shane are so impressive, resulting in an overall luxurious finish./x' +
      'Thank you Team!',
    imageURL: './../images/project-images/conversion/cv-kempsey-4-1200w.jpg',
  },
  {
    title: 'Ron & Alison',
    subtitle: 'Extension, Kempsey',
    jobClassifications: ['extension'],
    excerpt:
      'Jim would explain what the next phase entailed so that we knew exactly what would be happening next and who would be with us the next day. We are delighted with the end result and have no hesitation in recommending J. S. Kerr Building Ltd.',
    testimony:
      "We chose Jim Kerr to build our garden room extension following a recommendation by our architect and we weren't disappointed as he proved to be knowledgeable in all aspects of the build from studying the plans (and tweaking them where necessary) to constructing the building./x" +
      'He liaised confidently with Building Control, with whom he has a good relationship, the thermal energy consultant and the glazing supplier. The build was certainly not without its complications but Jim and Dan, the groundworks expert, dealt with these without being phased in the slightest./x' +
      'We are in a low lying position with little fall but Jim designed and put in place, with Daryl and James, a system to take away the rainwater. This involved digging a trench across the lawn but by the time they had finished we could hardly notice that it had been disturbed./x' +
      'Jim and his team plus all the various tradesmen without exception were polite, friendly, helpful and tidy. Virtually at the end of every day Jim would explain what the next phase entailed so that we knew exactly what would be happening next and who would be with us the next day. We are delighted with the end result and have no hesitation in recommending J. S. Kerr Building Ltd.',
    imageURL: '',
  },
  {
    title: 'Cannara B&B',
    subtitle: 'Extension, Malvern',
    jobClassifications: ['extension'],
    excerpt:
      'You have a really great team and we were really impressed with the project management of the whole thing. We will definitely ask you to do another job for us in the future!',
    testimony: '',
    imageURL: '',
  },
  {
    title: 'Richard Ralph, MRICS',
    subtitle: 'Callow End',
    jobClassifications: [],
    excerpt:
      'We have used Jim Kerr Building Services for over 20 years now. Jim is reliable, trustworthy and a pleasure to work with. With high quality results every time, I would have no hesitation in recommending Jim Kerr to domestic or commercial clients.',
    testimony: '',
    imageURL:
      './../images/project-images/new-build/callowend-nb-2-og-1200w.jpg',
  },
  {
    title: 'Mr. & Mrs. Phil & Jill Shepherd',
    subtitle: 'Extension, Malvern',
    jobClassifications: ['extension'],
    excerpt:
      'We have no hesitation in recommending Jim Kerr Building Limited. Jim runs a professional and efficient team and his knowledge of the building industry is extensive from the realisation of planning applications, management of building regulations to the acquisition of appropriate materials.',
    testimony:
      'We have no hesitation in recommending Jim Kerr Building Limited. Jim runs a professional and efficient team and his knowledge of the building industry is extensive from the realisation of planning applications, management of building regulations to the acquisition of appropriate materials./x' +
      'We engaged the services of Jim Kerr for a single storey extension to our semi-detached Victorian property. The first phase had been undertaken by a previous builder but Jim was happy to undertake the further work required./x' +
      'From groundworks to the final finish, Jim used reliable, prompt and efficient tradesmen and supervised the job throughout, ensuring steel supports were correctly installed and setting up the new insulated floor at the correct level./x' +
      'The job was not without challenges but Jim approached these with a calm and professional manner. Jim was quick to respond to any queries or concerns we, as clients, might have, almost always with a personal phone call. The electricians, plumbers, heating engineers, plasterers, painters and roofers, all worked to a high standard./x' +
      'Jim insisted on leaving his site tidy, clean as possible and free from rubbish and hazards, organising all equipment at the end of each day, which really helped to keep the disruption of undertaking a building project, to a minimum./x' +
      "Jim was also a fantastic manager of his workforce, and at every point in the process, made sure work progressed smoothly and there were no hold ups. Daryl, his regular labourer, and James, were well directed, hard working and always friendly and polite. They were appreciative of teas and coffees when we could provide them, without expectation. We are both very happy with Jim's services and if he were not so busy, would keep him around to exclusively attend to our other projects./x" +
      "Seriously, we were fortunate to find him and his team and can't recommend him highly enough. Thank you, Jim.",
    imageURL: '',
  },
  {
    title: 'Rob Minshull',
    subtitle: 'Barn Conversion & Landscaping, Upton-upon-Severn',
    jobClassifications: ['conversion', 'landscaping'],
    excerpt:
      'Jim Kerr and his team provide a totally professional and experienced building service. He manages the whole process from inception to completion, dealing with all aspects of the project. We would strongly recommend his company.',
    testimony:
      'Jim Kerr and his team provide a totally professional and experienced building service./x' +
      'Jim has undertaken several projects for us from Barn Conversions to Patio Constructions over the years and is always attentive and thoughtful in discussing your requirements. He has great knowledge and skill, and provides that extra care which produces excellent workmanship./x' +
      'He manages the whole process from inception to completion, dealing with all aspects of the project. We would strongly recommend his company.',
    imageURL: './../images/project-images/conversion/cv-upton-3-1200w.jpg',
  },
  {
    title: 'Viv',
    subtitle: 'Extension, Malvern',
    jobClassifications: ['extension'],
    excerpt:
      'Jim Kerr is an excellent builder who I have complete trust in. He is reliable, hard working, kind and caring and will do everything in his power to get a build done just how you want it.',
    testimony:
      'Jim Kerr is an excellent builder who I have complete trust in./x' +
      'He is reliable, hard working, kind and caring and will do everything in his power to get a build done just how you want it. He will undoubtedly go that extra mile for you./x' +
      'Everything will be finished to a high spec. His permanent team follow suit and are respectful, cheerful and a pleasure to have around./x' +
      'We have had the first part of our extension done and we are more than delighted with it. We are now looking forward to the second phase of our extension and know we are in excellent hands.',
    imageURL: './../images/project-images/extension/ex-hampden-1-1200w.jpg',
  },
  {
    title: 'Sarah Edwards',
    subtitle: 'Extension and Renovation, Hanley Swan',
    jobClassifications: ['extension', 'renovation'],
    excerpt:
      'Professional, hard-working, compassionate and exceptionally reliable. THANK YOU!',
    testimony:
      'To enable a dream to become a reality, I needed a project manager, a mediator to the local county council at every appropriate stage of the build <i>and</i> a manager of an exceptional team of professionals./x' +
      'This is exactly what was delivered. I highly recommend the services of J. S. Kerr Building Limited and his team. While Jim and his team transformed our house over an eight month period, they have given me my DREAM HOME!/x' +
      'Professional, hard-working, compassionate and exceptionally reliable. THANK YOU!',
  },
];
