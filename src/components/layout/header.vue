<template>
  <div class="header">
    <section class="left">
      <i class="logo"></i>
      <nav class="nav-wrapper">
        <a class="nav-item help blue">帮助中心</a>
        <a class="nav-item communicate">交流中心</a>
      </nav>
    </section>
    <button class="return">返回</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  padding: 0 30px;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.72rem;
  background-color: #009cff;

  .left {
    display: flex;
    justify-content: flex-start;
    height: 100%;

    .logo {
      display: inline-block;
      width: 1.96rem;
      height: 0.54rem;
      margin: auto;
      margin-right: 0.48rem;
      //   background: url("../../assets/images/logo.png") no-repeat;
      background-size: cover;
    }

    .nav-wrapper {
      display: flex;
      justify-content: flex-start;
      font-size: 0.22rem;
      color: #fff;

      .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 100%;
        cursor: pointer;
      }
      .help:hover {
        background-color: #0074ea;
      }
      .communicate:hover {
        background-color: #0074ea;
      }
      .blue {
        background-color: #0074ea;
      }
    }
  }

  .return {
    width: 74px;
    height: 32px;
    color: #009cff;
    font-size: 0.16rem;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: #fff;
  }
}
</style>