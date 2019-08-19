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
