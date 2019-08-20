<template></template>

<script>
export default {
  props: ["data"],
  components: {},
  data: () => ({}),
  computed: {
    example() {
      return null;
    }
  },
  watch: {
    example(val) {},
    item: {
      handler(val) {
        // do stuff
      },
      deep: true
    }
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    example(val) {}
  }
};
</script>
