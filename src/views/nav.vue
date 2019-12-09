<template>
  <nav class="nav">
    <a
      class="nav-item"
      :class="{'blue-text':item.F_type===active}"
      v-for="(item, index) in navs"
      :key="index"
      @click="selectType(item)"
    >{{item.F_name}}</a>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        {
          F_type: 1,
          F_name: "教师端"
        },
        {
          F_type: 2,
          F_name: "家长端"
        },
        {
          F_type: 3,
          F_name: "学生端"
        },
        {
          F_type: 4,
          F_name: "教务端"
        },
        {
          F_type: 5,
          F_name: "常见问题及解决"
        }
      ]
    };
  },
  computed: {
    active() {
      return this.$store.state.active;
    }
  },
  methods: {
    selectType(item) {
      if (item.F_type === 5) {
        this.$emit("component", "question");
        this.$store.commit("changactive", { active: 1 });
        return;
      }
      if (item.F_type !== 1) {
        this.$emit("component", "detail");
      } else {
        this.$emit("component", "courseList");
      }

      console.log(item.F_type);
      this.$store.commit("changactive", { active: item.F_type });
    }
  }
};
</script>
<style lang="less" scoped>
.nav {
  // height: 0.5rem;
  .nav-item {
    font: 0.2rem/0.68rem "Microsoft YaHei";
    margin-right: 0.22rem;

    color: #595959;
    cursor: pointer;
  }
  .nav-item:hover {
    color: #009cff;
  }
  .blue-text {
    color: #009cff;
  }
}
</style>