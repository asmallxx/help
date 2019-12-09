<template>
  <div class="course-list">
    <button @click="switchPage">switchPage</button>
    <div>count:{{count}}</div>
    <button @click="addCount">加1</button>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapState } from "vuex";
// import question from "@/views/question";

export default {
  data() {
    return {
      //   count: this.$store.state.count
    };
  },
  computed: {
    // ...mapState(["count", "age", "sex"])
    // ...mapState({
    //   count: "count",
    //   age: "age",
    //   sex: "sex"
    // })

    count: () => store.state.count
  },
  methods: {
    switchPage() {
      this.$emit("component", "question");
    },
    addCount() {
      console.log(1);
      this.$store.commit({
        type: `addCount`
      });
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