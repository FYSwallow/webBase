<template>
    <div class="login-container">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            class="login-card"
        >
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { validUsername } from "@/utils/validate";
export default {
    name: "login",
    data() {
        const checkName = (rule, value, callback) => {
            if (!validUsername(value)) {
                return callback(new Error("用户名不正确"));
            } else {
                callback();
            }
        };
        const checkPassword = (rule, value, callback) => {
            if (!value.length < 5) {
                return callback(new Error("密码长度应大于5"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                username: "admin",
                password: "1231"
            },
            rules: {
                username: [
                    { required: true, tigger: "blur", validator: checkName }
                ],
                password: [
                    { required: true, tigger: "blur", validator: checkPassword }
                ]
            }
        };
    },
    methods: {
        ...mapActions(["login"]),
        async submitForm() {
            await this.login(this.ruleForm);
            this.$router.push({path: '/'})
        }
    }
};
</script>

<style lang='scss' scoped>
@import "@/style/color.scss";
@import "@/style/mixin.scss";
.login-container {
    position: relative;
    @include wh();
    background-color: $loginBgc;
    .login-card {
        width: 360px;
        margin: auto;
        padding: 20px;
        border-radius: 5px;
        transform: translateY(200px);
        background-color: #fff;
    }
}
</style>