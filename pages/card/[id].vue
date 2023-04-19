<template>
    <template v-if="pending"> Loading...</template>
    <template v-else-if="error">Error</template>
    <post-card
        :actions="[{ label: 'back', path: '/' }, { label: 'More Posts by this user', path: `/card/user-id-${post.userId}` }]"
        v-else-if="post" :post="post" />
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const { data: post, pending, error } = await useAsyncData<any>(() => $fetch(`${config.public.apiBase}/posts`, {
    query: { id: route.params.id }
}), { transform: (response): Post => response[0] });



</script>