<template>
  <v-card class="job-card-detail">
    <v-card-actions class="top-card-action">
      <v-list-item>
        <v-list-item-avatar height="50" width="50" color>
          <!-- class="elevation-6" tạo shadow css -->
          <v-img :src="data.ownerAvatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="subtitle-1">{{data.ownerName}}</v-list-item-title>
          <v-list-item-subtitle class="job-post-time">
            <v-icon small class="pr-1">mdi-clock-outline</v-icon>
            {{data.UpdateTime}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-spacer></v-spacer>

      <v-btn small icon color="primary">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn small icon color="primary" class="mr-4">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-card-actions>

    <v-img :src="data.jobImg" height="194"></v-img>

    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn depressed color="primary">
        <v-icon dark class="mr-2">mdi-send</v-icon>Apply
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn text depressed color="primary">
        <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>Recommend
      </v-btn>
      <v-btn text depressed color="primary">
        <v-icon class="mr-2">mdi-bookmark-outline</v-icon>Bookmark
      </v-btn>
      <v-btn text depressed color="primary">
        <v-icon class="mr-2">mdi-share-variant</v-icon>Share
      </v-btn>

      <!-- <v-btn color="primary" text @click="jobDialogDetail = false">I accept</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  components: {},
  data: () => ({})
  //   computed: {
  //     example () {
  //       return null;
  //     }
  //   },
  //   watch: {
  //     example(val) {
  //     }
  //   },
  //   mounted () {
  //   },
  //   methods: {
  //     example(val) {
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
.top-card-action {
  padding: unset;
}
</style>
