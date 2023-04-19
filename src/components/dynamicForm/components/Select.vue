<template>
    <el-select>
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
        />
    </el-select>
</template>

<script setup>
const props = defineProps({
    options: {
        type: Array,
        default: []
    }
});
</script>

<style lang="scss" scoped></style>
