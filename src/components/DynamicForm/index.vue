<template>
    <div class="g-container">
        <el-form :model="initForm">
            <el-form-item v-for="item in items" :key="item.key" :label="item.label" :prop="item.key">
                <component
                    :is="FormItemMaps[item.type]"
                    v-model="initForm[item.key]"
                    :options="item.options"
                    :disabled="item.disabled"
                    :placeholder="item.placeholder"
                ></component>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import FormItemMaps from './form-item-maps.ts';
const props = defineProps({
    items: {
        type: Array,
        default: []
    },
    form: {
        type: Object,
        default: {}
    }
});

const initForm = reactive(props.form);

watch(initForm, (newForm) => {
    console.log(newForm, '表单修改了');
});
</script>

<style lang="scss" scoped></style>
