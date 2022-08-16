<template>
    <div class="root">
        <el-form ref="searchForm" :inline="true" :model="searchForm" label-position="right">
            <el-form-item label="页面名称:" prop="pageName">
                <el-input v-model="searchForm.pageName" size="small" clearable placeholder="页面名称" />
            </el-form-item>
            <el-form-item label="创建时间:" prop="createTime">
                <el-date-picker v-model="createTime" type="daterange" range-separator="至" start-placeholder="开始日期"
                    format="yyyy年MM月dd日" value-format="yyyy-MM-dd" end-placeholder="结束日期" @change="bindChangeCreateTime"
                    size="small">
                </el-date-picker>
            </el-form-item>
            <el-form-item class="btn-box">
                <el-button type="primary" size="small" icon="search" @click="onSearch">查询</el-button>
                <el-button type="primary" size="small" icon="plus" @click="onAdd">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" stripe border :header-cell-style="{ color: '#888', textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }">
            <el-table-column prop="pageCode" label="页面编码" />
            <el-table-column prop="pageName" label="页面名称" />
            <el-table-column prop="status" label="状态">
                <template #default="scope">
                    <el-switch :value="scope.row.status" @change="onChangePageStatus(scope.row)" :active-value="1"
                        :inactive-value="0">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="createUserName" label="创建人" />
            <el-table-column prop="createTime" label="创建时间" />
            <el-table-column prop="updateUserName" label="修改人" />
            <el-table-column prop="updateTime" label="修改时间" />
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="onEdit(scope.row.id)">编辑</el-button>
                    <el-button type="text" size="small" @click="onShowPanelDialog(scope.row)">查看内容</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="flex-box flex-h-end">
            <el-pagination background layout="total ,prev, sizes, pager, next" :total="total"
                :page-sizes="[10, 20, 50, 100]" :page-size="searchForm.pageInfo.pageSize"
                :current-page="searchForm.pageInfo.pageNum" @current-change="handlePageChange"
                @size-change="handleSizeChange" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import tableSearch from '@/composables/tableSearch';
import { useRouter } from 'vue-router';

const searchForm = reactive({
    pageName: '', // 名称
    createTimeStart: '', // 创建时间起始值
    createTimeEnd: '', // 创建时间结束值
    pageInfo: {
        pageNum: 1,
        pageSize: 10,
        sort: true
    }
});

const { tableData, total, onSearch, handlePageChange, handleSizeChange } = tableSearch({
    searchForm,
    searchUrl: '/admin/list'
});

const router = useRouter()
const onAdd = () => {
    router.push('/page/add')
};
</script>
<style scoped>
</style>
