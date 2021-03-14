<template>
  <div>
    <div id="homeHeader" class="mb-5">
      <b-row>
        <b-col sm="12" md="7" class="text-center text-md-left">
          <h1 class="text-white m-0">SCRIM<span class="text-primary">HUB</span></h1>
          <h1 class="text-white mb-3">AN ESPORTS NETWORK</h1>
          <p class="mb-4">
            Instead of searching on twitter and getting igorned, we built a website <br />
            so you can actually find scrims!
          </p>
          <b-button
            size="md"
            variant="primary"
            class="btn-rounded semi-bold mr-2 text-small"
            to="/scrims"
            ><i class="fas fa-gamepad"></i> Find Scrim</b-button
          >
        </b-col>
        <b-col sm="0" md="5" class="d-none d-md-block">
          <img src="../../public/images/fn2.png" />
        </b-col>
      </b-row>
    </div>
    <h5 class="bold pt-4">POPULAR GAMES</h5>
    <b-row class="pt-2 mb-5">
      <b-col cols="12">
        <VueSlickCarousel :arrows="false" :dots="false" v-bind="sliderSettings">
          <b-link
            :to="{ path: '/scrims', query: { game: game.id } }"
            v-for="game in games"
            :key="game.id"
          >
            <img :src="game.avatar" />
          </b-link>
        </VueSlickCarousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      sliderSettings: {
        autoplay: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchThreshold: 5,
      },
    };
  },

  components: {
    VueSlickCarousel,
  },

  computed: {
    ...mapGetters({
      games: "games/getGames",
    }),
  },
};
</script>

<style lang="scss">
#homeHeader {
  padding-top: 10vh;
  img {
    width: 100%;
    height: auto;
    margin-top: -50px;
  }
  h1 {
    font-weight: 800;
  }
}

img {
  width: 97%;
  margin: 0 auto !important;
  height: auto;
  margin: 20px;
}

.card {
  padding: 5px;
  background: #1c283a;
}
</style>
