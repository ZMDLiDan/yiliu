<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Sign from "./components/sign/Sign.vue"
    import Main from "./components/main/Chart.vue"

    export default {
        name: 'app',
        components: {
            Sign,
            Main
        },
    }
</script>

<style>
    @import url("./assets/css/common.css");

    #app {
        width: 100%;
        height: 100%;
    }
</style>