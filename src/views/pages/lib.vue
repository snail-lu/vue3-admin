<template>
    <div>组件库</div>
</template>

<script setup lang="ts">
import { getGoodsList } from './api';
const list = getGoodsList({ goodsCode: '', pageInfo: {} });
console.log(list, 'list');
</script>

<style scoped>
</style>
