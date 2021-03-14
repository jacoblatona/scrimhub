<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item to="/"> Home </b-breadcrumb-item>
      <b-breadcrumb-item active>Games</b-breadcrumb-item>
    </b-breadcrumb>
    <h2 class="bold m-0">FIND YOUR GAME</h2>
    <b-row>
      <b-col cols="12" class="d-flex flex-wrap pt-4">
        <b-link
          class="mb-3"
          :to="{ path: '/scrims', query: { game: game.id } }"
          v-for="game in games"
          :key="game.id"
        >
          <img class="mr-3" :src="game.avatar" />
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Games",

  computed: {
    ...mapGetters({
      games: "games/getGames",
    }),
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
