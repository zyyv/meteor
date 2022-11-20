<script lang='ts' setup>
const mes = ref(10)
</script>

<template>
  <div>
    <input v-model="mes" type="number">
    <Cursor />
    <Star />
    <Meteor v-for="_item in mes" :key="_item" text-red />
  </div>
</template>

<style lang='scss' scoped>
</style>
