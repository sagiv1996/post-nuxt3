<template>
    <template v-if="pending"> Loading...</template>
    <template v-else-if="error">Error</template>
    <v-row v-else>
        <v-col v-for="post in posts"><post-card
                :actions="[{ label: 'Back', path: `/` }, { label: 'Open', path: `/card/${post.id}` }]"
                :post="post" /></v-col>
    </v-row>
</template>
<script setup lang="ts">
const route = useRoute()
const { data: posts, pending, error } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts', {
    query: { userId: route.params.userId },

})
</script>