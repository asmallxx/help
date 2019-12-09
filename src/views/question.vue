<template>
  <div class="question">
    <div>question count:{{count}}</div>
    <button @click="subtractCount">减1</button>
    <div @click="backPage">返回上一层 ></div>
  </div>
</template>
<script>
import store from "@/store/index";

export default {
  data() {
    return {
      //   count: store.state.count
    };
  },
  computed: {
    count: () => store.state.count
  },
  methods: {
    backPage() {
      this.$emit("component", "courseList");
    },
    subtractCount() {
      this.$store.commit({
        type: `subtractCount`
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>