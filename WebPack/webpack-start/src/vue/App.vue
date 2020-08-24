<template>
  <div>
    <div class="title">{{message}}</div>
    <cpn></cpn>
    <cpn></cpn>
  </div>
</template>

<script>

  import Cpn from "./Cpn";

  export default {
    name: "App",
    components: {
      Cpn
    },
    data() {
      return {
        message: 'App',
      }
    }
  }
</script>

<style scoped>
  .title {
    color: red;
  }
</style>