<template>
    <template v-if="loadingPosts || loadingUsers"> Loading...</template>
    <template v-else-if="errorPosts || errorUsers">Error</template>
    <v-row v-else>
        <v-col cols="3" v-if="user"><user-card :user="user"></user-card></v-col>
        <v-col v-for="post in posts"><post-card
                :actions="[{ label: 'Back', path: `/` }, { label: 'Open', path: `/card/${post.id}` }]"
                :post="post" /></v-col>
    </v-row>
</template>
<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const { data: posts, pending: loadingPosts, error: errorPosts }
    = await useAsyncData<Post[]>(
        () => $fetch(`${config.public.apiBase}/posts`, { query: { userId: route.params.userId } }),
    )
const { data: user, pending: loadingUsers, error: errorUsers }
    = await useAsyncData<any>(
        () => $fetch(`${config.public.apiBase}/users`, { query: { userId: route.params.userId } }),
        { transform: (response): User => response[0] })


</script>