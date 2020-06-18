<template>
    <div class="mydelete-warpper">
        <h3 class="mydelete-title">{{$route.meta.title}}</h3>
        <div class="mydelete-control">
            <el-button type="primary" plain icon="el-icon-plus">清空回收站</el-button>
            <el-button type="success" plain icon="el-icon-plus">还原所有</el-button>
            <el-button type="info" plain icon="el-icon-setting" @click="showBtn">批量操作</el-button>
            <span class="control-edit" v-if="show">
                <el-button type="info" plain icon="el-icon-edit-outline">还原</el-button>
                <el-button type="danger" plain icon="el-icon-delete-solid">彻底删除</el-button>
            </span>
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
            >
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <div class="table-container">
            <table-list :showCheck="show" />
        </div>
    </div>
</template>

<script>
import tableList from "./components/tablelist";
export default {
    components: {
        tableList
    },
    data() {
        return {
            show: false,
            dialogVisible: false
        };
    },
    methods: {
        showBtn() {
            this.show = !this.show;
        }
    }
};
</script>

<style lang='scss' scoped>
.mydelete-warpper {
    .mydelete-title {
    }
    .mydelete-control {
        .control-edit {
            display: inline-block;
            margin-left: 10px;
        }
    }
}
</style>