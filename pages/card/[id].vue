<template>
    <template v-if="pending"> Loading...</template>
    <template v-else-if="error">Error</template>
    <post-card :action="{ label: 'back', path: '/' }" v-else-if="posts" :post="posts[0]" />
</template>
<script setup lang="ts">
const route = useRoute()
const { data: posts, pending, error } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts', {
    query: { id: route.params.id },

})
</script>