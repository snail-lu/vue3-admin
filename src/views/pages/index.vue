<template>
    <div class="root">
        <el-form ref="searchForm" :inline="true" :model="searchForm" label-position="right">
            <el-form-item label="页面名称:" prop="pageName">
                <el-input v-model="searchForm.pageName" clearable placeholder="页面名称" />
            </el-form-item>
            <el-form-item label="创建日期:" prop="createTime">
                <el-date-picker
                    v-model="createTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    value-format="YYYY-MM-DD"
                    end-placeholder="结束日期"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item class="btn-box">
                <el-button type="primary" icon="search" @click="onSearch">查询</el-button>
                <el-button type="primary" icon="plus" @click="onAdd">新增</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="tableData"
            stripe
            border
            :header-cell-style="{ color: '#888', textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }"
        >
            <el-table-column prop="pageName" label="页面名称" />
            <el-table-column prop="status" label="状态">
                <template #default="scope">
                    <el-switch
                        :value="scope.row.status"
                        @change="onChangeStatus(scope.row.id)"
                        :active-value="1"
                        :inactive-value="0"
                    >
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
                    <el-button type="text" size="small" @click="onPreview(scope.row.id)">预览</el-button>
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
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import tableSearch from '@/composables/tableSearch';
import { useRouter } from 'vue-router';

// 页面跳转
const router = useRouter();
const onAdd = () => {
    router.push('/page/add');
};

const onEdit = (id: string) => {
    router.push({ path: '/page/edit', query: { id } });
};

// 查询表单
const searchForm = reactive({
    pageName: '', // 名称
    createTimeStart: '', // 创建时间起始值
    createTimeEnd: '', // 创建时间结束值
    pageInfo: {
        pageNo: 1,
        pageSize: 10
    }
});

const { tableData, total, onSearch, handlePageChange, handleSizeChange } = tableSearch({
    searchForm,
    searchUrl: '/page/list'
});

// 创建时间监听
const createTime = ref(null);
watch(createTime, (newValue) => {
    if (newValue) {
        searchForm.createTimeStart = newValue[0];
        searchForm.createTimeEnd = newValue[1];
    } else {
        searchForm.createTimeStart = '';
        searchForm.createTimeEnd = '';
    }
});

const onChangeStatus = (id: string) => {
    console.log(id);
};

const onPreview = (id: string) => {
    console.log(id);
};
</script>
