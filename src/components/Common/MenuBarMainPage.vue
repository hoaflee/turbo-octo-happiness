<template>
  <div>
    <v-app-bar class="main-app-bar" app>
      <div class="text-center mr-4 premival-icon">
        <img height="40" src="@/assets/logo_v3_64.png/" alt="Premival" @click="goHome()" />
      </div>
      <v-badge color="red" class="logo-badge">
        <template v-slot:badge>Demo</template>
        <v-toolbar-title class="headline hidden-sm-and-down" @click="goHome()">
          <span>Premival</span>
        </v-toolbar-title>
      </v-badge>

      <v-toolbar-items class="ml-12 mr-4 toolbar-items-menu hidden-sm-and-down">
        <v-btn
          text
          large
          color="primary"
          :class="{ active: !['CompanyReviews','FindSalaries'].includes(routeName) }"
          @click="goHome()"
        >Find Jobs</v-btn>
        <v-btn
          text
          large
          color="primary"
          :class="{ active: routeName == 'CompanyReviews' }"
          @click="$router.push({ path: `/features/company-reviews` })"
        >Company Reviews</v-btn>
        <v-btn
          text
          large
          color="primary"
          :class="{ active: routeName == 'FindSalaries' }"
          @click="$router.push({ path: `/features/find-salaries` })"
        >Find Salaries</v-btn>
      </v-toolbar-items>

      <v-autocomplete
        class="search"
        v-model="model"
        :items="items"
        :loading="loading"
        :search-input.sync="search"
        cache-items
        item-text="description"
        item-value="title"
        append-icon="mdi-magnify"
        clear-icon="mdi-close"
        flat
        hide-no-data
        hide-details
        clearable
        label="Search people, jobs and companies"
        solo
        return-object
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
const htmlToText = require("html-to-text");

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
    // items: [],
    entries: [],
    model: null,
    search: null,
    select: null,
    descriptionLimit: 60,
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
    },
    routeName() {
      return this.$route.name;
    },
    // fields () {
    //   if (!this.model) return []
    //   return Object.keys(this.model).map(key => {
    //     return {
    //       key,
    //       value: this.model[key] || 'n/a',
    //     }
    //   })
    // },
    items () {
      return this.entries.map(entry => {
        entry.description = htmlToText.fromString(entry.description, {
          wordwrap: 130
        });
        const description = entry.description.length > this.descriptionLimit
          ? entry.description.slice(0, this.descriptionLimit) + '...'
          : entry.description

        return Object.assign({}, entry, { description })
      })
    },
  },
  watch: {

    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true

      // Lazily load input items
      const postData = {
        currentPageIndex: 0,
        langId: null,
        pageSize: 10,
        profileId: ""
      };
      this.$http
        .post("https://api.premival.com/job", postData)
        .then(response => {
          this.entries = response.data.datas.jobDetails;
          this.count = this.entries.length;
          // this.items = response.data.datas.jobDetails;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => (this.loading = false));

      // fetch('https://api.publicapis.org/entries')
      //   .then(res => res.json())
      //   .then(res => {
      //     const { count, entries } = res
      //     this.count = count
      //     this.entries = entries
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
        
    },
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    goHome() {
      this.$router.push({ path: `/` });
    },
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
  .v-toolbar__title,
  .premival-icon {
    cursor: pointer;
  }
}

.logo-badge .v-badge__badge {
  border-radius: 3px;
  top: -5px;
  right: -40px;
  font-size: 11px;
  height: 18px;
}

.toolbar-items-menu {
  .v-btn {
    text-transform: unset;
    letter-spacing: unset;
    font-weight: 600;
    &.active {
      border-bottom: 2px solid #1497ff;
    }
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
