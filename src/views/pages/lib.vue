<template>
    <dynamic-form :items="formItems" :form="form" />
</template>

<script setup>
import DynamicForm from '@/components/DynamicForm/index.vue';
import ElementChinaAreaData from 'element-china-area-data';
import { ref } from 'vue';
const formItems = ref([
    {
        type: 'Input', // 表单类型
        key: 'name', // 表单项字段
        value: '', // 表单值
        label: '姓名：', // 表单项label
        placeholder: '请输入', // 表单项占位文字
        rules: [] // 表单校验规则
    },
    {
        type: 'Select', // 表单类型
        key: 'gender', // 表单项字段
        value: '', // 表单值
        label: '性别：', // 表单项label
        placeholder: '请选择', // 表单项占位文字
        rules: [], // 表单校验规则
        options: [
            {
                value: 1,
                label: '男',
                disabled: false
            },
            {
                value: 2,
                label: '女',
                disabled: false
            }
        ]
    },
    {
        type: 'DatePicker', // 表单类型
        key: 'birthday', // 表单项字段
        value: '', // 表单值
        label: '生日：', // 表单项label
        placeholder: '请选择', // 表单项占位文字
        rules: [] // 表单校验规则
    },
    {
        type: 'Cascader', // 表单类型
        key: 'address', // 表单项字段
        value: '', // 表单值
        label: '住址：', // 表单项label
        placeholder: '请选择', // 表单项占位文字
        rules: [], // 表单校验规则
        options: ElementChinaAreaData.provinceAndCityData
    }
]);

const form = formItems.value.reduce((result, current) => {
    result[current.key] = current.value;
    return result;
}, {});
</script>

<style scoped></style>
