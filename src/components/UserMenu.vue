<template>
  <v-layout justify-end>
    <v-btn icon>
      <v-icon>mdi-message-text-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account-tie</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-avatar size="40">
        <img :src="iconUrl" title="Hoale" />
        <!-- <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" /> -->
      </v-avatar>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    iconUrl() {
      return require("@/assets/ironman.jpg");
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    }
  }
};
</script>
