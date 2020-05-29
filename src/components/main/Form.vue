<template>
    <div class="form">
        <div class="topbar clearfix">
            <div class="syslogo"></div>
            | 数字化运营系统
            <div class="user" @click="signOut">{{curUser}}<img src="../../assets/imgs/down.png"></div>
        </div>
        <div class="bgr">
            <div class="asidebar">
                <router-link
                        v-if="authority == 0"
                        to="/main/platforms">平台分类
                </router-link>
                <router-link to="/main/chart">设备总览</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Platforms from "./platforms/Platforms.vue"
    import Chart from "./Chart.vue"

    export default {
        name: 'Form',
        components: {
            Platforms,
            Chart
        },
        data() {
            return {
                curUser: sessionStorage.curUser,
                authority: sessionStorage.authority,
            }
        },
        methods: {
            signOut() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .form {
        width: 100%;
        height: 100%;
        font-family: "microsoft yahei";
    }

    .topbar {
        background-color: #2e3642;
        line-height: 50px;
        color: #f2f2f3;
        font-size: 16px;
        min-width: 1020px;
    }

    .syslogo {
        float: left;
        width: 119px;
        height: 34px;
        background-image: url(../../assets/imgs/logo.png);
        background-size: 100% 100%;
        margin: 8px 10px 8px 14px;
    }

    .user {
        float: right;
        background-color: #3c4655;
        padding: 0 12px;
        font-size: 12px;
        color: #797e87;
    }

    .user > img {
        margin-left: 10px;
        cursor: pointer;
    }

    .bgr {
        display: flex;
        min-height: 100%;
        width: 100%;
    }

    .asidebar {
        background-color: #353e4c;
    }

    .asidebar > a {
        display: block;
        text-decoration: none;
        height: 38px;
        line-height: 38px;
        font-size: 12px;
        color: #9ca0a4;
        min-width: 155px;
        width: 155px;
        padding-left: 45px;
    }

    a.active {
        background-color: #31b2ea;
        color: #fff;
    }

</style>