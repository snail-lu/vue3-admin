<template>
    <dynamic-form :items="formItems" :form="form" :form-props="formProps" />
</template>

<script setup>
import DynamicForm from '@/components/DynamicForm/index.vue';
import { regionData } from 'element-china-area-data';

const formProps = ref({
    labelWidth: '100px',
    labelPosition: 'right',
    inline: false,
    size: 'default',
    disabled: false
});

const formItems = ref([
    {
        type: 'Input', // 表单类型
        key: 'goodsName', // 表单项字段
        value: '', // 表单值
        label: '商品名称：', // 表单项label
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
                message: '请输入商品名称',
                trigger: 'blur'
            }
        ]
    },
    {
        type: 'Select', // 表单类型
        key: 'categories', // 表单项字段
        value: [], // 表单值
        label: '商品分类：', // 表单项label
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false, // 是否禁用
            multiple: true // 是否支持多选
        },
        rules: [], // 表单校验规则
        options: [
            {
                value: 1,
                label: '日用百货',
                disabled: false
            },
            {
                value: 2,
                label: '装修建材',
                disabled: false
            },
            {
                value: 3,
                label: '生鲜蔬菜',
                disabled: false
            },
            {
                value: 4,
                label: '服装饰品',
                disabled: false
            }
        ]
    },
    {
        type: 'DatePicker', // 表单类型
        key: 'listingDate', // 表单项字段
        value: '', // 表单值
        label: '上市日期：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            type: 'date', // year/month/date/dates/datetime/week/datetimerange/daterange/monthrange
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false, // 是否禁用
            valueFormat: '"YYYY-MM-DD"' // 日期值格式
        }
    },
    {
        type: 'InputNumber', // 表单类型
        key: 'stock', // 表单项字段
        value: 20, // 表单值
        label: '库存：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请输入', // 表单项占位文字
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
        label: '产地：', // 表单项label
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
        key: 'promotionTime', // 表单项字段
        value: '', // 表单值
        label: '秒杀时间：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请选择', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false, // 是否禁用
            isRange: false // 选择时间范围
        }
    },
    {
        type: 'Switch', // 表单类型
        key: 'status', // 表单项字段
        value: '', // 表单值
        label: '销售状态：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false // 是否禁用
        }
    },
    {
        type: 'Checkbox', // 表单类型
        key: 'labels', // 表单项字段
        value: [], // 表单值
        label: '活动标签：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false // 是否禁用
        },
        options: [
            {
                value: '1',
                label: '满300减30',
                disabled: true
            },
            {
                value: '2',
                label: '新用户立减10元',
                disabled: false
            },
            {
                value: '3',
                label: '周末促销',
                disabled: false
            },
            {
                value: '4',
                label: '满100减10元',
                disabled: false
            }
        ]
    },
    {
        type: 'Radio', // 表单类型
        key: 'freeShipping', // 表单项字段
        value: 1, // 表单值
        label: '包邮：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '', // 表单项占位文字
            disabled: false // 是否禁用
        },
        options: [
            {
                value: 0,
                label: '否',
                disabled: false
            },
            {
                value: 1,
                label: '是',
                disabled: false
            }
        ]
    },
    {
        type: 'Uploader', // 表单类型
        key: 'goodsImages', // 表单项字段
        value: [
            {
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            },
            {
                name: 'plant-1.png',
                url: 'https://element-plus.org/images/plant-1.png'
            },
            {
                name: 'plant-2.png',
                url: 'https://element-plus.org/images/plant-2.png'
            },
            {
                name: 'figure-1.png',
                url: 'https://element-plus.org/images/figure-1.png'
            },
            {
                name: 'figure-2.png',
                url: 'https://element-plus.org/images/figure-2.png'
            }
        ], // 表单值
        label: '商品图片：', // 表单项label
        rules: [], // 表单校验规则
        props: {
            action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
            listType: 'picture-card' // 文件列表类型 'text' | 'picture' | 'picture-card'
        }
    },
    {
        type: 'TextArea', // 表单类型
        key: 'memo', // 表单项字段
        value: '', // 表单值
        label: '备注：', // 表单项label
        props: {
            size: 'default', // 可选值 large | default | small
            placeholder: '请输入备注', // 表单项占位文字
            clearable: true, // 是否显示清空按钮
            disabled: false, // 是否禁用
            rows: 5
        },
        // 表单校验规则
        rules: []
    }
]);

const form = formItems.value.reduce((result, current) => {
    result[current.key] = current.value;
    return result;
}, {});
</script>

<style scoped></style>
