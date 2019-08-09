<template>
  <v-container fluid grid-list-md>
    <v-layout class="job-list" column>
      <v-flex xs12 md12 sm12 pt-2>
        <div class="new-style projects-index-menu" style>
          <p class="projects-count">
            <span class="current">10</span>
            <span class="per">/</span>
            <span class="total">1050</span>
          </p>

          <div class="projects-index-sort-menu cf">
            <ul>
              <li>
                <a class="sort-link-popular">Popular</a>
              </li>
              <li>
                <a class="sort-link-recent">Newest</a>
              </li>
              <li class="selected">
                <a class="selected sort-link-mixed">Recommended</a>
              </li>
            </ul>
            <h4>Sort</h4>
          </div>
        </div>
      </v-flex>

      <!-- Job item list -->
      <v-flex xs12 md12 sm12 pt-2>
        <template v-for="(item, idx) in jobItems" >
          <JobItem :key="idx"/>
          <v-divider :key="idx" class="mb-10"></v-divider>
        </template>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JobItem from "./JobItem";

export default {
  components: {JobItem},
  data: () => ({
    jobItems: [1,2]
  }),
  computed: {
    example() {
      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.projects-index-menu {
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans",
    "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",
    Roboto, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;

  padding-top: 7px;
  .projects-count {
    float: left;
    margin-top: 7px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #999;
    -webkit-font-smoothing: antialiased;

    .current {
      font-size: 12px;
    }
    .per {
      font-size: 14px;
      margin: 0 4px;
    }
    .total {
      font-size: 16px;
      font-weight: bold;
      color: #24282a;
    }
  }

  .projects-index-sort-menu {
    padding-bottom: 18px;
    border-bottom: 2px solid #f5f5f5;
    font-size: 14px;
    line-height: 22px;
    ul {
      display: inline;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
      li {
        float: right;
        font-size: 14px;
        margin-right: 14px;
        padding: 0;
        list-style: none;
        display: list-item;

        &.selected {
          color: #00a4bb;
          font-weight: bold;
        }
        &:hover {
          color: #00a4bb;
        }
        a {
          color: unset !important;
        }
      }
    }
    h4 {
      float: right;
      display: inline;
      margin-right: 23px;
      font-weight: normal;
      font-size: 12px;
      color: #9da0a4;
    }
  }
}
</style>
