<template>
  <MenuBarMainPage>
    <template v-slot:content>
      <v-container fluid grid-list-md>
        <v-layout justify-center>
          <v-flex xs12 sm6 md10 lg10 xl8>
            <router-view />
            
            <v-layout wrap v-if="isHomePage">
              <v-flex xs12 sm6 md3>
                <JobFilter/>
              </v-flex>

              <v-flex xs12 sm6 md7>
                <JobList />
              </v-flex>

              <v-flex xs12 sm6 md2 class="hidden-sm-and-down">
                <HomeRightPanel/>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
      <div v-if="isJobDetailPage && !isMobile">
        <v-divider class="mt-6"></v-divider>
        <JobGroup/>
      </div>
    </template>
  </MenuBarMainPage>
</template>

<script>
import MenuBarMainPage from "../Common/MenuBarMainPage";
import JobGroup from "../Common/JobGroup";

import JobFilter from "./JobFilter";
import JobList from "./JobList";
import HomeRightPanel from "./HomeRightPanel";

export default {
  components: {
    MenuBarMainPage,
    JobGroup,
    JobFilter,
    JobList,
    HomeRightPanel
  },
  data: () => ({}),
  computed: {
    isHomePage () {
      if (this.$route.name == 'home') return true;
      return false;
    },
    isJobDetailPage() {
      if (this.$route.name == 'jobDetail') return true;
      return false;
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0,0);
		});
  },
};
</script>
