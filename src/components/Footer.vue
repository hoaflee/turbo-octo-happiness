<template>
  <v-footer padless class="pre-footer">
      <v-layout justify-center>
        <v-flex md10>
          <v-card class="flex" flat tile>
            <v-card-title>
              <span>Get connected with us on social networks!</span>

              <v-spacer></v-spacer>

              <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-actions>
              <span class="headline text-uppercase">Premival</span>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

  </v-footer>
</template>

<script>
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style lang="scss">
.pre-footer {
  .theme--light.v-card {
    background: unset;
  }
}
</style>
