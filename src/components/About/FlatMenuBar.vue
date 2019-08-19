<template>
  <div class="white-background-content">
    <v-app-bar
      flat
      absolute
      color="white"
      class="about-menu-bar"
    >
      <div class="text-center mr-4 premival-icon" @click="goHome()">
        <img height="40" src="@/assets/logo_v3_64.png/" alt="Premival">
      </div>

      <v-toolbar-title class="headline" @click="goHome()">Premival</v-toolbar-title>
    </v-app-bar>

    <v-container class="mt-12">
      <slot name="content"></slot>
    </v-container>

    <footer class="clearfix hide_in_iframe">
      <div class="lftPane">
        <span>© 2019 Premival, Inc.</span>
      </div>
      <div class="rtPane">
        <a href="/">Home</a>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  methods: {
    goHome() {
      this.$router.push({ path: `/` })
    },
    // scrollToTop() {
    //   window.scrollTo(0,0);
    // }
  },
  // mounted() {
  //   this.$nextTick(() => {
	// 		this.scrollToTop();
	// 	});
  // },
};
</script>

<style lang="scss" scoped>
.white-background-content {
  background: white;
  .about-menu-bar {
    .v-toolbar__title, .premival-icon {
      cursor: pointer;
    }
  }
}
footer {
  margin: 32px auto;
  padding-bottom: 64px;
  max-width: 800px;
  // font-family: 'Poppins', sans-serif;
  .lftPane {
    float: left;
    display: flex;
    align-items: center;
  }
  .rtPane {
    float: right;
  }
  a {
    color: rgba(36, 40, 42, 0.56);
    text-decoration: none;
  }
}

.markdown-body {
  // font-family: "Lato", sans-serif;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.72;
  color: rgba(0, 0, 0, 0.84);
  word-wrap: break-word;
  box-sizing: border-box;
  max-width: 800px;
  margin: auto;
  h1 {
    font-size: 36px;
    margin: 39px 0 33px 0;
    line-height: 1.22;
  }
  h2 {
    font-size: 20px;
    line-height: 1.4;
    margin: 42px 0 6px 0;
  }
  h3 {
    margin: 32px 0 6px 0;
    font-size: 16px;
    line-height: 1.5;
  }
  h4 {
    margin: 32px 0 4px 0;
    font-size: 14px;
    line-height: 1.72;
  }
  p {
    margin-top: 0;
    margin-bottom: 16px;
  }
  .list {
    color: #0465a7;
  }
}

</style>
