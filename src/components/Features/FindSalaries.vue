<template>
  <div class="find-salaries" id="cmp-root">
    <div id="cmp-salary-search-locator" class="cmp-salary-jumbotron">
      <div id="cmp-page">
        <div id="cmp-salary-search">
          <div>
            <div class="cmp-salary-search-title">Search and compare salaries</div>
            <div class="cmp-salary-search-subtitle">
              Over
              <strong>600 million</strong> salaries on Indeed
            </div>
          </div>
          <div class="cmp-salary-search-form">
            <input
              id="cmp-salary-search-input"
              type="text"
              autocomplete="off"
              placeholder="Enter a company name or job title"
            />
            <button id="cmp-salary-search-submit">Search</button>

            <div id="cmp-salary-search-results"></div>
          </div>
        </div>
        <div class="cmp-link-on-dark-blue-header">
          <a
            data-tn-element="link-to-company-front-door"
            data-tn-link
            href="/companies"
          >Search for company reviews</a>
          <span class="cmp-caret-on-dark-blue-header">›</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// require("@/assets/css/cmp-pc-min.css");

export default {
  components: {},
  data: () => ({})
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
  //   methods: {
  //     example(val) {
  //     }
  //   }
};
</script>

<style lang="scss">
.find-salaries {
  font-family: "Helvetica Neue", Helvetica, Arial, "Liberation Sans", Roboto,
    Noto, sans-serif !important;
  #cmp-root {
    border-top: none;
  }
  #cmp-root {
    flex: 1 0 auto !important;
  }
  #cmp-root {
    flex: 1 0 auto !important;
  }
  #cmp-root {
    border-top: solid 1px #ddd;
  }

  .cmp-salary-jumbotron {
    position: relative;
    display: block;
    #cmp-salary-search {
      width: 600px !important;
      // width: 100%;
      display: flex;
      flex-wrap: wrap !important;
      align-items: center !important;
      align-content: center !important;
      height: 210px !important;

      .cmp-salary-search-title {
        color: #000 !important;
        font-size: 42px !important;
        line-height: 1.14 !important;
        width: auto !important;
        text-align: left !important;
        margin-bottom: 16px !important;
        height: auto !important;
        font-weight: bold;
      }

      .cmp-salary-search-subtitle {
        height: 19px;
        line-height: 19px;
        margin-bottom: 8px !important;
        color: #6f6f6f !important;
        text-align: left !important;
        font-size: 22px !important;
      }

      .cmp-salary-search-form {
        position: absolute !important;
        bottom: 10px !important;
        border: none !important;
        margin: 0 !important;
        box-shadow: none !important;
        width: 720px !important;
        justify-content: space-between !important;
        background: none !important;
        height: 54px !important;
        border-radius: 3px;

        input {
          width: 420px;
          height: 44px;
          padding-left: 9px;
          background-color: transparent;
          outline: 0;
          font-size: 15px;
          color: #000;
          line-height: 1.41;
          border: 0;
          -webkit-writing-mode: horizontal-tb !important;
          text-rendering: auto;
          color: initial;
          letter-spacing: normal;
          word-spacing: normal;
          text-transform: none;
          text-indent: 0px;
          text-shadow: none;
          display: inline-block;
          text-align: start;
          -webkit-appearance: textfield;
          background-color: white;
          -webkit-rtl-ordering: logical;
          cursor: text;
          margin: 0em;
          font: 400 13.3333px Arial;
        }

        #cmp-salary-search-input {
          &:focus {
            border-color: #085ff7 !important;
            outline: none;
          }
          border: 2px solid #ccc !important;
          border-radius: 4px !important;
          padding: 0 16px !important;
          margin: 0 !important;
          font-weight: normal !important;
          font-size: 1rem !important;
          letter-spacing: 0 !important;
          line-height: 1.38 !important;
          background-color: #fff !important;
          box-shadow: none !important;
          min-height: 44px !important;
          padding: 0 18px !important;
          height: 44px !important;
          line-height: 44px !important;
          float: left !important;
          height: 54px !important;
          width: 500px !important;
          padding-left: 27px !important;
          padding-top: 2px !important;
          position: static !important;
          font-size: 16px !important;
        }

        #cmp-salary-search-submit {
          float: left !important;
          width: 200px !important;
          height: 54px !important;
          background: #195ff7 !important;
          color: #fff !important;
          border: 2px solid #195ff7 !important;
          box-shadow: none !important;
          border-radius: 27.5px !important;
          top: -2px !important;
          position: static !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          margin-left: 20px;
          cursor: pointer;
          padding-left: 10px;
          padding-right: 10px;
          min-width: 67px;
          right: 4px;
        }
      }
    }
  }
}

.cmp-salary-search-form::after {
  content: "";
  display: block;
  position: absolute !important;
  width: 22.1px !important;
  height: 22.1px !important;
  background-size: 22.1px !important;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent !important;
  right: 242.1px !important;
  top: 15px !important;
  background-image: url("data:image/svg+xml;charset=utf8,a<svg width='22' height='21' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>a  <defs>a    <circle id='a' cx='9' cy='9' r='9'/>a  </defs>a  <g fill='none' fill-rule='evenodd'>a    <path fill='%23000' d='M11 11.414L12.414 10l8.839 8.839-1.414 1.414z'/>a    <g>a      <use fill='%23FFF' xlink:href='%23a'/>a      <circle stroke='%23000' stroke-width='2' cx='9' cy='9' r='8'/>a    </g>a  </g>a</svg>a") !important;
  }
</style>