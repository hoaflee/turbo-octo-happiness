<template>
  <v-card class="job-card-detail">
    <v-card-title class="top-card-title">
      <!-- :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 0%), url(' + data.jobImg + ')'}" -->
      <v-list>
        <v-list-item class="main-item">
          <v-list-item-avatar height="50" width="50" color @click="$emit('goToComPage')">
            <v-img :src="data.ownerAvatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="job-title">{{data.title}}</v-list-item-title>
            <v-list-item-subtitle class="mt-1 company-name" @click="$emit('goToComPage')">{{data.ownerName}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- <div class="sub-info-group"> -->
        <v-list-item class="sub-info-item">
          <div class="half-w">
            <v-icon>mdi-wallet-travel</v-icon>
            <span class="caption mx-2">{{data.jobTag.level}}</span>
          </div>
          <div class="half-w right">
            <v-icon>mdi-worker</v-icon>
            <span class="caption mx-2">{{data.jobTag.industry}}</span>
          </div>
        </v-list-item>
        <v-list-item class="sub-info-item">
          <div class="half-w">
            <v-icon>mdi-coin</v-icon>
            <span class="caption mx-2">{{data.jobTag.salary}}</span>
          </div>
          <div class="half-w right">
            <v-icon>mdi-map-marker-outline</v-icon>
            <span class="caption mx-2">{{data.jobTag.location}}</span>
          </div>
        </v-list-item>
        <!-- </div> -->
      </v-list>
      <v-icon
        title="Close dialog"
        class="close-dialog-icon"
        @click="closeDialog"
      >mdi-close-circle-outline</v-icon>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="job-content">
      <v-img :src="data.jobImg" height="194"></v-img>
      <div>
        <h3 class="title">Description</h3>
        <div v-html="data.description"></div>
        <h3 class="title">Requirement</h3>
        <div v-html="data.requirement"></div>
        <h3 class="title">Benefit</h3>
        <div v-html="data.benefit"></div>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn depressed color="red" dark class="mx-4">Apply Now</v-btn>
      <v-icon title="Recommend" class="mx-2 icon-action">mdi-thumb-up-outline</v-icon>
      <v-icon title="Bookmark" class="mx-2 icon-action">mdi-bookmark-outline</v-icon>
      <v-icon title="Share" class="mx-2 icon-action">mdi-share-variant</v-icon>
      <v-spacer></v-spacer>
      <span v-if="!isMobile">
        <v-icon small>mdi-calendar-month-outline</v-icon>
        <span class="caption mx-2">{{data.UpdateTime}}</span>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  components: {},
  data: () => ({
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ]
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style lang="scss" scoped>
.job-card-detail {
  // .title-job-image {
  //   // top: 0;
  //   // justify-content: center;
  //   opacity: 0.5;
  //   // position: absolute;
  //   // width: 100%;
  // }
  .v-card__title.top-card-title {
    padding: 5px 5px 5px 0;
  }
  .top-card-title {
    .theme--light.v-sheet {
      background: transparent;
      background-color: transparent;
    }

    padding: 5px;
    .v-list {
      padding: unset;
      .main-item {
        padding-top: 10px;
      }
      .v-list-item__content {
        padding: 5px 0;
      }
      .v-avatar {
        margin: 5px 15px 5px 0;
      }

      .sub-info-item {
        padding-left: 70px;
        min-height: 32px;
        width: 100%;
        .half-w {
          width: 50%;
        }
      }
    }
  }

  .job-content {
    &.v-card__text {
      padding-top: 15px;
    }
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans",
      "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
      Roboto, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
    h3 {
      color: #00a4bb;
      font-size: 18px;
      font-weight: 600;
      padding: 5px 0;
    }
  }

  .close-dialog-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      color: red;
    }
  }

  .job-title {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
