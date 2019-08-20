<template>
  <v-sheet class="mx-auto job-group">
    <div class="row-header mt-4 ml-12 pl-10">
      <h3 class="row-title">Job postings you may like</h3>
    </div>
    <v-slide-group
      class="px-4"
      show-arrows
      next-icon="mdi-chevron-right"
      prev-icon="mdi-chevron-left"
    >
      <v-slide-item v-for="(item, idx) in jobItems" :key="idx">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 10 : 0"
            flat
            class="ma-4 job-group-card-item"
            height="200"
            width="250"
            @click="toJobDetail(item)"
            :ripple="false"
          >
            <v-img class="white--text" height="100px" :src="getRandomImgUrl(250, 100)"></v-img>
            <v-card-text>
              <div class="job-title pt-1">{{item.title}}</div>
              <div class="pt-1">
                <v-avatar height="30" width="30" min-width="30" class="mr-2">
                  <v-img :src="ownerAvatarUrl(item.profileId, item.ownerAvatar)"></v-img>
                </v-avatar>
                <span class="job-company">{{item.ownerName}}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  // props: ["data"],
  components: {},
  data: () => ({
    model: null,
    jobItems: [],
    loading: false
  }),
  // computed: {
  //   example () {
  //     return null;
  //   }
  // },
  // watch: {
  //   example(val) {
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      this.getJobList(this.page);
    });
  },
  methods: {
    toJobDetail(data) {
      let jobTitle = encodeURIComponent(data.title);
      this.$router.push({ path: `/job/${data.id}/${jobTitle}` });
    },
    getJobList() {
      this.loading = true;
      const postData = {
        currentPageIndex: 1,
        langId: null,
        pageSize: 10,
        profileId: ""
      };
      this.$http
        .post("https://api.premival.com/job", postData)
        .then(response => {
          this.jobItems = response.data.datas.jobDetails;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.job-group {
  .row-title {
    font-size: 14px;
    font-weight: bold;
    color: #6a6e71;
  }
  .job-group-card-item {
    cursor: pointer;
    .v-avatar {
      border-radius: 3px;
    }
    .v-card__text {
      padding-top: 0;
    }
    .job-title {
      font-size: 15px;
      font-weight: bold;
      color: #45494b;
      line-height: 1.4em;
      min-height: 42px;
    }
    .job-company {
      font-size: 14px;
      color: #9da0a4;
      font-weight: 300;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 30px;
    }
  }
}
</style>