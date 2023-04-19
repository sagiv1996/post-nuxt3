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
const { data: posts, pending: loadingPosts, error: errorPosts }
    = await useAsyncData<Post[]>(
        () => $fetch('https://jsonplaceholder.typicode.com/posts', { query: { userId: route.params.userId } }),
    )
const { data: users, pending: loadingUsers, error: errorUsers }
    = await useAsyncData<User[]>(
        () => $fetch('https://jsonplaceholder.typicode.com/users', { query: { userId: route.params.userId } }),)

const user = computed<User | undefined>(() => users?.value?.[0]);

</script>