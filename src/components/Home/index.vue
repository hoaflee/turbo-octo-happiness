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
    </template>
  </MenuBarMainPage>
</template>

<script>
import JobFilter from "./JobFilter";
import JobList from "./JobList";
import HomeRightPanel from "./HomeRightPanel";

import MenuBarMainPage from "../Common/MenuBarMainPage";

export default {
  components: {
    MenuBarMainPage,
    JobFilter,
    JobList,
    HomeRightPanel
  },
  data: () => ({}),
  computed: {
    isHomePage () {
      if (this.$route.name == 'home') return true;
      return false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$route);
      window.scrollTo(0,0);
		});
  },
};
</script>
