<template>
    <div class="myshare-warpper">
        <h3 class="myshare-title">{{$route.meta.title}}</h3>
        <div class="table-container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="文件名" width="180"></el-table-column>
                <el-table-column prop="date" label="修改时间" sortable></el-table-column>
                <el-table-column fixed="right" align="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-dropdown @command="edit(scope)">
                            <span class="el-dropdown-link">
                                <i class="el-icon-more"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="1">重命名</el-dropdown-item>
                                <el-dropdown-item command="2">删除</el-dropdown-item>
                                <el-dropdown-item command="3">复制到</el-dropdown-item>
                                <el-dropdown-item command="4">移动到</el-dropdown-item>
                                <el-dropdown-item command="5">分享</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            tableData: []
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
.myshare-warpper {
    .myshare-title {
    }
    .myshare-control {
        .control-edit {
            display: inline-block;
            margin-left: 10px;
        }
    }
}
</style>