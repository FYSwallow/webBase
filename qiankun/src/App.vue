<template>
  <div id="app">
    <el-menu default-active="/" class="el-menu-demo" mode="horizontal">
      <el-menu-item
        v-for="item in microApps"
        :key="item.name"
        :index="item.name"
        @click="goto(item)"
      >{{ item.name }}</el-menu-item>
    </el-menu>
    <div id="subapp-viewport"></div>
    <router-view></router-view>
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
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule);
    }
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