<template>
  <section class="job-show-main-section">
    <table class="wanted-info">
      <tbody>
        <tr>
          <th colspan="2">Basic info</th>
        </tr>
        <tr>
          <td class="head">Looking for</td>
          <td>{{data.levels[0].label}}</td>
        </tr>
        <tr>
          <td class="head">Job type</td>
          <td>{{data.industries[0].label}}</td>
        </tr>
        <tr>
          <td class="head">Salary</td>
          <td>{{data.salaries[0].label}}</td>
        </tr>
        <tr>
          <td class="head">Word Location</td>
          <td>{{data.locations[0].label}}</td>
        </tr>
        <tr>
          <th colspan="2">Company info</th>
        </tr>
        <tr>
          <td class="head">Founder</td>
          <td>Nguyễn Văn CEO</td>
        </tr>
        <tr>
          <td class="head">Founded on</td>
          <td>Hôm nay, 2019</td>
        </tr>
        <tr>
          <td class="head">Headcount</td>
          <td>45 members</td>
        </tr>
        <tr>
          <td class="head">Industries</td>
          <td>IT (Internet/Mobile) / Foods / Beverages / Health Care / Pharmaceuticals</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: ["data"],
  components: {},
  data: () => ({})
  // computed: {
  //   example() {
  //     return null;
  //   }
  // },
  // watch: {
  //   example(val) {}
  // },
  // mounted() {
  //   this.$nextTick(() => {});
  // },
  // methods: {
  //   example(val) {}
  // }
};
</script>

<style lang="scss" scoped>
.job-show-main-section {
  margin-top: 40px;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans",
    "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
    Roboto, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #24282a;
  -webkit-font-smoothing: antialiased;
  
  .wanted-info {
    border-collapse: collapse;
    margin-bottom: 0px;
    font-weight: normal;
    width: 100%;
    max-width: 100%;
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
    }
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
    }
    th {
      background: #f5f5f5;
      border: 1px solid #e3e3e3;
      padding: 14px 18px;
    }
    td {
      background: #fff;
      border: 1px solid #e3e3e3;
      padding: 14px 18px;
    }
    td.head {
      font-weight: 600;
      width: 140px;
    }
  }
}
</style>