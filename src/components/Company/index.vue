<template>
  <v-layout row justify-center class="company-home-page pt-2">
    <v-flex md10>
      <v-card flat class="mx-auto">
        <v-list-item>
          <v-list-item-avatar color="grey" height="50" width="50">
            <v-img :src="randomAvtUrl()"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">Công ty TNHH PREMIVAL</v-list-item-title>
            <v-list-item-subtitle>
              <v-rating
                small
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half"
                half-increments
                hover
              ></v-rating>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn small outlined icon color="primary">
              <v-icon color="primary">mdi-facebook</v-icon>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn small outlined icon color="primary">
              <v-icon color="primary">mdi-twitter</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-img class="company-cover mt-2" src="https://picsum.photos/1000/400" height="400"></v-img>

        <v-container fluid class="base-info">
          <v-row no-gutters align="center" justify="center">
            <v-col lg="2">
              <v-icon class="mr-2">mdi-clock-outline</v-icon>
              <span class="subheading">2019-09-09</span>
            </v-col>

            <v-col lg="2">
              <v-icon class="mr-2">mdi-eye-outline</v-icon>
              <span class="subheading">83412</span>
            </v-col>

            <v-col lg="3">
              <!-- md="auto" -->
              <v-card flat tile>
                <v-icon class="mr-2">mdi-account-group</v-icon>
                <span class="subheading">Mutual connections (10)</span>
              </v-card>
            </v-col>
            <v-col lg="5" align="right" class="company-recommed">
              <v-card flat tile>
                <v-btn tile dark class="btn-recommed" color="primary" depressed>
                  <v-icon left>mdi-thumb-up-outline</v-icon>Recommned (25)
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex md10 class="main-panel">
      <v-container fluid class="main-panel-container">
        <v-layout justify-center>
          <v-flex md8 d-flex>
            <!-- <GoogleMap/> -->
          </v-flex>
          <v-flex md4 class="right-panel">
            <v-card outlined class="want-visit">
              <v-card-title>
                <v-btn block text dark large class="btn-visit mb-2">Want to Visit</v-btn>
                <div class="entry-info-1">Want to Visit Currently 180 people want to visit.</div>
                <div class="entry-info-2">Other users cannot see whether or not you're interested.</div>

                <v-btn block large class="btn-bookmark py-2 mt-4" depressed>
                  <v-icon left>mdi-bookmark-outline</v-icon>Bookmark
                </v-btn>
              </v-card-title>
            </v-card>

            <v-card outlined class="recommend mt-4">
              <v-card-title>
                <h4>Recommend (25)</h4>
              </v-card-title>
              <v-divider></v-divider>

              <v-card-title>
                <v-btn block large dark class="btn-recommed mb-1" color="primary" depressed>
                  <v-icon left>mdi-thumb-up-outline</v-icon>Recommned (25)
                </v-btn>
                <div class="entry-info-2">How does the 'Recommend' button work?</div>
                <div class="my-2">
                  <v-avatar
                    v-for="i in 18"
                    :key="i"
                    height="40"
                    width="40"
                    min-width="40"
                    class="mb-2 mr-1"
                  >
                    <img :src="randomAvtUrl()" />
                  </v-avatar>
                </div>
                <div
                  class="entry-info-2"
                >Having more recommendations will help this job posting appear in the Company ranking.</div>
              </v-card-title>
            </v-card>

            <v-card outlined class="location mt-4">
              <v-card-title>
                <h4>Location</h4>
              </v-card-title>
              <v-divider></v-divider>

              <v-card-title>
                <div class="body-1">Ho Chi Minh city, Vietnam.</div>
                <GoogleMap />
              </v-card-title>
            </v-card>

            <v-card outlined class="more-job mt-4">
              <v-card-title>
                <h4>More job from TNHH PREMIVAL</h4>
              </v-card-title>
              <v-divider></v-divider>

              <v-list>
                <v-list-item v-for="item in items2" :key="item.title">
                  <v-list-item-avatar>
                    <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <!-- <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
                    <v-list-item-subtitle>
                      <v-chip outlined color="error">
                        <v-avatar left>
                          <v-icon>mdi-coin</v-icon>
                        </v-avatar>
                        {{item.salary}}
                      </v-chip>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-information-outline</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import GoogleMap from "@/components/Common/GoogleMap";
export default {
  components: {
    GoogleMap
  },
  data: () => ({
    rating: 4.5,
    markers: [],
    items2: [
      {
        icon: "mdi-access-point-network",
        iconClass: "blue white--text",
        title: "Marketing Manager",
        subtitle: "Jan 20, 2014",
        salary: "$1,500 - $2,000"
      },
      {
        icon: "mdi-account-card-details",
        iconClass: "amber white--text",
        title: "Customer Service Manager",
        subtitle: "Jan 10, 2014",
        salary: "$2,000 - $3,000"
      },
      {
        icon: "mdi-sim",
        iconClass: "blue white--text",
        title: "Desktop Support Technician",
        subtitle: "Jan 20, 2014",
        salary: "$2,000 - $3,000"
      },
      {
        icon: "mdi-signal-variant",
        iconClass: "amber white--text",
        title: "Network & Desk Technician",
        subtitle: "Jan 10, 2014",
        salary: "$20.00/Hour"
      }
    ]
  })
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
  .v-rating .v-icon {
    padding: 0 3px 0 0;
  }
  .company-cover {
    border-radius: 4px 4px 0 0;
  }
  .base-info {
    &.container {
      border: 1px solid #e3e3e3 !important;
      border-radius: 0 0 4px 4px;
    }
  }

  .main-panel {
    .main-panel-container {
      padding: 12px 0;

      .right-panel {
        .v-card__title {
          line-height: unset;
          padding: 14px 16px;
        }
        .entry-info-1 {
          font-size: 11px;
          font-weight: 600;
          color: #6a6e71;
          padding: 10px 0;
        }

        .entry-info-2 {
          font-size: 11px;
          font-weight: 400;
          color: #9da0a4;
          // margin-bottom: 10px;
        }
        h4 {
          line-height: 1.3;
          font-size: 14px;
          font-weight: 600;
          color: #6a6e71;
        }

        .want-visit {
          width: 100%;
          // padding: 3px;
          .btn-visit {
            background-color: #6cc644 !important;
          }
        }
        .recommend {
          .v-card__title {
            line-height: unset;
          }
        }
        .more-job {
          .v-list-item {
            // padding: unset;
          }
        }
      }
    }
  }
}
</style>