import { defineAsyncComponent } from 'vue';

export default {
    Input: defineAsyncComponent(() => import('./components/Input.vue')),
    Select: defineAsyncComponent(() => import('./components/Select.vue')),
    DatePicker: defineAsyncComponent(() => import('./components/DatePicker.vue')),
    Cascader: defineAsyncComponent(() => import('./components/Cascader.vue'))
};
