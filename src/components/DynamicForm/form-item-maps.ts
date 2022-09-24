import { defineAsyncComponent } from 'vue';

export default {
    Input: defineAsyncComponent(() => import('./components/Input.vue')),
    InputNumber: defineAsyncComponent(() => import('./components/InputNumber.vue')),
    Select: defineAsyncComponent(() => import('./components/Select.vue')),
    DatePicker: defineAsyncComponent(() => import('./components/DatePicker.vue')),
    TimePicker: defineAsyncComponent(() => import('./components/TimePicker.vue')),
    Cascader: defineAsyncComponent(() => import('./components/Cascader.vue'))
};
