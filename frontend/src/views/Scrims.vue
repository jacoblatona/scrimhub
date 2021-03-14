<template>
  <div>
    <div class="d-flex justify-content-between">
      <b-breadcrumb>
        <b-breadcrumb-item to="/"> Home </b-breadcrumb-item>
        <b-breadcrumb-item active>Scrims</b-breadcrumb-item>
      </b-breadcrumb>

      <div>
        <b-button class="mt-2" variant="primary" size="sm" v-b-toggle.sidebar-1
          >Post Scrim</b-button
        >

        <b-sidebar id="sidebar-1" no-header shadow>
          <div class="px-4 py-5">
            <h4 class="text-white bold">POST SCRIM</h4>
            <p class="text-muted text-small">
              <i class="fas fa-info-circle text-primary"></i> All scrims auto expire after
              1 hour
            </p>
            <hr />
            <div v-if="authenticatedUser">
              <div v-if="!finished">
                <b-form-group label="Title">
                  <b-form-input
                    v-model="form.title"
                    placeholder="Need 2v2 Scrim!"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Select Game">
                  <b-form-select
                    v-model="form.game"
                    :options="games"
                    value-field="id"
                    text-field="name"
                    class="form-control"
                  ></b-form-select>
                </b-form-group>
                <b-form-group label="Select Platform">
                  <b-form-select
                    v-model="form.platform"
                    :options="platforms"
                    value-field="id"
                    text-field="name"
                    class="form-control"
                  ></b-form-select>
                </b-form-group>
                <b-form-group label="Select Region">
                  <b-form-select
                    v-model="form.region"
                    :options="regions"
                    value-field="id"
                    text-field="name"
                    class="form-control"
                  ></b-form-select>
                </b-form-group>
                <b-form-group label="Select Type">
                  <b-form-select
                    v-model="form.type"
                    :options="types"
                    value-field="type"
                    text-field="type"
                    class="form-control"
                  ></b-form-select>
                </b-form-group>
                <b-form-group label="Message">
                  <b-form-textarea
                    id="textarea"
                    class="form-control"
                    placeholder="Add my gamertag jaralato#1844... no snipers"
                    rows="4"
                    v-model="form.message"
                  ></b-form-textarea>
                </b-form-group>
                <b-button
                  v-if="!processing"
                  variant="primary"
                  class="btn-block"
                  @click="submit"
                  :disabled="
                    !form.title ||
                    !form.game ||
                    !form.platform ||
                    !form.region ||
                    !form.type
                  "
                  >Submit</b-button
                >
                <b-button v-else variant="primary" class="btn-block"
                  ><i class="fas fa-spinner fa-spin"></i
                ></b-button>
              </div>
              <div v-else class="text-white text-center">
                <i class="far fa-check-circle text-success"></i>
                <p class="bold">Your scrim has posted successfully!</p>
              </div>
            </div>
            <div class="text-center" v-else>
              <i class="fas fa-user-lock text-danger"></i>
              <p class="text-white">Must be logged in</p>
            </div>
          </div>
        </b-sidebar>
      </div>
    </div>
    <b-row class="">
      <b-col md="2" class="pt-5">
        <div class="form-group mb-3">
          <label class="text-small">GAME</label>
          <br />
          <p-radio
            v-model="game"
            name="game"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            :value="null"
            checked
          >
            All</p-radio
          >
          <br />
          <p-radio
            :checked="g.id == query"
            name="game"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            v-for="g in games"
            :key="g.id"
            @change="setGame(g.id)"
          >
            {{ g.name }}</p-radio
          >
          <br />
        </div>
        <div class="form-group mb-3">
          <label class="text-small">PLATFORM</label>
          <br />
          <p-radio
            v-model="platform"
            name="platform"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            :value="null"
          >
            All</p-radio
          >
          <br />
          <p-radio
            name="platform"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            v-for="p in platforms"
            :key="p.id"
            @change="setPlatform(p.id)"
          >
            {{ p.name }}
          </p-radio>
        </div>
        <div class="form-group mb-3">
          <label class="text-small">REGION</label>
          <br />
          <p-radio
            v-model="region"
            name="region"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            :value="null"
          >
            All</p-radio
          >
          <br />
          <p-radio
            name="region"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            v-for="r in regions"
            :key="r.id"
            @change="setRegion(r.id)"
          >
            {{ r.name }}</p-radio
          >
          <br />
        </div>
        <div class="form-group mb-3">
          <label class="text-small">TYPE</label>
          <br />
          <p-radio
            v-model="type"
            name="type"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            :value="null"
          >
            All</p-radio
          >
          <br />
          <p-radio
            v-model="type"
            name="type"
            color="primary"
            class="p-default p-curve p-jelly text-small"
            value="singles"
          >
            Singles</p-radio
          >
          <br />
          <p-radio
            v-model="type"
            name="type"
            color="primary"
            class="p-default p-curve p-smooth text-small"
            value="duos"
          >
            Duos</p-radio
          >
          <br />
          <p-radio
            v-model="type"
            name="type"
            color="primary"
            class="p-default p-curve p-smooth text-small"
            value="trios"
          >
            Trios</p-radio
          >
          <br />
          <p-radio
            v-model="type"
            name="type"
            color="primary"
            class="p-default p-curve p-smooth text-small"
            value="squads"
          >
            Squads</p-radio
          >
          <br />
        </div>
      </b-col>
      <b-col md="10">
        <b-row class="pt-1">
          <b-col cols="12">
            <div class="d-flex justify-content-end py-3 m-0">
              <small class="m-0">
                <span class="text-primary bold">{{ filteredList.length }}</span>
                results found
              </small>
            </div>

            <b-row>
              <b-col md="6" lg="4" v-for="scrim in filteredList" :key="scrim.id">
                <div class="scrim-item mb-3">
                  <div
                    class="scrim-item-header"
                    :style="{
                      backgroundImage: 'url(' + scrim.game.banner + ')',
                      backgroundSize: 'cover',
                    }"
                  >
                    <b-badge variant="primary m-2"
                      ><i :class="scrim.platform.icon"></i
                    ></b-badge>
                  </div>
                  <div class="p-3">
                    <div class="d-flex justify-content-between">
                      <span class="text-danger text-xs">{{
                        scrim.game.name.toUpperCase()
                      }}</span>
                    </div>
                    <p class="bold">{{ scrim.title }}</p>
                    <div class="d-flex flex-wrap">
                      <p class="m-0 text-small thin mr-2 p-2 stat mb-2">
                        <i class="fas fa-map-marker-alt text-warning"></i>
                        {{ scrim.region.name }}
                      </p>
                      <p class="m-0 text-small thin mr-2 p-2 stat mb-2">
                        <i
                          class="fas fa-user text-primary"
                          v-if="scrim.type == 'singles'"
                        ></i>
                        <i
                          class="fas fa-user-friends text-primary"
                          v-else-if="scrim.type == 'duos'"
                        ></i>
                        <i class="fas fa-users text-primary" v-else></i>
                        {{ scrim.type }}
                      </p>
                      <p class="m-0 text-small thin p-2 stat mb-2">
                        <i
                          class="fas fa-info-circle text-success"
                          v-b-tooltip.hover
                          :title="scrim.message"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Scrims",
  mounted() {
    this.loadScrims();
    this.query = this.$route.query.game ? this.$route.query.game : null;
  },
  data() {
    return {
      game: this.$route.query.game ? this.$route.query.game : null,
      platform: null,
      region: null,
      type: null,
      types: [
        { type: "singles" },
        { type: "duos" },
        { type: "trios" },
        { type: "squads" },
      ],
      form: {
        title: "",
        game: "",
        platform: "",
        region: "",
        type: "",
        message: "",
      },
      processing: false,
      finished: false,
      query: null,
    };
  },

  computed: {
    ...mapGetters({
      regions: "regions/getRegions",
      games: "games/getGames",
      platforms: "platforms/getPlatforms",
      scrims: "scrims/getScrims",
      authenticatedUser: "auth/getAuthenticatedUser",
    }),
    filteredList() {
      let vm = this,
        list = vm.scrims;
      return list.filter(function (item) {
        let region = vm.region ? item.region.id == vm.region : true,
          type = vm.type ? item.type == vm.type : true,
          game = vm.game ? item.game.id == vm.game : true,
          platform = vm.platform ? item.platform.id == vm.platform : true;

        return region && type && game && platform;
      });
    },
  },
  methods: {
    ...mapActions({
      loadScrims: "scrims/loadScrims",
    }),
    setRegion(input) {
      this.region = input;
    },
    setPlatform(input) {
      this.platform = input;
    },
    setGame(input) {
      this.game = input;
    },
    submit() {
      this.processing = true;
      axios
        .post(process.env.VUE_APP_API_URL + "/scrim/create", {
          title: this.form.title,
          game_id: this.form.game,
          platform_id: this.form.platform,
          region_id: this.form.region,
          type: this.form.type,
          message: this.form.message,
        })
        .then((response) => {
          console.log(response.data);
          this.scrims.unshift(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.processing = false;
          this.finished = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/variables";

.card,
.card-body {
  padding: 0;
  border: 1px solid $card-border;

  i.fab {
    margin-top: -10px;
    background: $bg-primary;
    padding: 5px;
    border-radius: 50%;
    margin-right: -10px;
  }

  i.far {
    font-size: 20px;
  }

  img {
    width: 80px;
    height: auto;
  }
}

#text {
  font-size: $text-small !important;
}

.fa-check-circle,
.fa-user-lock {
  font-size: 40px;
  margin-top: 20%;
  margin-bottom: 10px;
}

.scrim-item {
  width: 100%;
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: 16px !important;

  .scrim-item-header {
    width: 100%;
    height: 150px;
  }

  .stat {
    background: $card-border;
    border-radius: 7px;
  }
}
</style>
