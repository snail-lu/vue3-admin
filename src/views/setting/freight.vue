<template>
    <div>运费设置</div>
</template>

<script setup lang="ts">
import { getAdminsList } from './api';
const list = getAdminsList({ pageInfo: {} });
console.log(list, 'list');
</script>

<style scoped></style>
