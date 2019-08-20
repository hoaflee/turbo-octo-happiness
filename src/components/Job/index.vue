<template>
  <v-layout v-if="data" row justify-center class="company-home-page pt-2">
    <v-flex md10 class="job-breadcrumbs">
      <v-breadcrumbs :items="jobBreadcrumbs" divider=">"></v-breadcrumbs>
    </v-flex>

    <v-flex md10 sm12>
      <Cover :data="data" @goToComPage="toComPage()"/>
    </v-flex>

    <v-flex md10 sm12 class="main-panel">
      <v-container grid-list-md fluid class="main-panel-container">
        <v-layout justify-center wrap>
          <v-flex md8 sm12 d-flex>
            <LeftPanel :data="data"/>
          </v-flex>
          <v-flex md4 sm12>
            <RightPanel :data="data"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Cover from "./Cover";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

export default {
  components: {
    Cover,
    RightPanel,
    LeftPanel
  },
  data: () => ({
    data: null
  }),
  mounted() {
    this.$nextTick(() => {
      this.getJobDetail();
      this.scrollToTop();
    });
  },
  computed: {
    jobBreadcrumbs () {
      return [
        {
          text: this.data.levels[0].label,
          disabled: false,
          href: '#',
        },
        {
          text: this.data.locations[0].label,
          disabled: false,
          href: '#',
        },
        {
          text: this.data.industries[0].label,
          disabled: false,
          href: '#',
        },
      ]
    }
  },

  methods: {
    toComPage() {
      // alert(profileId);
      let name = encodeURIComponent(this.data.ownerName);
      this.$router.push({ path: `/company/${this.data.profileId}/${name}` });
    },
    getJobDetail() {
      const jobId = this.$route.params.id;
      const postData = {
        jobId: jobId,
        langId: "Lang001"
      };
      this.$http
        .post("https://api.premival.com/job/detail", postData)
        .then(response => {
          this.data = response.data.datas;
          this.loading = false;
          console.log(this.data);
          this.scrollToTop();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.company-home-page {
  .v-btn {
    text-transform: unset;
    letter-spacing: unset;
    border-radius: 4px;
  }
  .job-breadcrumbs .v-breadcrumbs {
    padding: 0 0 0 0;
  }
  .main-panel {
    .main-panel-container {
      padding: 12px 0;
    }
  }
}
</style>