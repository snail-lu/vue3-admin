<template>
    <dynamic-form :items="formItems" :form="form" />
</template>

<script setup>
import DynamicForm from '@/components/DynamicForm/index.vue';
import { regionData } from 'element-china-area-data';
import { ref } from 'vue';

const formItems = ref([
    {
        type: 'Input', // 表单类型
        key: 'name', // 表单项字段
        value: '', // 表单值
        label: '姓名：', // 表单项label
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请输入', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false // 是否禁用
        },
        // 表单校验规则
        rules: [
            {
                required: true,
                message: '请输入姓名',
                trigger: 'blur'
            }
        ]
    },
    {
        type: 'Select', // 表单类型
        key: 'gender', // 表单项字段
        value: '', // 表单值
        label: '性别：', // 表单项label
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false // 是否禁用
        },
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
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false // 是否禁用
        }
    },
    {
        type: 'InputNumber', // 表单类型
        key: 'age', // 表单项字段
        value: 20, // 表单值
        label: '年龄：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false, // 是否禁用
            min: 0,
            max: 35
        }
    },
    {
        type: 'Cascader', // 表单类型
        key: 'address', // 表单项字段
        value: '', // 表单值
        label: '住址：', // 表单项label
        rules: [], // 表单校验规则
        options: regionData,
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false // 是否禁用
        }
    },
    {
        type: 'TimePicker', // 表单类型
        key: 'birthday', // 表单项字段
        value: '', // 表单值
        label: '工作时间：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false, // 是否禁用
            isRange: false // 选择时间范围
        }
    }
]);

const form = formItems.value.reduce((result, current) => {
    result[current.key] = current.value;
    return result;
}, {});
</script>

<style scoped></style>
