<template>
  <div class="question"></div>
</template>
<script>
import store from "@/store/index";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    backPage() {
      this.$emit("component", "courseList");
    },
    subtractCount() {}
  }
};
</script>
<style lang="less" scoped>
</style>