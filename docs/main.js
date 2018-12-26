/*
Peformance notes: Consider caching document.getElementById('charter') if diff is considerable
Ergonomics: Consider just adding eslint
*/

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
        carousel: document.getElementById('charter')
            .querySelector('.carousel'),
        carouselLeft: document.getElementById('charter')
            .querySelector('.carousel__left-arrow'),
        carouselRight: document.getElementById('charter')
            .querySelector('.carousel__right-arrow'),
    },
    fieldboom: {
        image: {
            index: 0,
            showModal: false,
            subtitles: [],
        },
        carousel: document.getElementById('fieldboom')
            .querySelector('.carousel'),
        carouselLeft: document.getElementById('fieldboom')
            .querySelector('.carousel__left-arrow'),
        carouselRight: document.getElementById('fieldboom')
            .querySelector('.carousel__right-arrow'),
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
        if (i === index) {
            li.classList.add('active')
        } else {
            li.classList.remove('active')
        }
    })

    liIndicatorArray.forEach((li, i) => {
        if (i === index) {
            li.classList.add('active')
        } else {
            li.classList.remove('active')
        }
    })

    subtitle.innerText = job.image.subtitles[index]
}