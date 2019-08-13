<template>
  <v-card flat class="mx-auto mb-4 job-item">
    <div class="job-pannel" @click="goToJobDetail()">
      <v-img class="white--text" height="250px" :src="imgSrc">
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="blue lighten-4"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>

      <div class="job-category-chip">
        <v-chip outlined color="primary" class="mr-2">
          <v-avatar left>
            <v-icon>mdi-map-marker-outline</v-icon>
          </v-avatar>
          Ho Chi Minh
        </v-chip>

        <v-chip outlined color="deep-orange" class="mr-2">
          <v-avatar left>
            <v-icon>mdi-wallet-travel</v-icon>
          </v-avatar>
          Manager          
        </v-chip>

        <v-chip outlined color="blue-grey" class="mr-2">
          <v-avatar left>
            <v-icon>mdi-file-document-box-outline</v-icon>
          </v-avatar>
          IT - Software
        </v-chip>

        <v-chip outlined color="error" class="mr-2">
          <v-avatar left>
            <v-icon>mdi-coin</v-icon>
          </v-avatar>
          $2,000 - $3,000
        </v-chip>
      </div>

      <div class="title job-title">Network & Desk Technician ($20.00 Per Hour)</div>
      <!-- <div class="job-sub-info">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-map-marker-outline</v-icon>
          </v-list-item-icon>
          <div class="body-2">Ho Chi Minh</div>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-diamond-outline</v-icon>
          </v-list-item-icon>
          <div class="body-2 salary">$2,000 - $3,000</div>
        </v-list-item>
      </div> -->

      <div
        class="job-short-desc"
      >The Desktop Support Specialist provides support services for users in the Divisions of Information Technology, Administration and Finance, Athletics, and the President's Office, and Athletics.</div>
    </div>

    <v-card-actions class="job-action">
      <v-layout row wrap>
        <v-flex md9 sm12>
          <v-list-item>
            <v-list-item-avatar height="50" width="50" color>
              <!-- class="elevation-6" tạo shadow css -->
              <v-img :src="getRandomAvatar()"></v-img>
              <!-- https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light -->
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="subtitle-1">Our Changing Planet</v-list-item-title>
              <v-list-item-subtitle class="job-post-time">
                <v-icon small class="pr-1">mdi-clock-outline</v-icon>by Kurt Wagner
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-flex>

        <v-flex md3 sm12 align-self-center right>
          <v-btn small icon>
            <v-icon>mdi-thumb-up-outline</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
          <v-btn small icon class="mr-2">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
// const moment = require("moment");
const _ = require("lodash");

export default {
  components: {},
  data: () => ({
    selection: 1,
    imgSrc:
      "https://picsum.photos/730/250?random=" +
      Math.floor(Math.random() * 10 + 1)
  }),
  computed: {
    // example () {
    //   return null;
    // }
  },
  watch: {
    // example() {
    // }
  },
  mounted() {},
  methods: {
    goToJobDetail() {
      // alert('zzzzz');
      var jobId = "abc";
      this.$router.push({ path: `/job/${jobId}` });
    },
    getRandomAvatar() {
      const atts = {
        accessoriesType: [
          "Blank",
          "Kurt",
          "Prescription01",
          "Prescription02",
          "Round",
          "Sunglasses",
          "Wayfarers"
        ],
        avatarStyle: ["Transparent", "Circle"], //"Circle",
        clotheColor: ["PastelRed"],
        clotheType: [
          "BlazerShirt",
          "BlazerSweater",
          "CollarSweater",
          "GraphicShirt",
          "Hoodie",
          "Overall",
          "ShirtCrewNeck",
          "ShirtScoopNeck",
          "ShirtVNeck"
        ],
        eyeType: [
          "Close",
          "Cry",
          "Default",
          "Dizzy",
          "EyeRoll",
          "Happy",
          "Hearts",
          "Side",
          "Squint",
          "Surprised",
          "Wink",
          "WinkWacky"
        ],
        eyebrowType: [
          "Angry",
          "AngryNatural",
          "Default",
          "DefaultNatural",
          "FlatNatural",
          "RaisedExcited",
          "RaisedExcitedNatural",
          "SadConcerned",
          "SadConcernedNatural",
          "UnibrowNatural",
          "UpDown",
          "UpDownNatural"
        ],
        facialHairColor: [
          "Auburn",
          "Black",
          "Blonde",
          "BlondeGolden",
          "Brown",
          "BrownDark",
          "Platinum",
          "Red"
        ],
        facialHairType: [
          "Blank",
          "BeardMedium",
          "BeardLight",
          "BeardMagestic",
          "MoustacheFancy",
          "MoustacheMagnum"
        ],
        graphicType: ["Resist"],
        hairColor: [
          "Auburn",
          "Black",
          "Blonde",
          "BlondeGolden",
          "Brown",
          "BrownDark",
          "PastelPink",
          "Platinum",
          "Red",
          "SilverGray"
        ],
        hatColor: ["PastelBlue"],
        mouthType: [
          "Concerned",
          "Default",
          "Disbelief",
          "Eating",
          "Grimace",
          "Sad",
          "ScreamOpen",
          "Serious",
          "Smile",
          "Tongue",
          "Twinkle",
          "Vomit"
        ],
        skinColor: [
          "Tanned",
          "Yellow",
          "Pale",
          "Light",
          "Brown",
          "DarkBrown",
          "Black"
        ],
        topType: [
          "NoHair",
          "Eyepatch",
          "Hat",
          "Hijab",
          "Turban",
          "WinterHat1",
          "WinterHat2",
          "WinterHat3",
          "WinterHat4",
          "LongHairBigHair",
          "LongHairBob",
          "LongHairBun",
          "LongHairCurly",
          "LongHairCurvy",
          "LongHairDreads",
          "LongHairFrida",
          "LongHairFro",
          "LongHairFroBand",
          "LongHairNotTooLong",
          "LongHairShavedSides",
          "LongHairMiaWallace",
          "LongHairStraight",
          "LongHairStraight2",
          "LongHairStraightStrand",
          "ShortHairDreads01",
          "ShortHairDreads02",
          "ShortHairFrizzle",
          "ShortHairShaggyMullet",
          "ShortHairShortCurly",
          "ShortHairShortFlat",
          "ShortHairShortRound",
          "ShortHairShortWaved",
          "ShortHairSides",
          "ShortHairTheCaesar",
          "ShortHairTheCaesarSidePart"
        ]
      };

      let avatarUrl = "https://avataaars.io/?";
      for (const [key, value] of Object.entries(atts)) {
        avatarUrl = avatarUrl + key + "=" + _.sample(value) + "&";
        // console.log(key, value);
      }

      // console.log(avatarUrl);

      return avatarUrl;
    }
    // example() {
    // }
  }
};
</script>

<style lang="scss">
.job-item {
  .job-pannel {
    cursor: pointer;
    &:hover,
    &:focus {
      .job-title {
        color: #006f8e;
      }
    }
    .job-category-chip {
      line-height: 40px;
      padding: 10px 0 5px 0;
    }
    .job-title {
      cursor: pointer;
      &:hover {
        color: #006f8e;
      }
    }
    .job-sub-info .v-list-item {
      padding: unset;
      min-height: 32px;
      .body-2 {
        font-weight: 500;
        &.salary {
          color: #ff5252;
        }
      }

      .v-list-item__icon {
        margin: 4px 8px 4px 0;
      }
    }
    .job-short-desc {
      padding-top: 5px;
      line-height: 1.5;
      color: #9da0a4;
      font-size: 14px;
      font-weight: 400;
      word-wrap: break-word;
    }
    .v-image {
      border-radius: 2px;
    }
  }
  .job-action {
    padding: 0;
    .v-avatar {
      margin-right: 12px;
    }
    .v-list-item {
      padding: 5px 0 0 0;
    }
    .v-list-item__content {
      width: 50%;
    }
    .job-post-time {
      font-size: 12px;
    }
  }
}
</style>
