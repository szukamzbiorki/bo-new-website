<template>
  <div class="singleWork">
    <Swiper class="gallery" :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
      :loop="true" :effect="'creative'" :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }" :navigation="navigationOptions" :creative-effect="{
  prev: {
    shadow: false,
    translate: [0, '-20%', -1],
  },
  next: {
    translate: [0, '100%', 0],
  },
}
  ">
      <SwiperSlide v-for="     image      in      imagesGallery     " :key="image.id" class="carousel-cell">
        <img class="workImage" :src="image.asset.url" alt="">
      </SwiperSlide>
    </Swiper>

    <div class="descriptionBox">
      <div v-if="imagesGallery.length > 1" @click="previous()" class="slidePrev-btn navbut">&#8592;</div>
      <div v-if="imagesGallery.length > 1" @click="next()" class="slideNext-btn navbut">&#8594;</div>
      <span :class="type">
        {{ type }}
      </span>
      <span class="worktitle bigtype">
        {{ title }}
      </span>
      <span class="size smalltype">
        {{ sizeplace }}
      </span>
      <span class="medium smalltype">
        {{ mediumyear }}
      </span>
      <div class="workdesc"> {{ description }}</div>
    </div>
  </div>
</template>

<script>
import {
  Swiper,
  Navigation,
  Pagination,
  EffectCards,
  Autoplay,
  EffectCreative
} from 'swiper';
import 'swiper/swiper-bundle.min.css'
// import Flickity from 'vue-flickity';

Swiper.use([Navigation, EffectCreative, EffectCards]);

export default {
  props: {
    type: String,
    title: String,
    sizeplace: String,
    mediumyear: String,
    description: String,
    imagesGallery: Array,
  },
  // components: {
  //   Flickity
  // },
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true,
      },
      navigationOptions: {
        nextEl: ".slidePrev-btn",
        prevEl: ".slideNext-btn"
      }
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  },
  mounted() {


    // const prevButton = swiper.closest('.swiper__container').querySelector('.slidePrev-btn');
    // const nextButton = swiper.closest('.swiper__container').querySelector('.slideNext-btn');

    // if (prevButton) {
    //   prevButton.addEventListener('click', () => {
    //     swiperEl.slidePrev();
    //   })
    // }

    // if (nextButton) {
    //   nextButton.addEventListener('click', () => {
    //     swiperEl.slideNext();
    //   })
    // }


    //   // if (swiperEl.isBeginning) {
    //   //   swiperEl.navigation.update()
    //   // }
    // })

    // you can use different options later
    // swiper.on('activeIndexChange', (swiper) => {
    //   // console.log(swiper)
    // })
  }
}
</script>


<style>
.swiper-wrapper {
  overflow: hidden;
}

.size {
  color: grey;
}

.navbut {
  font-family: "DiGrotesk";
  display: inline-block;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.singleWork {
  overflow: visible;
  width: 100%;
  margin-bottom: calc(var(--space)*2);
  /* background-color: white; */
}

.gallery {
  display: block;
  width: calc(60vw - 40px);
  max-height: 70vh;
  margin-bottom: 7px;
}

.workImage {
  max-width: 100%;
  margin-right: calc(var(--margin1) / 2);
  cursor: pointer;
  max-height: 70vh;
  cursor: pointer;
}

.workImage:last-child {
  margin-right: 0;
}

.swiper-slide {
  background-color: #ededed;
  height: 100% !important;
}

.swiper-slide-shadow {
  color: white;
  /* display: none !important; */
}

.descriptionBox {
  margin-top: 0px;
  /* flex: 0 0 auto;
  min-width: 300px; */
  display: inline-block;
  white-space: normal;
  /* white-space: pre-wrap; */
}

.descriptionBox * {
  margin-bottom: .1em;
  margin-right: .3em;
}

.smalltype {
  font-family: "CMU";
  font-size: 13px;
}

.bigtype {
  font-size: 17px;
}

.work {
  padding: 2px 2px 0 2px;
  display: inline-block;
  color: white;
  text-transform: uppercase;
  background-color: blue;
}

.exhibition {
  padding: 2px 2px 0 2px;
  display: inline-block;
  color: white;
  text-transform: uppercase;
  background-color: red;
}

.swiper-button-disabled {
  color: grey;
}

.workdesc {
  font-family: 'DiGroteskItalic' !important;
}

@media screen and (max-width: 820px) {
  .gallery {
    width: calc(100vw - 2*var(--space)) !important;
    max-height: 70vh;
  }

  .descriptionBox {
    width: calc(100vw - 2*var(--space));
    max-width: calc(100vw - 2*var(--space));
  }

  .descriptionBox * {
    overflow-wrap: break-word;
    display: inline-block;
  }

  .swiper-slide {
    background-color: #ededed;
  }
}
</style>
