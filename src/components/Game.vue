<script lang='ts' setup>

</script>

<template>
  <div>
    <Cursor />
    <Star />
    <Meteor v-for="i in 5" :key="i" text-red />
    <!-- <Meteor v-for="i in 5" :key="i" text-teal /> -->
  </div>
</template>

<style lang='scss' scoped>
</style>
