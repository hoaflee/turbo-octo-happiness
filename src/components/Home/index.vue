<template>
  <v-container fluid grid-list-md>
    <v-layout justify-center>
      <v-flex xs12 sm6 md10 lg10 xl8>
         <v-layout wrap>

          <v-flex xs12 sm6 md3>
            <JobFilter/>
            <!-- <v-card color="indigo" dark>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card> -->
          </v-flex>

          <v-flex xs12 sm6 md7>
            <JobList/>
          </v-flex>

          <v-flex xs12 sm6 md2 class="hidden-sm-and-down">
            <Other/>
          </v-flex>

         </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JobFilter from "./JobFilter";
import JobList from "./JobList";
import Other from "./Other";

export default {
  components: {
    JobFilter,
    JobList,
    Other
  },
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
  }),
};
</script>
