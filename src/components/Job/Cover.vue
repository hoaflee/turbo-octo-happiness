<template>
  <v-card flat class="mx-auto cover-panel">
    <v-card-title class="display-1">{{data.title}}</v-card-title>
    <v-list>
      <v-list-item>
        <v-list-item-avatar color="grey" height="35" width="35" min-width="35" @click="goComPage()">
          <v-img :src="ownerAvatar">
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="blue lighten-4"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title @click="goComPage()">{{data.ownerName}}</v-list-item-title>
          <v-list-item-subtitle>
            <v-rating
              small
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half"
              half-increments
              hover
            ></v-rating>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn small outlined icon color="primary">
            <v-icon color="primary">mdi-facebook</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn small outlined icon color="primary">
            <v-icon color="primary">mdi-twitter</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-img class="company-cover" :src="jobImg" height="300">
      <template v-slot:placeholder>
        <v-layout fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="blue lighten-4"></v-progress-circular>
        </v-layout>
      </template>
    </v-img>

    <v-container fluid class="base-info">
      <v-layout fill-height align-center justify-center wrap>
        <v-flex md2 sm6>
          <v-icon class="mr-2">mdi-clock-outline</v-icon>
          <span class="subheading">{{startDate}}</span>
        </v-flex>

        <v-flex md2 sm6>
          <v-icon class="mr-2">mdi-eye-outline</v-icon>
          <span class="subheading">1524</span>
        </v-flex>

        <v-flex md3 sm12>
          <v-card flat tile>
            <v-icon class="mr-2">mdi-account-group</v-icon>
            <span class="subheading">Mutual connections (10)</span>
          </v-card>
        </v-flex>
        <v-flex md5 sm12 class="company-recommed">
          <v-btn tile dark class="float-md-right btn-recommed" color="primary" depressed>
            <v-icon left>mdi-thumb-up-outline</v-icon>Recommned (25)
          </v-btn>

          <v-btn tile dark class="float-md-right mx-2" color="error" depressed>
            <v-icon left>mdi-check-circle-outline</v-icon>Apply Now
          </v-btn>
        </v-flex>
      </v-layout>

      <!-- <v-row no-gutters wrap align="center" justify="center">
        <v-col lg="2" md="6">
          <v-icon class="mr-2">mdi-clock-outline</v-icon>
          <span class="subheading">{{startDate}}</span>
        </v-col>

        <v-col lg="2" md="6">
          <v-icon class="mr-2">mdi-eye-outline</v-icon>
          <span class="subheading">1524</span>
        </v-col>

        <v-col lg="3" md="12">
          <v-card flat tile>
            <v-icon class="mr-2">mdi-account-group</v-icon>
            <span class="subheading">Mutual connections (10)</span>
          </v-card>
        </v-col>
        <v-col lg="5" md="12" align="right" class="company-recommed">
          <v-card flat tile>
            <v-btn tile dark class="mr-2" color="error" depressed>
              <v-icon left>mdi-check-circle-outline</v-icon>Apply Now
            </v-btn>
            <v-btn tile dark class="btn-recommed" color="primary" depressed>
              <v-icon left>mdi-thumb-up-outline</v-icon>Recommned (25)
            </v-btn>
          </v-card>
        </v-col>
      </v-row>-->
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  components: {},
  data: () => ({
    rating: 4.5
  }),
  methods: {
    goComPage() {
      this.$emit("goToComPage");
    }
  },
  computed: {
    startDate() {
      return this.data.startDate.slice(0, 10);
    },
    ownerAvatar() {
      return (
        "https://scontent.premival.com/images/users/" +
        this.data.profileId +
        "/" +
        this.data.ownerAvatar
      );
    },
    jobImg() {
      return this.data.image ? this.data.image : this.getRandomImgUrl(730, 300);
    },
    UpdateTime() {
      return this.getLastUpdate(this.data.createDate);
    }
  }
};
</script>


<style lang="scss">
.cover-panel {
  .v-card__title {
    padding: 10px 0 0 0;
  }
  .v-list {
    padding: unset;
    .v-list-item {
      padding: 0;
      .v-list-item__title,
      .v-image {
        cursor: pointer;
      }
    }
    .v-rating .v-icon {
      padding: 0 3px 0 0;
    }
  }

  .company-cover {
    border-radius: 4px 4px 0 0;
  }
  .base-info {
    &.container {
      border: 1px solid #e3e3e3 !important;
      border-radius: 0 0 4px 4px;
    }
  }
}
</style>