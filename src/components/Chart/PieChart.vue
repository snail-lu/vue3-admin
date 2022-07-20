<template>
    <div :style="{ width, height }"></div>
</template>
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { PieChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    PieChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

export default {
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '350px'
        }
    },
    mounted() {
        this.initCharts();
    },
    methods: {
        initCharts() {
            this.chart = echarts.init(this.$el);
            this.setOptions();
        },
        setOptions() {
            this.chart.setOption({
                title: {
                    text: '',
                    left: 'center',
                    top: 6
                },
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: 100,
                                name: '手机'
                            },
                            {
                                value: 200,
                                name: '电脑'
                            },
                            {
                                value: 300,
                                name: '耳机'
                            },
                            {
                                value: 400,
                                name: '音响'
                            },
                            {
                                value: 500,
                                name: '平板'
                            }
                        ],
                        roseType: 'area'
                    }
                ]
            });
        }
    }
};
</script>
