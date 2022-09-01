<template>
    <div class="root">
        <el-form :inline="true" :model="searchForm">
            <el-form-item label="用户名">
                <el-input v-model="searchForm.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="searchForm.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="onSearch" type="primary" icon="Search">查询</el-button>
                <el-button @click="onAdd" type="primary" icon="Plus">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            v-loading="loading"
            stripe
            style="width: 100%"
            :cell-style="{ 'text-align': 'center' }"
            :header-cell-style="{
                background: '#F5F7FA',
                color: '#606266',
                textAlign: 'center'
            }"
            border
        >
            <el-table-column prop="username" label="用户名" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="level" label="角色">
                <template #default="scope">
                    <el-tag>{{ levelMap[scope.row.level] }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="100px">
                <template #default="scope">
                    <el-tag :type="scope.row.status === 1 ? 'success' : 'danger'" disable-transitions>{{
                        scope.row.status === 1 ? '启用' : '停用'
                    }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" fixed="right" label="操作" width="150px">
                <template #default="scope">
                    <el-button link size="small" @click="onEdit(scope.row)" type="primary">编辑</el-button>
                    <el-popconfirm title="确认删除该管理员?" @confirm="onDelete(scope.row)">
                        <template #reference>
                            <el-button link size="small" @click="" type="danger">删除 </el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <div class="pager flex-box flex-h-end">
            <el-pagination
                background
                layout="total, sizes, prev, pager, next"
                :total="total"
                @size-change="handleSizeChange"
                :pageSize="searchForm.pageInfo.pageSize"
                :currentPage="searchForm.pageInfo.pageNo"
                @current-change="handlePageChange"
            >
            </el-pagination>
        </div>

        <AddAdmin ref="addForm" @confirm="onConfirm" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import tableSearch from '@/composables/tableSearch';
import AddAdmin from './components/AddAdmin.vue';
import { deleteAdmin, updateAdmin } from './api/index';

const searchForm = reactive({
    username: '',
    email: '',
    pageInfo: {
        pageNo: 1,
        pageSize: 10
    }
});

const { tableData, total, handlePageChange, handleSizeChange, onSearch, loading } = tableSearch({
    searchForm,
    searchUrl: '/admin/list'
});

onMounted(() => {
    onSearch();
});

const addForm = ref();
// 新增
const onAdd = () => {
    addForm.value.show();
};

// 编辑
const onEdit = (userInfo: Object) => {
    addForm.value.show(userInfo);
};

// 删除
const onDelete = async (userInfo: { id: string }) => {
    await deleteAdmin({ id: userInfo.id });
    onSearch();
};

// 编辑弹窗确认
const onConfirm = (confirm: boolean) => {
    if (confirm) {
        onSearch();
    }
};

// 角色类型map
type stringKey = Record<string, string>;
const levelMap: stringKey = {
    1: '超级管理员',
    2: '管理员',
    3: '运营者',
    4: '开发者'
};
</script>
