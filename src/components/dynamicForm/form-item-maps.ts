import { defineAsyncComponent } from 'vue';

export default {
    Input: defineAsyncComponent(() => import('./components/Input.vue')),
    TextArea: defineAsyncComponent(() => import('./components/TextArea.vue')),
    InputNumber: defineAsyncComponent(() => import('./components/InputNumber.vue')),
    Select: defineAsyncComponent(() => import('./components/Select.vue')),
    DatePicker: defineAsyncComponent(() => import('./components/DatePicker.vue')),
    TimePicker: defineAsyncComponent(() => import('./components/TimePicker.vue')),
    Cascader: defineAsyncComponent(() => import('./components/Cascader.vue')),
    Switch: defineAsyncComponent(() => import('./components/Switch.vue')),
    Checkbox: defineAsyncComponent(() => import('./components/Checkbox.vue')),
    Radio: defineAsyncComponent(() => import('./components/Radio.vue')),
    Uploader: defineAsyncComponent(() => import('./components/Uploader.vue'))
};
