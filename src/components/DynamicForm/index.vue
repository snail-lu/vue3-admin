<template>
    <div class="g-container">
        <el-form :model="initForm" v-bind="formProps">
            <el-form-item
                v-for="item in items"
                :key="item.key"
                :label="item.label"
                :prop="item.key"
                :rules="item.rules"
            >
                <component
                    :is="FormItemMaps[item.type]"
                    v-model="initForm[item.key]"
                    :options="item.options"
                    v-bind="item.props"
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
    },
    formProps: {
        type: Object,
        default: {}
    }
});

const initForm = reactive(props.form);
</script>

<style lang="scss" scoped></style>
