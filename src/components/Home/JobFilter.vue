<template>
  <v-layout class="job-filter" column>
    <v-flex xs12 md12 sm12 pt-4 class="hidden-sm-and-down">
    </v-flex>
  
    <v-flex xs12 md12 sm12 pt-2>
      <div class="filter-title">
        Filter by
        <v-icon
          small
          class="clear-icon"
          title="Clear all filter"
          @click="clearAllCondidion()"
        >mdi-close-circle</v-icon>
      </div>
    </v-flex>

    <v-flex md12 sm12 pt-3>
      <v-select
        :items="occupations"
        :menu-props="{ bottom: true, offsetY: true }"
        eager
        dense
        class="filter-input"
        multiple
        append-icon="mdi-chevron-down"
        outlined
        label="Occupation"
        hide-details
        v-model="a1"
        height="30"
        clearable
      >
        <template v-slot:selection="{ item, index }">
          <div v-if="index === 0" class="v-select__selection v-select__selection--comma">{{ item }}</div>
          <span v-if="index === 1" class="grey--text caption">(+{{ a1.length }} others)</span>
        </template>
      </v-select>
    </v-flex>

    <v-flex md12 sm12 pt-2>
      <v-select
        :items="employments"
        :menu-props="{ bottom: true, offsetY: true }"
        dense
        class="filter-input"
        v-model="a2"
        multiple
        append-icon="mdi-chevron-down"
        outlined
        label="Employment"
        hide-details
        clearable
        height="30"
      >
        <template v-slot:selection="{ item, index }">
          <div v-if="index === 0" class="v-select__selection v-select__selection--comma">{{ item }}</div>
          <span v-if="index === 1" class="grey--text caption">(+{{ a2.length }} others)</span>
        </template>
      </v-select>
    </v-flex>

    <v-flex md12 sm12 pt-2>
      <v-select
        :items="locations"
        :menu-props="{ bottom: true, offsetY: true }"
        dense
        class="filter-input"
        v-model="a3"
        multiple
        append-icon="mdi-chevron-down"
        outlined
        label="Location"
        hide-details
        clearable
        height="30"
      >
        <template v-slot:selection="{ item, index }">
          <div v-if="index === 0" class="v-select__selection v-select__selection--comma">{{ item }}</div>
          <span v-if="index === 1" class="grey--text caption">(+{{ a3.length }} others)</span>
        </template>
      </v-select>
    </v-flex>

    <v-flex md12 sm12 pt-2>
      <v-select
        :items="salaries"
        :menu-props="{ bottom: true, offsetY: true }"
        dense
        class="filter-input"
        v-model="a4"
        append-icon="mdi-chevron-down"
        outlined
        label="Salary"
        hide-details
        clearable
        height="30"
      ></v-select>
    </v-flex>

    <!-- categories chip -->
    <v-flex md12 sm12 pt-1>
      <template v-for="cate in categories" >
        <template v-for="(item, idx) in cate.items" >
          <v-chip
            :key="idx"
            v-if="item.selected"
            class="categories-chip mt-1"
            close
            color="cyan"
            label
            small
            text-color="white"
            @click:close="item.selected = !item.selected"
          >
            {{item.text}}
          </v-chip>
        </template>
      </template>

    </v-flex>

    <!-- Keyword input text field -->
    <v-flex md12 sm12 pt-2>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        class="filter-input text-field"
        label="Search keyword"
        outlined
        clearable
        hide-details
        height="30"
        v-model="keyword"
      ></v-text-field>
    </v-flex>

    <!-- divider -->
    <v-flex md12 sm12 pt-4>
      <v-divider></v-divider>
    </v-flex>

    <!-- add categories panel -->
    <v-flex xs12 md12 sm12 pt-2 v-for="(cate, cate_idx) in categories" :key="cate_idx">
      <div class="filter-title categories">{{cate.title}}</div>
      
      <!-- Show limit categories -->
      <template v-if="cate.items.length > showItems && cate.showMore">
        <div
          class="filter-Categories"
          :class="{ selected: item.selected}"
          v-for="(item, idx) in cate.items.slice(0, showItems)"
          :key="idx"
          @click="item.selected = !item.selected"
        >
          <span>{{ item.text }}</span>
          <v-icon
            small
            class="clear-icon"
            :class="{ selected: item.selected}"
            @mouseover="onMouseOver($event)"
            @mouseleave="onMouseLeave($event)"
          >
            {{ item.selected ? 'mdi-checkbox-marked-circle': 'mdi-plus-circle-outline'}}
          </v-icon>
        </div>
      </template>

      <template v-else>
        <div
          class="filter-Categories"
          :class="{ selected: item.selected}"
          v-for="(item, idx) in cate.items"
          :key="idx"
          @click="item.selected = !item.selected"
        >
          <span>{{ item.text }}</span>
          <v-icon
            small
            class="clear-icon"
            :class="{ selected: item.selected}"
            @mouseover="onMouseOver($event)"
            @mouseleave="onMouseLeave($event)"
          >
            {{ item.selected ? 'mdi-checkbox-marked-circle': 'mdi-plus-circle-outline'}}
          </v-icon>
        </div>
      </template>

      <!-- show more button -->
      <div class="show-more" v-if="cate.items.length > showItems && cate.showMore" @click="cate.showMore = !cate.showMore">Show more</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      showItems: 5,
      keyword: "",
      a1: [],
      a2: [],
      a3: [],
      a4: [],
      occupations: [
        "Engineer/programmer",
        "Designer",
        "Director/manager",
        "Business (Finance, HR ...)",
        "Sales",
        "Marketer",
        "Writer",
        "Other"
      ],
      employments: [
        "New grad/entry level",
        "Internship",
        "Mid-career",
        "Contract work"
      ],
      locations: [
        "An Giang",
        "Bà Rịa - Vũng Tàu",
        "Bắc Giang",
        "Bắc Kạn",
        "Bạc Liêu",
        "Bắc Ninh",
        "Bến Tre",
        "Bình Định",
        "Bình Dương",
        "Bình Phước",
        "Bình Thuận",
        "Cà Mau",
        "Cao Bằng",
        "Đắk Lắk",
        "Đắk Nông",
        "Điện Biên",
        "Đồng Nai",
        "Đồng Tháp",
        "Gia Lai",
        "Hà Giang",
        "Hà Nam",
        "Hà Tĩnh",
        "Hải Dương",
        "Hậu Giang",
        "Hòa Bình",
        "Hưng Yên",
        "Khánh Hòa",
        "Kiên Giang",
        "Kon Tum",
        "Lai Châu",
        "Lâm Đồng",
        "Lạng Sơn",
        "Lào Cai",
        "Long An",
        "Nam Định",
        "Nghệ An",
        "Ninh Bình",
        "Ninh Thuận",
        "Phú Thọ",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Ninh",
        "Quảng Trị",
        "Sóc Trăng",
        "Sơn La",
        "Tây Ninh",
        "Thái Bình",
        "Thái Nguyên",
        "Thanh Hóa",
        "Thừa Thiên Huế",
        "Tiền Giang",
        "Trà Vinh",
        "Tuyên Quang",
        "Vĩnh Long",
        "Vĩnh Phúc",
        "Yên Bái",
        "Phú Yên",
        "Cần Thơ",
        "Đà Nẵng",
        "Hải Phòng",
        "Hà Nội",
        "TP HCM"
      ],
      salaries: [
        "Negotiate",
        "$1,000 - $1,500",
        "$1,500 - $2,000",
        "$2,000 - $3,000",
        "$3,000 - $4,000",
        "$4,000 - $5,000",
        "$5,000 - $7,000",
        "$7,000 - $10,000",
        "$10,000 - $15,000",
        "More than $15,000"
      ],
      categories: [
        {
          title: "Categories",
          showMore: true,
          items: [
            { text: "Mobile engineer", selected: false },
            { text: "Infrastructure engineer", selected: false },
            { text: "UI/UX designer", selected: false },
            { text: "Graphic designer", selected: false }
          ]
        },
        {
          title: "Company features",
          showMore: true,
          items: [
            { text: "Featured on TechCrunch", selected: false },
            { text: "Expanding business abroad", selected: false },
            { text: "Funded more than $1,000,000", selected: false },
            { text: "New to Premival", selected: false },
            { text: "Average age of employees in 20s", selected: false },
            { text: "CEO can code", selected: false },
            { text: "Funded more than $300,000", selected: false },
            { text: "Available to talk on Skype", selected: false },
            { text: "Foreign nationalities welcome", selected: false },
            { text: "Weekend commitment only", selected: false },
            { text: "Come visit with friends", selected: false },
            { text: "Students welcome", selected: false },
            { text: "Free snacks/lunch", selected: false }
          ]
        }
      ]
    };
  },
  methods: {
    onMouseOver(event) {
      // console.log(event.currentTarget.className);
      var currentClass = event.currentTarget.className;
      if (currentClass.includes('selected')) {
        event.currentTarget.className = currentClass.replace('mdi-checkbox-marked-circle', 'mdi-close-circle');
        event.currentTarget.classList.add('on-hover')
      }
    },

    onMouseLeave(event) {
      // console.log(event.currentTarget.className);
      var currentClass = event.currentTarget.className;
      if (currentClass.includes('selected') && currentClass.includes('on-hover')) {
        event.currentTarget.className = currentClass.replace('mdi-close-circle', 'mdi-checkbox-marked-circle');
        event.currentTarget.classList.remove('on-hover')
      }
    },

    clearAllCondidion() {
      this.keyword = "";
      this.a1 = [];
      this.a2 = [];
      this.a3 = [];
      this.a4 = [];
      this.categories.map(obj => {
        obj.showMore = true;
        obj.items.map(item => {
          item.selected = false;
        })
      })
    }
  },
  computed: {
    // a computed getter
    selCates() {
      const returnArr = [];
      this.categories.map(cate => {
        cate.items.map(item => {
          if (item.selected) returnArr.push(item);
        })
      })

      return returnArr;
    }
  }
};
</script>

<style lang="scss">
.job-filter {
  .clear-icon {
    cursor: pointer;
    float: right;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }

  .filter-title {
    padding-top: 4px;
    padding-left: 1px;
    font-weight: 600;
    font-size: 13px !important;
    letter-spacing: 0.4px;
    color: #9da0a4;
    width: 100%;

    &.categories {
      padding-bottom: 8px;
    }
  }

  .filter-input {
    .v-label {
      font-size: 14px;
    }
    &.v-text-field--outlined {
      border-radius: 2px;
    }

    // Search keyword input text
    &.text-field.v-input {
      input {
        font-size: 14px !important;
        font-weight: 600;
      }
      .v-input__prepend-inner {
        margin-top: 9px;
      }
      box-shadow: 1px 4px 10px 0 rgba(0, 0, 0, 0.06),
        0 0 4px 0 rgba(0, 0, 0, 0.06);
    }

    &.v-input {
      font-size: 12px !important;
      .v-select__selection--comma {
        font-weight: 600;
      }
    }
    &.v-text-field--outlined .v-label {
      top: 11px;
    }
    &.v-text-field--outlined .v-label--active.v-label {
      top: 18px;
    }

    .v-select.v-text-field input {
      padding: unset !important;
    }
    .v-select.v-text-field--outlined:not(.v-text-field--single-line)
      .v-select__selections {
      padding: unset !important;
    }

    .v-input__slot {
      min-height: 40px !important;
    }
    .v-input__append-inner {
      margin-top: 8px !important;
      .v-icon {
        font-size: 14px !important;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .filter-Categories {
    // font-weight: 500;
    font-size: 13px;
    // line-height: 13px;
    letter-spacing: 0.2px;
    padding: 2px 8px;
    cursor: pointer;
    border-radius: 2px;

    &.selected {
      color: #1976d2;
    }

    &:hover,
    &:focus {
      .clear-icon {
        opacity: 0.5;
      }
      background: #fafafa;
    }
    .clear-icon {
      &.v-icon {
        font-size: 20px !important;
      }

      opacity: 0;
      &.selected {
        opacity: 1;
        color: #1976d2;

        &.on-hover {
          color: red !important;
        }
      }
      &:hover {
        opacity: 1;
        color: #1976d2;
      }
    }
  }

  .show-more {
    padding: 4px 8px;
    // font-weight: 500;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: 0.2px;
    color: #00a4bb;
    transition: font-weight 400ms ease;
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }

  .categories-chip {
    
    &.v-chip--label {
      width: 100%;
      border-radius: 2px !important;
    }

    .v-icon {
      font-size: 14px;
      position: absolute;
      right: 10px;
    }
  }

}
</style>
