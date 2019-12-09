<template>
  <div class="course-list"></div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    switchPage() {
      this.$emit("component", "question");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.course-list {
  height: calc(100% - 0.82rem);
}
</style>