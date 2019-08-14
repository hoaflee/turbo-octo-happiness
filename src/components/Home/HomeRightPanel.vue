<template>
  <v-layout column>
    <v-flex md12 class="pt-10 mt-4"></v-flex>
    <v-flex md12 class="pt-2 pl-4" v-for="(item, idx) in items" :key="idx">
      <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto" height="200" outlined :elevation="hover ? 10 : 0">
          <v-list-item three-line>
            <v-list-item-content>
              <v-btn icon small >
                <v-icon :color="item.color">{{item.icon}}</v-icon>
              </v-btn>
              <div class="overline mb-4">{{item.text}}</div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "mdi-star-outline", color: "blue", text: "Event today" },
      { icon: "mdi-bullhorn", color: "pink ", text: "Suggested" },
      { icon: "mdi-medal", color: "green", text: "Sponsered" },
      { icon: "mdi-blur", color: "purple ", text: "Other" }
    ]
  }),
  computed: {
  },
  methods: {
    randomImgUrl(w, h) {
      return this.$store.getters["common/getRandomImgUrl"](w, h);
    }
  }
};
</script>
