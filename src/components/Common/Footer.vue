<template>
  <section>
    <v-container grid-list-xl class="pre-footer">
      <v-layout row wrap justify-center class="my-6">
        <v-flex xs12 sm4>
          <v-card flat class="transparent about-us">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Kết sự nghiệp, nối thành công</div>
            </v-card-title>
            <v-card-text>Premival là một nền tảng giúp nhà tuyển dụng kết nối với các ứng viên tài năng, giúp nhân tài thêm bước tiến trong hành trình sự nghiệp.</v-card-text>
            <div class="footer-menu-column-single">
              <ul>
                <li>
                  <router-link to="/about">About Us</router-link>
                </li>
                <li>
                  <router-link to="/user_terms">Terms of Services</router-link>
                </li>
                <li>
                  <router-link to="/helps_center">Helps Center</router-link>
                </li>
                <li>
                  <router-link to="/privacy_policy">Policy & Privacy</router-link>
                </li>
                <!-- <li>
                  <router-link to="/for_employers">For employers</router-link>
                </li> -->
              </ul>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Contact us</div>
            </v-card-title>
            <v-card-text>Do you have any feedback for us? Let us know here!</v-card-text>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>(+84)869 001 052</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Ho Chi Minh city, Vietnam.</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>support@premival.com</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer color>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="ml-4">
            ©All Rights by PREMIVAL
            <!-- Made with
              <v-icon class="red--text">mdi-heart</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>-->
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin"
    ]
  })
};
</script>

<style lang="scss">
.pre-footer {
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .footer-menu-column-single {
    line-height: 2;
    font-size: 14px;
    padding-left: 16px;
    a {
      cursor: pointer;
      text-decoration: none;
      color: unset;
    }
    li {
      &:hover {
        color: #006f8e;
      }
    }
  }
  .about-us {
    .v-card__text {
      padding-bottom: 8px;
    }
  }
}
</style>
