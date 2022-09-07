<template>
    <div class="root">
        <el-form :inline="true" :model="searchForm">
            <el-form-item label="页面名称：">
                <el-input v-model="searchForm.pageName"></el-input>
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
            <el-table-column prop="pageName" label="页面名称" />
            <el-table-column prop="createUserName" label="创建人" />
            <el-table-column prop="createTime" label="创建时间" />
            <el-table-column prop="pageName" label="页面编码" />
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
                    <el-button link size="small" @click="onEdit(scope.row)" type="primary">预览</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pager flex-box flex-h-end">
            <el-pagination
                background
                layout="total, sizes, prev, pager, next"
                :total="total"
                @size-change="handleSizeChange"
                v-model:currentPage="searchForm.pageInfo.pageNo"
                v-model:page-size="searchForm.pageInfo.pageSize"
                @current-change="handlePageChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import tableSearch from '@/composables/tableSearch';
import { ElMessage } from 'element-plus';

const searchForm = reactive({
    pageName: '',
    pageInfo: {
        pageNo: 1,
        pageSize: 10
    }
});

const { tableData, total, handlePageChange, handleSizeChange, onSearch, loading } = tableSearch({
    searchForm,
    searchUrl: '/page/list'
});

onMounted(() => {
    onSearch();
});

const addForm = ref();
// 新增
const onAdd = () => {
    // addForm.value.show();
    ElMessage('开发中~');
};

// 编辑
const onEdit = (userInfo: Object) => {
    ElMessage('开发中~');
};

// 删除
const onDelete = async (userInfo: { id: string }) => {
    // await deleteAdmin({ id: userInfo.id });
    onSearch();
};

// 编辑弹窗确认
const onConfirm = (confirm: boolean) => {
    if (confirm) {
        onSearch();
    }
};
</script>
