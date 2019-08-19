<template>
  <v-layout row justify-center class="company-home-page pt-2">
    <v-flex md10>
      <Cover/>
    </v-flex>

    <v-flex md10 class="main-panel">
      <v-container fluid class="main-panel-container">
        <v-layout justify-center>
          <v-flex md8 d-flex>
            <LeftPanel/>
          </v-flex>
          <v-flex md4>
            <RightPanel/>
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
  data: () => ({})
  // computed: {
  //   randomAvt() {
  //     return this.getRandomAvatarUrl;
  //   }
  // }
  // watch: {
  //   example(val) {}
  // },
};
</script>

<style lang="scss">
.company-home-page {
  .v-btn {
    text-transform: unset;
    letter-spacing: unset;
    border-radius: 4px;
  }

  .main-panel {
    .main-panel-container {
      padding: 12px 0;
    }
  }
}
</style>