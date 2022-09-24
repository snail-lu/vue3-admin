<template>
    <el-select>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</template>

<script setup>
import { useAttrs } from 'vue';

const props = defineProps({
    options: {
        type: Array,
        default: []
    }
});
</script>

<style lang="scss" scoped></style>
