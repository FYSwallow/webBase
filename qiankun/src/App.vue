<template>
    <div id="app">
        <div id="layout-wrapper">
            <div class="layout-header">头部导航</div>
            <button @click="changeView('/sub-vue')">vue应用</button> 
            <button @click="changeView('/sub-react')">vue应用</button> 
            <div id="subapp-viewport"></div>
        </div>
    </div>
</template>

<script>
export default {
    method: {
        changeView: function(route) {
            window.history.pushState(null, route, route)
        }
    }
}
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