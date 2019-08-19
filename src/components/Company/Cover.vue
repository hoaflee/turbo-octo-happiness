<template>
  <v-card flat class="mx-auto cover-panel">
    <v-list-item>
      <v-list-item-avatar color="grey" height="50" width="50">
        <v-img :src="randomAvtUrl()"></v-img>
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
            <v-btn tile dark class="btn-recommed" color="primary" depressed>
              <v-icon left>mdi-thumb-up-outline</v-icon>Recommned (25)
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  components: {},
  data: () => ({
    rating: 4.5
  })
};
</script>


<style lang="scss">
.cover-panel {
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
  }
}
</style>