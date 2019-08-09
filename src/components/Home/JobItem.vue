<template>
  <v-card flat class="mx-auto mb-2 job-item">
    <div class="job-pannel">
      <v-img
        class="white--text"
        height="250px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ></v-img>

      <div class="job-category-chip">
        <v-chip outlined color="orange" class="mr-2">5:30PM</v-chip>
        <v-chip outlined color="green" class="mr-2">7:30PM</v-chip>
        <v-chip outlined color="orange" class="mr-2">8:00PM</v-chip>
        <v-chip outlined color="puple" class="mr-2">9:00PM</v-chip>
      </div>

      <div class="title job-title">Network & Desk Technician ($20.00 Per Hour)</div>

      <div
        class="job-short-desc"
      >The Desktop Support Specialist provides support services for users in the Divisions of Information Technology, Administration and Finance, Athletics, and the President's Office, and Athletics.</div>
    </div>

    <v-card-actions class="job-action">
      <v-list-item>
        <v-list-item-avatar height="50" width="50" color="grey darken-3">
          <!-- class="elevation-6" tạo shadow css -->
          <v-img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
          <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>
      <v-icon class="mr-1">mdi-heart</v-icon>
      <span class="subheading mr-2">45</span>
      <span class="mr-1"></span>

      <v-icon class="mr-1">mdi-bookmark</v-icon>
      <span class="subheading mr-2">256</span>
      <span class="mr-1"></span>
      <v-icon class="mr-1">mdi-share-variant</v-icon>
      <span class="subheading mr-2">45</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components: {},
  data: () => ({
    selection: 1
  }),
  computed: {
    // example () {
    //   return null;
    // }
  },
  watch: {
    // example() {
    // }
  },
  mounted() {},
  methods: {
    // example() {
    // }
  }
};
</script>

<style lang="scss">
.job-item {
  .job-pannel {
    cursor: pointer;
    &:hover,
    &:focus {
      .job-title {
        color: #006f8e;
      }
    }

    .job-category-chip {
      padding: 12px 0;
    }
    .job-title {
      cursor: pointer;
      &:hover {
        color: #006f8e;
      }
    }
    .job-short-desc {
      padding-top: 5px;
      line-height: 1.5;
      color: #9da0a4;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
    }
    .v-image {
      border-radius: 2px;
    }
  }
  .job-action {
    padding: 0;
    .v-list-item {
      padding: 0;
    }
    .v-list-item__content {
      width: 50%;
    }
  }
}
</style>
