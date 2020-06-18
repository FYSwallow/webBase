<template>
    <div class="mydir-warpper">
        <h3 class="mydir-title">{{$route.meta.title}}</h3>
        <div class="mydir-control">
            <el-button type="primary" plain icon="el-icon-plus" @click="createppt">新建文件</el-button>
            <el-button type="success" plain icon="el-icon-plus" @click="createppt">新建文件夹</el-button>
            <el-button type="info" plain icon="el-icon-setting" @click="showBtn">批量操作</el-button>
            <span class="control-edit" v-if="show">
                <el-button type="info" plain icon="el-icon-edit-outline">重命名</el-button>
                <el-button type="info" plain icon="el-icon-rank">移动到</el-button>
                <el-button type="info" plain icon="el-icon-rank">复制到</el-button>
                <el-button type="danger" plain icon="el-icon-delete-solid">删除</el-button>
            </span>
            <el-dialog :title="diangtitle" :visible.sync="dialogVisible" width="30%">
                <el-input v-model="pptName" autocomplete="off"></el-input>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="handleClose">取 消</el-button>
                    <el-button type="primary" @click="handleSave">确 定</el-button>
                </div>
            </el-dialog>
        </div>
        <div class="table-container">
            <table-list :showCheck="show" :tableData="tableData" />
        </div>
    </div>
</template>

<script>
import moment from "moment";
import tableList from "./components/tablelist";
export default {
    components: {
        tableList
    },
    data() {
        return {
            show: false,
            dialogVisible: false,
            diangtitle: "", //弹出框标题
            pptName: "", //文件名称
            tableData: [],
            tableTemplate: {
                name: "王小虎",
                date: "2016-05-02"
            } // 列表模板
        };
    },
    methods: {
        showBtn() {
            this.show = !this.show;
        },
        // 新建ppt
        createppt(e) {
            // 设定弹出框标题
            this.diangtitle = e.target.textContent;
            // 设定新建文件及文件夹名称
            this.pptName = e.target.textContent;
            this.dialogVisible = !this.dialogVisible;
        },
        // 取消建立文件夹
        handleClose() {
            this.dialogVisible = false;
        },
        // 保存新建文件
        handleSave() {
            this.dialogVisible = false;
            this.tableData.push({
                name: this.pptName,
                date: moment(Date.now()).format("YYYY-MM-DD"),
                id: 1
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.mydir-warpper {
    .mydir-title {
    }
    .mydir-control {
        .control-edit {
            display: inline-block;
            margin-left: 10px;
        }
    }
    .table-container {
        cursor: pointer;
    }
}
</style>