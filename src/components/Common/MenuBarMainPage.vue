<template>
  <div>
    <v-app-bar class="main-app-bar" app>
      <v-toolbar-title class="headline text-uppercase hidden-sm-and-down">
        <span>Premival</span>
      </v-toolbar-title>

      <v-toolbar-items class="ml-4 mr-4 toolbar-items-menu hidden-sm-and-down">
        <v-btn text large color="primary">News Feed</v-btn>
        <v-btn text large color="primary">Company Reviews</v-btn>
        <v-btn text large color="primary">Find Salaries</v-btn>
      </v-toolbar-items>

      <v-autocomplete
        class="search"
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        append-icon="mdi-magnify"
        flat
        hide-no-data
        hide-details
        clearable
        label="Search people, jobs and companies"
        solo
      ></v-autocomplete>

      <v-spacer></v-spacer>

      <UserMenu v-if="!isMobile" />
    </v-app-bar>

    <v-content class="white-background-content">
      <slot name="content"></slot>
    </v-content>

    <v-divider></v-divider>

    <Footer />
    <v-bottom-navigation v-if="isMobile" :value="activeBtn" grow fixed color="primary">
      <UserMenu />
    </v-bottom-navigation>
  </div>
</template>

<script>
import UserMenu from "./UserMenu";
import Footer from "./Footer";

export default {
  name: "App",
  components: {
    UserMenu,
    Footer
  },
  data: () => ({
    activeBtn: 1,
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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  mounted() {
    // console.log(this.$vuetify.breakpoint)
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

<style lang="scss">
.main-app-bar.v-toolbar {
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.toolbar-items-menu {
  .v-btn {
    text-transform: unset;
    letter-spacing: unset;
  }

  .v-btn:not(.v-btn--round).v-size--large {
    padding: 0 10px;
  }
}

.search.v-autocomplete {
  .v-input__control .v-input__slot {
    background: #f3f1f1 !important;
  }

  .v-input__icon--append .v-icon {
    -webkit-transform: unset !important;
    transform: unset !important;
  }

  .v-input__append-inner .v-input__icon--clear .v-icon {
    font-size: 18px;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
}

.white-background-content {
  background: white;
}
</style>