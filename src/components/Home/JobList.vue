<template>
  <v-container fluid grid-list-md>
    <v-layout class="job-list" column>
      <v-flex xs12 md12 sm12 mb-3 class="project-info">
        <v-layout v-if="loading">
          <v-progress-linear color="deep-purple accent-4" indeterminate rounded></v-progress-linear>
        </v-layout>

        <v-container fluid v-else>
          <v-layout row>
            <v-flex md6>
              <p class="projects-count">
                <span class="current">10</span>
                <span class="per">/</span>
                <span class="total">1050</span>
              </p>
            </v-flex>

            <v-flex md6>
              <div class="projects-index-sort-menu">
                <ul>
                  <li>
                    <a class="sort-link-popular">Popular</a>
                  </li>
                  <li>
                    <a class="sort-link-recent">Newest</a>
                  </li>
                  <li class="selected">
                    <a class="selected sort-link-mixed">Recommended</a>
                  </li>
                </ul>
                <h4>Sort</h4>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <!-- Job item list -->

      <v-flex xs12 md12 sm12 pt-2>
        <template v-for="(item, idx) in jobItems">
          <JobItem :key="'item_' + idx" :data="item" @openDialog="jobDetail" />
          <v-divider :key="'divider_' + idx" class="mb-8" v-if="idx <= jobItems.length - 2"></v-divider>
        </template>
      </v-flex>

      <v-divider></v-divider>

      <v-flex xs12 md12 sm12 pt-6 v-if="!loading">
        <div class="text-center">
          <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
        </div>
      </v-flex>
    </v-layout>

    <v-dialog
      scrollable
      :fullscreen="isMobile"
      v-model="jobDialogDetail"
      width="50%">
      <JobDetailCard
        :data="JobDetailCardData"
        @closeDialog="jobDialogDetail = !jobDialogDetail"/>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import JobItem from "../Common/JobItem";
import JobDetailCard from "../Common/JobDetailCard";

export default {
  components: { JobItem, JobDetailCard },
  data: () => ({
    jobDialogDetail: false,
    loading: true,
    jobItems: [],
    // currentPageIndex: 0,
    page: 1,
    JobDetailCardData: {}
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  watch: {
    page: function(val) {
      // alert(val)
      this.loading = true;
      this.getJobList(val);
    }
  },
  methods: {
    jobDetail(data) {
      this.JobDetailCardData = data;
      console.log(this.JobDetailCardData);
      this.jobDialogDetail = true;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getJobList(page) {
      const postData = {
        currentPageIndex: page - 1,
        langId: null,
        pageSize: 10,
        profileId: ""
      };
      axios
        .post("https://api.premival.com/job", postData)
        .then(response => {
          this.jobItems = response.data.datas.jobDetails;
          this.loading = false;
          this.scrollToTop();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getJobList(this.page);
  }
};
</script>

<style lang="scss" scoped>

.job-list {
  .project-info {
    border-bottom: 2px solid #f5f5f5;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans",
      "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
      Roboto, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif !important;
    .container {
      padding: 0 0 16px 0 !important;
    }
  }

  p.projects-count {
    margin-bottom: 0px;
  }

  .projects-count {
    // float: left;
    margin-top: 12px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #999;

    .current {
      font-size: 12px;
    }
    .per {
      font-size: 14px;
      margin: 0 4px;
    }
    .total {
      font-size: 16px;
      font-weight: bold;
      color: #24282a;
    }
  }

  .projects-index-sort-menu {
    font-size: 14px;
    line-height: 22px;
    ul {
      margin-top: 6px;
      li {
        float: right;
        font-size: 14px;
        margin-right: 14px;
        padding: 0;
        list-style: none;
        display: list-item;

        &.selected {
          color: #00a4bb;
          font-weight: bold;
        }
        &:hover {
          color: #00a4bb;
        }
        a {
          color: unset !important;
        }
      }
    }
    h4 {
      // float: right;
      display: inline;
      margin-right: 23px;
      font-weight: normal;
      font-size: 12px;
      color: #9da0a4;
    }
  }
}
</style>

<style lang="scss">
.job-item, .job-card-detail {
  .job-pannel {
    cursor: pointer;
    &:hover,
    &:focus {
      .job-title {
        color: #006f8e;
      }
    }
    .job-category-chip {
      line-height: 40px;
      padding: 10px 0 5px 0;
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
    .v-avatar {
      margin-right: 12px;
    }
    .v-list-item {
      padding: 5px 0 0 0;
    }
    .v-list-item__content {
      width: 50%;
    }
    .job-post-time {
      font-size: 12px;
    }
  }
}
</style>