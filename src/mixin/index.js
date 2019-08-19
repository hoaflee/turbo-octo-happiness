import moment from 'moment'
import _ from 'lodash'
// import vuetify from '../plugins/vuetify';

export default {
  // data() {
  //   isMobile: false
  // },
  // created: function () {
  //   this.isMobile = vuetify.breakpoint.smAndDown
  //   console.log('Printing from the Mixin')
  // },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0,0);
		});
  },
  methods: {
    getRandomImgUrl: (w,h) => {
      let url = 'https://picsum.photos/' + w + '/' + h + '?random=' +  Math.floor(Math.random() * 10 + 1);
      return url;
    },
    randomAvtUrl() {
      var atts = {
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
      }
    
      return avatarUrl;
    },
    getLastUpdate: (updatedAt) => {
      let timeString = moment(updatedAt).fromNow()
      return timeString
    },
  },
  // computed: {
  //   isMobile() {
  //     return vuetify.breakpoint.smAndDown;
  //   }
  // },
  // mounted() {
  //   this.$nextTick(() => {
  //     // console.log(document.querySelectorAll(".dropdown-button"));
  //     this.isMobile = vuetify.breakpoint.smAndDown;
	// 	});
  // },
}


