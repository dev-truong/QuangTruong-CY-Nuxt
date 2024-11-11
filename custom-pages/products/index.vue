<script setup lang="ts">

// const {data: products} = useAsyncData(async () => {
//   const res = await $fetch('/api/v1/post')
//   console.log(res)
//   return res;
// })
const {data: news} = useAsyncData(async () => {
  let q = 'bitcoin'
  const res = await $fetch(`/api/v1/news?q=${q}`)
  console.log('test',res)
  return res;
})


</script>

<template>
  {{news}}
</template>

<style scoped>

</style>