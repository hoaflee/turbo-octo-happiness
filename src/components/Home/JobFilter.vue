<template>
  <v-layout class="job-filter" wrap>
    <v-flex md10 sm10>
      <div class="filter-title">Filter by</div>
    </v-flex>

    <v-flex md2 sm2 align-self-center>
      <v-spacer></v-spacer>
      <v-icon small class="clear-all-icon" title="Clear all filter">mdi-close-circle</v-icon>
    </v-flex>

    <v-flex md12 sm12 pt-3>
      <v-select
        class="filter-select"
        v-model="a1"
        :items="occupations"
        :menu-props="{ bottom: true, offsetY: true }"
        multiple
        append-icon="mdi-chevron-down"
        outlined
        label="Occupation"
        hide-details
      ></v-select>
    </v-flex>

    <v-flex md12 pt-2>
      <v-select
        class="filter-select"
        v-model="a2"
        :items="employments"
        :menu-props="{ bottom: true, offsetY: true }"
        multiple
        append-icon="mdi-chevron-down"
        outlined
        label="Employment"
        hide-details
      ></v-select>
    </v-flex>

    <v-flex md12 pt-2>
      <v-select
        class="filter-select"
        v-model="a3"
        :items="locations"
        :menu-props="{ bottom: true, offsetY: true }"
        multiple
        append-icon="mdi-chevron-down"
        outlined
        label="Location"
        hide-details
      ></v-select>
    </v-flex>

    <v-flex md12 pt-2>
      <v-select
        class="filter-select"
        v-model="a4"
        :items="salaries"
        :menu-props="{ bottom: true, offsetY: true }"
        append-icon="mdi-chevron-down"
        outlined
        label="Salary"
        hide-details
      ></v-select>
    </v-flex>

  </v-layout>
  <!-- <v-card color="indigo" dark>
    <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
  </v-card>-->
</template>

<script>
export default {
  data() {
    return {
      a1: [],
      a2: [],
      a3: [],
      a4: [],
      occupations: ['Engineer/programmer', 'Designer', 'Director/manager', 'Business (Finance, HR etc.)', 'Sales', 'Marketer', 'Writer', 'Other'],
      employments: ['New grad/entry level', 'Internship', 'Mid-career', 'Contract work'],
      locations: ['An Giang', 'Bà Rịa - Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Tĩnh', 'Hải Dương', 'Hậu Giang', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái', 'Phú Yên', 'Cần Thơ', 'Đà Nẵng', 'Hải Phòng', 'Hà Nội', 'TP HCM'],
      salaries: ['Negotiate', '$1,000 - $1,500', '$1,500 - $2,000', '$2,000 - $3,000', '$3,000 - $4,000', '$4,000 - $5,000', '$5,000 - $7,000', '$7,000 - $10,000', '$10,000 - $15,000', 'More than $15,000']
    };
  },
  methods: {
    test_click(test) {
      alert(test);
    }
  }
};
</script>

<style lang="scss">
.job-filter{
  .clear-all-icon {
    cursor: pointer;
    float: right;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }

  .filter-title {
    display: block;
    // margin-bottom: 15px;
    padding-top: 4px;
    padding-left: 1px;
    font-weight: 600;
    font-size: 13px !important;
    letter-spacing: 0.4px;
    color: #9DA0A4;
  }
}
</style>
