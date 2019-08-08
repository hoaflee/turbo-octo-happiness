<template>
  <v-layout class="job-filter" wrap>

    <v-flex xs12 md12 sm12 align-self-center pt-2>
      <div class="filter-title">Filter by
         <v-icon small class="clear-all-icon" title="Clear all filter">mdi-close-circle</v-icon>
      </div>
    </v-flex>

    <v-flex md12 sm12 pt-3>
      <v-select
        dense
        class="filter-combobox"
        :items="occupations"
        :menu-props="{ bottom: true, offsetY: true }"
        multiple
        append-icon="mdi-chevron-down"
        outlined
        label="Occupation"
        hide-details
        v-model="a1"
      >
      <!-- <template v-slot:selection="{ item, index }">
        <v-chip v-if="index === 0">
          <span>{{ item }}</span>
        </v-chip>
        <span
          v-if="index === 1"
          class="grey--text caption"
        >(+{{ occupations.length - 1 }} others)</span>
      </template> -->
      </v-select>
    </v-flex>

    <v-flex md12 sm12 pt-2>
      <v-select
        dense
        class="filter-combobox"
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

    <v-flex md12 sm12 pt-2>
      <v-select
        dense
        class="filter-combobox"
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

    <v-flex md12 sm12 pt-2>
      <v-select
        dense
        class="filter-combobox"
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
    padding-top: 4px;
    padding-left: 1px;
    font-weight: 600;
    font-size: 13px !important;
    letter-spacing: 0.4px;
    color: #9DA0A4;
    width: 100%;
  }

  .filter-combobox {
    .v-label {
      font-size: 14px;
    }
    &.v-input {
      font-size: 12px !important;
      .v-select__selection--comma {
        font-weight: 600;
      }
    }
    &.v-text-field--outlined .v-label {
      top: 15px;
    }
    &.v-text-field--outlined .v-label--active.v-label {
      top: 18px;
    }
    
    .v-select.v-text-field input {
      padding: unset !important;
    }
    .v-select.v-text-field--outlined:not(.v-text-field--single-line) .v-select__selections {
     padding: unset !important;
    }

    .v-input__slot {
      min-height: 40px !important;
    }
    .v-input__append-inner {
      margin-top: 12px !important;
    }
  }
  
}
</style>
