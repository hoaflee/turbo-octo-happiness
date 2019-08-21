<template>
  <MenuBarMainPage>
    <template v-slot:content>
      <router-view />
    </template>
  </MenuBarMainPage>
</template>

<script>
import MenuBarMainPage from "../Common/MenuBarMainPage";

export default {
  components: {
    MenuBarMainPage
  },
  data: () => ({}),
  computed: {}
};
</script>

<style lang="scss">
#cmp-root li {
  list-style: none;
  margin: 0;
  padding: 0;
}

#cmp-root {
  flex: 1 0 auto !important;
  min-width: 980px;
  box-sizing: border-box !important;
}
#cmp-root form {
  margin: 0;
  padding: 0;
}

#cmp-page {
  width: 960px !important;
  margin: 0 auto;
}

.features {
  background: #f5f5f5;
  font-family: "Helvetica Neue", Helvetica, Arial, "Liberation Sans", Roboto,
    Noto, sans-serif !important;

  a {
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }

  .icl-Grid {
    // position: relative;
    // border-bottom: 2px solid #f6f6f6 !important;

    .icl-Grid-col:not(:last-child) {
      border-right: 2px solid #f6f6f6 !important;
    }

    .icl-Grid-col.icl-u-xs-span4 {
      border-right: unset !important;
    }

    .icl-Grid-col.icl-u-xs-span6.text {
      border-bottom: unset !important;
    }

    .icl-Grid-col {
      float: left;
    }

    .icl-u-xs-span6 {
      width: 50% !important;
      border-bottom: 2px solid #f6f6f6 !important;
    }
    .icl-u-xs-span3 {
      width: 25% !important;
      border-bottom: 2px solid #f6f6f6 !important;
    }

    .icl-u-xs-span4 {
      width: 33.33333% !important;
    }
  }
}
</style>