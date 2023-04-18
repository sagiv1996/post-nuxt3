<template>
    <template v-if="pending"> Loading...</template>
    <template v-else-if="error">Error</template>
    <post-card
        :actions="[{ label: 'back', path: '/' }, { label: 'More Posts by this user', path: `/card/user-id-${post.userId}` }]"
        v-else-if="post" :post="post" />
</template>

<script setup lang="ts">
const route = useRoute()
const { data: posts, pending, error } = await useAsyncData<Post[]>(() => $fetch('https://jsonplaceholder.typicode.com/posts', {
    query: { id: route.params.id }
}));

const post = computed<Post | undefined>(() => posts?.value?.[0]);


</script>