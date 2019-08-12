<template>
  <v-layout column>
    <v-flex md12 class="pt-12 mt-4"></v-flex>
    <v-flex md12>
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">OVERLINE</div>
            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely erfully</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img src="https://picsum.photos/80"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex md12>
      <v-layout column>
        <v-flex>
          <v-card color="#385F73" dark>
            <v-card-text class="white--text">
              <div class="headline mb-2">Unlimited music now</div>Listen to your favorite artists and albums whenever and wherever, online and offline.
            </v-card-text>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex v-for="(item, i) in items" :key="i">
          <v-card :color="item.color" dark>
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <v-list-item-title class="headline mb-2" v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex md12>
      <v-card class="mx-auto">
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-text>
          <span>Number 10</span>
          <br />
          <span class="text--primary">
            <span>Whitehaven Beach</span>
            <br />
            <span>Whitsunday Island, Whitsunday Islands</span>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="orange">Share</v-btn>
          <v-btn text color="orange">Explore</v-btn>
        </v-card-actions>
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

  </v-layout>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ],
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
};
</script>
