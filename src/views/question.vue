<template>
  <div class="question">
    一些问题~
    <div class="back" @click="back">返回上一层 ></div>
  </div>
</template>
<script>
import store from "@/store/index";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    subtractCount() {},
    back() {
      this.$emit("component", "courseList");
    }
  }
};
</script>
<style lang="less" scoped>
.back {
  cursor: pointer;
}
</style>