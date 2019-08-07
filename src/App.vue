<template>
  <v-app>
    <v-app-bar app light color='white'>
      <v-toolbar-title class="headline text-uppercase">
        <span>Premival</span>

        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>

      <v-toolbar-items class="ml-4 toolbar-items-menu">
        <v-btn text large color="primary">News Feed</v-btn>
        <v-btn text large color="primary">Company Reviews</v-btn>
        <v-btn text large color="primary">Find Salaries</v-btn>
      </v-toolbar-items>

      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        
        flat
        hide-no-data
        hide-details
        label="Search people, jobs and companies"
        solo-inverted
      ></v-autocomplete>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-message-text-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-tie</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <v-btn icon flat>
        <v-avatar size="30">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null,
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ]
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="stylus" scoped>
.toolbar-items-menu {
  .v-btn {
    text-transform: unset;
    letter-spacing: unset;
  }
}
</style>
