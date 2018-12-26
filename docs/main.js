/*
Ergonomics: Consider just adding eslint
*/

const charterElm = document.getElementById('charter')
const fieldboomElm = document.getElementById('fieldboom')

const state = {
  onLandingPage: false,
  charter: {
    image: {
      index: 0,
      showModal: false,
      subtitles: [
        'Channel guide for available programs.',
        'List of related assets for actor "Brad Pitt".',
        'A user\'s "My Library" showing recently watched titles and saved VODs.'
      ],
    },
    carousel: charterElm.querySelector('.carousel'),
    carouselLeft: charterElm.querySelector('.carousel__left-arrow'),
    carouselRight: charterElm.querySelector('.carousel__right-arrow'),
  },
  fieldboom: {
    image: {
      index: 0,
      showModal: false,
      subtitles: [],
    },
    carousel: fieldboomElm.querySelector('.carousel'),
    carouselLeft: fieldboomElm.querySelector('.carousel__left-arrow'),
    carouselRight: fieldboomElm.querySelector('.carousel__right-arrow'),
  },
};


state.charter.carouselLeft.addEventListener('click', (event) => {
  const { image } = state.charter
  if (!image.index) {
    image.index = 2
  } else {
    image.index -= 1
  }

  changeActiveCarouselImage(image.index, state.charter)
})

state.charter.carouselRight.addEventListener('click', (event) => {
  const { image } = state.charter
  if (image.index === 2) {
    image.index = 0
  } else {
    image.index += 1
  }

  changeActiveCarouselImage(image.index, state.charter)
})

function changeActiveCarouselImage(index, job) {
  const { carousel } = job
  const liArray = carousel.querySelectorAll('.carousel__image-list > li')
  const liIndicatorArray = carousel.querySelectorAll('.carousel__indicator > li')
  const subtitle = carousel.querySelector('.carousel__subtitle')

  liArray.forEach((li, i) => {
    const indicatorClassList = liIndicatorArray[i].classList

    if (i === index) {
      li.classList.add('active')
      indicatorClassList.add('active')
    } else {
      li.classList.remove('active')
      indicatorClassList.remove('active')
    }
  })

  subtitle.innerText = job.image.subtitles[index]
}