<template>
    <div class="module">
        <div class="module-title">今日交易数据</div>
        <el-row :gutter="12">
            <el-col :span="6">
                <el-card shadow="hover" class="bg-1">
                    <div class="amount">14,322</div>
                    <div class="label">访问人数</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="bg-2">
                    <div class="amount">13,200</div>
                    <div class="label">交易单数</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="bg-3">
                    <div class="amount">2,085,600</div>
                    <div class="label">交易金额</div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="bg-4">
                    <div class="amount">158</div>
                    <div class="label">客单价</div>
                </el-card>
            </el-col>
        </el-row>
    </div>

    <el-row :gutter="20" class="mt-10">
        <el-col :span="12">
            <el-card shadow="hover" :body-style="{ padding: 0 }">
                <div class="module">
                    <div class="module-title">热销分类组成</div>
                    <pie-chart />
                </div>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover" :body-style="{ padding: 0 }">
                <div class="module">
                    <div class="module-title">品牌销售金额</div>
                    <bar-chart />
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import BarChart from '../components/Chart/BarChart.vue';
import PieChart from '../components/Chart/PieChart.vue';
</script>
<style lang="scss" scoped>
.module {
    padding: 20px;
    background-color: #fff;

    &-title {
        font-size: 14px;
        border-left: 4px solid #44a2fd;
        padding-left: 15px;
        margin-bottom: 20px;
    }

    .amount {
        font-size: 30px;
        text-align: center;
        color: #fff;
    }

    .label {
        text-align: center;
        font-size: 14px;
        color: #fff;
        margin-top: 5px;
    }
}

.mt-10 {
    margin-top: 10px;
}

.bg-1 {
    background-color: #77b3fd;
}

.bg-2 {
    background-color: #f98e8c;
}

.bg-3 {
    background-color: #f3b34d;
}

.bg-4 {
    background-color: #35c19c;
}
</style>
