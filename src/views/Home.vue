<template>
  <div class="home">
    <app-header></app-header>
    <component @component="onComponent" :is="component"></component>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/header.vue";
import courseList from "@/views/courseList.vue";
import question from "@/views/question";

export default {
  name: "home",
  components: { AppHeader, courseList, question },

  data() {
    return {
      component: "courseList"
    };
  },
  methods: {
    onComponent(comp) {
      this.component = comp;
    }
  }
};
</script>
