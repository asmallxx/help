<template>
  <div class="home">
    <app-header></app-header>
    <!-- 采用组件更换方式 -->
    <component @component="onComponent" :is="component" :active="active"></component>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/header.vue";
import courseList from "@/views/courseList.vue";
import question from "@/views/question";
import detail from "@/views/detail";

export default {
  name: "home",
  components: { AppHeader, courseList, question, detail },

  data() {
    return {
      component: "courseList"
    };
  },
  computed: {
    active() {
      return this.$store.active;
    }
  },
  methods: {
    onComponent(comp) {
      this.component = comp;
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
}
</style>
