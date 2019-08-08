<template>
  <v-layout wrap>
    <v-flex md12>
      <v-card color="purple lighten-3" dark>
        <v-card-text>
          <div>Word of the Day</div>
          <p class="display-1 text--primary">New Event</p>
          <p>adjective</p>
          <div class="text--primary">
            {{ lorem.slice(0, Math.floor(Math.random() * 200) + 1) }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">Learn More</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex md12>
      <v-card color="indigo" dark>
        <v-card-text>{{ lorem.slice(0, Math.floor(Math.random() * 200) + 1) }}</v-card-text>
      </v-card>
    </v-flex>

    <v-flex md12>
      <v-card max-width="344">
        <v-card-text>
          <div>Word of the Day</div>
          <p class="display-1 text--primary">be•nev•o</p>
          <p>adjective</p>
          <div class="text--primary">
            well meaning and kindly.
            <br />"a benevolent smile"
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">Learn More</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex md12>
      <v-card color="blue darken-1" dark>
        <v-card-text>{{ lorem.slice(0, Math.floor(Math.random() * 200) + 1) }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
};
</script>
