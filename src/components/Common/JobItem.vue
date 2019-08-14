<template>
  <v-card flat class="mx-auto mb-4 job-item">
    <div class="job-pannel" @click="openJobDetail()">
      <v-img class="white--text" height="250px" :src="jobImg">
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="blue lighten-4"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>

      <div class="job-category-chip">
        <v-chip outlined color="primary" class="mr-2" v-if="jobTag.location">
          <v-avatar left>
            <v-icon>mdi-map-marker-outline</v-icon>
          </v-avatar>
          {{jobTag.location}}
        </v-chip>

        <v-chip outlined color="deep-orange" class="mr-2" v-if="jobTag.level">
          <v-avatar left>
            <v-icon>mdi-wallet-travel</v-icon>
          </v-avatar>
          {{jobTag.level}}
        </v-chip>

        <v-chip outlined color="blue-grey" class="mr-2" v-if="jobTag.industry">
          <v-avatar left>
            <v-icon>mdi-worker</v-icon>
          </v-avatar>
          {{jobTag.industry}}
        </v-chip>

        <v-chip outlined color="error" class="mr-2" v-if="jobTag.salary">
          <v-avatar left>
            <v-icon>mdi-coin</v-icon>
          </v-avatar>
          {{jobTag.salary}}
        </v-chip>
      </div>

      <div class="title job-title">{{data.title}}</div>

      <div class="job-short-desc">{{jobDes}}</div>
    </div>

    <v-card-actions class="job-action">
      <v-layout row wrap>
        <v-flex md9 sm12>
          <v-list-item>
            <v-list-item-avatar height="50" width="50" color>
              <!-- class="elevation-6" tạo shadow css -->
              <v-img :src="ownerAvatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="subtitle-1">{{data.ownerName}}</v-list-item-title>
              <v-list-item-subtitle class="job-post-time">
                <v-icon small class="pr-1">mdi-clock-outline</v-icon>
                {{UpdateTime}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-flex>

        <v-flex md3 sm12 align-self-center right>
          <v-btn small icon>
            <v-icon>mdi-thumb-up-outline</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
          <v-btn small icon class="mr-2">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
const htmlToText = require("html-to-text");

export default {
  props: ["data"],
  components: {},
  data: () => ({}),
  computed: {
    jobDes() {
      let text = htmlToText.fromString(this.data.description, {
        wordwrap: 130
      });
      let textArr = text.split(" ");
      if (textArr.length > 40) {
        text = textArr.slice(0, 40).join(" ") + " ...";
      }
      return text;
    },
    jobTag() {
      const jobSubInfo = {
        location: null,
        industry: null,
        level: null,
        salary: null
      };
      if (this.data.locations.length > 0) {
        jobSubInfo.location = this.data.locations[0].label;
      }
      if (this.data.industries.length > 0) {
        jobSubInfo.industry = this.data.industries[0].label;
      }
      if (this.data.levels.length > 0) {
        jobSubInfo.level = this.data.levels[0].label;
      }
      if (this.data.salaries.length > 0) {
        jobSubInfo.salary = this.data.salaries[0].label;
      }
      return jobSubInfo;
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
      return this.data.image
        ? this.data.image
        : this.$store.getters["common/getRandomImgUrl"](730, 250);
    },
    UpdateTime() {
      return this.$store.getters["common/getLastUpdate"](this.data.createDate);
    }
  },
  watch: {},
  mounted() {
    console.log(this.data);
  },
  methods: {
    goToCompanyPage() {
      // let title = encodeURIComponent(this.data.title);
      // this.$router.push({ path: `/job/${this.data.id}/${title}` });
    },
    openJobDetail() {
      this.data.jobTag = this.jobTag;
      this.data.jobImg = this.jobImg;
      this.data.ownerAvatar = this.ownerAvatar;
      this.data.UpdateTime = this.UpdateTime;
      this.$emit("openDialog", this.data);
    }
  }
};
</script>
