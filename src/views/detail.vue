<template>
  <div class="detail">
    <div class="main">
      <appnav @component="send"></appnav>detail
    </div>

    <!-- <div class="back" @click="back">返回上一层 ></div> -->
  </div>
</template>
<script>
import appnav from "@/views/nav";

export default {
  components: {
    appnav
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    subtractCount() {},
    back() {
      this.$emit("component", "courseList");
    },

    send(comp) {
      this.$emit("component", comp);
    }
  }
};
</script>
<style lang="less" scoped>
.detail {
  height: calc(100% - 0.72rem);
  background-color: #fff;
  height: 100%;
  .main {
    margin: 0 0.3rem;
  }
}
</style>