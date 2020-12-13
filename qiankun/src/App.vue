<template>
  <div id="app">
    <el-menu default-active="/" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/">主应用</el-menu-item>
      <el-menu-item
        v-for="item in microApps"
        :key="item.name"
        :index="item.name"
      >{{ item.name }}</el-menu-item>
    </el-menu>
    <router-view v-show="$route.name" />
    <div id="sub-vue" v-show="!$route.name"></div>
    <div id="sub-react" v-show="!$route.name"></div>
  </div>
</template>

<script>
import microApps from "./micro-app";
export default {
  data() {
    return {
      microApps,
    };
  },
  methods: {

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>