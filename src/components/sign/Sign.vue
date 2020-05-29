<template>
    <div class="sign clearfix">
        <div class="warp">
            <div class="logo"></div>
            <div class="desc"></div>
            <div class="warn" :style="{opacity:isWrong?'1':'0'}">
                <img src="../../assets/imgs/warn.png"> 账号或密码错误
            </div>
            <form action="" class="form">
                <div class="username">
                    <img src="../../assets/imgs/username.png"><input type="text" v-model="username"
                                                                     placeholder="请输入用户名">
                </div>
                <div class="password">
                    <img src="../../assets/imgs/password.png"><input type="password" v-model="password"
                                                                     placeholder="请输入密码">
                </div>
                <button type="submit" @click.prevent="signIn" class="submit">登录</button>
            </form>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "Sign",
        data() {
            return {
                username: '',
                password: '',
                isWrong: false
            }
        },
        methods: {
            signIn() {
                let user = this.$store.state.users[this.username]
                if (user) {
                    if (user['password'] === this.password) {
                        sessionStorage.isLogedIn = true;
                        sessionStorage.curUser = this.username;
                        sessionStorage.authority = user['authority'];
                        this.isWrong = false;
                        this.$router.push('/main');
                    } else {
                        this.isWrong = true;
                    }
                } else {
                    this.isWrong = true;
                }
            }
        }
    }
</script>

<style>
    .sign {
        width: 100%;
        min-height: 100%;
        background-image: url(../../assets/imgs/bgpic.jpg);
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .warp {
        width: 362px;
    }

    .logo {
        width: 187px;
        height: 50px;
        background-image: url(../../assets/imgs/logo.png);
        background-size: 100% 100%;
        margin: 0 auto;
    }

    .desc {
        width: 168px;
        height: 24px;
        background-image: url(../../assets/imgs/desc.png);
        background-size: 100% 100%;
        margin: 33px auto 69px;
    }

    .form {
        width: 100%;
        margin: 0 auto;
    }

    .form input {
        outline: none;
        border: none;
        width: 312px;
        height: 49px;
    }

    .submit {
        background-color: #31b2ea;
        color: #fff;
        height: 61px;
        line-height: 61px;
        font-size: 24px;
        font-family: "microsoft yahei";
        text-align: center;
        letter-spacing: 15px;
        cursor: pointer;
        border: none;
        width: 100%;
    }

    .username, .password {
        position: relative;
        width: 100%;
        background-color: #fff;
    }

    .username {
        margin-bottom: 20px;
    }

    .password {
        margin-bottom: 37px;
    }

    .username > img {
        padding: 0 15px;
    }

    .password > img {
        padding: 0 16.5px;
    }

    .warn {
        color: red;
        font-size: 14px;
        font-family: "microsoft yahei";
        line-height: 14px;
        margin: 10px 0;
        transition: .2s;
    }

    .warn > img {
        vertical-align: top;
    }

    input::-webkit-input-placeholder {
        font-family: "microsoft yahei";
        font-size: 15px;
    }

    input::-moz-placeholder {
        font-family: "microsoft yahei";
        font-size: 15px;
    }

    input::-ms-input-placeholder {
        font-family: "microsoft yahei";
        font-size: 15px;
    }
</style>