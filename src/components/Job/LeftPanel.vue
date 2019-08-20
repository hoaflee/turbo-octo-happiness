<template>
  <v-container fluid class="left-panel">
    <v-layout justify-center wrap>
      <v-flex md12>
        <v-card flat class="company-quote">
          <v-card-title class="title mb-1">
            <div>{{data.ownerName}} members</div>
          </v-card-title>
          <!-- <v-card-title> -->
          <v-tabs v-model="tab" center-active grow>
            <v-tab
              v-for="(item, idx) in items"
              :key="idx"
              class="company-quote-tab"
              @mouseover="tab = idx"
            >
              <v-card flat>
                <v-card-title>
                  <v-avatar height="100" width="100">
                    <img :src="item.icon" />
                  </v-avatar>
                </v-card-title>
                <v-card-text class="text-center">
                  <div class="pt-1 member-name">{{ item.name }}</div>
                  <div class="caption">{{ item.position }}</div>
                </v-card-text>
              </v-card>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, idx) in items" :key="idx">
              <v-card flat color="basil">
                <v-card-text>{{ item.quote }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-flex>

      <v-flex md12>
        <v-card flat class="mt-2">
          <v-card-text class="job-content">
            <div>
              <h3 class="title pb-6">Description</h3>
              <div class="job-text" v-html="removeStyle(data.description)"></div>
              <h3 class="title pb-6">Requirement</h3>
              <div class="job-text" v-html="removeStyle(data.requirement)"></div>
              <h3 class="title pb-6">Benefit</h3>
              <div class="job-text" v-html="removeStyle(data.benefit)"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex md12>
        <InfoTable :data="data" />
      </v-flex>

      <v-flex md12>
        <v-layout wrap>
          <v-row align="center" justify="center">
            <v-col lg="6" md="12" sm="12">
              <v-btn block large color="error" depressed>
                <v-icon left>mdi-check-circle-outline</v-icon>Apply Now
              </v-btn>
            </v-col>

            <v-col lg="6" md="12" sm="12">
              <v-btn block large outlined depressed>
                <v-icon left>mdi-bookmark-outline</v-icon>Bookmark
              </v-btn>
            </v-col>
          </v-row>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import InfoTable from "./JobInfoTable";

export default {
  props: ["data"],
  components: {
    InfoTable
  },
  data: () => ({
    tab: null,
    items: [
      {
        name: "Desertes",
        icon:
          "https://avataaars.io/?accessoriesType=Round&avatarStyle=Transparent&clotheColor=PastelRed&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&facialHairColor=Auburn&facialHairType=MoustacheFancy&graphicType=Resist&hairColor=Red&hatColor=PastelBlue&mouthType=Disbelief&skinColor=Black&topType=ShortHairFrizzle&",
        quote:
          "Người ta nói muốn làm việc được tốt phải có đam mê, phải tràn đầy năng lượng, phải có lương tâm nghề nghiệp. Tôi thì lại có suy nghĩ khác, qua bao nhiêu chuyện quanh mình tôi nhận thấy lương tâm không bằng lương tháng, và muốn có năng lượng phải có lương nặng.",
        position: "Project Leader"
      },
      {
        name: "Appetizeres",
        icon:
          "https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=PastelRed&clotheType=GraphicShirt&eyeType=WinkWacky&eyebrowType=UpDown&facialHairColor=Blonde&facialHairType=MoustacheMagnum&graphicType=Resist&hairColor=SilverGray&hatColor=PastelBlue&mouthType=Twinkle&skinColor=Light&topType=NoHair&",
        quote: "Không có gì là quá khó cả... chỉ cần bạn bỏ cuộc là xong.",
        position: "CEO"
      },
      {
        name: "Entrees",
        icon:
          "https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Transparent&clotheColor=PastelRed&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&facialHairColor=Red&facialHairType=BeardLight&graphicType=Resist&hairColor=SilverGray&hatColor=PastelBlue&mouthType=Sad&skinColor=Yellow&topType=LongHairBigHair&",
        quote:
          "Người giỏi giang hơn bạn vẫn đang cố gắng... thế thì bạn còn cố gắng làm gì?",
        position: "Manager"
      },
      {
        name: "Cocktailes",
        icon:
          "https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=PastelRed&clotheType=Hoodie&eyeType=Dizzy&eyebrowType=UnibrowNatural&facialHairColor=Platinum&facialHairType=BeardMagestic&graphicType=Resist&hairColor=Brown&hatColor=PastelBlue&mouthType=Grimace&skinColor=Light&topType=ShortHairTheCaesarSidePart&",
        quote:
          "Bước đến nhà em, bóng xế tà. Đứng chờ năm phút bố em ra. Lơ thơ phía trước vài con chó. Lác đác đằng sau chổi lông gà.",
        position: "Engineer"
      }
    ],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }),
  //   computed: {
  //     example () {
  //       return null;
  //     }
  //   },
  //   watch: {
  //     example(val) {
  //     }
  //   },
  //   mounted () {
  //   },
  methods: {
    removeStyle(htmlString) {
      // console.log(htmlString);
      const notStyle = htmlString.replace(/(<[^>]+) style=".*?"/gi, "$1");
      // console.log(notStyle);
      return notStyle;
    }
  }
};
</script>

<style lang="scss">
.left-panel {
  &.container {
    padding: unset;
  }
  .company-quote {
    .v-card__title.title {
      padding-top: 0;
    }
    .v-tabs-bar {
      height: unset;
    }
    .v-tab {
      padding: 8px 0;
      text-transform: unset;
      &.v-tab--active {
        color: #1867c0 !important;
        caret-color: #1867c0 !important;
      }

      .v-card {
        background-color: transparent;
        .v-card__title {
          padding: unset;
        }
        .v-card__text {
          padding: unset;
        }
        .member-name {
          font-size: 14px;
          color: #24282a;
          display: block;
          text-align: center;
        }
      }
    }
  }
  .job-content {
    padding-top: 0 !important;
    .title {
      color: #00a4bb;
    }
    .job-text {
      font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans",
        "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
        Roboto, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
      font-size: 14px;
      line-height: 22px;
      color: #24282a;
      -webkit-font-smoothing: antialiased;
    }
  }
}
</style>