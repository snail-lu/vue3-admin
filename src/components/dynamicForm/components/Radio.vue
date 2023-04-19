<template>
    <el-radio-group>
        <el-radio
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :model-value="item.value"
            :disabled="item.disabled"
        />
    </el-radio-group>
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
