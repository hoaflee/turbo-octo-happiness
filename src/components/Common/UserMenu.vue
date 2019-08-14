<template>
  <v-layout justify-end>
    <v-badge color="error" overlap="overlap" class="align-self-center notify">
      <template v-slot:badge>
        <span>3</span>
      </template>
      <v-btn icon class="mr-2">
        <v-icon>mdi-message-text-outline</v-icon>
      </v-btn>
    </v-badge>

    <v-btn icon class="mr-2">
      <v-icon>mdi-account-tie</v-icon>
    </v-btn>

    <v-badge color="error" overlap="overlap" class="align-self-center notify">
      <template v-slot:badge>
        <span>8</span>
      </template>
      <v-btn icon class="mr-2">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
    </v-badge>

    <v-menu
      nudge-bottom="12"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-avatar size="40">
            <img :src="iconUrl" title="Hoale" />
          </v-avatar>
        </v-btn>
      </template>

      <v-card class="menu-card">
        <v-list class="edit-profile">
          <v-list-item>
            <v-list-item-avatar size="40">
              <img :src="iconUrl" alt="Hoale" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Le Hoang Hoa</v-list-item-title>
              <v-list-item-subtitle>Edit your profile</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense class="menu-list">
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    item: 1,
    items: [
      { text: "Job postings", icon: "mdi-file-document-box-outline" },
      { text: "Bookmarks", icon: "mdi-bookmark-outline" },
      { text: "Following companies", icon: "mdi-office-building" },
      { text: "Invite friends", icon: "mdi-account-plus-outline" },
      { text: "Account settings", icon: "mdi-settings-outline" },
      { text: "Log out", icon: "mdi-logout-variant" }
    ]
  }),
  computed: {
    iconUrl() {
      return require("@/assets/ironman.jpg");
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    }
  }
};
</script>

<style lang="scss">
.notify.v-badge--overlap .v-badge__badge {
  top: 0;
  right: 8px;
}
</style>

<style lang="scss" scoped>
.menu-card {
  .edit-profile {
    cursor: pointer;
    &:hover {
      background-color: #e4effa;
    }
    .v-list-item__subtitle {
      font-size: 11px;
      font-weight: 400;
      color: #9da0a4;
    }
  }
  .menu-list {
    .v-list-item__title {
      font-weight: unset !important;
    }
  }
}
</style>
