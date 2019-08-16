<template>
  <v-layout justify-center class="company-home-page">
    <v-flex md12>
      <v-card flat class="mx-auto">
        <v-list-item>
          <v-list-item-avatar color="grey" height="50" width="50">
            <v-img :src="randomAvt"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">Công ty TNHH PREMIVAL</v-list-item-title>
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
            <v-btn outlined icon>
              <v-icon color="primary">mdi-facebook</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn outlined icon>
              <v-icon color="primary">mdi-twitter</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-img class="company-cover mt-2" src="https://picsum.photos/1000/400" height="400"></v-img>

        <v-container fluid class="base-info">
          <v-row no-gutters align="center" justify="center">
            <v-col lg="2">
              <v-icon class="mr-2">mdi-clock-outline</v-icon>
              <span class="subheading">2019-09-09</span>
            </v-col>

            <v-col lg="2">
              <v-icon class="mr-2">mdi-eye-outline</v-icon>
              <span class="subheading">83412</span>
            </v-col>

            <v-col lg="3">
              <!-- md="auto" -->
              <v-card flat tile>
                <v-icon class="mr-2">mdi-account-group</v-icon>
                <span class="subheading">Mutual connections (10)</span>
              </v-card>
            </v-col>
            <v-col lg="5" align="right" class="company-recommed">
              <v-card flat tile>
                <v-btn tile color="success">
                  <v-icon left>mdi-thumb-up-outline</v-icon>Recommned (256)
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

        <!-- <v-card-actions>
          <v-btn text color="deep-purple accent-4">Read</v-btn>
          <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>-->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data: () => ({
    rating: 4.5
  }),
  computed: {
    randomAvt() {
      return this.$store.getters["common/getRandomAvatarUrl"];
    }
  }
  // watch: {
  //   example(val) {}
  // },
  // methods: {
  //   example(val) {}
  // }
};
</script>

<style lang="scss">
.company-home-page {
  .v-rating .v-icon {
    padding: 0 3px 0 0;
  }
  .company-cover {
    border-radius: 4px 4px 0 0;
  }
  .base-info {
    &.container {
      border: 1px solid #e3e3e3 !important;
      border-radius: 0 0 4px 4px;
    }

    .company-recommed .v-btn {
      text-transform: unset;
      letter-spacing: unset;
    }
  }
}
</style>