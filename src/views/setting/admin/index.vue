<template>
    <div class="root">
        <el-form :inline="true" :model="searchForm">
            <el-form-item label="用户名">
                <el-input v-model="searchForm.username" clearable size="small"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="searchForm.email" clearable size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="onSearch" type="primary" size="small" icon="Search">查询</el-button>
                <el-button @click="onAdd" type="primary" size="small" icon="Plus">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" stripe style="width: 100%" v-loading="tableLoading"
            :cell-style="{ 'text-align': 'center' }" :header-cell-style="{
                background: '#F5F7FA',
                color: '#606266',
                textAlign: 'center'
            }" border>
            <el-table-column prop="userName" label="用户名" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="mobile" label="手机号" />
            <el-table-column prop="roleType" label="角色" />
            <el-table-column prop="status" label="状态" />
            <el-table-column prop="createTime" label="创建时间" />
            <el-table-column prop="updateTime" label="更新时间" />
            <el-table-column align="center" fixed="right" label="操作" width="100">
                <template #default="scope">
                    <el-button type="text" size="small" @click="onEdit(scope.row.id)">编辑</el-button>
                    <el-button type="text" size="small" @click="onDelete(scope.row.id)" style="color: red">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="flex-box flex-h-end">
            <el-pagination background layout="total,prev,sizes,pager, next" :total="total"
                @size-change="handleSizeChange" :pageSize="searchForm.pageInfo.pageSize"
                :currentPage="searchForm.pageInfo.pageNo" @current-change="handlePageChange">
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import mixins from '@/mixins/tableMixins';
export default {
    mixins: [mixins],
    data() {
        return {
            searchUrl: '/admin/list',
            searchForm: {
                username: '',
                email: '',
                pageInfo: {
                    pageNo: 1,
                    pageSize: 10
                }
            }
        };
    },
    created() {
        this.onSearch();
    },
    methods: {
        // 新增
        onAdd() {
            this.$router.push({ path: '/admin/add' });
        },

        // 编辑
        onEdit(id) {
            this.$router.push({ path: '/admin/add', query: { id } });
        }
    }
};
</script>
