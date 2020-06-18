<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" v-if="showCheck"></el-table-column>
        <el-table-column prop="name" label="文件名" width="180"></el-table-column>
        <el-table-column prop="date" label="修改时间" sortable></el-table-column>
        <el-table-column fixed="right" align="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-dropdown @command="edit(scope)">
                    <span class="el-dropdown-link">
                        <i class="el-icon-more"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1">还原</el-dropdown-item>
                        <el-dropdown-item command="2">彻底删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        showCheck: {
            type: Boolean
        },
        tableData: {
            type: Array
        }
    },
    data() {
        return {
            
        };
    },
    created() {
        console.log(this.showCheck);
    },
    
    methods: {
        edit(data) {
            console.log(data);
        }
    }
};
</script>

<style>
</style>